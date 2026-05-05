// Design tokens extracted from live Fintablo (my.fintablo.ru), light theme.
// Source: tokens-root.json (397 vars) + computed-samples.json + reference screenshots.
// Date: 2026-05-05.

export const colors = {
  // Surfaces
  bg: "#F1F2F7", // body background — main-background
  surface: "#FFFFFF", // card/topbar/sidebar bg — main-bg-color
  surfaceMuted: "#F5F7FF", // active/hover row — side-menu-item-active-bg-color
  surfaceTransparent: "#FFFFFFB2",

  // Borders
  border: "#DADDE7", // main border — side-menu-border-color
  borderMuted: "#2525250A",
  borderStrong: "#CFCFCF",

  // Text
  text: "#333333", // main-text-color
  textMuted: "#787C80", // table header color from computed
  textOnNav: "#273971", // top-menu-item-color (dark navy)

  // Brand / primary
  primary: "#5A76C9", // color-1, btn-style-1-bg-color
  primaryHover: "#3E559A", // btn-style-1-hover-bg-color
  primaryActive: "#1B4CC9", // color-3
  primarySoft: "#B6C7F9", // color-2
  primarySofter: "#D4DFFF", // btn-style-2-bg-color
  primaryText: "#313F68", // btn-style-2-color (text on soft bg)

  // Semantic
  success: "#19AA19", // tablo-income-color (light theme)
  successBg: "#E9FFE9",
  successText: "#08611C",
  warning: "#F98F2E", // tablo-outcome-bar-color
  warningBg: "#FFF0E2",
  danger: "#FF6158", // color-danger-3
  dangerSoft: "#FF6666",
  dangerBg: "#FFEFEE",
  dangerText: "#AD3737",
} as const;

export const fonts = {
  sans: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
} as const;

export const radii = {
  sm: "4px",
  md: "5px", // input-radius from computed
  lg: "8px", // card radius from screenshots
  pill: "9999px",
} as const;

export const sidebar = {
  width: 225, // from .sidebar-fixed padding-left
  bg: colors.surface,
  border: colors.border,
  itemColor: colors.textOnNav,
  itemActiveColor: colors.primary,
  itemActiveBg: colors.surfaceMuted,
  itemHoverBg: colors.surfaceMuted,
} as const;

export const topbar = {
  height: 60, // from computed
  bg: colors.surface,
  borderBottom: colors.border,
  itemColor: colors.textOnNav,
  itemHoverColor: colors.primary,
} as const;

export const tablo = {
  income: {
    color: "#19AA19",
    bg: "#E9FFE9",
    text: "#08611C",
    barColor: "#73CF87",
    barBg: "#E9FFE9",
  },
  outcome: {
    color: "#FF5D5D",
    bg: "#FFF2F2",
    text: "#F3FFF5",
    barColor: "#F98F2E",
    barBg: "#FFF0E2",
  },
  measurer: {
    step1: { color: "#FF8383", bg: "#FFEFEE" },
    step2: { color: "#FFAF65", bg: "#FFF5EC" },
    step3: { color: "#FFF06B", bg: "#FFFCE4" },
    step4: { color: "#73CF87", bg: "#E8FFE8" },
  },
} as const;
