"use client";

import Link from "next/link";
import { track } from "@/lib/track";

type TourCard = {
  scenario: "stroyka" | "agency" | "universal";
  href: string;
  badge: string;
  title: string;
  jtbd: string;
  benefit: string;
  caseCompany: string;
  caseSegment: string;
  caseQuote: string;
  caseUrl: string;
};

const TOURS: TourCard[] = [
  {
    scenario: "stroyka",
    href: "/tour",
    badge: "Стройка · СМР · ПИР",
    title: "Разбор строительной компании",
    jtbd:
      "«Понять, куда из 16 млн ₽ выручки до прибыли доходит только 12 — и куда уходят остальные 4 млн ₽»",
    benefit:
      "Расхождение план/факт по объектам, направлениям и статьям. На реальной структуре стройки: подрядчики, материалы, ФОТ.",
    caseCompany: "Пример ремонтной компании",
    caseSegment: "Стройка / Ремонт",
    caseQuote:
      "Видим перерасход по объекту в течение недели, а не в конце месяца. Закрытие — со «всё пропало» до плановых правок. Цифры — пример.",
    caseUrl: "https://fintablo.ru/case",
  },
  {
    scenario: "agency",
    href: "/agency/tour",
    badge: "Агентство · Услуги с авансами",
    title: "Разбор производственного агентства",
    jtbd:
      "«Клиенты заплатили вперёд, а через месяц нечем платить команде»",
    benefit:
      "Авансы заказчика отделены от заработанных денег. Платёжный календарь по сделке показывает кассовый разрыв до того, как он случится.",
    caseCompany: "Джони и Клайд",
    caseSegment: "Производственное агентство, видео",
    caseQuote:
      "«Мы набрали предоплат, и было страшно. Не понимали сколько и кому должны». Незавершёнка сократилась в 2 раза за 2 месяца.",
    caseUrl: "https://fintablo.ru/case/johny-and-clyde",
  },
  {
    scenario: "universal",
    href: "/start/tour",
    badge: "Монтаж · Сервис · ОВК / СКС",
    title: "Разбор монтажной и сервисной компании",
    jtbd:
      "«Контракт планировался прибыльным — по факту собрали половину»",
    benefit:
      "Этап «Монтаж» в минусе, ФОТ-перерасход и гарантийные удержания разделены: что потеряно — и что просто придёт позже.",
    caseCompany: "Климат-Сервис (пример)",
    caseSegment: "Монтаж климатических систем",
    caseQuote:
      "БЦ «Северная Долина»: план 7 млн ₽ → факт 5,56 млн ₽. Из 1,44 млн ₽ расхождения 700 тыс. ₽ — ФОТ-перерасход, 524 тыс. ₽ — гарантийка через 6 месяцев. Цифры — пример.",
    caseUrl: "https://fintablo.ru/case",
  },
];

export function DemoRouter() {
  return (
    <div className="site-theme min-h-svh">
      <Header />
      <main>
        <DemoSales />
        <TourSelector />
        <WhyThreeTours />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-ft-site-border-light bg-white">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-ft-site-navy text-[13px] font-bold text-white">
            ФТ
          </span>
          <span className="text-[19px] font-bold text-ft-site-navy">
            Финтабло
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-[15px] text-ft-site-text sm:flex">
          <a href="#tours" className="hover:text-ft-site-navy">
            Выбрать разбор
          </a>
          <a href="#why" className="hover:text-ft-site-navy">
            Зачем три разбора
          </a>
          <a
            href="https://fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ft-site-navy"
          >
            fintablo.ru
          </a>
        </nav>
      </div>
    </header>
  );
}

function DemoSales() {
  return (
    <section className="border-b border-ft-site-border-light bg-ft-site-tint">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:py-24">
        <span className="inline-block rounded-full bg-ft-site-navy px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
          90 секунд · без формы · без презентаций
        </span>
        <h1 className="mt-6 text-[36px] font-bold leading-[1.15] tracking-tight text-ft-site-navy sm:text-[52px]">
          Покажем за 90 секунд, где из вашей выручки утекает прибыль
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-[1.55] text-ft-site-text">
          Это не презентация продукта и не маркетинговый ролик. Это
          интерактивный разбор на примере конкретного объекта или контракта —
          в подтверждённых разделах Финтабло. Вы кликаете, разбор ведёт. На
          каждом шаге — что и почему изменилось.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          <Benefit
            label="Что узнаете"
            text="Где именно протекают деньги по конкретному объекту"
          />
          <Benefit
            label="Сколько времени"
            text="90 секунд на полный разбор. Без созвона и записи"
          />
          <Benefit
            label="Что после"
            text="Если интересно — 30 минут разбора на ваших цифрах. Без обязательств"
          />
        </div>

        <p className="mt-10 text-[14px] text-ft-site-text-muted">
          Разбор подобран для проектного бизнеса 60-1200 млн ₽ с собственником
          или финдиректором. Выберите ниже, какой бизнес ближе к вашему — и мы
          покажем пример по релевантной отрасли.
        </p>
      </div>
    </section>
  );
}

function Benefit({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-[10px] border border-ft-site-border-light bg-white p-5 text-left">
      <p className="text-[11px] font-medium uppercase tracking-wider text-ft-site-brand">
        {label}
      </p>
      <p className="mt-2 text-[14px] leading-[1.55] text-ft-site-text">{text}</p>
    </div>
  );
}

