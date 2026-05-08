import { travelDealOperations } from "@/lib/agency-data";
import { formatRub } from "@/lib/provenance";

export function AgencyCausePage() {
  return (
    <div className="space-y-5">
      <div className="text-[12px] text-slate-500">
        <span className="hover:text-slate-700">Сделки</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">YouTube «Путешествия»</span>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          YouTube «Путешествия»
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Операции по сделке. Все расходы и поступления собираются автоматически
          из выписок банка и документов.
        </p>
      </div>

      <div className="flex items-center gap-6 border-b border-slate-200">
        <Tab>Этапы</Tab>
        <Tab active>Операции</Tab>
        <Tab>Документы</Tab>
        <Tab>Команда</Tab>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          ‹ Август 2026 ›
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все этапы ▾
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все статьи ▾
        </button>
      </div>

      <div
        id="anchor-cause-table"
        className="overflow-x-auto rounded-md border border-slate-200 bg-white"
      >
        <table className="w-full min-w-[900px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Дата</th>
              <th className="px-3 py-2 text-left font-semibold">Статья</th>
              <th className="px-3 py-2 text-left font-semibold">Контрагент</th>
              <th className="px-3 py-2 text-left font-semibold">Счёт</th>
              <th className="px-3 py-2 text-right font-semibold">Сумма</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {travelDealOperations.map((op) => (
              <tr
                key={op.id}
                id={op.focused ? "anchor-cause-row" : undefined}
                className={
                  op.focused
                    ? "bg-rose-50/60 ring-1 ring-inset ring-rose-300"
                    : op.hint && !op.focused
                      ? "bg-amber-50/50"
                      : ""
                }
              >
                <td className="px-3 py-3 align-top text-slate-700">{op.date}</td>
                <td className="px-3 py-3 align-top">
                  <p className="font-medium text-slate-900">{op.category}</p>
                  {op.hint && (
                    <p className="mt-1 text-[11px] leading-snug text-slate-600">
                      {op.hint}
                    </p>
                  )}
                </td>
                <td className="px-3 py-3 align-top text-slate-600">
                  {op.counterparty ?? op.direction ?? "—"}
                </td>
                <td className="px-3 py-3 align-top text-slate-600">{op.account}</td>
                <td
                  className={`px-3 py-3 align-top text-right font-mono tabular-nums ${
                    op.amount < 0 ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  {op.amount > 0 ? "+" : ""}
                  {formatRub(op.amount)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200 bg-slate-50">
              <td colSpan={4} className="px-3 py-2.5 text-xs text-slate-500">
                Поступления: +860 000 ₽ · Списания: −1 280 000 ₽ · По сделке:
                −420 000 ₽
              </td>
              <td className="px-3 py-2.5 text-right font-mono tabular-nums font-semibold text-rose-700">
                −420 000
              </td>
            </tr>
          </tfoot>
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
