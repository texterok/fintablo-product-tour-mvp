import { dealsDashboard } from "@/lib/data";

const deals = [
  {
    id: "kurchatova",
    name: "Курчатова 12",
    direction: "Загородное строительство, Проектирование, Ремонт",
    services: [
      "Внешняя отделка",
      "Внутренняя отделка",
      "Косметический ремонт",
      "Материалы по объекту Кучерева 18",
    ],
    plan: 6_510_000,
    fact: 5_500_000,
    stagePlan: 1_010_000,
    stageFact: 1_010_000,
  },
  {
    id: "irrzpiz",
    name: "Договор ИРРЗПИЗ-5595",
    direction: "Ремонт",
    services: [{ label: "материалы", note: "35 000" }],
    cost: 674_520,
    plan: 615_000,
  },
];

export function DealsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-slate-900">Сделки</h1>

      <div className="flex items-center gap-6 border-b border-slate-200">
        <Tab active>Учёт сделок</Tab>
        <Tab>Услуги</Tab>
        <Tab>Товары</Tab>
        <Tab>Рентабельность</Tab>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
          aria-label="Настройки"
        >
          ⚙
        </button>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
          aria-label="Обновить"
        >
          ⟳
        </button>
        <select className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          <option>Итоговые значения</option>
        </select>
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800 hover:bg-slate-50"
        >
          ↑↓ Порядок добавления
        </button>
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded border border-slate-300 bg-white text-slate-600"
          aria-label="Фильтры"
        >
          ⌕
        </button>
      </div>

      <div id="anchor-deals-grid" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Metric label="Всего" value="7" suffix="сделок" hint="В выбранном периоде с учётом фильтров" />
        <Metric
          label="Сумма сделок"
          value="17 175 000"
          suffix="за период"
          hint="Сумма всех сделок за период с учётом фильтров, сумма с НДС"
        />
        <Metric
          label="Получено оплат"
          value="13 675 000"
          suffix="оплачено полностью или частично"
          progress={80}
          progressLabel="80%"
          hint="Сумма платежей по выбранным сделкам"
        />
        <Metric
          label="Ожидается оплат"
          value="3 500 000"
          suffix="2 сделки"
          hint="Сумма ожидаемых оплат"
        />
        <Metric
          label="Сумма выручки"
          value="16 165 000"
          suffix="включая НДС"
          hint="Возможная выручка по сделкам — сумма без НДС"
        />
        <Metric
          id="anchor-deals-margin"
          label="Рентабельность по маржинальному доходу"
          value="14 429 230"
          suffix="89%"
          progress={89}
          progressLabel="89%"
          hint="Возможная выручка за вычетом себестоимости и сдельного ФОТ"
          highlight="emerald"
        />
        <Metric
          id="anchor-deals-gross"
          label="Рентабельность по валовой прибыли"
          value="12 026 060"
          suffix="74%"
          progress={74}
          progressLabel="74%"
          hint="Возможная выручка за вычетом расходов по сделкам, сумма без НДС"
          highlight="amber"
        />
        <Metric
          label="Признано выручки"
          value="10 808 333"
          suffix="полностью или частично"
          hint="Полностью или частично признанная выручка"
        />
      </div>

      <DealsTable />
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
      className={`-mb-px border-b-2 px-1 pb-2 text-sm transition ${
        active
          ? "border-blue-600 font-semibold text-blue-700"
          : "border-transparent text-slate-600 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  );
}

function Metric({
  id,
  label,
  value,
  suffix,
  progress,
  progressLabel,
  hint,
  highlight,
}: {
  id?: string;
  label: string;
  value: string;
  suffix?: string;
  progress?: number;
  progressLabel?: string;
  hint?: string;
  highlight?: "emerald" | "amber";
}) {
  const ringColor =
    highlight === "emerald" ? "stroke-emerald-500" : highlight === "amber" ? "stroke-amber-500" : "stroke-blue-500";
  const valueColor =
    highlight === "emerald" ? "text-emerald-600" : highlight === "amber" ? "text-amber-600" : "text-slate-900";
  const bg =
    highlight === "emerald"
      ? "bg-emerald-50/50 border-emerald-200"
      : highlight === "amber"
        ? "bg-amber-50/50 border-amber-200"
        : "border-slate-200 bg-white";
  return (
    <div id={id} className={`relative rounded-md border p-4 ${bg}`}>
      <p className="text-[12px] font-medium text-slate-600">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <div>
          <p className={`text-2xl font-semibold tabular-nums ${valueColor}`}>
            {value}
          </p>
          {suffix && (
            <p className="mt-1 text-[11px] text-slate-500">{suffix}</p>
          )}
        </div>
        {progress !== undefined && (
          <Ring percent={progress} colorClass={ringColor} label={progressLabel} />
        )}
      </div>
      {hint && (
        <p className="mt-3 hidden text-[10px] leading-snug text-slate-400 lg:block">
          {hint}
        </p>
      )}
    </div>
  );
}

function Ring({
  percent,
  colorClass,
  label,
}: {
  percent: number;
  colorClass: string;
  label?: string;
}) {
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(percent, 100) / 100) * c;
  return (
    <div className="relative size-14 shrink-0">
      <svg viewBox="0 0 60 60" className="size-14 -rotate-90">
        <circle cx="30" cy="30" r={r} className="fill-none stroke-slate-100" strokeWidth={6} />
        <circle
          cx="30"
          cy="30"
          r={r}
          className={`fill-none ${colorClass}`}
          strokeWidth={6}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-900">
        {label ?? `${percent}%`}
      </span>
    </div>
  );
}

function DealsTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
      <table className="w-full min-w-[900px] text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Карточка сделки</th>
            <th className="px-3 py-2 text-left font-semibold">Сделка / направление</th>
            <th className="px-3 py-2 text-left font-semibold">Услуги / товар</th>
            <th className="px-3 py-2 text-left font-semibold">Валюта</th>
            <th className="px-3 py-2 text-right font-semibold">Сумма (план)</th>
            <th className="px-3 py-2 text-right font-semibold">Сумма (факт)</th>
            <th className="px-3 py-2 text-right font-semibold">Сумма этапов</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="px-3 py-3 align-top">
              <button className="flex size-7 items-center justify-center rounded bg-blue-50 text-blue-600">→</button>
            </td>
            <td className="px-3 py-3 align-top">
              <p className="font-medium text-slate-900">{deals[0].name}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                {deals[0].direction}
              </p>
            </td>
            <td className="px-3 py-3 align-top text-[12px] text-slate-700">
              <ul className="space-y-0.5">
                {(deals[0].services as string[]).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </td>
            <td className="px-3 py-3 align-top text-slate-600">Российский рубль (RUB)</td>
            <td className="px-3 py-3 text-right font-mono tabular-nums">6 510 000</td>
            <td className="px-3 py-3 text-right font-mono tabular-nums text-slate-400">5 500 000</td>
            <td className="px-3 py-3 text-right font-mono tabular-nums">1 010 000</td>
          </tr>
          <tr>
            <td className="px-3 py-3 align-top">
              <button className="flex size-7 items-center justify-center rounded bg-blue-50 text-blue-600">→</button>
            </td>
            <td className="px-3 py-3 align-top">
              <p className="font-medium text-slate-900">{deals[1].name}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">{deals[1].direction}</p>
            </td>
            <td className="px-3 py-3 align-top text-[12px] text-slate-700">
              материалы 35 000 / себестоимость 674 520
            </td>
            <td className="px-3 py-3 align-top text-slate-600">RUB</td>
            <td className="px-3 py-3 text-right font-mono tabular-nums">615 000</td>
            <td className="px-3 py-3 text-right font-mono tabular-nums text-slate-400">—</td>
            <td className="px-3 py-3 text-right text-slate-400">Введите сумму</td>
          </tr>
          <tr>
            <td colSpan={7} className="bg-slate-50 px-3 py-2 text-xs text-slate-500">
              + 5 других сделок (всего 7) · Общая сумма сделок: 17 175 000 ₽
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
