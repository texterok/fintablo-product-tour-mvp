import { universalEvidenceRows } from "@/lib/universal-data";
import { formatRub } from "@/lib/provenance";

export function UniversalEvidencePage() {
  const total = universalEvidenceRows.reduce((s, r) => s + r.amount, 0);

  return (
    <div className="space-y-5">
      <div className="text-[12px] text-slate-500">
        <span className="hover:text-slate-700">Контракты</span>
        <span className="mx-1.5">/</span>
        <span className="hover:text-slate-700">БЦ «Северная Долина»</span>
        <span className="mx-1.5">/</span>
        <span className="hover:text-slate-700">Разложение</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">Перерасход ФОТ монтажников</span>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Перерасход ФОТ монтажников — 700 000 ₽
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          4 операции из банк-выписки за февраль. Каждая привязана к контракту БЦ
          «Северная Долина» автоматически.
        </p>
      </div>

      <div
        id="anchor-evidence-rows"
        className="overflow-hidden rounded-md border border-slate-200 bg-white"
      >
        <table className="w-full text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Дата</th>
              <th className="px-3 py-2 text-left font-semibold">Контрагент</th>
              <th className="px-3 py-2 text-left font-semibold">Назначение</th>
              <th className="px-3 py-2 text-left font-semibold">Контракт</th>
              <th className="px-3 py-2 text-right font-semibold">Сумма</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {universalEvidenceRows.map((r) => (
              <tr key={r.id}>
                <td className="px-3 py-3 align-top text-slate-700">
                  {r.date}
                </td>
                <td className="px-3 py-3 align-top">
                  <p className="font-medium text-slate-900">{r.counterparty}</p>
                </td>
                <td className="px-3 py-3 align-top text-[13px] text-slate-700">
                  {r.description}
                </td>
                <td className="px-3 py-3 align-top text-[12px] text-slate-600">
                  {r.contract}
                </td>
                <td className="px-3 py-3 text-right align-top font-mono tabular-nums text-rose-600">
                  {formatRub(r.amount)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200 bg-slate-50">
              <td
                colSpan={4}
                className="px-3 py-2.5 text-xs font-semibold text-slate-700"
              >
                Итого по статье «Перерасход ФОТ» за февраль
              </td>
              <td className="px-3 py-2.5 text-right font-mono tabular-nums font-semibold text-rose-700">
                {formatRub(total)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50/60 p-4 text-[12px] text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Источник:</span>{" "}
          банковская выписка ООО «Климат-Сервис» за февраль 2026. В Финтабло
          операции из банка загружаются автоматически и привязываются к
          контрактам по правилам, которые вы настраиваете один раз. Цифры в
          примере — синтетика на основе типичного профиля проектного бизнеса.
        </p>
      </div>
    </div>
  );
}
