"use client";

import Link from "next/link";
import { useState } from "react";
import { track } from "@/lib/track";

const TOUR_HREF = "/agency/tour";

export function AgencyLanding() {
  return (
    <div className="min-h-svh bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ContextSection />
        <CoreJobsSection />
        <FourForcesSection />
        <DemoTeaser />
        <ConcretizationSection />
        <TrustSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
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
          <a href="#how" className="hover:text-slate-900">
            Как работает
          </a>
          <a href="#cases" className="hover:text-slate-900">
            Кейсы
          </a>
          <a href="#faq" className="hover:text-slate-900">
            Вопросы
          </a>
          <Link
            href={TOUR_HREF}
            onClick={() => track("landing_nav_tour", {})}
            className="rounded bg-ft-primary px-3 py-1.5 font-medium text-white hover:opacity-90"
          >
            Открыть разбор →
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-emerald-700">
              Для проектных агентств 60-1200 млн ₽ с авансовой моделью
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Видеть, сколько денег осталось по каждой сделке —
              <span className="text-ft-primary"> до того</span>, как кончатся
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Финтабло связывает авансы клиентов, расходы по сделкам и платёжный
              календарь — чтобы вы видели, в какую неделю по конкретной сделке
              нечем будет платить команде. И принимали решение раньше, чем это
              случится.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={TOUR_HREF}
                onClick={() =>
                  track("landing_cta_hero_primary", {
                    cta: "Посмотреть на примере",
                  })
                }
                className="inline-flex h-12 items-center justify-center rounded bg-ft-primary px-7 text-[15px] font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Посмотреть на примере одной сделки →
              </Link>
              <a
                href="#how"
                className="inline-flex h-12 items-center justify-center rounded border border-slate-300 bg-white px-6 text-[15px] font-medium text-slate-700 hover:bg-slate-50"
              >
                Как это работает
              </a>
            </div>

            <p className="mt-4 text-[13px] text-slate-500">
              7 экранов · 3 минуты · без регистрации · разбор на примере
              сделки агентства
            </p>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-ft-primary/10 to-emerald-100/40 blur-xl" />
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <p className="text-[12px] font-semibold text-slate-700">
            Сделка: YouTube «Путешествия»
          </p>
        </div>
        <div className="space-y-3 p-5">
          <Row label="Получили от клиента" value="+860 000 ₽" tone="emerald" />
          <Row label="Уже потратили" value="−520 000 ₽" tone="rose" />
          <div className="my-3 border-t border-slate-200" />
          <Row label="Через 1 неделю" value="−320 000 ₽" tone="rose" small />
          <Row label="Через 2 недели" value="−420 000 ₽" tone="rose" small />
          <Row label="Через 3 недели" value="−460 000 ₽" tone="rose" small />
          <div className="my-3 border-t border-slate-200" />
          <div className="rounded-md bg-rose-50 p-3 ring-1 ring-rose-200">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-700">
              Через 3 недели
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-rose-700">
              −340 000 ₽
            </p>
            <p className="mt-1 text-[12px] text-rose-700">
              Финальный платёж от клиента — только через 5 недель
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
  small,
}: {
  label: string;
  value: string;
  tone: "emerald" | "rose";
  small?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <p
        className={`${small ? "text-[12px] text-slate-500" : "text-sm text-slate-700"}`}
      >
        {label}
      </p>
      <p
        className={`font-mono tabular-nums ${
          small ? "text-[12px]" : "text-sm font-semibold"
        } ${tone === "emerald" ? "text-emerald-700" : "text-rose-700"}`}
      >
        {value}
      </p>
    </div>
  );
}

function ContextSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Узнавание
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Если у вас агентство — это знакомая ситуация
        </h2>

        <ul className="mt-7 space-y-5 text-[15px] leading-relaxed text-slate-700">
          <ContextItem
            quote="«Клиенты заплатили вперёд — а через месяц нечем платить команде»"
            source="Артём Бойцов, креативное агентство Джони и Клайд"
          />
          <ContextItem
            quote="«Закрытие месяца уходит на 5 дней — к 10-му числу. К этому моменту решения уже не нужны»"
            source="Из публичного кейса агентства Луноход"
          />
          <ContextItem
            quote="«В Excel баланс не сходится на 15-40%. Не понимаем, к чему вообще идём»"
            source="Из публичного кейса Корпорации Мейк (Event MAKE)"
          />
        </ul>

        <p className="mt-8 text-[15px] leading-relaxed text-slate-700">
          Знакомо хоть одно? Тогда дальше — про то, как это решается без найма
          финдира и без перехода на 1С. Если ничего из этого не про вас —
          возможно, этот продукт не для вас.
        </p>
      </div>
    </section>
  );
}

function ContextItem({ quote, source }: { quote: string; source: string }) {
  return (
    <li className="rounded-md border-l-4 border-slate-300 bg-slate-50/60 px-5 py-4">
      <p className="text-slate-800">{quote}</p>
      <p className="mt-1.5 text-[12px] text-slate-500">{source}</p>
    </li>
  );
}

function CoreJobsSection() {
  return (
    <section
      id="how"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-emerald-700">
          Что Финтабло делает
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Три вещи — чтобы вы могли управлять деньгами агентства не на интуиции,
          а на цифрах
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <CoreJobCard
            num="1"
            title="Видеть деньги по каждой сделке"
            value="Аванс клиента, расходы по проекту, остаток денег — в одной строке"
            how="Загружаете выписку из банка → Финтабло сам прикрепляет операции к сделкам и этапам. Считать вручную не нужно."
            example={"«Сделка „Путешествия“ — получили 860К аванса, потратили уже 1,2 млн. Осталось денег по сделке: −340К»"}
          />
          <CoreJobCard
            num="2"
            title="Прогнозировать кассу по сделке"
            value="Знать, в какую неделю закончатся деньги — до того, как это случится"
            how="Платёжный календарь по сделке: будущие зарплаты, подрядчики, правки клиента, плановые поступления — на 5 недель вперёд."
            example="«Через 3 недели на сделке: −340К. Финальный платёж — только через 5. Найти ещё 340К или сдвинуть подрядчиков»"
          />
          <CoreJobCard
            num="3"
            title="Отделить деньги клиента от своих"
            value="Не путать аванс с заработанным — чтобы случайно не потратить чужое"
            how="Виртуальный счёт «Авансы от Заказчиков». Получили предоплату — перевели туда. Подписали акт — перевели на основной."
            example={"«На основном счёте 1,84 млн „своих“, на виртуальном 860К — клиента. Видно, сколько можно тратить, не задевая чужое»"}
          />
        </div>
      </div>
    </section>
  );
}

function CoreJobCard({
  num,
  title,
  value,
  how,
  example,
}: {
  num: string;
  title: string;
  value: string;
  how: string;
  example: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ft-primary text-sm font-bold text-white">
          {num}
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>

      <p className="mt-4 text-[15px] font-medium leading-snug text-slate-900">
        {value}
      </p>

      <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
        <span className="font-medium text-slate-700">Как работает:</span> {how}
      </p>

      <div className="mt-4 rounded-md bg-slate-50 p-3 text-[13px] italic leading-snug text-slate-600">
        {example}
      </div>
    </div>
  );
}

function FourForcesSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Что мы знаем про сомнения
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Что обычно мешает собственнику агентства начать вести финучёт
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <BarrierCard
            barrier="«Внедрение займёт месяцы — некогда»"
            answer="Один сотрудник раз в неделю прикрепляет загруженные операции к сделкам. Первая сделка с реальной маржой видна на той же неделе. Полное закрытие месяца — за 2-3 часа."
          />
          <BarrierCard
            barrier="«Нужен финдиректор или бухгалтер»"
            answer="В Финтабло есть готовые разделы — Сделки, Операции, Счета, Платёжный календарь. Правила разнесения (на какой счёт класть аванс, как делить зарплату по сделкам) настраиваются один раз — вместе с аналитиком на 30-минутном разборе."
          />
          <BarrierCard
            barrier="«Цифры не сойдутся, как в моём Excel»"
            answer="Любую цифру в отчёте можно открыть до конкретной банковской операции и документа. Видно дату, контрагента, счёт. Ошибки находятся за минуты, а не за дни."
          />
          <BarrierCard
            barrier="«Команда не захочет перестраиваться»"
            answer="Команда не работает в Финтабло. С продуктом работает один человек — финменеджер или вы. Команда продолжает делать проекты как раньше."
          />
        </div>
      </div>
    </section>
  );
}

