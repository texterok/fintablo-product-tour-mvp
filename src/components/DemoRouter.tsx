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
    href: "/",
    badge: "Стройка · СМР · ПИР",
    title: "Тур по строительной компании",
    jtbd:
      "«Понять, куда из 16 млн выручки до прибыли доходит только 12 — и на что уходят остальные 4 млн»",
    benefit:
      "Расхождение план/факт по объектам, направлениям и статьям. На реальной структуре стройки: подрядчики, материалы, ФОТ.",
    caseCompany: "Кейс ремонтной компании",
    caseSegment: "Стройка / Ремонт",
    caseQuote:
      "Видим перерасход по объекту в течение недели, а не в конце месяца. Закрытие — со «всё пропало» до плановых правок.",
    caseUrl: "https://fintablo.ru/case",
  },
  {
    scenario: "agency",
    href: "/agency/tour",
    badge: "Агентство · Услуги с авансами",
    title: "Тур по производственному агентству",
    jtbd:
      "«Клиенты заплатили вперёд, а через месяц нечем платить команде»",
    benefit:
      "Авансы заказчика отделены от заработанных денег. Платёжный календарь по сделке показывает кассовый разрыв до того, как он случится.",
    caseCompany: "Джони и Клайд",
    caseSegment: "Производственное агентство, видео",
    caseQuote:
      "«Мы набрали предоплат, и было страшно. Не понимали сколько и кому должны». Незавершёнка — в 2 раза за 2 месяца.",
    caseUrl: "https://fintablo.ru/case/johny-and-clyde",
  },
  {
    scenario: "universal",
    href: "/start/tour",
    badge: "Монтаж · Сервис · ОВК / СКС",
    title: "Тур по монтажной / сервисной компании",
    jtbd:
      "«Контракт планировался прибыльным — по факту собрали половину»",
    benefit:
      "Этап «Монтаж» в минусе, ФОТ-перерасход и гарантийные удержания разделены: что потеряно — и что просто придёт позже.",
    caseCompany: "Климат-Сервис (демо)",
    caseSegment: "Монтаж климатических систем",
    caseQuote:
      "БЦ «Северная Долина»: план 7 млн → факт 5,56 млн. Из 1,44 млн расхождения 700 тыс. — ФОТ-перерасход, 524 тыс. — гарантийка через 6 месяцев.",
    caseUrl: "https://fintablo.ru/case",
  },
];

export function DemoRouter() {
  return (
    <div className="min-h-svh bg-white text-slate-900">
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
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-ft-primary text-[13px] font-bold text-white">
            ФТ
          </span>
          <span className="text-[18px] font-bold text-ft-primary">
            Финтабло
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
          <a href="#tours" className="hover:text-slate-900">
            Выбрать тур
          </a>
          <a href="#why" className="hover:text-slate-900">
            Зачем три тура
          </a>
          <a
            href="https://fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
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
    <section className="border-b border-slate-100 bg-gradient-to-br from-blue-50/40 via-white to-emerald-50/30">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:py-20">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-800">
          90 секунд · без формы · без презентаций
        </span>
        <h1 className="mt-5 text-[34px] font-bold leading-tight text-slate-900 sm:text-[44px]">
          Покажем за 90 секунд, где из вашей выручки утекает прибыль
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-relaxed text-slate-700">
          Это не презентация продукта и не маркетинговый ролик. Это
          интерактивный разбор по реальным модулям Финтабло — с конкретными
          цифрами по конкретному объекту или контракту. Вы кликаете, разбор
          ведёт. На каждом шаге — что и почему изменилось.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
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

        <p className="mt-8 text-[13px] text-slate-500">
          Выберите ниже, какой бизнес ближе к вашему — мы покажем тур по
          релевантной отрасли.
        </p>
      </div>
    </section>
  );
}

function Benefit({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 text-left">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-800">{text}</p>
    </div>
  );
}

function TourSelector() {
  return (
    <section id="tours" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Выбор тура
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          Какой бизнес ближе к вашему?
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-700">
          Три тура — три типа проектного бизнеса. Каждый показывает, как
          Финтабло закрывает специфичный для отрасли разрыв между «деньги
          пришли» и «прибыль есть».
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {TOURS.map((t) => (
            <Card key={t.scenario} tour={t} />
          ))}
        </div>

        <p className="mt-6 text-[12px] text-slate-500">
          Не уверены, какой выбрать? Возьмите тот, чьё JTBD ближе к вашей
          ситуации. На любом из туров покажем общую логику Финтабло.
        </p>
      </div>
    </section>
  );
}

function Card({ tour }: { tour: TourCard }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow">
      <span className="inline-block w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
        {tour.badge}
      </span>
      <h3 className="mt-3 text-[18px] font-semibold text-slate-900">
        {tour.title}
      </h3>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        Главный вопрос (JTBD)
      </p>
      <blockquote className="mt-1 border-l-2 border-blue-300 pl-3 text-[13px] italic leading-snug text-slate-800">
        {tour.jtbd}
      </blockquote>

      <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        Что покажет тур
      </p>
      <p className="mt-1 text-[13px] leading-relaxed text-slate-700">
        {tour.benefit}
      </p>

      <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50/40 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
          Кейс из отрасли · {tour.caseSegment}
        </p>
        <p className="mt-1 text-[13px] font-semibold text-slate-900">
          {tour.caseCompany}
        </p>
        <p className="mt-1 text-[12px] leading-snug text-slate-700">
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
            className="mt-2 inline-block text-[11px] text-emerald-700 underline hover:text-emerald-900"
          >
            Полный кейс →
          </a>
        )}
      </div>

      <div className="mt-auto pt-5">
        <Link
          href={tour.href}
          onClick={() =>
            track("router_card_click", {
              scenario: tour.scenario,
              cta_location: "router_card",
              tour_href: tour.href,
            })
          }
          className="block w-full rounded-md bg-emerald-600 px-4 py-3 text-center text-[14px] font-semibold text-white hover:bg-emerald-700"
        >
          Запустить этот тур →
        </Link>
      </div>
    </article>
  );
}

function WhyThreeTours() {
  return (
    <section id="why" className="border-b border-slate-100 bg-slate-50/40">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Зачем три тура, а не один
        </p>
        <h2 className="mt-2 text-[26px] font-bold leading-tight text-slate-900 sm:text-[30px]">
          Финтабло — один, но боль у проектных компаний — разная
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
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
        <p className="mt-6 text-[14px] leading-relaxed text-slate-700">
          Каждый тур использует одни и те же модули Финтабло — Сделки, Карточка
          сделки с этапами и операциями, Платёжный календарь, Виртуальные
          счета. Разница только в данных и в фокусе разбора.
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
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <span className="flex size-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
        {n}
      </span>
      <h3 className="mt-3 text-[14px] font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © Финтабло. Интерактивные демо-разборы для проектного бизнеса
          60-1200 млн ₽.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-800"
          >
            fintablo.ru
          </a>
          <a
            href="https://help.fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-800"
          >
            help.fintablo.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
