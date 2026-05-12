// Universal tour — «Климат-Сервис» installation/service company.
// Data shaped to real Fintablo modules only: Сделки (учёт), Карточка (Этапы), Карточка (Операции),
// Счета и реквизиты, Платёжный календарь. No invented columns or screens.
// All numbers are illustrative (synthetic, typical for project-business 60-1200M revenue).

export type UniversalDeal = {
  id: string;
  name: string;
  client: string;
  service: string;
  plan: number;
  fact: number;
  paid: number;
  problem?: boolean;
};

export const universalDealsDashboard = {
  metrics: [
    { key: "total", label: "Всего", value: "5 контрактов" },
    { key: "sumDeals", label: "Сумма контрактов", value: "16 800 000 ₽" },
    {
      key: "paidReceived",
      label: "Получено по актам",
      value: "11 740 000 ₽ (70%)",
    },
    {
      key: "paidExpected",
      label: "Ожидается оплат",
      value: "5 060 000 ₽ (3 контракта)",
    },
    { key: "revenue", label: "Сумма выручки", value: "11 740 000 ₽" },
    {
      key: "marginPlan",
      label: "Рентабельность (план)",
      value: "25%",
      hint: "Прибыль ÷ выручка по подписанным договорам",
    },
    {
      key: "marginFact",
      label: "Рентабельность (факт)",
      value: "17%",
      hint: "По одному контракту маржа ушла ниже плановой",
    },
    {
      key: "revenueRecognized",
      label: "Признано выручки",
      value: "9 916 000 ₽",
    },
  ],
};

export const universalDeals: UniversalDeal[] = [
  {
    id: "biz-north",
    name: "БЦ «Северная Долина» — климат и вентиляция",
    client: "ООО «Девелопмент Северный»",
    service: "ОВК + приточно-вытяжная вентиляция",
    plan: 7_000_000,
    fact: 5_560_000,
    paid: 5_200_000,
    problem: true,
  },
  {
    id: "office-sterling",
    name: "Офис «Стерлинг» — этажи 4-7",
    client: "ООО «Стерлинг Капитал»",
    service: "СКС + СКУД, 4 этажа",
    plan: 2_400_000,
    fact: 2_370_000,
    paid: 1_800_000,
  },
  {
    id: "logistics-warehouse",
    name: "Склад «ТрансЛогик» — видеонаблюдение",
    client: "ООО «ТрансЛогик»",
    service: "Система видеонаблюдения + охрана периметра",
    plan: 1_800_000,
    fact: 1_785_000,
    paid: 1_200_000,
  },
  {
    id: "retail-vega",
    name: "ТЦ «Вега» — сервис ОВК по контракту",
    client: "ООО «Вега Менеджмент»",
    service: "Сервис ОВК, 12 месяцев",
    plan: 2_400_000,
    fact: 2_380_000,
    paid: 1_440_000,
  },
  {
    id: "factory-mtg",
    name: "Завод МТГ — холодильные камеры",
    client: "ООО «МТГ Производство»",
    service: "Промышленное холодильное оборудование",
    plan: 3_200_000,
    fact: 3_060_000,
    paid: 2_100_000,
  },
];

// Этапы по проблемному контракту БЦ «Северная Долина»
// Расхождение −1 240 000 ₽ собирается из этапа 3 (монтаж + пусконаладка)

export type UniversalStage = {
  num: number;
  name: string;
  plan: number;
  fact: number | null;
  status: "ok" | "problem" | "pending";
  desc: string;
};

export const northDealStages: UniversalStage[] = [
  {
    num: 1,
    name: "Проектирование и согласование",
    plan: 900_000,
    fact: 880_000,
    status: "ok",
    desc: "Проект ОВК, согласование с заказчиком и проектной организацией",
  },
  {
    num: 2,
    name: "Поставка оборудования",
    plan: 3_500_000,
    fact: 3_540_000,
    status: "ok",
    desc: "Закупка оборудования по согласованной спецификации",
  },
  {
    num: 3,
    name: "Монтаж и пусконаладка",
    plan: 1_800_000,
    fact: 560_000,
    status: "problem",
    desc: "Монтаж систем, пусконаладочные работы, испытания",
  },
  {
    num: 4,
    name: "Сдача и гарантийные обязательства",
    plan: 800_000,
    fact: null,
    status: "pending",
    desc: "Акт ввода в эксплуатацию, передача документации, гарантия 12 мес",
  },
];

// Операции по сделке БЦ «Северная Долина» — что именно случилось на этапе 3.
// Содержит реальные категории из практики монтажных компаний.

export type UniversalOperation = {
  id: number;
  date: string;
  category: string;
  counterparty?: string;
  account: string;
  amount: number;
  focused?: boolean;
  warning?: boolean;
  hint?: string;
};

