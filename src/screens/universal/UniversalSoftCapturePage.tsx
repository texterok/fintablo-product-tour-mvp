"use client";

import { useState } from "react";
import { track } from "@/lib/track";

export function UniversalSoftCapturePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    track("soft_capture_submitted", {
      scenario: "universal",
      domain: email.split("@")[1] ?? "",
    });
    setSubmitted(true);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Сохранить пример на почту
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Пришлём PDF с разложением 1,8 млн по статьям и таблицей по 5
          контрактам. Можно пропустить — дальше про источники данных.
        </p>
      </div>

      <div
        id="anchor-soft-capture"
        className="rounded-md border border-emerald-200 bg-emerald-50/40 p-6"
      >
        {!submitted ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                Рабочая почта
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваше@компания.ru"
                className="mt-1 w-full max-w-md rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-200 focus:ring-2"
              />
            </label>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Отправить пример на почту
              </button>
              <span className="text-[12px] text-slate-500">
                Это короткий PDF на 2 страницы. Без рассылки.
              </span>
            </div>
          </form>
        ) : (
          <div className="rounded bg-white p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
            <p className="font-semibold">
              Спасибо. На <span className="font-mono">{email}</span> уйдёт пример.
            </p>
            <p className="mt-2 text-[12px] text-emerald-700">
              Можете продолжать — дальше про источники данных и реальный путь
              после регистрации.
            </p>
          </div>
        )}
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50/50 p-4 text-[12px] text-slate-600">
        Шаг опциональный. Не блокирует прохождение тура — можете пропустить.
      </div>
    </div>
  );
}