function BarrierCard({
  barrier,
  answer,
}: {
  barrier: string;
  answer: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50/40 p-5">
      <p className="text-[15px] font-semibold leading-snug text-slate-900">
        {barrier}
      </p>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
        {answer}
      </p>
    </div>
  );
}

function DemoTeaser() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-emerald-300">
          Лучше один раз увидеть
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
          Посмотрите на одной реальной сделке агентства
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-slate-300">
          7 экранов в реальном интерфейсе Финтабло. От списка сделок к карточке
          проблемной сделки, к причинам перерасхода, к платёжному календарю.
          Покажем, где именно деньги по сделке уйдут в минус — и почему.
        </p>
        <p className="mt-2 text-[14px] text-slate-400">
          3 минуты. Без регистрации. Без формы.
        </p>

        <div className="mt-8">
          <Link
            href={TOUR_HREF}
            onClick={() =>
              track("landing_cta_demo_teaser", { cta: "Открыть разбор" })
            }
            className="inline-flex h-12 items-center justify-center rounded bg-emerald-500 px-8 text-[15px] font-semibold text-white shadow-lg transition hover:bg-emerald-400"
          >
            Открыть разбор сделки →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ConcretizationSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Что значит «быстро» и «удобно»
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Конкретные изменения, которые видят агентства после внедрения
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          На основе публичных кейсов fintablo.ru/case
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Concrete
            before="Закрытие месяца — 5 дней работы финменеджера"
            after="2-3 часа"
            source="Луноход (YouTube-агентство)"
          />
          <Concrete
            before="Отчёты к 10-му числу следующего месяца"
            after="К 1-му числу"
            source="Корпорация Мейк (Event MAKE)"
          />
          <Concrete
            before="Баланс в Excel расходится на 15-40%"
            after="Сходится автоматически"
            source="Корпорация Мейк"
          />
          <Concrete
            before="Не знаем, сколько и кому должны"
            after="Список обязательств — на одном экране"
            source="Джони и Клайд"
          />
          <Concrete
            before="План на месяц непонятен до 10-го числа"
            after="План готов 25-го числа предыдущего месяца"
            source="Луноход"
          />
          <Concrete
            before="Не знаем, к чему идём"
            after="Цифровая стратегическая картина"
            source="Корпорация Мейк"
          />
        </div>

        <p className="mt-8 text-[13px] text-slate-500">
          Это конкретные результаты конкретных агентств. Не среднее по рынку.
          Полные истории —{" "}
          <a
            href="https://fintablo.ru/case"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            fintablo.ru/case
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Concrete({
  before,
  after,
  source,
}: {
  before: string;
  after: string;
  source: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5">
      <div className="space-y-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Было
          </p>
          <p className="mt-1 text-[14px] leading-snug text-slate-700">
            {before}
          </p>
        </div>
        <div className="flex justify-center">
          <span className="text-slate-300">↓</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            Стало
          </p>
          <p className="mt-1 text-[14px] font-semibold leading-snug text-slate-900">
            {after}
          </p>
        </div>
      </div>
      <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
        {source}
      </p>
    </div>
  );
}

