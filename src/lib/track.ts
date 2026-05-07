type Props = Record<string, string | number | boolean | null | undefined>;

export const TOUR_EVENTS = {
  TOUR_START: "tour_start",
  ANOMALY_SEEN: "anomaly_seen",
  CAUSE_REVEALED: "cause_revealed",
  EVIDENCE_OPENED: "evidence_opened",
  AHA_COMPLETED: "aha_completed",
  CTA_CLICKED: "cta_clicked",
  TOUR_NEXT: "tour_next",
  TOUR_PREV: "tour_prev",
  TOUR_CLOSE: "tour_close",
  TOUR_FINISH: "tour_finish",
  TOUR_RESUMED: "tour_resumed",
  NAV_CLICK: "nav_click",
} as const;

export type IntentType = "high" | "medium" | "low" | "soft";

type SessionContext = {
  session_id: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  partner_id: string | null;
  referrer: string | null;
  is_returning: boolean;
};

const SESSION_KEY = "ft_tour_session_v1";
const HISTORY_KEY = "ft_tour_history_v1";

let sessionContext: SessionContext | null = null;
let posthogReady = false;
const eventBuffer: Array<{ event: string; props: Record<string, unknown> }> = [];

const flushBuffer = (): void => {
  if (typeof window === "undefined" || !posthogReady || !window.posthog) return;
  while (eventBuffer.length > 0) {
    const entry = eventBuffer.shift();
    if (!entry) break;
    try {
      window.posthog.capture(entry.event, entry.props);
    } catch {
      // drop
    }
  }
};

declare global {
  interface Window {
    posthog?: {
      init: (key: string, opts: Record<string, unknown>) => void;
      capture: (event: string, props?: Record<string, unknown>) => void;
      identify: (id: string) => void;
    };
  }
}

const generateSessionId = (): string => {
  const random = Math.random().toString(36).slice(2, 10);
  const time = Date.now().toString(36);
  return `${time}-${random}`;
};

const readUrlParam = (url: URL, name: string): string | null => {
  const v = url.searchParams.get(name);
  return v && v.length > 0 && v.length < 200 ? v : null;
};

const initSessionContext = (): SessionContext => {
  if (typeof window === "undefined") {
    return {
      session_id: "ssr",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
      partner_id: null,
      referrer: null,
      is_returning: false,
    };
  }

  const url = new URL(window.location.href);
  const stored = window.sessionStorage.getItem(SESSION_KEY);

  if (stored) {
    try {
      return JSON.parse(stored) as SessionContext;
    } catch {
      // malformed — fall through to fresh init
    }
  }

  const isReturning = window.localStorage.getItem(HISTORY_KEY) !== null;
  if (!isReturning) {
    window.localStorage.setItem(HISTORY_KEY, Date.now().toString());
  }

  const ctx: SessionContext = {
    session_id: generateSessionId(),
    utm_source: readUrlParam(url, "utm_source"),
    utm_medium: readUrlParam(url, "utm_medium"),
    utm_campaign: readUrlParam(url, "utm_campaign"),
    utm_content: readUrlParam(url, "utm_content"),
    partner_id: readUrlParam(url, "partner_id") ?? readUrlParam(url, "ref"),
    referrer:
      document.referrer && document.referrer.length < 200
        ? new URL(document.referrer).hostname
        : null,
    is_returning: isReturning,
  };

  window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(ctx));
  return ctx;
};

const getSessionContext = (): SessionContext => {
  if (sessionContext) return sessionContext;
  sessionContext = initSessionContext();
  return sessionContext;
};

const tryInitPosthog = (): boolean => {
  if (typeof window === "undefined" || posthogReady) return posthogReady;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";
  if (!key) return false;
  if (!window.posthog) return false;
  try {
    window.posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      persistence: "localStorage",
    });
    const ctx = getSessionContext();
    window.posthog.identify(ctx.session_id);
    posthogReady = true;
    flushBuffer();
    return true;
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[track] posthog init failed", e);
    }
    return false;
  }
};

const initPosthog = (): void => {
  if (tryInitPosthog()) return;
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  let attempts = 0;
  const maxAttempts = 30;
  const interval = window.setInterval(() => {
    attempts += 1;
    if (tryInitPosthog() || attempts >= maxAttempts) {
      window.clearInterval(interval);
    }
  }, 200);
};

export const initTracking = (): void => {
  if (typeof window === "undefined") return;
  getSessionContext();
  initPosthog();
};

export const track = (event: string, props?: Props): void => {
  if (typeof window === "undefined") return;
  const ctx = getSessionContext();
  const enriched = {
    ...(props ?? {}),
    session_id: ctx.session_id,
    utm_source: ctx.utm_source,
    utm_medium: ctx.utm_medium,
    utm_campaign: ctx.utm_campaign,
    utm_content: ctx.utm_content,
    partner_id: ctx.partner_id,
    referrer_host: ctx.referrer,
    is_returning: ctx.is_returning,
    ts: Date.now(),
  };

  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", event, enriched);
  }

  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

  if (posthogReady && window.posthog) {
    try {
      window.posthog.capture(event, enriched);
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[track] posthog capture failed", e);
      }
    }
  } else {
    eventBuffer.push({ event, props: enriched });
    if (eventBuffer.length > 100) eventBuffer.splice(0, eventBuffer.length - 100);
  }
};

export const getSessionId = (): string => getSessionContext().session_id;
