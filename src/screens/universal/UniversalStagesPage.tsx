import { northDealStages } from "@/lib/universal-data";
import { formatRub } from "@/lib/provenance";

export function UniversalStagesPage() {
  return (
    <div className="space-y-5">
      <div className="text-[12px] text-slate-500">
        <span className="hover:text-slate-700">Сделки</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">БЦ «Северная Долина»</span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            БЦ «Северная Долина» — климат и вентиляция
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Заказчик: ООО «Девелопмент Северный» · Сумма: 7 000 000 ₽ ·
            Получено: 5 200 000 ₽
          </p>
        </div>
        <button
          type="button"
          className="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          Редактировать
        </button>
      </div>

      <div className="flex items-center gap-6 border-b border-slate-200">
        <Tab active>Этапы</Tab>
        <Tab>Операции</Tab>
        <Tab>Документы</Tab>
        <Tab>Команда</Tab>
      </div>

      <div className="rounded-md border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600">
            <tr>
              <th className="w-12 px-3 py-2"></th>
              <th className="px-3 py-2 text-left font-semibold">Этап</th>
              <th className="px-3 py-2 text-left font-semibold">Описание</th>
              <th className="px-3 py-2 text-right font-semibold">План</th>
              <th className="px-3 py-2 text-right font-semibold">Факт</th>
              <th className="px-3 py-2 text-right font-semibold">Разница</th>
              <th className="px-3 py-2 text-right font-semibold">Статус</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {northDealStages.map((stage) => (
              <tr
                key={stage.num}
                id={stage.status === "problem" ? "anchor-stage-three" : undefined}
                className={stage.status === "problem" ? "bg-rose-50/70" : ""}
              >
                <td className="px-3 py-3">
                  <span
                    className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold ${
                      stage.status === "ok"
                        ? "bg-emerald-100 text-emerald-700"
                        : stage.status === "problem"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {stage.num}
                  </span>
                </td>
                <td className="px-3 py-3 align-top">
                  <p
                    className={`font-medium ${
                      stage.status === "problem"
                        ? "text-rose-900"
                        : "text-slate-900"
                    }`}
                  >
                    {stage.name}
                  </p>
                </td>
                <td className="px-3 py-3 align-top text-[12px] text-slate-600">
                  {stage.desc}
                </td>
                <td className="px-3 py-3 text-right align-top font-mono tabular-nums text-slate-700">
                  {formatRub(stage.plan)}
                </td>
                <td
                  className={`px-3 py-3 text-right align-top font-mono tabular-nums ${
                    stage.status === "problem"
                      ? "font-semibold text-rose-700"
                      : stage.status === "pending"
                        ? "text-slate-400"
                        : "text-slate-700"
                  }`}
                >
                  {stage.fact === null ? "—" : formatRub(stage.fact)}
                </td>
                <td
                  className={`px-3 py-3 text-right align-top font-mono tabular-nums ${
                    stage.status === "problem"
                      ? "font-semibold text-rose-700"
                      : "text-slate-500"
                  }`}
                >
                  {stage.fact === null
                    ? "—"
                    : (() => {
                        const diff = stage.fact - stage.plan;
                        return diff === 0
                          ? "0"
                          : diff < 0
                            ? `−${formatRub(Math.abs(diff))}`
                            : `+${formatRub(diff)}`;
                      })()}
                </td>
                <td className="px-3 py-3 text-right align-top">
                  {stage.status === "ok" && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-emerald-700">
                      Закрыт
                    </span>
                  )}
                  {stage.status === "problem" && (
                    <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-rose-700">
                      В работе
                    </span>
                  )}
                  {stage.status === "pending" && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-500">
                      Не начат
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200 bg-slate-50">
              <td colSpan={3} className="px-3 py-2.5 text-xs font-semibold text-slate-700">
                Итого по контракту
              </td>
              <td className="px-3 py-2.5 text-right font-mono tabular-nums text-slate-700">
                {formatRub(7_000_000)}
              </td>
              <td className="px-3 py-2.5 text-right font-mono tabular-nums font-semibold text-slate-900">
                {formatRub(4_980_000)}
              </td>
              <td className="px-3 py-2.5 text-right font-mono tabular-nums font-semibold text-rose-700">
                −1 240 000
              </td>
              <td></td>
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
