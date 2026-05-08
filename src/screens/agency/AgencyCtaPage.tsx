"use client";

import { useState } from "react";
import { track } from "@/lib/track";

type Props = {
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
};

export function AgencyCtaPage({ onPrimaryCta, onSecondaryCta }: Props = {}) {
  const [showCta, setShowCta] = useState(false);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-slate-900">
        Что дальше — разбор на ваших данных
      </h1>

      <div
        id="anchor-cta"
        className="rounded-md border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Для проектных агентств 15-30 человек
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900">
          Хотите так же на одной своей сделке?
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          За 30 минут вместе разберём одну вашу сделку и покажем, какие данные
          нужны, чтобы собрать такую же картину на ваших цифрах. Без презентаций.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              track("cta_open", {
                scenario: "agency",
                cta_label: "Хочу разобрать одну свою сделку",
              });
              onPrimaryCta?.();
              setShowCta(true);
            }}
            className="rounded bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Хочу разобрать одну свою сделку →
          </button>
          <button
            type="button"
            onClick={() => {
              track("cta_secondary", {
                scenario: "agency",
                cta_label: "Сначала посмотрю другие примеры",
              });
              onSecondaryCta?.();
            }}
            className="rounded border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Сначала посмотрю другие примеры
          </button>
        </div>
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-900">
          Откуда мы знаем, что это работает
        </h3>

        <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50/40 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
            Из методологии Финтабло
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-800">
            «Эти деньги пока ещё нельзя назвать заработанными — обязательства не
            выполнены, и в любой момент может оказаться, что деньги нужно
            вернуть. Чтобы быть честным по отношению к себе, переведите сумму
            аванса с основного расчётного счёта на специальный».
          </p>
          <a
            href="https://help.fintablo.ru/article/1834"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-[11px] text-emerald-700 underline hover:text-emerald-900"
          >
            help.fintablo.ru/article/1834 →
          </a>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <CaseCard
            agency="Джони и Клайд"
            quote="«Мы набрали предоплат, и было страшно. Не понимали сколько и кому должны»"
            url="https://fintablo.ru/case/johny-and-clyde"
            result="Незавершённые работы сократились в 2 раза за 2 месяца"
          />
          <CaseCard
            agency="Луноход"
            quote="«25 числа планируем и анализируем — надо ли брать ещё проекты»"
            url="https://fintablo.ru/case/long-projects-agency"
            result="Закрытие месяца — с 5 дней до 2-3 часов"
          />
          <CaseCard
            agency="Корпорация Мейк"
            quote="«До Финтабло баланс в Google-таблицах не сходился на 15-40%»"
            url="https://fintablo.ru/case/event-make"
            result="Отчёты к 1 числу следующего месяца"
          />
        </div>
        <p className="mt-3 text-[11px] text-slate-500">
          Это три разных кейса, не среднее по рынку. Полные истории — на
          fintablo.ru/case.
        </p>
      </div>

      {showCta && <CtaModal onClose={() => setShowCta(false)} />}
    </div>
  );
}

function CaseCard({
  agency,
  quote,
  url,
  result,
}: {
  agency: string;
  quote: string;
  url: string;
  result: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50/40 p-3">
      <p className="text-[12px] font-semibold text-slate-900">{agency}</p>
      <blockquote className="mt-2 border-l-2 border-slate-300 pl-2 text-[12px] italic leading-snug text-slate-700">
        {quote}
      </blockquote>
      <p className="mt-2 text-[12px] font-medium text-emerald-700">{result}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-block text-[11px] text-blue-600 underline hover:text-blue-800"
      >
        Полный кейс →
      </a>
    </div>
  );
}

function CtaModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    track("cta_submit", {
      scenario: "agency",
      domain: email.split("@")[1] ?? "",
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Разберём одну вашу сделку
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
              Оставьте рабочую почту — пришлём ссылку на короткий разбор. Без
              презентаций, без привязки карты.
            </p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ваше@агентство.ru"
              className="w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-200 focus:ring-2"
            />
            <button
              type="submit"
              className="w-full rounded bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Получить ссылку на разбор
            </button>
            <p className="text-[11px] text-slate-500">
              Это демо. Настоящая регистрация — на fintablo.ru.
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
