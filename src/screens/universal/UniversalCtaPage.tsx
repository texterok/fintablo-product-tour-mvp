"use client";

import { useState } from "react";
import { track } from "@/lib/track";

type RevenueRange = "<20" | "20-60" | "60-1200" | ">1200";
type FinDirector = "yes" | "no" | "hiring";

export function UniversalCtaPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [revenue, setRevenue] = useState<RevenueRange | "">("");
  const [findir, setFindir] = useState<FinDirector | "">("");
  const [submitted, setSubmitted] = useState(false);

  const isIcpFit =
    (revenue === "20-60" || revenue === "60-1200") && findir === "yes";
  const showSoftRedirect =
    revenue === "<20" ||
    revenue === ">1200" ||
    findir === "no" ||
    findir === "hiring";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || !revenue || !findir) return;
    track("cta_submitted", {
      scenario: "universal",
      revenue_range: revenue,
      findir,
      icp_fit: isIcpFit,
      domain: email.split("@")[1] ?? "",
    });
    setSubmitted(true);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Проверить на одном своём контракте
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          За 30 минут разберём один контракт. Покажем, какие данные нужны.
        </p>
      </div>

      <div id="anchor-cta" className="rounded-md border border-slate-200 bg-white p-6">
        {!submitted ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <Field label="Имя">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className="w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-blue-200 focus:ring-2"
              />
            </Field>

            <Field label="Рабочая почта">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваше@компания.ru"
                className="w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-blue-200 focus:ring-2"
              />
            </Field>

            <Field label="Размер компании по выручке">
              <select
                value={revenue}
                onChange={(e) => setRevenue(e.target.value as RevenueRange)}
                required
                className="w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-blue-200 focus:ring-2"
              >
                <option value="">Выберите вариант</option>
                <option value="<20">до 20 млн ₽ в год</option>
                <option value="20-60">20-60 млн ₽ в год</option>
                <option value="60-1200">60-1200 млн ₽ в год</option>
                <option value=">1200">больше 1200 млн ₽ в год</option>
              </select>
            </Field>

            <Field label="У вас есть финдиректор или финменеджер?">
              <select
                value={findir}
                onChange={(e) => setFindir(e.target.value as FinDirector)}
                required
                className="w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-blue-200 focus:ring-2"
              >
                <option value="">Выберите вариант</option>
                <option value="yes">Да, есть</option>
                <option value="no">Нет, веду сам</option>
                <option value="hiring">Сейчас нанимаем</option>
              </select>
            </Field>

            {showSoftRedirect && revenue && findir && (
              <div className="rounded-md border border-amber-200 bg-amber-50/60 p-3 text-[13px] text-amber-900">
                {revenue === "<20" || revenue === ">1200"
                  ? "Возможно, вам подойдёт другой инструмент Финтабло — расскажем подробнее на встрече."
                  : "Финтабло работает в любом виде — мы расскажем, как настроить учёт, если в команде пока нет финдиректора."}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
            >
              Записаться на разбор
            </button>

            <p className="text-[11px] text-slate-500">
              Это демо. Настоящая регистрация — на fintablo.ru. Нажимая на
              кнопку, вы соглашаетесь с обработкой персональных данных.
            </p>
          </form>
        ) : (
          <div className="space-y-3">
            <div className="rounded bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
              <p className="font-semibold">
                Спасибо, {name || "коллега"}. С вами свяжутся в течение рабочего
                дня.
              </p>
              <p className="mt-2 text-[13px] text-emerald-700">
                Подберём аналитика, который понимает ваш масштаб (
                {revenue === "20-60"
                  ? "20-60 млн ₽"
                  : revenue === "60-1200"
                    ? "60-1200 млн ₽"
                    : revenue === "<20"
                      ? "до 20 млн ₽"
                      : "больше 1200 млн ₽"}
                ). За 30 минут разберём один ваш контракт.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50/50 p-4 text-[12px] text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Что увидите дальше:</span>{" "}
          разбор идёт по вашему графику. Без презентаций — сразу к делу. 14 дней
          доступа к продукту после разбора — без привязки карты, чтобы
          посмотреть как это работает на тестовых данных.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}
