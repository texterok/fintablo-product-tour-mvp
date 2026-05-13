// ============================================================================
// TOUR PACK REGISTRY
// ============================================================================
//
// Central index of all tour packs.
//
// IVAN ZONE — adding a new tour:
//   1. Create folder src/tours/<slug>/ with manifest.ts, data.ts, landing-copy.ts
//   2. Set `enabledForRoma: false` in manifest until copy is ready
//   3. Import the manifest here and add to the array below
//   4. The /demo router will pick it up automatically (if enabled)
//   5. Roma dev pulls, fills data.ts + landing-copy.ts, flips flag
//
// ROMA ZONE — nothing to edit here.
// ============================================================================

import { manifest as stroykaManifest } from "@/tours/stroyka/manifest";
import { manifest as agencyManifest } from "@/tours/agency/manifest";
import { manifest as universalManifest } from "@/tours/universal/manifest";
import type { TourManifest } from "@/tours/types";

export const allTours: TourManifest[] = [
  stroykaManifest,
  agencyManifest,
  universalManifest,
];

/**
 * Tours that should be visible to end-users (Roma's production).
 * Used by /demo router to render only enabled tour cards.
 */
export function enabledTours(): TourManifest[] {
  return allTours.filter(
    (t) => t.enabledForRoma && t.ownerStatus !== "draft",
  );
}

/**
 * Tours that exist but are not yet shown to end-users.
 * Useful for `/handoff` page to display pending work.
 */
export function pendingTours(): TourManifest[] {
  return allTours.filter(
    (t) => !t.enabledForRoma || t.ownerStatus === "needs-roma-copy",
  );
}
