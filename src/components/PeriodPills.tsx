export function PeriodPills({
  active = "month",
}: {
  active?: "month" | "quarter" | "year";
}) {
  const items: { key: typeof active; label: string }[] = [
    { key: "month", label: "Этот месяц" },
    { key: "quarter", label: "Квартал" },
    { key: "year", label: "Год" },
  ];
  return (
    <div className="flex items-center gap-2">
      <select
        defaultValue={active}
        className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800 shadow-sm"
      >
        {items.map((i) => (
          <option key={i.key} value={i.key}>
            {i.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="h-9 rounded bg-blue-600 px-3 text-sm font-medium text-white hover:bg-blue-700"
      >
        Сравнить
      </button>
    </div>
  );
}
