// ============================================================================
// UNIVERSAL (KLIMAT-SERVIS) TOUR PACK MANIFEST
// ============================================================================
// See src/tours/stroyka/manifest.ts for full conventions.
// ============================================================================

import type { TourManifest } from "@/tours/types";

export const manifest: TourManifest = {
  slug: "universal",
  title: "Разбор монтажной и сервисной компании",
  pitch:
    "Контракт планировался дать 7 млн ₽ прибыли, по факту 5,56 млн. Покажем, где потеряли 1,44 млн — на этапе монтажа, ФОТ-перерасход и гарантийное удержание.",
  segment: "Монтаж · сервис · ОВК",
  tone: "teal",
  landingRoute: "/start",
  tourRoute: "/start/tour",
  enabledForRoma: true,
  ownerStatus: "ready",
  romaTodo:
    "Шаг 1: открыть data.ts и landing-copy.ts, заменить демо-цифры/тексты на свои. Шаг 2: убедиться что enabledForRoma=true.",
};

export { FintabloAppUniversal as TourApp } from "@/components/FintabloAppUniversal";
export { UniversalLanding as Landing } from "@/components/UniversalLanding";
