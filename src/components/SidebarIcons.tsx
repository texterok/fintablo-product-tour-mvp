// Inline SVG icons matching Fintablo sidebar groups (visual approximation).

type IconProps = { className?: string };

const base = "shrink-0";

export function ReportsIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 14v3M11 10v7M15 7v10M19 12v5" />
    </svg>
  );
}

export function MoneyIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v0M18 14v0" />
    </svg>
  );
}

export function PlanningIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function PayrollIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 21v-1a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v1" />
      <path d="M16 4l3 3 3-3M19 7v8" />
    </svg>
  );
}

export function DealsIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

export function ToolsIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 7l3-3 4 4-3 3-2-2 1-1" />
      <path d="M9 11l-7 7v4h4l7-7" />
      <path d="M14 13l3 3" />
    </svg>
  );
}

export function ReferenceIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${base} transition-transform ${open ? "rotate-90" : ""} ${className}`}
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
