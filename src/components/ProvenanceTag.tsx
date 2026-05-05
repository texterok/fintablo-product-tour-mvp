import type { Provenance } from "@/lib/provenance";

const styles: Record<Provenance, string> = {
  REAL: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  INFERRED: "bg-sky-50 text-sky-700 ring-sky-200",
  SIMULATED: "bg-amber-50 text-amber-800 ring-amber-200",
};

const labels: Record<Provenance, string> = {
  REAL: "REAL",
  INFERRED: "INFERRED",
  SIMULATED: "SIMULATED",
};

export function ProvenanceTag({
  provenance,
  source,
  className = "",
}: {
  provenance: Provenance;
  source?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ring-1 ring-inset ${styles[provenance]} ${className}`}
      title={source ? `${labels[provenance]} · ${source}` : labels[provenance]}
    >
      <span className="size-1.5 rounded-full bg-current opacity-60" />
      {labels[provenance]}
    </span>
  );
}
