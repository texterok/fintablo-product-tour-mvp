"use client";

import { useState } from "react";
import { bankOperationExample } from "@/lib/data";
import { ProvenanceTag } from "@/components/ProvenanceTag";
import { formatRub } from "@/lib/provenance";
import { track } from "@/lib/track";

const operations = [
  { id: 1, date: "30.08.2024", category: "Поступления от клиентов", direction: "Проектирование", account: "р/с ВТБ ИП Сооруженко", amount: 62_000 },
  { id: 2, date: "30.08.2024", category: "Аренда офиса", counterparty: "ИП Васильев Иван Николаевич", account: "р/с Сбер ООО Строев", amount: -110_000, focused: true },
  { id: 3, date: "29.08.2024", category: "Поступления от клиентов", direction: "Проектирование", account: "р/с ВТБ ИП Сооруженко", amount: 76_000 },
  { id: 4, date: "29.08.2024", category: "Бухгалтерское обслуживание", counterparty: "ИП Васильев Иван Николаевич", account: "р/с Сбер ООО Строев", amount: -32_000 },
];

export function OperationPage() {
  const [showCta, setShowCta] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Операции</h1>
        <button
          type="button"
          onClick={() => setShowCta(true)}
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Новая операция
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          ‹ Август 2024 ›
        </button>
        <input
          type="text"
          placeholder="Поиск по контрагенту, описанию"
          className="h-9 flex-1 min-w-[220px] rounded border border-slate-300 bg-white px-3 text-sm"
        />
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все счета ▾
        </button>
        <button className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800">
          Все направления ▾
        </button>
      </div>

      <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Дата</th>
              <th className="px-3 py-2 text-left font-semibold">Категория</th>
              <th className="px-3 py-2 text-left font-semibold">Контрагент / направление</th>
              <th className="px-3 py-2 text-left font-semibold">Счёт</th>
              <th className="px-3 py-2 text-right font-semibold">Сумма</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {operations.map((op) => (
              <tr
                key={op.id}
                id={op.focused ? "anchor-operation" : undefined}
                className={op.focused ? "bg-blue-50/60 ring-1 ring-inset ring-blue-300" : ""}
              >
                <td className="px-3 py-3 text-slate-700">{op.date}</td>
                <td className="px-3 py-3 font-medium text-slate-900">{op.category}</td>
                <td className="px-3 py-3 text-slate-600">
                  {op.counterparty ?? op.direction ?? "—"}
                </td>
                <td className="px-3 py-3 text-slate-600">{op.account}</td>
                <td
                  className={`px-3 py-3 text-right font-mono tabular-nums ${
                    op.amount < 0 ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  {op.amount > 0 ? "+" : ""}
                  {formatRub(op.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border-2 border-blue-200 bg-blue-50/40 p-5">
        <p className="text-sm font-semibold text-blue-900">
          Вот этот платёж в банке — 110 000 ₽ за аренду
        </p>
        <p className="mt-1 text-sm text-slate-700">
          В Финтабло любую цифру в отчёте — прибыль, расход, остаток на
          счёте — можно открыть до конкретного перевода. Видно дату, кому
          ушло, со счёта какой компании. Это пример того, как работает связь
          «отчёт → банк».
        </p>
        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <Field label="Дата" value={bankOperationExample.date.value} source={bankOperationExample.date.source} />
          <Field label="Контрагент" value={bankOperationExample.counterparty.value} source={bankOperationExample.counterparty.source} />
          <Field label="Категория" value={bankOperationExample.category.value} source={bankOperationExample.category.source} />
          <Field label="Счёт" value={bankOperationExample.account.value} source={bankOperationExample.account.source} />
          <div className="sm:col-span-2">
            <Field label="Назначение платежа" value={bankOperationExample.description.value} source={bankOperationExample.description.source} />
          </div>
        </div>
      </div>

      <div id="anchor-cta" className="rounded-md border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Хотите так же на своих данных?
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900">
          Покажем, где утекает прибыль вашего бизнеса
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Загрузите выписку из 1С или банка — Финтабло разложит ваши сделки и
          покажет, на что уходят деньги между выручкой и итоговой прибылью. 14
          дней бесплатно, без карты и без обязательств.
        </p>
        <button
          type="button"
          onClick={() => {
            track("cta_open");
            setShowCta(true);
          }}
          className="mt-4 rounded bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Попробовать бесплатно →
        </button>
      </div>

      {showCta && <CtaModal onClose={() => setShowCta(false)} />}
    </div>
  );
}

function Field({
  label,
  value,
  source,
}: {
  label: string;
  value: string;
  source?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
        <ProvenanceTag provenance="REAL" source={source} />
      </div>
      <p className="mt-1 text-sm text-slate-900">{value}</p>
    </div>
  );
}

function CtaModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    track("cta_submit", { domain: email.split("@")[1] ?? "" });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Попробовать на своих данных
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700"
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <p className="text-sm text-slate-600">
              Отправим ссылку на триал на рабочую почту. Без привязки карты, 14
              дней.
            </p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ваше@название.ru"
              className="w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-200 focus:ring-2"
            />
            <button
              type="submit"
              className="w-full rounded bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Получить ссылку
            </button>
            <p className="text-[11px] text-slate-500">
              Это демо-разбор. Настоящая регистрация — на fintablo.ru.
            </p>
          </form>
        ) : (
          <div className="mt-4 rounded bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
            <p className="font-semibold">
              Спасибо. На <span className="font-mono">{email}</span> уйдёт
              ссылка.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
