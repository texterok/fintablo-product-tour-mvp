"use client";

import Link from "next/link";
import { track } from "@/lib/track";

const TOUR_HREF = "/start/tour";

export function UniversalLanding() {
  return (
    <div className="min-h-svh bg-white text-slate-900">
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
          <a href="#pain" className="hover:text-slate-900">
            Где болит
          </a>
          <a href="#tour" className="hover:text-slate-900">
            Что внутри разбора
          </a>
          <a href="#cases" className="hover:text-slate-900">
            Кейсы
          </a>
        </nav>
        <Link
          href={TOUR_HREF}
          onClick={() =>
            track("landing_cta_click", {
              scenario: "universal",
              cta_location: "header",
            })
          }
          className="rounded-md bg-ft-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Запустить разбор
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-br from-blue-50/40 via-white to-emerald-50/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-800">
              Для проектных и сервисных компаний 60-1200 млн ₽
            </span>
            <h1 className="mt-5 text-[34px] font-bold leading-tight text-slate-900 sm:text-[44px]">
              Контракт планировался прибыльным.
              <br />
              По факту — собрали половину.
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-700">
              За 90 секунд покажем, как Финтабло связывает план, факт и
              операции по одному контракту — и почему ФОТ-перерасход и
              гарантийные удержания становятся видны заранее, а не в конце
              квартала.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={TOUR_HREF}
                onClick={() =>
                  track("landing_cta_click", {
                    scenario: "universal",
                    cta_location: "hero_primary",
                  })
                }
                className="rounded-md bg-emerald-600 px-6 py-3 text-center text-[15px] font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Запустить разбор контракта →
              </Link>
              <a
                href="#pain"
                onClick={() =>
                  track("landing_cta_click", {
                    scenario: "universal",
                    cta_location: "hero_secondary",
                  })
                }
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-[15px] font-medium text-slate-800 hover:bg-slate-50"
              >
                Сначала покажите, в чём боль
              </a>
            </div>
            <p className="mt-4 text-[12px] text-slate-500">
              Без презентаций · 90 секунд · без привязки карты
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Один контракт. Цифры из примера
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <MiniMetric label="План" value="1 800 000 ₽" tone="neutral" />
              <MiniMetric label="Факт" value="560 000 ₽" tone="bad" />
              <MiniMetric label="ФОТ-перерасход" value="−700 000 ₽" tone="bad" />
              <MiniMetric
                label="Гарантийка"
                value="−524 000 ₽"
                tone="warn"
                hint="вернётся через 6 мес"
              />
            </div>
            <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50/50 p-3 text-[12px] leading-relaxed text-slate-700">
              В разборе эти 4 цифры собираются из банк-выписки и карточки
              сделки в Финтабло. Цифры — пример. На ваших данных будет ваша
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
      ? "border-rose-200 bg-rose-50/50"
      : tone === "warn"
        ? "border-amber-200 bg-amber-50/50"
        : "border-slate-200 bg-white";
  const valueColor =
    tone === "bad"
      ? "text-rose-700"
      : tone === "warn"
        ? "text-amber-700"
        : "text-slate-900";
  return (
    <div className={`rounded-md border p-3 ${bg}`}>
      <p className="text-[11px] font-medium text-slate-600">{label}</p>
      <p className={`mt-1 text-lg font-semibold tabular-nums ${valueColor}`}>
        {value}
      </p>
      {hint && <p className="mt-1 text-[10px] text-slate-500">{hint}</p>}
    </div>
  );
}

function PainSection() {
  const pains = [
    {
      tool: "Excel-сводки",
      what: "Сводки на конец месяца",
      problem:
        "Когда расхождение по контракту видно, деньги уже потрачены. Решение принимают после того, как ушёл расход.",
      cost: "Запоздалые решения",
    },
    {
      tool: "Google Sheets",
      what: "Совместная таблица",
      problem:
        "Каждый прораб пишет по-своему, статьи расходятся, ссылки бьются. На сборку данных уходит больше времени, чем на разбор.",
      cost: "Часы на сборку каждую неделю",
    },
    {
      tool: "1С",
      what: "Бухгалтерская правда",
      problem:
        "Цифры верные, но они для налоговой. Управленческий смысл собирают вручную. Этап и контракт в стандартных отчётах не видны.",
      cost: "Долгое закрытие периода",
    },
    {
      tool: "«Спрошу бухгалтера»",
      what: "Запрос в чат",
      problem:
        "Ответ через день-два, в формате «у нас сейчас на счетах столько-то». Без разбивки по контрактам и этапам. Принять решение нельзя.",
      cost: "Задержка на каждый вопрос",
    },
  ];

  return (
    <section id="pain" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Где сейчас болит
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          Почему обычные инструменты молчат до конца квартала
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-700">
          В проектном бизнесе 60-1200 млн ₽ деньги уходят на конкретные этапы
          конкретных контрактов. Excel, 1С и пересказы бухгалтера не видят этот
          уровень. Расхождение видно — но уже постфактум.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {pains.map((p) => (
            <div
              key={p.tool}
              className="rounded-lg border border-slate-200 bg-slate-50/40 p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[16px] font-semibold text-slate-900">
                  {p.tool}
                </h3>
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rose-700">
                  {p.cost}
                </span>
              </div>
              <p className="mt-1 text-[12px] font-medium text-slate-500">
                {p.what}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
                {p.problem}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-slate-500">
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
      title: "Учёт сделок — 5 контрактов на одной странице",
      desc: "Сверху видно, что из 16,8 млн ₽ контрактов прибыль ниже плановой на 1,44 млн ₽. Один контракт утянул общую цифру — он сразу подсвечен.",
    },
    {
      n: 2,
      title: "Карточка сделки → Этапы",
      desc: "Контракт разложен по этапам. Этап «Монтаж и пусконаладка» — план 1,8 млн ₽, факт 0,56 млн ₽. Разница 1,24 млн ₽ видна в одной колонке.",
    },
    {
      n: 3,
      title: "Карточка сделки → Операции",
      desc: "Все операции по контракту: 4 выплаты монтажникам сверх плана на 700 тыс. ₽, материалы по новой цене на 540 тыс. ₽, гарантийное удержание 524 тыс. ₽. Цена расхождения в рублях, с датами и контрагентами.",
    },
    {
      n: 4,
      title: "Виртуальный счёт + Платёжный календарь",
      desc: "Гарантийные удержания 524 тыс. ₽ — отдельный виртуальный счёт. Календарь показывает кассовый разрыв 40 тыс. ₽ за 2 недели до того, как он случится.",
    },
  ];

  return (
    <section id="tour" className="border-b border-slate-100 bg-slate-50/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Что внутри 90-секундного разбора
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          4 экрана. Один контракт. Полная картина
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-700">
          Разбор использует подтверждённые разделы Финтабло — Сделки, Карточка
          сделки с этапами и операциями, Платёжный календарь, Виртуальные
          счета. Цифры — пример. После подключения те же разделы покажут вашу
          картину.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={TOUR_HREF}
            onClick={() =>
              track("landing_cta_click", {
                scenario: "universal",
                cta_location: "tour_preview",
              })
            }
            className="inline-block rounded-md bg-emerald-600 px-6 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-emerald-700"
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
      fear: "«Долго настраивать. У нас 200+ контрактов»",
      answer:
        "Первый разбор делается на одном контракте за 30 минут. Подключение банка — автоматическое. Маппинг ваших статей — задача аналитика на встрече, не ваша.",
    },
    {
      fear: "«Команда не примет ещё одну систему»",
      answer:
        "Прорабам ничего не нужно делать. Данные идут из банка и 1С. Финдиректор видит срез, который раньше собирал руками. Остальные продолжают работать как привыкли.",
    },
    {
      fear: "«Excel бесплатный, а это деньги»",
      answer:
        "Цена Финтабло — порядок 30-90К ₽/мес для компании 60-1200 млн. Стоимость одного дня простоя на проблемном контракте — обычно выше. Решение принимает не цена, а «сколько раз в год это окупится».",
    },
    {
      fear: "«Придётся ломать процессы»",
      answer:
        "Ничего не ломаем. Финтабло встраивается поверх 1С и банка — не заменяет их. Бухгалтерия продолжает в 1С, прорабы — в своих чек-листах. Финтабло собирает поверх.",
    },
  ];

  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Что обычно останавливает перейти
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          Барьеры на новое решение — и как их снимаем
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {barriers.map((b) => (
            <div
              key={b.fear}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-[15px] font-semibold text-slate-900">
                {b.fear}
              </p>
              <p className="mt-3 border-l-2 border-emerald-300 pl-4 text-[14px] leading-relaxed text-slate-700">
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
        "Нормально — пока контракты прибыльны. Один проблемный контракт в год съедает прибыль с трёх обычных. Финтабло ловит его на 2-3 неделе, не на 3-4 месяце.",
    },
    {
      habit: "«Закроем квартал и тогда подумаем»",
      counter:
        "Если решение откладывается на квартал — следующий проблемный контракт уже стартует. Внедрение и разбор идут параллельно текущей работе, не вместо неё.",
    },
    {
      habit: "«Не сейчас — конец сезона / стройсезон / отчётность»",
      counter:
        "Самый честный сигнал, что нужен инструмент — что вы заняты. 30 минут на разбор не ломают сезон. Полное внедрение — после сезона, на спокойных данных.",
    },
  ];

  return (
    <section className="border-b border-slate-100 bg-slate-50/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Что обычно тормозит начать
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          Барьеры начать действовать — и цена промедления
        </h2>
        <div className="mt-8 space-y-4">
          {habits.map((h) => (
            <div
              key={h.habit}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-[16px] font-semibold text-slate-900">
                {h.habit}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
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
      company: "Джони и Клайд",
      segment: "Производственное агентство",
      quote:
        "«Мы набрали предоплат, и было страшно. Не понимали сколько и кому должны»",
      result: "Незавершённые работы — в 2 раза за 2 месяца",
      url: "https://fintablo.ru/case/johny-and-clyde",
    },
    {
      company: "Луноход",
      segment: "Долгие проекты, 1-3 мес",
      quote:
        "«25 числа планируем и анализируем — надо ли брать ещё проекты»",
      result: "Закрытие месяца: с 5 дней до 2-3 часов",
      url: "https://fintablo.ru/case/long-projects-agency",
    },
    {
      company: "Корпорация Мейк",
      segment: "Event-производство",
      quote:
        "«До Финтабло баланс в Google-таблицах не сходился на 15-40%»",
      result: "Отчёты к 1 числу следующего месяца",
      url: "https://fintablo.ru/case/event-make",
    },
  ];

  return (
    <section id="cases" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Откуда знаем, что это работает
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          Три кейса проектного бизнеса — с разным масштабом
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-700">
          Это не среднее по рынку. Это три истории компаний, которые жили на
          Excel и Google-таблицах — и где разрыв между ними и Финтабло был
          измерим конкретными цифрами.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.company}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-[15px] font-semibold text-slate-900">
                {c.company}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {c.segment}
              </p>
              <blockquote className="mt-4 border-l-2 border-slate-300 pl-3 text-[13px] italic leading-relaxed text-slate-700">
                {c.quote}
              </blockquote>
              <p className="mt-4 text-[13px] font-semibold text-emerald-700">
                {c.result}
              </p>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("landing_case_open", {
                    scenario: "universal",
                    case: c.company,
                  })
                }
                className="mt-3 inline-block text-[12px] text-blue-600 underline hover:text-blue-800"
              >
                Полный кейс →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-slate-500">
          Полные истории — на fintablo.ru/case
        </p>
      </div>
    </section>
  );
}

function ThirtyMinutesSection() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
          Что произойдёт за 30 минут на разборе
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
          Без презентаций. Сразу к делу
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-[15px] font-semibold text-slate-900">
              Что нужно будет сделать
            </h3>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <Bullet>Выбрать один проблемный контракт</Bullet>
              <Bullet>Дать аналитику доступ к банковской выписке за месяц</Bullet>
              <Bullet>
                Если есть — экспорт из 1С или Excel-смету этого контракта
              </Bullet>
              <Bullet>30 минут вашего времени на созвоне</Bullet>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-5">
            <h3 className="text-[15px] font-semibold text-slate-900">
              Что увидите по итогу
            </h3>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <Bullet>
                Картину как в разборе — но на ВАШИХ цифрах, не на синтетике
              </Bullet>
              <Bullet>
                Куда конкретно ушли деньги по выбранному контракту
              </Bullet>
              <Bullet>
                Какие интеграции нужны для постоянной картины (банк, 1С, Excel)
              </Bullet>
              <Bullet>
                14 дней доступа к продукту, без привязки карты
              </Bullet>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-1 text-emerald-600">✓</span>
      <span>{children}</span>
    </li>
  );
}

function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-emerald-50/60 via-white to-blue-50/40">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="text-[30px] font-bold leading-tight text-slate-900 sm:text-[38px]">
          Запустите разбор контракта прямо сейчас
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-700">
          90 секунд на разбор «Климат-Сервиса». Без формы и без почты на этом
          шаге. Контакты — только если захотите перенести разбор на свои данные.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={TOUR_HREF}
            onClick={() =>
              track("landing_cta_click", {
                scenario: "universal",
                cta_location: "final",
              })
            }
            className="rounded-md bg-emerald-600 px-7 py-3.5 text-[16px] font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Запустить разбор контракта →
          </Link>
        </div>
        <p className="mt-4 text-[12px] text-slate-500">
          Это интерактивный пример. Настоящая регистрация — на fintablo.ru
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © Финтабло. Это интерактивный разбор для проектных компаний 60-1200
          млн ₽.
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
