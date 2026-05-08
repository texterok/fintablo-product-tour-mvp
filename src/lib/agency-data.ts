// Agency tour — illustrative data for project-based digital agency
// Cohort: 15-30 people, 10-20 deals/month, 1-3 months each, advance-payment model
// All figures simulated for tour clarity (not from real customer)

export type AgencyMetric = {
  key: string;
  label: string;
  value: string;
  hint?: string;
  highlight?: "primary" | "secondary";
};

export const agencyDealsDashboard = {
  metrics: [
    { key: "total", label: "Всего", value: "12 сделок" },
    { key: "sumDeals", label: "Сумма сделок", value: "5 930 000 ₽" },
    {
      key: "paidReceived",
      label: "Получено авансов",
      value: "4 720 000 ₽ (80%)",
    },
    {
      key: "paidExpected",
      label: "Ожидается оплат",
      value: "1 210 000 ₽ (5 сделок)",
    },
    { key: "revenue", label: "Сумма выручки", value: "5 320 000 ₽" },
    {
      key: "marginPct",
      label: "Рент. по марж. доходу",
      value: "62%",
      hint: "Выручка за вычетом подрядчиков и сдельной оплаты команды",
      highlight: "primary" as const,
    },
    {
      key: "grossPct",
      label: "Рент. по валовой прибыли",
      value: "44%",
      hint: "Выручка за вычетом всех расходов по сделкам",
      highlight: "primary" as const,
    },
    {
      key: "revenueRecognized",
      label: "Признано выручки",
      value: "3 540 000 ₽",
    },
  ] satisfies AgencyMetric[],
};

export type AgencyDeal = {
  id: string;
  name: string;
  client: string;
  service: string;
  plan: number;
  fact: number;
  paid: number;
  problem?: boolean;
};

export const agencyDeals: AgencyDeal[] = [
  {
    id: "channel-a-14",
    name: "YouTube «Канал А», выпуск №14",
    client: "ИП Иванов",
    service: "Сценарий, съёмка, монтаж",
    plan: 600_000,
    fact: 540_000,
    paid: 600_000,
  },
  {
    id: "bmw-q1",
    name: "Корпоративное видео BMW Q1",
    client: "BMW Россия",
    service: "Полный цикл",
    plan: 800_000,
    fact: 510_000,
    paid: 800_000,
  },
  {
    id: "travel",
    name: "YouTube «Путешествия», 4 этапа",
    client: "ООО Путеш",
    service: "Препродакшн, съёмка, монтаж, публикация",
    plan: 1_320_000,
    fact: 660_000,
    paid: 860_000,
    problem: true,
  },
  {
    id: "vk-ads",
    name: "VK Ads креативы Q4",
    client: "АО Ритейл",
    service: "Креативы под платформу",
    plan: 320_000,
    fact: 305_000,
    paid: 320_000,
  },
  {
    id: "podcast",
    name: "Подкаст «Деньги говорят», 6 выпусков",
    client: "ООО Финансы",
    service: "Запись, монтаж, обложки",
    plan: 540_000,
    fact: 520_000,
    paid: 540_000,
  },
  {
    id: "tiktok",
    name: "TikTok серия «Лайфхаки»",
    client: "АО Б2С",
    service: "Сценарий, съёмка, монтаж",
    plan: 280_000,
    fact: 295_000,
    paid: 280_000,
  },
  {
    id: "rebrand",
    name: "Видео-идентичность ребренд",
    client: "ООО Стартап",
    service: "Заставки, переходы, моушн",
    plan: 460_000,
    fact: 440_000,
    paid: 460_000,
  },
  {
    id: "instagram",
    name: "Instagram Reels серия",
    client: "ИП Смирнов",
    service: "Серия из 12 роликов",
    plan: 340_000,
    fact: 320_000,
    paid: 340_000,
  },
  {
    id: "training-video",
    name: "Обучающий курс, 8 уроков",
    client: "АО Образование",
    service: "Сценарий, съёмка, монтаж",
    plan: 720_000,
    fact: 690_000,
    paid: 720_000,
  },
];

export type AgencyStage = {
  num: number;
  name: string;
  plan: number;
  fact: number | null;
  status: "ok" | "problem" | "pending";
  desc: string;
};

