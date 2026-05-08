import { agencyAccounts } from "@/lib/agency-data";
import { formatRub } from "@/lib/provenance";

export function AgencyVirtualAccountPage() {
  return (
    <div className="space-y-5">
      <div className="text-[12px] text-slate-500">
        <span className="hover:text-slate-700">Справочники</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">Счета и реквизиты</span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Счета и реквизиты
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Виртуальные счета — для разделения денег по назначению. Аванс клиента
            не путается с заработанными деньгами.
          </p>
        </div>
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Добавить счёт
        </button>
      </div>

      <div className="rounded-md border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Название</th>
              <th className="px-3 py-2 text-left font-semibold">Тип</th>
              <th className="px-3 py-2 text-left font-semibold">Описание</th>
              <th className="px-3 py-2 text-right font-semibold">Остаток</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {agencyAccounts.map((a) => (
              <tr
                key={a.name}
                id={
                  a.type === "virtual" ? "anchor-virtual-account" : undefined
                }
                className={a.type === "virtual" ? "bg-amber-50/40" : ""}
              >
                <td className="px-3 py-3 align-top">
                  <p className="font-medium text-slate-900">{a.name}</p>
                </td>
                <td className="px-3 py-3 align-top">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${
                      a.type === "virtual"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {a.type === "virtual" ? "Виртуальный" : "Расчётный"}
                  </span>
                </td>
                <td className="px-3 py-3 align-top text-[12px] text-slate-600">
                  {a.description}
                </td>
                <td
                  className={`px-3 py-3 text-right align-top font-mono tabular-nums font-semibold ${
                    a.type === "virtual" ? "text-amber-700" : "text-slate-900"
                  }`}
                >
                  {formatRub(a.balance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-emerald-200 bg-emerald-50/40 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
          Из методологии Финтабло
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">
          «Эти деньги пока ещё нельзя назвать заработанными — обязательства не
          выполнены, и в любой момент может оказаться, что деньги нужно вернуть.
          Чтобы быть честным по отношению к себе, переведите сумму аванса с
          основного расчётного счёта на специальный».
        </p>
        <a
          href="https://help.fintablo.ru/article/1834"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-[11px] text-emerald-700 underline hover:text-emerald-900"
        >
          help.fintablo.ru/article/1834 — «Авансы от Заказчиков» →
        </a>
      </div>
    </div>
  );
}
