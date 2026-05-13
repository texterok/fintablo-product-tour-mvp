"use client";

import Link from "next/link";
import { track } from "@/lib/track";

const TOUR_HREF = "/tour";

export function StroykaLanding() {
  return (
    <div className="site-theme min-h-svh">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <TourPreviewSection />
        <BarriersToSolutionSection />
        <BarriersToJobSection />
        <SocialProofSection />
        <ThirtyMinutesSection />
        <FinalCta />
      </main>
      <Footer />
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
          <a href="#pain" className="hover:text-ft-site-navy">
            Где болит
          </a>
          <a href="#tour" className="hover:text-ft-site-navy">
            Что внутри разбора
          </a>
          <a href="#cases" className="hover:text-ft-site-navy">
            Кейсы
          </a>
        </nav>
        <Link
          href={TOUR_HREF}
          onClick={() =>
            track("landing_cta_click", {
              scenario: "stroyka",
              cta_location: "header",
            })
          }
          className="rounded-full bg-ft-site-brand px-5 py-2.5 text-[14px] font-bold text-white hover:bg-ft-site-blue-hover"
        >
          Открыть разбор
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-ft-site-border-light bg-ft-site-tint">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* On mobile: visual first (it's the hook), then text */}
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full bg-ft-site-navy px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
              Для строительных компаний 60-1200 млн ₽ с собственником-руководителем
            </span>
            <h1 className="mt-5 text-[36px] font-bold leading-[1.15] tracking-tight text-ft-site-navy sm:text-[52px]">
              Выручка 16 миллионов.
              <br />
              А до прибыли доходит только 12.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.55] text-ft-site-text">
              За 90 секунд покажем на одной строительной компании, куда уходят
              остальные 4 миллиона — по конкретным объектам, статьям и
              подрядчикам.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={TOUR_HREF}
                onClick={() =>
                  track("landing_cta_click", {
                    scenario: "stroyka",
                    cta_location: "hero_primary",
                  })
                }
                className="rounded-full bg-ft-site-brand px-7 py-3.5 text-center text-[15px] font-bold text-white hover:bg-ft-site-blue-hover"
              >
                Открыть разбор компании →
              </Link>
              <a
                href="#pain"
                onClick={() =>
                  track("landing_cta_click", {
                    scenario: "stroyka",
                    cta_location: "hero_secondary",
                  })
                }
                className="rounded-full border border-ft-site-border bg-white px-7 py-3.5 text-center text-[15px] font-medium text-ft-site-navy hover:bg-ft-site-tint"
              >
                Сначала покажите, в чём боль
              </a>
            </div>
            <p className="mt-5 text-[13px] text-ft-site-text-muted">
              Без презентаций · 90 секунд · без привязки карты
            </p>
          </div>
          <div className="order-1 rounded-[10px] border border-ft-site-border-light bg-white p-7 shadow-[0_6px_24px_rgba(9,26,78,0.08)] lg:order-2">
            <p className="text-[11px] font-medium uppercase tracking-wider text-ft-site-text-muted">
              Одна компания. Цифры из примера
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <MiniMetric label="Выручка" value="16,16 млн ₽" tone="neutral" />
              <MiniMetric label="Прибыль по сделкам" value="12,03 млн ₽" tone="neutral" />
              <MiniMetric
                label="«Теряется»"
                value="−2,4 млн ₽"
                tone="bad"
                hint="между выручкой и прибылью"
              />
              <MiniMetric
                label="Рент. валовая"
                value="74%"
                tone="warn"
                hint="а по плану была 89%"
              />
            </div>
            <div className="mt-5 rounded-[8px] border border-ft-site-border-light bg-ft-site-tint p-3 text-[12px] leading-relaxed text-ft-site-text">
              В разборе эти цифры собираются из банк-выписки и направлений
              работ в Финтабло. Цифры — пример. На ваших данных будет ваша
              картина.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniMetric({
  label,
  value,
  tone,
  hint,
}: {
  label: string;
  value: string;
  tone: "neutral" | "bad" | "warn";
  hint?: string;
}) {
  const bg =
    tone === "bad"
      ? "border-[#f0c5c5] bg-[#fff5f5]"
      : tone === "warn"
        ? "border-[#ffeaa6] bg-[#fffbe6]"
        : "border-ft-site-border-light bg-white";
  const valueColor =
    tone === "bad"
      ? "text-ft-site-error"
      : tone === "warn"
        ? "text-[#8a6d00]"
        : "text-ft-site-navy";
  return (
    <div className={`rounded-[8px] border p-3 ${bg}`}>
      <p className="text-[11px] font-medium text-ft-site-text-muted">{label}</p>
      <p className={`mt-1 text-lg font-bold tabular-nums ${valueColor}`}>
        {value}
      </p>
      {hint && <p className="mt-1 text-[10px] text-ft-site-text-muted">{hint}</p>}
    </div>
  );
}

function PainSection() {
  const pains = [
    {
      tool: "Excel-смета объекта",
      what: "Файл на 20-30 строк",
      problem:
        "Каждый перерасход видно только когда прораб приносит чек. Сравнение план/факт собирают вручную, к концу объекта — а не в процессе.",
      cost: "Запоздалые решения",
    },
    {
      tool: "1С",
      what: "Бухгалтерская правда",
      problem:
        "Цифры верные, но они для налоговой. Маржа по объекту, по этапу или по подрядчику в стандартных отчётах не видна. Управленческий учёт собирают руками.",
      cost: "Долгое закрытие периода",
    },
    {
      tool: "Google-таблицы",
      what: "Сводка по объектам",
      problem:
        "Каждый прораб пишет по-своему: статьи расходятся, ссылки бьются, формулы ломаются. На сбор данных уходит больше времени, чем на сам разбор.",
      cost: "Часы на сборку каждую неделю",
    },
    {
      tool: "«Спрошу бухгалтера»",
      what: "Запрос в чат",
      problem:
        "Ответ через день-два, в формате «у нас сейчас на счетах столько-то». Без разбивки по объектам и подрядчикам. Принять решение нельзя.",
      cost: "Задержка на каждый вопрос",
    },
  ];

  return (
    <section id="pain" className="border-b border-ft-site-border-light bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Где сейчас болит
        </p>
        <h2 className="mt-3 max-w-3xl text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          Почему обычные инструменты не находят 2,4 миллиона
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[1.55] text-ft-site-text">
          В строительной компании 60-1200 млн ₽ деньги уходят на конкретные
          объекты, конкретных подрядчиков и конкретные статьи (материалы, ФОТ,
          транспорт). Excel и 1С не видят этот срез. Перерасход обнаруживают,
          когда объект уже сдан — а не пока его ещё ведут.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pains.map((p) => (
            <div
              key={p.tool}
              className="rounded-[10px] border border-ft-site-border-light bg-ft-site-tint p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[18px] font-bold text-ft-site-navy">
                  {p.tool}
                </h3>
                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ft-site-error">
                  {p.cost}
                </span>
              </div>
              <p className="mt-1 text-[12px] font-medium text-ft-site-text-muted">
                {p.what}
              </p>
              <p className="mt-3 text-[15px] leading-[1.55] text-ft-site-text">
                {p.problem}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-[14px] text-ft-site-text-muted">
          Не «Excel плохой» — Excel и 1С нужны и останутся. Проблема в том, что
          между бухгалтерской правдой и управленческим решением — разрыв.
          Финтабло закрывает именно его.
        </p>
      </div>
    </section>
  );
}

function TourPreviewSection() {
  const steps = [
    {
      n: 1,
      title: "Сводка месяца — Август закрыт хорошо",
      desc: "Пришло 5,86 млн ₽, сальдо +3,16 млн ₽, план перевыполнен в 2,6 раза. По первому взгляду — успешный бизнес.",
    },
    {
      n: 2,
      title: "Активные сделки — 17,17 млн ₽ выручки",
      desc: "Открываем сделки и видим: из 16,16 млн выручки до прибыли по сделкам доходит 12,03 млн. Между ними 4,14 млн «теряются» по дороге.",
    },
    {
      n: 3,
      title: "Margin bridge — куда ушли 2,4 миллиона",
      desc: "Финтабло раскладывает разницу на конкретные шаги: материалы, командировки, гарантия, накладные. Не «магия» — конкретные расходы.",
    },
    {
      n: 4,
      title: "Drill-down до банковской операции",
      desc: "Любую цифру можно открыть до конкретного платежа: дата, контрагент, счёт, сумма. Видно кому именно и за что уходят деньги.",
    },
  ];

  return (
    <section id="tour" className="border-b border-ft-site-border-light bg-ft-site-tint">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Что внутри 90-секундного разбора
        </p>
        <h2 className="mt-3 text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          4 экрана. Одна компания. Полная картина
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[1.55] text-ft-site-text">
          Разбор использует подтверждённые разделы Финтабло — Сводка, Сделки,
          Margin bridge, Drill-down до операций. Цифры — пример. После
          подключения те же разделы покажут вашу картину.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-[10px] border border-ft-site-border-light bg-white p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ft-site-navy text-sm font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-ft-site-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-ft-site-text">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={TOUR_HREF}
            onClick={() =>
              track("landing_cta_click", {
                scenario: "stroyka",
                cta_location: "tour_preview",
              })
            }
            className="inline-block rounded-full bg-ft-site-brand px-7 py-3.5 text-[15px] font-bold text-white hover:bg-ft-site-blue-hover"
          >
            Открыть разбор →
          </Link>
        </div>
      </div>
    </section>
  );
}

function BarriersToSolutionSection() {
  const barriers = [
    {
      fear: "«Долго настраивать. У нас 50 объектов в работе»",
      answer:
        "Первый разбор делается на одном объекте за 30 минут. Подключение банка — автоматическое. Маппинг статей под вашу структуру — задача аналитика на встрече, не ваша.",
    },
    {
      fear: "«Прорабы не примут ещё одну систему»",
      answer:
        "Прорабы продолжают вести объекты как привыкли — в своих чек-листах и отчётах. Финтабло встаёт между банком и сметой: данные приходят сами, без ввода руками.",
    },
    {
      fear: "«Excel бесплатный, а это деньги»",
      answer:
        "Цена Финтабло — порядок 30-90К ₽/мес для компании 60-1200 млн. Стоимость одного объекта, ушедшего в минус, обычно выше. Решение принимает не цена, а «сколько раз в год это окупится».",
    },
    {
      fear: "«У нас особый цикл объектов, стандартная система не учтёт»",
      answer:
        "Ничего не ломаем. Финтабло встраивается поверх 1С и банка — не заменяет их. Бухгалтерия продолжает в 1С, прорабы — в своих чек-листах. Финтабло собирает поверх.",
    },
  ];

  return (
    <section className="border-b border-ft-site-border-light bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Что обычно останавливает перейти
        </p>
        <h2 className="mt-3 text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          Барьеры на новое решение — и как их снимаем
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {barriers.map((b) => (
            <div
              key={b.fear}
              className="rounded-[10px] border border-ft-site-border-light bg-ft-site-tint p-6"
            >
              <p className="text-[16px] font-bold text-ft-site-navy">
                {b.fear}
              </p>
              <p className="mt-3 border-l-2 border-ft-site-brand pl-4 text-[15px] leading-[1.55] text-ft-site-text">
                {b.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BarriersToJobSection() {
  const habits = [
    {
      habit: "«И так нормально работаю»",
      counter:
        "Нормально — пока объекты прибыльны. Один проблемный объект в год съедает прибыль с трёх обычных. Финтабло ловит его на 2-3 неделе, не на этапе сдачи.",
    },
    {
      habit: "«Закроем объект и тогда подумаем»",
      counter:
        "Если решение откладывается на квартал — следующий проблемный объект уже стартует. Внедрение идёт параллельно текущей работе, не вместо неё.",
    },
    {
      habit: "«Не сейчас — стройсезон, не до этого»",
      counter:
        "Самый честный сигнал, что нужен инструмент — что вы заняты. 30 минут на разбор не ломают сезон. Полное внедрение — после сезона, на спокойных данных.",
    },
  ];

  return (
    <section className="border-b border-ft-site-border-light bg-ft-site-tint">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Что обычно тормозит начать
        </p>
        <h2 className="mt-3 text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          Барьеры начать действовать — и цена промедления
        </h2>
        <div className="mt-10 space-y-4">
          {habits.map((h) => (
            <div
              key={h.habit}
              className="rounded-[10px] border border-ft-site-border-light bg-white p-6"
            >
              <p className="text-[17px] font-bold text-ft-site-navy">
                {h.habit}
              </p>
              <p className="mt-2 text-[15px] leading-[1.55] text-ft-site-text">
                {h.counter}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const cases = [
    {
      company: "Луноход",
      segment: "Видео-производство, длинные проекты",
      quote:
        "«25 числа планируем и анализируем — надо ли брать ещё проекты». Закрытие месяца — с 5 дней до 2-3 часов.",
      url: "https://fintablo.ru/case/long-projects-agency",
    },
    {
      company: "Корпорация Мейк",
      segment: "Event-производство",
      quote:
        "«До Финтабло баланс в Google-таблицах не сходился на 15-40%». Отчёты к 1 числу следующего месяца.",
      url: "https://fintablo.ru/case/event-make",
    },
    {
      company: "Джони и Клайд",
      segment: "Креативное агентство",
      quote:
        "«Мы набрали предоплат, и было страшно». Незавершёнка — в 2 раза за 2 месяца.",
      url: "https://fintablo.ru/case/johny-and-clyde",
    },
  ];

  return (
    <section id="cases" className="border-b border-ft-site-border-light bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Откуда знаем, что это работает
        </p>
        <h2 className="mt-3 text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          Три кейса проектного бизнеса — с разным масштабом
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[1.55] text-ft-site-text">
          Это не среднее по рынку. Это три истории компаний, которые жили на
          Excel и Google-таблицах — и где разрыв между ними и Финтабло был
          измерим конкретными цифрами.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.company}
              className="rounded-[10px] border border-ft-site-border-light bg-ft-site-tint p-6"
            >
              <p className="text-[17px] font-bold text-ft-site-navy">
                {c.company}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ft-site-text-muted">
                {c.segment}
              </p>
              <blockquote className="mt-4 border-l-2 border-ft-site-brand pl-3 text-[14px] italic leading-[1.55] text-ft-site-text">
                {c.quote}
              </blockquote>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("landing_case_open", {
                    scenario: "stroyka",
                    case: c.company,
                  })
                }
                className="mt-4 inline-block text-[13px] font-medium text-ft-site-brand hover:text-ft-site-blue-hover"
              >
                Полный кейс →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-7 text-[13px] text-ft-site-text-muted">
          Полные истории — на fintablo.ru/case
        </p>
      </div>
    </section>
  );
}

function ThirtyMinutesSection() {
  return (
    <section className="border-b border-ft-site-border-light bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[12px] font-medium uppercase tracking-wider text-ft-site-brand">
          Что произойдёт за 30 минут на разборе
        </p>
        <h2 className="mt-3 text-[32px] font-bold leading-[1.2] text-ft-site-navy sm:text-[40px]">
          Без презентаций. Сразу к делу
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[10px] border border-ft-site-border-light bg-ft-site-tint p-6">
            <h3 className="text-[17px] font-bold text-ft-site-navy">
              Что нужно будет сделать
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ft-site-text">
              <Bullet>Выбрать один проблемный объект или направление</Bullet>
              <Bullet>Дать аналитику доступ к банковской выписке за месяц</Bullet>
              <Bullet>
                Если есть — экспорт из 1С или Excel-смету объекта
              </Bullet>
              <Bullet>30 минут вашего времени на созвоне</Bullet>
            </ul>
          </div>
          <div className="rounded-[10px] border border-ft-site-brand bg-ft-site-navy p-6 text-white">
            <h3 className="text-[17px] font-bold text-white">
              Что увидите по итогу
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-[#dde6ff]">
              <BulletDark>
                Картину как в разборе — но на ВАШИХ цифрах, не на синтетике
              </BulletDark>
              <BulletDark>
                Куда конкретно ушли деньги по выбранному объекту
              </BulletDark>
              <BulletDark>
                Какие интеграции нужны для постоянной картины (банк, 1С, Excel)
              </BulletDark>
              <BulletDark>
                14 дней доступа к продукту, без привязки карты
              </BulletDark>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-1 text-ft-site-brand">✓</span>
      <span>{children}</span>
    </li>
  );
}

function BulletDark({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-1 text-white">✓</span>
      <span>{children}</span>
    </li>
  );
}

function FinalCta() {
  return (
    <section className="bg-ft-site-navy text-white">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[44px]">
          Откройте разбор строительной компании прямо сейчас
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.55] text-[#c9d3eb]">
          90 секунд на разбор одной компании. Без формы и без почты на этом
          шаге. Контакты — только если захотите перенести разбор на свои данные.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={TOUR_HREF}
            onClick={() =>
              track("landing_cta_click", {
                scenario: "stroyka",
                cta_location: "final",
              })
            }
            className="rounded-full bg-white px-8 py-4 text-[16px] font-bold text-ft-site-navy hover:bg-ft-site-tint"
          >
            Открыть разбор компании →
          </Link>
        </div>
        <p className="mt-5 text-[12px] text-[#8c9bc9]">
          Это интерактивный пример. Настоящая регистрация — на fintablo.ru
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ft-site-border-light bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-[13px] text-ft-site-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © Финтабло. Это интерактивный разбор для проектных компаний 60-1200
          млн ₽.
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
