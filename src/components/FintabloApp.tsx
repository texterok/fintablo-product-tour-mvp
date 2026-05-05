"use client";

import { useCallback, useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { TourOverlay } from "@/components/TourOverlay";
import { SvodkaPage } from "@/screens/SvodkaPage";
import { DealsPage } from "@/screens/DealsPage";
import { OpiuPage } from "@/screens/OpiuPage";
import { ProfitabilityPage } from "@/screens/ProfitabilityPage";
import { OperationPage } from "@/screens/OperationPage";
import { tourScript, type Page } from "@/lib/tour";
import { track } from "@/lib/track";

const pageComponents: Record<Page, () => React.JSX.Element> = {
  svodka: SvodkaPage,
  deals: DealsPage,
  opiu: OpiuPage,
  profitability: ProfitabilityPage,
  operation: OperationPage,
};

export function FintabloApp() {
  const [page, setPage] = useState<Page>("svodka");
  const [tourActive, setTourActive] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const step = tourScript[stepIndex];
    if (tourActive && step && step.page !== page) {
      setPage(step.page);
    }
  }, [stepIndex, tourActive, page]);

  const close = useCallback(() => {
    track("tour_close", { step: stepIndex });
    setTourActive(false);
  }, [stepIndex]);

  const next = useCallback(() => {
    setStepIndex((i) => {
      if (i >= tourScript.length - 1) {
        track("tour_finish", { step: i });
        setTourActive(false);
        return i;
      }
      const target = i + 1;
      track("tour_next", { from: i, to: target });
      return target;
    });
  }, []);

  const prev = useCallback(() => {
    setStepIndex((i) => {
      const target = Math.max(i - 1, 0);
      track("tour_prev", { from: i, to: target });
      return target;
    });
  }, []);

  const restart = useCallback(() => {
    setStepIndex(0);
    setTourActive(true);
    setPage(tourScript[0].page);
  }, []);

  const onNavigate = useCallback((p: Page) => {
    setPage(p);
    track("nav_click", { page: p });
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
