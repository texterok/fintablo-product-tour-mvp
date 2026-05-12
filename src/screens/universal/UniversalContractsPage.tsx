import { universalContracts, universalSummary } from "@/lib/universal-data";
import { formatRub } from "@/lib/provenance";

export function UniversalContractsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Активные контракты — план/факт
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Климат-Сервис · {universalSummary.contractsCount} контрактов в работе · февраль 2026
        </p>
      </div>

      <div className="flex items-center gap-6 border-b border-slate-200">
        <Tab active>Активные контракты</Tab>
        <Tab>Все контракты</Tab>
        <Tab>Архив</Tab>
        <Tab>Рентабельность</Tab>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800"
        >
          ‹ Февраль 2026 ›
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все контракты ▾
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все клиенты ▾
        </button>
      </div>

      <div
        id="anchor-contracts-summary"
        className="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        <Metric
          label="Контрактов в работе"
          value={String(universalSummary.contractsCount)}
          suffix="активные"
        />
        <Metric
          label="План: прибыль"
          value={formatRub(universalSummary.totalPlanProfit)}
          suffix={`маржа ${universalSummary.marginPlan}`}
        />
        <Metric
          label="Факт: прибыль"
          value={formatRub(universalSummary.totalFactProfit)}
          suffix={`маржа ${universalSummary.marginFact}`}
          highlight="amber"
        />
        <Metric
          label="Расхождение"
          value={`−${formatRub(universalSummary.totalDivergence)}`}
          suffix="по 5 контрактам"
          highlight="rose"
        />
      </div>

      <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Карточка</th>
              <th className="px-3 py-2 text-left font-semibold">
                Контракт / клиент
              </th>
              <th className="px-3 py-2 text-left font-semibold">Услуга</th>
              <th className="px-3 py-2 text-right font-semibold">
                Прибыль (план)
              </th>
              <th className="px-3 py-2 text-right font-semibold">
                Прибыль (факт)
              </th>
              <th className="px-3 py-2 text-right font-semibold">Расхождение</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {universalContracts.map((c) => {
              const divergence = c.factProfit - c.planProfit;
              return (
                <tr
                  key={c.id}
                  id={c.problem ? "anchor-problem-contract" : undefined}
                  className={c.problem ? "bg-rose-50/70" : ""}
                >
                  <td className="px-3 py-3 align-top">
                    <button
                      className={`flex size-7 items-center justify-center rounded ${
                        c.problem
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
                        c.problem ? "text-rose-900" : "text-slate-900"
                      }`}
                    >
                      {c.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {c.client}
                    </p>
                  </td>
                  <td className="px-3 py-3 align-top text-[12px] text-slate-700">
                    {c.service}
                  </td>
                  <td className="px-3 py-3 text-right font-mono tabular-nums">
                    {formatRub(c.planProfit)}
                  </td>
                  <td
                    className={`px-3 py-3 text-right font-mono tabular-nums ${
                      c.problem ? "text-rose-700 font-semibold" : "text-slate-700"
                    }`}
                  >
                    {formatRub(c.factProfit)}
                  </td>
                  <td
                    className={`px-3 py-3 text-right font-mono tabular-nums font-semibold ${
                      divergence < 0 ? "text-rose-700" : "text-emerald-700"
                    }`}
                  >
                    {divergence < 0 ? "−" : "+"}
                    {formatRub(Math.abs(divergence))}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td
                colSpan={6}
                className="bg-slate-50 px-3 py-2 text-xs text-slate-500"
              >
                Всего 5 активных контрактов · Расхождение по портфелю: −1 824 000 ₽
              </td>
            </tr>
          </tbody>
        </table>
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
  label,
  value,
  suffix,
  highlight,
}: {
  label: string;
  value: string;
  suffix?: string;
  highlight?: "amber" | "rose";
}) {
  const valueColor =
    highlight === "amber"
      ? "text-amber-600"
      : highlight === "rose"
        ? "text-rose-700"
        : "text-slate-900";
  const bg =
    highlight === "amber"
      ? "bg-amber-50/50 border-amber-200"
      : highlight === "rose"
        ? "bg-rose-50/50 border-rose-200"
        : "border-slate-200 bg-white";
  return (
    <div className={`rounded-md border p-4 ${bg}`}>
      <p className="text-[12px] font-medium text-slate-600">{label}</p>
      <p className={`mt-2 text-xl font-semibold tabular-nums ${valueColor}`}>
        {value}
      </p>
      {suffix && (
        <p className="mt-1 text-[11px] text-slate-500">{suffix}</p>
      )}
    </div>
  );
}