function TrustSection() {
  return (
    <section
      id="cases"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Почему этому можно доверять
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Методология — не наша. И тысячи бизнесов уже работают по ней
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-md border border-emerald-200 bg-emerald-50/40 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
              Методология
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-slate-900">
              В основе — методология «Нескучных финансов»
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
              Финтабло — продукт команды, которая 10+ лет учит собственников
              читать управленческую отчётность. Все принципы и формулы — из их
              практики работы с тысячами компаний.
            </p>
            <a
              href="https://help.fintablo.ru/article/1834"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[12px] text-emerald-700 underline hover:text-emerald-900"
            >
              Пример: статья про авансы → help.fintablo.ru/article/1834
            </a>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Открытые кейсы агентств
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-slate-900">
              Три разных модели, общий механизм решения
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li>
                <span className="font-medium text-slate-900">
                  Джони и Клайд
                </span>{" "}
                — креативное агентство, авансовая модель
              </li>
              <li>
                <span className="font-medium text-slate-900">Луноход</span> —
                YouTube-агентство, проекты по 4 этапа
              </li>
              <li>
                <span className="font-medium text-slate-900">
                  Корпорация Мейк
                </span>{" "}
                — event-агентство, тендеры + сезонность
              </li>
            </ul>
            <a
              href="https://fintablo.ru/case"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[12px] text-blue-600 underline hover:text-blue-800"
            >
              Все кейсы → fintablo.ru/case
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Что обычно ещё спрашивают
        </h2>

        <div className="mt-8 space-y-3">
          <FaqItem
            q="А что если у моего агентства не авансовая модель оплаты?"
            a="Разбор построен на авансовой модели — это самая болезненная ситуация для агентств. Если у вас постоплата или поэтапная оплата — общий принцип «деньги по сделке = аванс минус расходы по сделке» работает так же. Просто аванс может быть равен 0 или приходить частями."
          />
          <FaqItem
            q="Сколько стоит и есть ли пробный период?"
            a="14 дней бесплатно, без привязки карты. Дальше — тарифы зависят от размера компании. Точные цены — на fintablo.ru."
          />
          <FaqItem
            q="Я уже использую 1С / ПланФакт / Excel-таблицу. Зачем переходить?"
            a="Финтабло связывает банковские операции с сделками автоматически. В Excel это руками. В 1С — через настройку, которая обычно делается под бухучёт, не под управленческий. Вопрос — сколько часов в месяц у вас уходит на сведение."
          />
          <FaqItem
            q="Кто работает с продуктом — собственник или сотрудник?"
            a="В большинстве кейсов — финменеджер или помощник руководителя. Собственник смотрит готовые отчёты. Команда (продакшн, продажи) с Финтабло не работает."
          />
          <FaqItem
            q="Я хочу попробовать прямо сейчас, но не готов сразу регистрироваться"
            a="Для этого и есть разбор. 7 экранов на примере сделки агентства. Без регистрации, без формы. Поможет понять, ваш это инструмент или нет."
          />
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="group rounded-md border border-slate-200 bg-white"
      onToggle={(e) => {
        const isOpen = (e.currentTarget as HTMLDetailsElement).open;
        setOpen(isOpen);
        if (isOpen) {
          track("landing_faq_open", { q });
        }
      }}
    >
      <summary className="flex cursor-pointer items-start justify-between gap-3 px-5 py-4 text-[15px] font-medium text-slate-900 hover:bg-slate-50">
        <span>{q}</span>
        <span
          className={`mt-0.5 text-slate-400 transition ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-4 text-[14px] leading-relaxed text-slate-700">
        {a}
      </div>
    </details>
  );
}

function FinalCta() {
  return (
    <section className="bg-ft-primary text-white">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Сначала посмотрите на одной сделке
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-blue-100">
          3 минуты. Без регистрации. Если откликнется — оставите почту в конце,
          и мы разберём одну вашу сделку за 30 минут.
        </p>
        <div className="mt-8">
          <Link
            href={TOUR_HREF}
            onClick={() =>
              track("landing_cta_final", { cta: "Открыть разбор" })
            }
            className="inline-flex h-12 items-center justify-center rounded bg-white px-8 text-[15px] font-semibold text-ft-primary shadow-lg transition hover:bg-slate-50"
          >
            Открыть разбор →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © Финтабло. Это страница с интерактивным разбором. Регистрация — на{" "}
          <a
            href="https://fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-700"
          >
            fintablo.ru
          </a>
          .
        </p>
        <p>
          Методология —{" "}
          <a
            href="https://help.fintablo.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-700"
          >
            help.fintablo.ru
          </a>
        </p>
      </div>
    </footer>
  );
}
