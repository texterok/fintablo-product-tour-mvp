"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { TourOverlay } from "@/components/TourOverlay";
import { SvodkaPage } from "@/screens/SvodkaPage";
import { DealsPage } from "@/screens/DealsPage";
import { OpiuPage } from "@/screens/OpiuPage";
import { ProfitabilityPage } from "@/screens/ProfitabilityPage";
import { OperationPage } from "@/screens/OperationPage";
import { tourScript, type Page, type TourStepRole } from "@/lib/tour";
import { initTracking, track, TOUR_EVENTS } from "@/lib/track";

const pageComponents: Record<Page, () => React.JSX.Element> = {
  svodka: SvodkaPage,
  deals: DealsPage,
  opiu: OpiuPage,
  profitability: ProfitabilityPage,
  operation: OperationPage,
};

const AHA_TIME_BAND_MIN_MS = 8_000;
const AHA_TIME_BAND_MAX_MS = 40_000;

const roleEvent = (role: TourStepRole): string | null => {
  switch (role) {
    case "anomaly":
      return TOUR_EVENTS.ANOMALY_SEEN;
    case "cause":
      return TOUR_EVENTS.CAUSE_REVEALED;
    case "evidence":
      return TOUR_EVENTS.EVIDENCE_OPENED;
    default:
      return null;
  }
};

export function FintabloApp() {
  const [page, setPage] = useState<Page>("svodka");
  const [tourActive, setTourActive] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const tourStartedAtRef = useRef<number | null>(null);
  const anomalySeenAtRef = useRef<number | null>(null);
  const ahaCompletedRef = useRef(false);
  const startEmittedRef = useRef(false);
  const seenStepsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    initTracking();
  }, []);

  useEffect(() => {
    const step = tourScript[stepIndex];
    if (tourActive && step && step.page !== page) {
      setPage(step.page);
    }
  }, [stepIndex, tourActive, page]);

  useEffect(() => {
    if (!tourActive) return;
    const step = tourScript[stepIndex];
    if (!step) return;

    if (!startEmittedRef.current) {
      tourStartedAtRef.current = Date.now();
      track(TOUR_EVENTS.TOUR_START, {
        first_step_id: step.id,
        first_step_role: step.role,
      });
      startEmittedRef.current = true;
    }

    if (seenStepsRef.current.has(stepIndex)) return;
    seenStepsRef.current.add(stepIndex);

    const event = roleEvent(step.role);
    if (event) {
      const props: Record<string, string | number | boolean | null> = {
        step_index: stepIndex,
        step_id: step.id,
        step_role: step.role,
        page: step.page,
      };
      if (event === TOUR_EVENTS.ANOMALY_SEEN && anomalySeenAtRef.current === null) {
        anomalySeenAtRef.current = Date.now();
      }
      if (event === TOUR_EVENTS.EVIDENCE_OPENED && !ahaCompletedRef.current) {
        const startedAt = anomalySeenAtRef.current;
        if (startedAt !== null) {
          const elapsed = Date.now() - startedAt;
          if (elapsed >= AHA_TIME_BAND_MIN_MS && elapsed <= AHA_TIME_BAND_MAX_MS) {
            track(TOUR_EVENTS.AHA_COMPLETED, {
              elapsed_ms: elapsed,
              from_step_id: "deals-overview",
              to_step_id: step.id,
            });
            ahaCompletedRef.current = true;
          }
        }
      }
      track(event, props);
    }
  }, [stepIndex, tourActive]);

  const close = useCallback(() => {
    track(TOUR_EVENTS.TOUR_CLOSE, { step: stepIndex });
    setTourActive(false);
  }, [stepIndex]);

  const next = useCallback(() => {
    setStepIndex((i) => {
      const current = tourScript[i];
      if (i >= tourScript.length - 1) {
        track(TOUR_EVENTS.TOUR_FINISH, { step: i });
        if (current?.role === "cta") {
          track(TOUR_EVENTS.CTA_CLICKED, {
            step_id: current.id,
            intent_type: "high",
            cta_label: current.cta ?? "Завершить",
          });
        }
        setTourActive(false);
        return i;
      }
      const target = i + 1;
      track(TOUR_EVENTS.TOUR_NEXT, {
        from: i,
        to: target,
        from_step_id: current?.id ?? null,
        to_step_id: tourScript[target]?.id ?? null,
      });
      return target;
    });
  }, []);

  const prev = useCallback(() => {
    setStepIndex((i) => {
      const target = Math.max(i - 1, 0);
      track(TOUR_EVENTS.TOUR_PREV, { from: i, to: target });
      return target;
    });
  }, []);

  const restart = useCallback(() => {
    seenStepsRef.current = new Set();
    anomalySeenAtRef.current = null;
    ahaCompletedRef.current = false;
    startEmittedRef.current = false;
    track(TOUR_EVENTS.TOUR_RESUMED, { from_step: stepIndex });
    setStepIndex(0);
    setTourActive(true);
    setPage(tourScript[0].page);
  }, [stepIndex]);

  const onNavigate = useCallback((p: Page) => {
    setPage(p);
    track(TOUR_EVENTS.NAV_CLICK, { page: p });
  }, []);

  const PageComponent = pageComponents[page];

  return (
    <div className="flex min-h-svh flex-col bg-slate-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar active={page} onNavigate={onNavigate} />
        <main className="relative flex-1 overflow-x-auto px-5 py-5 sm:px-8">
          <PageComponent />
        </main>
      </div>

      {!tourActive && (
        <button
          type="button"
          onClick={restart}
          className="fixed bottom-5 right-5 z-30 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
        >
          Запустить разбор заново
        </button>
      )}

      {tourActive && (
        <TourOverlay
          stepIndex={stepIndex}
          onPrev={prev}
          onNext={next}
          onClose={close}
        />
      )}
    </div>
  );
}
