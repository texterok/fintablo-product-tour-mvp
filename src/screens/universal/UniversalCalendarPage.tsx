import { northDealCalendar } from "@/lib/universal-data";
import { formatRub } from "@/lib/provenance";

export function UniversalCalendarPage() {
  return (
    <div className="space-y-5">
      <div className="text-[12px] text-slate-500">
        <span className="hover:text-slate-700">Планирование</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">Платёжный календарь</span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Платёжный календарь
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Контракт: БЦ «Северная Долина» · показывает приход и уход денег по
            этому контракту в перспективе ближайших месяцев
          </p>
        </div>
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Запланировать платёж
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          ‹ 6 месяцев ›
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все контракты ▾
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все счета ▾
        </button>
      </div>

      <div
        id="anchor-calendar"
        className="overflow-x-auto rounded-md border border-slate-200 bg-white"
      >
        <table className="w-full min-w-[820px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th className="w-44 px-3 py-2 text-left font-semibold">Когда</th>
              <th className="px-3 py-2 text-left font-semibold">Что</th>
              <th className="w-32 px-3 py-2 text-right font-semibold">
                Приход
              </th>
              <th className="w-32 px-3 py-2 text-right font-semibold">Уход</th>
              <th className="w-44 px-3 py-2 text-right font-semibold">
                Остаток по сделке
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {northDealCalendar.map((r) => (
              <tr
                key={r.weekLabel}
                id={
                  r.highlight === "negative"
                    ? "anchor-calendar-negative"
                    : undefined
                }
                className={
                  r.highlight === "negative"
                    ? "bg-rose-50/70 ring-1 ring-inset ring-rose-300"
                    : r.highlight === "milestone"
                      ? "bg-blue-50/40"
                      : ""
                }
              >
                <td className="px-3 py-3 align-top">
                  <p className="font-medium text-slate-900">{r.weekLabel}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{r.date}</p>
                </td>
                <td className="px-3 py-3 align-top text-[13px] text-slate-700">
                  {r.detail}
                </td>
                <td className="px-3 py-3 align-top text-right font-mono tabular-nums text-emerald-600">
                  {r.inflow > 0 ? `+${formatRub(r.inflow)}` : "—"}
                </td>
                <td className="px-3 py-3 align-top text-right font-mono tabular-nums text-rose-600">
                  {r.outflow > 0 ? `−${formatRub(r.outflow)}` : "—"}
                </td>
                <td
                  className={`px-3 py-3 align-top text-right font-mono tabular-nums font-semibold ${
                    r.balanceAfter < 0
                      ? "text-rose-700"
                      : r.balanceAfter > 0
                        ? "text-slate-900"
                        : "text-slate-700"
                  }`}
                >
                  {r.balanceAfter < 0 ? "−" : ""}
                  {formatRub(Math.abs(r.balanceAfter))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
