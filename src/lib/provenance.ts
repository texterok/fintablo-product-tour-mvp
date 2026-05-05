export type Provenance = "REAL" | "INFERRED" | "SIMULATED";

export type Tagged<T> = {
  value: T;
  provenance: Provenance;
  source?: string;
};

export const real = <T>(value: T, source: string): Tagged<T> => ({
  value,
  provenance: "REAL",
  source,
});

export const inferred = <T>(value: T, source: string): Tagged<T> => ({
  value,
  provenance: "INFERRED",
  source,
});

export const simulated = <T>(value: T, note?: string): Tagged<T> => ({
  value,
  provenance: "SIMULATED",
  source: note,
});

export const formatRub = (n: number): string =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);

export const formatRubCompact = (n: number): string => {
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(2).replace(".", ",")} млн ₽`;
  if (abs >= 1_000) return `${Math.round(n / 1_000)} тыс ₽`;
  return `${n} ₽`;
};

export const formatPct = (n: number): string => `${n.toFixed(0)}%`;