export const northDealOperations: UniversalOperation[] = [
  {
    id: 1,
    date: "12.02.2026",
    category: "ФОТ монтажников · Этап 3",
    counterparty: "ИП Захаров А.С.",
    account: "р/с Тинькофф ООО Климат-Сервис",
    amount: -180_000,
    focused: true,
    hint: "Сменa сверх графика 18-19 фев. Плановый ФОТ на этап: 400 000 ₽. По факту 4 операции = 700 000 ₽. Перерасход 300 000 ₽.",
  },
  {
    id: 2,
    date: "18.02.2026",
    category: "ФОТ монтажников · Этап 3",
    counterparty: "ИП Климов Д.В.",
    account: "р/с Тинькофф ООО Климат-Сервис",
    amount: -220_000,
    focused: true,
  },
  {
    id: 3,
    date: "24.02.2026",
    category: "Субподряд · Этап 3",
    counterparty: "ООО «Монтаж-Про»",
    account: "р/с Тинькофф ООО Климат-Сервис",
    amount: -250_000,
    focused: true,
    hint: "Передача части смен субподрядчику — не было закрыто допсоглашением, ушло выше тарифа.",
  },
  {
    id: 4,
    date: "28.02.2026",
    category: "ФОТ монтажников · Этап 3",
    counterparty: "ИП Петрова Н.А.",
    amount: -50_000,
    account: "р/с Тинькофф ООО Климат-Сервис",
    focused: true,
  },
  {
    id: 5,
    date: "05.03.2026",
    category: "Материалы сверх сметы",
    counterparty: "ООО «ВентТехСнаб»",
    account: "р/с Тинькофф ООО Климат-Сервис",
    amount: -540_000,
    warning: true,
    hint: "Кабель-каналы и вентиляция по новой цене поставщика — не успели зафиксировать смету до подписания.",
  },
  {
    id: 6,
    date: "10.03.2026",
    category: "Аванс от заказчика",
    counterparty: "ООО «Девелопмент Северный»",
    account: "р/с Тинькофф ООО Климат-Сервис",
    amount: 1_200_000,
  },
  {
    id: 7,
    date: "15.03.2026",
    category: "Гарантийное удержание 10% (Акт №3)",
    counterparty: "ООО «Девелопмент Северный»",
    account: "р/с Тинькофф ООО Климат-Сервис",
    amount: -524_000,
    warning: true,
    hint: "Не убыток. Заказчик удерживает 10% по контракту до подписания гарантийных обязательств через 6 месяцев.",
  },
];

// Счета бизнеса. Виртуальный счёт «Гарантийные удержания» — реальный паттерн методологии Финтабло
// (help.fintablo.ru/article/1834 в формате «Авансы от Заказчиков»).

export type UniversalAccount = {
  name: string;
  type: "main" | "virtual";
  balance: number;
  description: string;
};

export const universalAccounts: UniversalAccount[] = [
  {
    name: "р/с Тинькофф ООО Климат-Сервис",
    type: "main",
    balance: 3_480_000,
    description: "Основной расчётный счёт компании",
  },
  {
    name: "Гарантийные удержания",
    type: "virtual",
    balance: 524_000,
    description:
      "Виртуальный счёт. Заказчик удержал 10% по актам до подписания гарантийных обязательств — деньги придут позже.",
  },
];

// Платёжный календарь по сделке БЦ «Северная Долина»

export type UniversalCalendarRow = {
  weekLabel: string;
  date: string;
  inflow: number;
  outflow: number;
  detail: string;
  balanceAfter: number;
  highlight?: "negative" | "milestone";
};

export const northDealCalendar: UniversalCalendarRow[] = [
  {
    weekLabel: "Сейчас",
    date: "15 мар",
    inflow: 0,
    outflow: 0,
    detail: "Текущий остаток по сделке после оплаты материалов и ФОТ",
    balanceAfter: 380_000,
  },
  {
    weekLabel: "Через 2 недели",
    date: "29 мар",
    inflow: 0,
    outflow: 420_000,
    detail: "ФОТ монтажников за пусконаладку — финальная смена",
    balanceAfter: -40_000,
    highlight: "negative",
  },
  {
    weekLabel: "Через 4 недели",
    date: "12 апр",
    inflow: 1_476_000,
    outflow: 0,
    detail: "Финальный платёж заказчика после акта ввода (90% от остатка)",
    balanceAfter: 1_436_000,
    highlight: "milestone",
  },
  {
    weekLabel: "Через 6 месяцев",
    date: "12 сен",
    inflow: 524_000,
    outflow: 0,
    detail: "Возврат гарантийного удержания после подписания гарантии",
    balanceAfter: 1_960_000,
    highlight: "milestone",
  },
];

// Aggregate summary for tooltip / overview copy.
export const universalSummary = {
  contractsCount: 5,
  problemContract: "БЦ «Северная Долина»",
  problemPlan: 7_000_000,
  problemFact: 5_560_000,
  problemDivergence: 1_440_000,
  problemRealLoss: 916_000, // ФОТ-перерасход 700К + материалы сверх сметы +200К свыше плана этапа
  problemTimingCash: 524_000,
};
