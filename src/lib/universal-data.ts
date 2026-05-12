// Universal tour data — «Климат-Сервис» installation/service company example.
// All numbers are illustrative (synthetic), based on typical profile of project-business 60-1200M revenue.

export type UniversalContract = {
  id: string;
  name: string;
  client: string;
  service: string;
  planProfit: number;
  factProfit: number;
  paid: number;
  spent: number;
  problem?: boolean;
};

export const universalContracts: UniversalContract[] = [
  {
    id: "biz-north",
    name: "БЦ «Северная Долина»",
    client: "ООО «Девелопмент Северный»",
    service: "Климатическая система: ОВК + вентиляция",
    planProfit: 1_800_000,
    factProfit: 560_000,
    paid: 5_200_000,
    spent: 5_300_000,
    problem: true,
  },
  {
    id: "office-sterling",
    name: "Офис «Стерлинг» — этажи 4-7",
    client: "ООО «Стерлинг Капитал»",
    service: "СКС + СКУД, 4 этажа",
    planProfit: 720_000,
    factProfit: 690_000,
    paid: 1_800_000,
    spent: 1_500_000,
  },
  {
    id: "logistics-warehouse",
    name: "Логистический склад «ТрансЛогик»",
    client: "ООО «ТрансЛогик»",
    service: "Система видеонаблюдения + охрана",
    planProfit: 420_000,
    factProfit: 405_000,
    paid: 1_200_000,
    spent: 920_000,
  },
  {
    id: "retail-vega",
    name: "ТЦ «Вега» — сервис обслуживания",
    client: "ООО «Вега Менеджмент»",
    service: "Сервис ОВК по контракту 12 мес",
    planProfit: 540_000,
    factProfit: 520_000,
    paid: 1_440_000,
    spent: 1_100_000,
  },
  {
    id: "factory-mtg",
    name: "Завод МТГ — холодильные камеры",
    client: "ООО «МТГ Производство»",
    service: "Промышленное холодильное оборудование",
    planProfit: 690_000,
    factProfit: 580_000,
    paid: 2_100_000,
    spent: 1_780_000,
  },
];

// Cause breakdown: 1 824 000 ₽ total divergence
// Block A — Real profit loss (won't return): 1 300 000 ₽
// Block B — Cash timing (delayed, not lost): 524 000 ₽

export type CauseBlock = {
  type: "loss" | "timing";
  title: string;
  total: number;
  items: CauseItem[];
};

export type CauseItem = {
  amount: number;
  category: string;
  contract: string;
  detail: string;
};

export const universalCauseBlocks: CauseBlock[] = [
  {
    type: "loss",
    title: "Потеря прибыли — реально не вернётся",
    total: 1_300_000,
    items: [
      {
        amount: 700_000,
        category: "Перерасход ФОТ монтажников",
        contract: "БЦ «Северная Долина»",
        detail: "18 смен × 24ч сверх графика на объекте — за счёт переноса срока сдачи",
      },
      {
        amount: 600_000,
        category: "Материалы сверх сметы",
        contract: "БЦ «Северная Долина» + Офис «Стерлинг»",
        detail: "Вентиляция и кабель-каналы по новым ценам поставщика — не успели зафиксировать смету",
      },
    ],
  },
  {
    type: "timing",
    title: "Кэш-тайминг — деньги во времени, не потеряны",
    total: 524_000,
    items: [
      {
        amount: 524_000,
        category: "Гарантийные удержания клиента",
        contract: "БЦ «Северная Долина»",
        detail: "10% × 4 акта — придут через 6 месяцев после сдачи объекта и подписания гарантийных обязательств",
      },
    ],
  },
];

// Evidence rows for drill-down on "Перерасход ФОТ монтажников 700 000 ₽"
// 4 bank-statement operations.

export type EvidenceRow = {
  id: number;
  date: string;
  counterparty: string;
  amount: number;
  description: string;
  contract: string;
};

export const universalEvidenceRows: EvidenceRow[] = [
  {
    id: 1,
    date: "12.02.2026",
    counterparty: "ИП Захаров А.С.",
    amount: -180_000,
    description: "Выплата за смену сверх графика, 18-19 фев",
    contract: "БЦ «Северная Долина»",
  },
  {
    id: 2,
    date: "18.02.2026",
    counterparty: "ИП Климов Д.В.",
    amount: -220_000,
    description: "Переработка 18 часов на объекте, ОВК-монтаж",
    contract: "БЦ «Северная Долина»",
  },
  {
    id: 3,
    date: "24.02.2026",
    counterparty: "ООО «Монтаж-Про»",
    amount: -250_000,
    description: "Субподряд — перерасход смен, переход графика",
    contract: "БЦ «Северная Долина»",
  },
  {
    id: 4,
    date: "28.02.2026",
    counterparty: "ИП Петрова Н.А.",
    amount: -50_000,
    description: "Выезд бригады на доработку приёмки",
    contract: "БЦ «Северная Долина»",
  },
];

// Summary totals for contracts dashboard header
export const universalSummary = {
  contractsCount: 5,
  totalRevenue: 11_740_000,
  totalPlanProfit: 4_170_000,
  totalFactProfit: 2_755_000,
  totalDivergence: 1_824_000,
  marginPlan: "25%",
  marginFact: "17%",
};
