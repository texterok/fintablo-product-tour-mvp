// Tour pack contract.
// Every tour declares a manifest that the central registry consumes.
// New tours land here as inactive packs (enabledForRoma: false) until
// the Roma dev fills in copy and flips the flag.

import type { ComponentType } from "react";

export type TourOwnerStatus =
  | "ready" // copy and data complete, ready for prod
  | "needs-roma-copy" // Roma dev must fill data.ts / landing-copy.ts before enabling
  | "draft"; // Ivan is still writing — not yet handed off

export type TourManifest = {
  /** kebab-case slug, matches folder name */
  slug: string;

  /** human-readable title in Russian (used in /demo router) */
  title: string;

  /** short pitch shown on /demo card (1-2 sentences) */
  pitch: string;

  /** segment label shown as eyebrow on /demo card */
  segment: string;

  /** tone color for /demo card border */
  tone: "amber" | "violet" | "teal" | "pink";

  /** landing route (e.g. "/start") — null if tour has no separate landing */
  landingRoute: string | null;

  /** tour route (e.g. "/start/tour") — required */
  tourRoute: string;

  /**
   * Whether this tour is enabled in Roma's deployment.
   * Set to `false` when adding a new tour upstream so Roma's prod
   * does not expose placeholders. Roma dev flips to `true` after
   * filling data.ts + landing-copy.ts.
   */
  enabledForRoma: boolean;

  /** status hint for human readers */
  ownerStatus: TourOwnerStatus;

  /** what file Roma's dev must edit to bring this tour live */
  romaTodo: string;
};

export type TourPack = {
  manifest: TourManifest;
  /**
   * App component that renders the tour engine with this pack's
   * data + script. Imported by app/<route>/page.tsx. Provided by
   * pack so that Roma's dev never touches engine wiring.
   */
  TourApp: ComponentType;
  /**
   * Landing component (optional — if landingRoute is null, omit).
   * Imported by app/<route>/page.tsx for the landing.
   */
  Landing?: ComponentType;
};