export const travelDealStages: AgencyStage[] = [
  {
    num: 1,
    name: "Препродакшн",
    plan: 200_000,
    fact: 195_000,
    status: "ok",
    desc: "Сценарий, раскадровка, согласование с клиентом",
  },
  {
    num: 2,
    name: "Съёмка",
    plan: 280_000,
    fact: 285_000,
    status: "ok",
    desc: "Съёмочные смены, оборудование, подрядчики",
  },
  {
    num: 3,
    name: "Постпродакшн",
    plan: 600_000,
    fact: 180_000,
    status: "problem",
    desc: "Монтаж, цветокоррекция, графика",
  },
  {
    num: 4,
    name: "Публикация",
    plan: 240_000,
    fact: null,
    status: "pending",
    desc: "Загрузка, обложки, ответы на комментарии",
  },
];

export type AgencyOperation = {
  id: number;
  date: string;
  category: string;
  counterparty?: string;
  direction?: string;
  account: string;
  amount: number;
  focused?: boolean;
  hint?: string;
};

// Operations attached to «Путешествия» deal — what blew up Stage 3
export const travelDealOperations: AgencyOperation[] = [
  {
    id: 1,
    date: "12.08.2026",
    category: "Подрядчики · Постпродакшн",
    counterparty: "ООО «Постпро Студия»",
    account: "р/с Тинькофф ООО Видеоарт",
    amount: -560_000,
    focused: true,
    hint: "План по подрядчикам этапа: 380 000 ₽. Факт: 560 000 ₽. Перерасход 180 000 ₽.",
  },
  {
    id: 2,
    date: "22.08.2026",
    category: "Доработка · Этап 3",
    counterparty: "Внутренние работы",
    account: "р/с Тинькофф ООО Видеоарт",
    amount: -240_000,
    hint: "Клиент попросил правку 22.08. Работы выполнены, акт не подписан → выручка не признана.",
  },
  {
    id: 3,
    date: "08.08.2026",
    category: "Аванс от клиента",
    counterparty: "ООО Путеш",
    account: "р/с Тинькофф ООО Видеоарт",
    amount: 860_000,
  },
  {
    id: 4,
    date: "05.08.2026",
    category: "Зарплата · Этап 1",
    counterparty: "Команда сценаристов",
    account: "р/с Тинькофф ООО Видеоарт",
    amount: -195_000,
  },
  {
    id: 5,
    date: "18.08.2026",
    category: "Зарплата · Этап 2",
    counterparty: "Съёмочная группа",
    account: "р/с Тинькофф ООО Видеоарт",
    amount: -285_000,
  },
];

export type AgencyAccount = {
  name: string;
  type: "main" | "virtual";
  balance: number;
  description: string;
};

export const agencyAccounts: AgencyAccount[] = [
  {
    name: "р/с Тинькофф ООО Видеоарт",
    type: "main",
    balance: 1_840_000,
    description: "Основной расчётный счёт",
  },
  {
    name: "Авансы от Заказчиков",
    type: "virtual",
    balance: 860_000,
    description:
      "Виртуальный счёт. Пока работы не закрыты актом — это деньги клиента, не наши.",
  },
];

export type CalendarRow = {
  weekLabel: string;
  date: string;
  inflow: number;
  outflow: number;
  detail: string;
  balanceAfter: number;
  highlight?: "negative" | "milestone";
};

export const travelDealCalendar: CalendarRow[] = [
  {
    weekLabel: "Сейчас",
    date: "08 авг",
    inflow: 0,
    outflow: 0,
    detail: "Аванс клиента уже на виртуальном счёте «Авансы от Заказчиков»",
    balanceAfter: 860_000,
  },
  {
    weekLabel: "Через 1 неделю",
    date: "15 авг",
    inflow: 0,
    outflow: 320_000,
    detail: "Подрядчики прошлого этапа — оплата по счёту 245",
    balanceAfter: 540_000,
  },
  {
    weekLabel: "Через 2 недели",
    date: "22 авг",
    inflow: 0,
    outflow: 420_000,
    detail: "Зарплата команде по этой сделке",
    balanceAfter: 120_000,
  },
  {
    weekLabel: "Через 3 недели",
    date: "29 авг",
    inflow: 0,
    outflow: 460_000,
    detail: "Подрядчики этапа 4 + правка ТЗ",
    balanceAfter: -340_000,
    highlight: "negative",
  },
  {
    weekLabel: "Через 5 недель",
    date: "12 сен",
    inflow: 280_000,
    outflow: 0,
    detail: "Финальный платёж — после подписания акта клиентом",
    balanceAfter: -60_000,
    highlight: "milestone",
  },
];
