import { universalDeals } from "@/lib/universal-data";
import { formatRub } from "@/lib/provenance";

export function UniversalDealsPage() {
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

      <div
        id="anchor-deals-grid"
        className="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        <Metric label="Всего" value="5" suffix="контрактов" />
        <Metric
          label="Сумма контрактов"
          value="16 800 000"
          suffix="активные"
        />
        <Metric
          label="Получено по актам"
          value="11 740 000"
          suffix="70% от плана"
          progress={70}
          progressLabel="70%"
        />
        <Metric
          label="Ожидается оплат"
          value="5 060 000"
          suffix="3 контракта"
        />
        <Metric
          label="Сумма выручки"
          value="11 740 000"
          suffix="без НДС"
        />
        <Metric
          label="Рентабельность (план)"
          value="25%"
          suffix="прибыль ÷ выручка"
          progress={25}
          progressLabel="25%"
          highlight="emerald"
        />
        <Metric
          id="anchor-deals-margin"
          label="Рентабельность (факт)"
          value="17%"
          suffix="ниже плановой"
          progress={17}
          progressLabel="17%"
          highlight="amber"
          hint="По одному контракту маржа ушла ниже плановой"
        />
        <Metric
          label="Признано выручки"
          value="9 916 000"
          suffix="по подписанным актам"
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
    highlight === "emerald"
      ? "stroke-emerald-500"
      : highlight === "amber"
        ? "stroke-amber-500"
        : "stroke-blue-500";
  const valueColor =
    highlight === "emerald"
      ? "text-emerald-600"
      : highlight === "amber"
        ? "text-amber-600"
        : "text-slate-900";
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
        <circle
          cx="30"
          cy="30"
          r={r}
          className="fill-none stroke-slate-100"
          strokeWidth={6}
        />
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
    <div
      id="anchor-deals-table"
      className="overflow-x-auto rounded-md border border-slate-200 bg-white"
    >
      <table className="w-full min-w-[900px] text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Карточка</th>
            <th className="px-3 py-2 text-left font-semibold">
              Контракт / заказчик
            </th>
            <th className="px-3 py-2 text-left font-semibold">Услуги</th>
            <th className="px-3 py-2 text-left font-semibold">Валюта</th>
            <th className="px-3 py-2 text-right font-semibold">Сумма (план)</th>
            <th className="px-3 py-2 text-right font-semibold">Сумма (факт)</th>
            <th className="px-3 py-2 text-right font-semibold">Получено</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {universalDeals.map((d) => (
            <tr
              key={d.id}
              id={d.problem ? "anchor-problem-deal" : undefined}
              className={d.problem ? "bg-rose-50/70" : ""}
            >
              <td className="px-3 py-3 align-top">
                <button
                  className={`flex size-7 items-center justify-center rounded ${
                    d.problem
                      ? "bg-rose-100 text-rose-700"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  →
                </button>
              </td>
              <td className="px-3 py-3 align-top">
                <p
                  className={`font-medium ${
                    d.problem ? "text-rose-900" : "text-slate-900"
                  }`}
                >
                  {d.name}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">{d.client}</p>
              </td>
              <td className="px-3 py-3 align-top text-[12px] text-slate-700">
                {d.service}
              </td>
              <td className="px-3 py-3 align-top text-slate-600">RUB</td>
              <td className="px-3 py-3 text-right font-mono tabular-nums">
                {formatRub(d.plan)}
              </td>
              <td
                className={`px-3 py-3 text-right font-mono tabular-nums ${
                  d.problem ? "text-rose-700 font-semibold" : "text-slate-700"
                }`}
              >
                {formatRub(d.fact)}
              </td>
              <td className="px-3 py-3 text-right font-mono tabular-nums">
                {formatRub(d.paid)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
