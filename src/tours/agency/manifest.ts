// ============================================================================
// AGENCY TOUR PACK MANIFEST
// ============================================================================
// See src/tours/stroyka/manifest.ts for full conventions.
// ============================================================================

import type { TourManifest } from "@/tours/types";

export const manifest: TourManifest = {
  slug: "agency",
  title: "Разбор производственного агентства",
  pitch:
    "Клиент заплатил аванс, через 3 недели на счёте −340 000 ₽. Покажем, как отделить деньги клиента от заработанных и видеть кассовый разрыв заранее.",
  segment: "Агентство · услуги с авансами",
  tone: "violet",
  landingRoute: "/agency",
  tourRoute: "/agency/tour",
  enabledForRoma: true,
  ownerStatus: "ready",
  romaTodo:
    "Шаг 1: открыть data.ts и landing-copy.ts, заменить демо-цифры/тексты на свои. Шаг 2: убедиться что enabledForRoma=true.",
};

export { FintabloAppAgency as TourApp } from "@/components/FintabloAppAgency";
export { AgencyLanding as Landing } from "@/components/AgencyLanding";