function TourSelector() {
  return (
    <section id="tours" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Выбор разбора
        </p>
        <h2 className="mt-3 max-w-3xl text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          Какой проектный бизнес 60-1200 млн ₽ ближе к вашему?
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[1.55] text-ft-site-text">
          Три разбора — три типа проектного бизнеса. Каждый показывает, как
          Финтабло закрывает специфичный для отрасли разрыв между «деньги
          пришли» и «прибыль есть».
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TOURS.map((t) => (
            <Card key={t.scenario} tour={t} />
          ))}
        </div>

        <p className="mt-7 text-[13px] text-ft-site-text-muted">
          Не уверены, какой выбрать? Возьмите тот, чей главный вопрос ближе
          к вашей ситуации. На любом из разборов покажем общую логику Финтабло.
        </p>
      </div>
    </section>
  );
}

function Card({ tour }: { tour: TourCard }) {
  return (
    <article className="flex h-full flex-col rounded-[10px] border border-ft-site-border-light bg-white p-6 transition hover:border-ft-site-brand hover:shadow-[0_6px_24px_rgba(9,26,78,0.1)]">
      <span className="inline-block w-fit rounded-full bg-ft-site-tint px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-ft-site-navy">
        {tour.badge}
      </span>
      <h3 className="mt-4 text-[19px] font-bold leading-[1.25] text-ft-site-navy">
        {tour.title}
      </h3>

      <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-ft-site-brand">
        Главный вопрос собственника
      </p>
      <blockquote className="mt-2 border-l-2 border-ft-site-brand pl-3 text-[14px] italic leading-[1.5] text-ft-site-navy">
        {tour.jtbd}
      </blockquote>

      <p className="mt-5 text-[11px] font-medium uppercase tracking-wider text-ft-site-text-muted">
        Что покажет разбор
      </p>
      <p className="mt-1.5 text-[14px] leading-[1.55] text-ft-site-text">
        {tour.benefit}
      </p>

      <div className="mt-5 rounded-[8px] border border-ft-site-border-light bg-ft-site-tint p-4">
        <p className="text-[10px] font-medium uppercase tracking-wider text-ft-site-brand">
          Кейс из отрасли · {tour.caseSegment}
        </p>
        <p className="mt-1.5 text-[14px] font-bold text-ft-site-navy">
          {tour.caseCompany}
        </p>
        <p className="mt-1.5 text-[13px] leading-[1.5] text-ft-site-text">
          {tour.caseQuote}
        </p>
        {tour.caseUrl !== "https://fintablo.ru/case" && (
          <a
            href={tour.caseUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track("router_case_open", {
                scenario: tour.scenario,
                case: tour.caseCompany,
              })
            }
            className="mt-2 inline-block text-[12px] font-medium text-ft-site-brand hover:text-ft-site-blue-hover"
          >
            Полный кейс →
          </a>
        )}
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={tour.href}
          onClick={() =>
            track("router_card_click", {
              scenario: tour.scenario,
              cta_location: "router_card",
              tour_href: tour.href,
            })
          }
          className="block w-full rounded-full bg-ft-site-brand px-5 py-3 text-center text-[14px] font-bold text-white hover:bg-ft-site-blue-hover"
        >
          Открыть этот разбор →
        </Link>
      </div>
    </article>
  );
}

function WhyThreeTours() {
  return (
    <section id="why" className="border-b border-ft-site-border-light bg-ft-site-tint">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Зачем три разбора, а не один
        </p>
        <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-ft-site-navy sm:text-[36px]">
          Финтабло — один, но боль у проектных компаний — разная
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <ReasonCard
            n="1"
            title="У стройки болит план/факт по объектам"
            text="Перерасход на этапе видно только в конце месяца, когда уже поздно реагировать."
          />
          <ReasonCard
            n="2"
            title="У агентства болят авансы"
            text="Клиент заплатил вперёд, но из этих денег предстоит платить подрядчикам — а сколько именно «своих»?"
          />
          <ReasonCard
            n="3"
            title="У монтажников болят гарантии"
            text="10% удержано до сдачи через полгода — это потеря или просто кассовый разрыв?"
          />
        </div>
        <p className="mt-7 text-[15px] leading-[1.55] text-ft-site-text">
          Каждый разбор использует одни и те же разделы Финтабло — Сделки,
          Карточка сделки с этапами и операциями, Платёжный календарь,
          Виртуальные счета. Разница только в данных и в фокусе разбора.
        </p>
      </div>
    </section>
  );
}

function ReasonCard({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[10px] border border-ft-site-border-light bg-white p-6">
      <span className="flex size-9 items-center justify-center rounded-full bg-ft-site-navy text-sm font-bold text-white">
        {n}
      </span>
      <h3 className="mt-4 text-[16px] font-bold leading-[1.3] text-ft-site-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-[1.55] text-ft-site-text">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ft-site-border-light bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-[13px] text-ft-site-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © Финтабло. Интерактивные разборы для проектного бизнеса 60-1200 млн ₽.
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href="https://fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ft-site-navy"
          >
            fintablo.ru
          </a>
          <a
            href="https://help.fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ft-site-navy"
          >
            help.fintablo.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
