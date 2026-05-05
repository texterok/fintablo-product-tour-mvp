type Row = {
  label: string;
  values: (number | null)[];
  group?: "header" | "subgroup";
  pct?: (number | null)[];
  highlight?: boolean;
};

const months = ["ЯНВ 2024", "ФЕВ 2024", "МАР 2024", "АПР 2024", "МАЙ 2024", "ИЮН 2024", "ИЮЛ 2024"];

const rows: Row[] = [
  {
    label: "Выручка",
    values: [600_000, 1_100_000, 2_084_166, 2_943_916, 2_984_583, 4_566_750, 6_342_199],
    group: "header",
    pct: [100, 100, 100, 100, 100, 100, 100],
  },
  {
    label: "Производственные расходы",
    values: [-784_540, -871_439, -1_260_927, -1_577_389, -1_443_271, -849_487, -974_971],
    group: "header",
    pct: [-130.8, -79.2, -60.5, -53.6, -48.4, -18.6, -15.4],
  },
  {
    label: "Валовая прибыль (ВП2)",
    values: [-184_540, 228_561, 823_239, 1_366_527, 1_541_312, 3_717_262, 5_367_228],
    group: "subgroup",
    pct: [-30.7, 20.7, 39.5, 46.4, 51.6, 81.4, 84.6],
  },
  {
    label: "Косвенные расходы",
    values: [-695_590, -687_380, -784_899, -767_996, -807_263, -800_638, -798_180],
    group: "header",
    pct: [-115.9, -62.5, -37.7, -26.1, -27.0, -17.5, -12.6],
  },
  {
    label: "Операционная прибыль (ОП, EBITDA)",
    values: [-880_130, -458_819, 38_340, 598_530, 734_048, 2_916_624, 4_569_048],
    group: "subgroup",
    pct: [-146.7, -41.7, 1.8, 20.3, 24.6, 63.9, 72.0],
    highlight: true,
  },
  {
    label: "Доходы ниже EBITDA",
    values: [null, null, null, null, null, null, 3_045],
    group: "header",
  },
  {
    label: "Расходы ниже EBITDA",
    values: [-129_781, -129_475, -216_175, -126_379, -125_978, -654_176, -378_865],
    group: "header",
    pct: [-21.6, -11.8, -10.4, -4.3, -4.2, -14.3, -6.0],
  },
  {
    label: "Чистая прибыль",
    values: [-1_006_866, -588_295, -177_835, 472_151, 608_070, 2_262_447, 4_190_147],
    group: "subgroup",
    pct: [-167.8, -53.4, -8.5, 16.0, 20.3, 49.5, 66.0],
    highlight: true,
  },
];

export function OpiuPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-slate-900">
        Отчёт о прибылях и убытках
      </h1>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800"
        >
          ‹ Январь – Август 2024 ›
        </button>
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800"
        >
          По месяцам ▾
        </button>
        <button className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
          ⚙
        </button>
        <button className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
          ↗
        </button>
      </div>

      <div className="flex items-center gap-2">
        <Tab>График ▾</Tab>
        <Tab active>Статьи</Tab>
        <Tab>Направления и статьи</Tab>
        <button className="ml-auto flex size-9 items-center justify-center rounded border border-slate-300 bg-white text-slate-600">
          ⌕
        </button>
      </div>

      <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
        <table className="w-full min-w-[1100px] text-[12px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 text-left font-semibold">&nbsp;</th>
              {months.map((m) => (
                <th key={m} className="px-3 py-2 text-right font-semibold">
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.label}
                className={`border-b border-slate-100 ${
                  r.highlight ? "bg-blue-50/40" : ""
                }`}
              >
                <td
                  className={`px-3 py-2 ${
                    r.group === "subgroup"
                      ? "pl-8 italic text-slate-700"
                      : "font-medium text-slate-900"
                  }`}
                >
                  <span className="mr-1 text-slate-400">▸</span>
                  {r.label}
                </td>
                {r.values.map((v, i) => (
                  <td
                    key={i}
                    className="px-3 py-2 text-right tabular-nums"
                  >
                    <div className={v !== null && v < 0 ? "text-rose-600" : "text-slate-900"}>
                      {v === null ? "—" : v.toLocaleString("ru-RU") + " ₽"}
                    </div>
                    {r.pct?.[i] !== undefined && r.pct[i] !== null && (
                      <div className="text-[10px] text-slate-400">
                        {r.pct[i]!.toFixed(2)} %
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end gap-3 text-sm text-slate-600">
        <span>Показать инструкцию</span>
        <button
          type="button"
          aria-label="Toggle"
          className="relative h-5 w-9 rounded-full bg-emerald-500"
        >
          <span className="absolute right-0.5 top-0.5 size-4 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
}

function Tab({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-md px-3 py-1.5 text-[13px] transition ${
        active
          ? "bg-blue-600 text-white"
          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}
