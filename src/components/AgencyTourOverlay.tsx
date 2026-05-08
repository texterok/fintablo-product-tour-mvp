"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { agencyTourScript, type AgencyTourStep } from "@/lib/tour-agency";

type Rect = { top: number; left: number; width: number; height: number };

const PADDING = 8;

export function AgencyTourOverlay({
  stepIndex,
  onPrev,
  onNext,
  onClose,
}: {
  stepIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const step: AgencyTourStep | undefined = agencyTourScript[stepIndex];
  const [rect, setRect] = useState<Rect | null>(null);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!step) return;
    const find = (): Rect | null => {
      const el = document.querySelector(step.anchor) as HTMLElement | null;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        top: r.top - PADDING,
        left: r.left - PADDING,
        width: r.width + PADDING * 2,
        height: r.height + PADDING * 2,
      };
    };

    const update = () => {
      const next = find();
      if (next) setRect(next);
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };

    update();
    const interval = window.setInterval(() => {
      const r = find();
      if (r) setRect(r);
    }, 200);

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    const el = document.querySelector(step.anchor) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNext, onPrev, onClose]);

  if (!step) return null;

  const placement = step.placement ?? "right";
  const tooltipPos = rect
    ? computeTooltipPos(rect, placement, viewport)
    : { top: 100, left: 100, arrow: placement };

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {rect && (
        <svg className="absolute inset-0 size-full">
          <defs>
            <mask id="agency-spotlight-mask">
              <rect x={0} y={0} width="100%" height="100%" fill="white" />
              <rect
                x={rect.left}
                y={rect.top}
                width={rect.width}
                height={rect.height}
                rx={10}
                fill="black"
              />
            </mask>
          </defs>
          <rect
            x={0}
            y={0}
            width="100%"
            height="100%"
            fill="rgba(15, 23, 42, 0.55)"
            mask="url(#agency-spotlight-mask)"
          />
          <rect
            x={rect.left}
            y={rect.top}
            width={rect.width}
            height={rect.height}
            rx={10}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="6 4"
            className="animate-pulse"
          />
        </svg>
      )}

      <div
        className="pointer-events-auto absolute w-[380px] max-w-[calc(100vw-32px)] rounded-lg bg-white p-4 shadow-2xl ring-1 ring-slate-200"
        style={{ top: tooltipPos.top, left: tooltipPos.left }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
              Шаг {stepIndex + 1} из {agencyTourScript.length}
            </span>
            <span className="rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
              {pageLabel(step.page)}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть подсказку"
            className="text-slate-400 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        <h3 className="mt-2 text-base font-semibold text-slate-900">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
          {step.body}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={stepIndex === 0}
            className="rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Назад
          </button>
          <div className="flex flex-1 items-center justify-center gap-1">
            {agencyTourScript.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === stepIndex
                    ? "w-6 bg-blue-600"
                    : i < stepIndex
                      ? "w-1.5 bg-blue-300"
                      : "w-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onNext}
            className="rounded bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            {step.cta ??
              (stepIndex === agencyTourScript.length - 1
                ? "Завершить"
                : "Дальше →")}
          </button>
        </div>
      </div>
    </div>
  );
}

function pageLabel(page: AgencyTourStep["page"]): string {
  switch (page) {
    case "deals":
      return "Сделки";
    case "stages":
      return "Карточка сделки";
    case "cause":
      return "Операции";
    case "virtual-account":
      return "Счета и реквизиты";
    case "calendar":
      return "Платёжный календарь";
    case "cta":
      return "Что дальше";
  }
}

function computeTooltipPos(
  rect: Rect,
  placement: NonNullable<AgencyTourStep["placement"]>,
  viewport: { w: number; h: number },
): { top: number; left: number; arrow: string } {
  const W = 380;
  const H = 220;
  const margin = 16;

  let top = 0;
  let left = 0;

  switch (placement) {
    case "right":
      top = rect.top;
      left = rect.left + rect.width + margin;
      break;
    case "left":
      top = rect.top;
      left = rect.left - W - margin;
      break;
    case "top":
      top = rect.top - H - margin;
      left = rect.left + rect.width / 2 - W / 2;
      break;
    case "bottom":
      top = rect.top + rect.height + margin;
      left = rect.left + rect.width / 2 - W / 2;
      break;
  }

  if (viewport.w > 0) {
    left = Math.max(16, Math.min(left, viewport.w - W - 16));
    top = Math.max(16, Math.min(top, viewport.h - H - 16));
  }

  return { top, left, arrow: placement };
}
