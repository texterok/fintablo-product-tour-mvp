// ============================================================================
// STROYKA TOUR PACK MANIFEST
// ============================================================================
//
// IVAN ZONE (architecture, methodology, engine wiring).
// Roma dev: edit this file ONLY to flip `enabledForRoma`.
// Do not change slug, title structure, routes — those are referenced from
// `src/app/**` routing.
//
// To customize copy/numbers, edit:
//   - data.ts        — numbers, deal names, calendar rows
//   - landing-copy.ts — landing texts (H1, sections, CTAs)
//
// To make this tour visible on Roma's prod, set `enabledForRoma: true`
// AFTER you confirm data.ts and landing-copy.ts are filled with Roma's
// real numbers.
// ============================================================================

import type { TourManifest } from "@/tours/types";

export const manifest: TourManifest = {
  slug: "stroyka",
  title: "Разбор строительной компании",
  pitch:
    "Выручка 16 млн, до прибыли доходит только 12. Покажем, куда уходят остальные 4 — по объектам, статьям и подрядчикам.",
  segment: "Стройка · СМР · ПИР",
  tone: "amber",
  landingRoute: "/",
  tourRoute: "/tour",
  enabledForRoma: true,
  ownerStatus: "ready",
  romaTodo:
    "Шаг 1: открыть data.ts и landing-copy.ts. Заменить демо-цифры на свои. Шаг 2: убедиться что enabledForRoma=true.",
};

// Re-export the engine + landing wired with this pack's data.
// These imports point to existing files — no migration needed yet.
// In future versions, Ivan may move engine internals into this folder.
export { FintabloApp as TourApp } from "@/components/FintabloApp";
export { StroykaLanding as Landing } from "@/components/StroykaLanding";
