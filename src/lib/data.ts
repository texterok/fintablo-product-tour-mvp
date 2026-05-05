import { Tagged, real, inferred, simulated } from "./provenance";

export const account = {
  name: real("Строительство", "demo screenshots header"),
  balance: real(16_683_116, "demo1.png"),
  legalEntities: real(
    ["ИП Сооруженко", "ООО Строев"],
    "demo screenshots column «Счёт»",
  ),
  period: real("январь – август 2024", "demo screenshots period selector"),
};

export type SvodkaTopExpense = {
  name: string;
  amount: number;
  share: number;
};

export const svodkaAugust = {
  income: real(5_861_500, "demo2.png"),
  expense: real(2_698_026, "demo2.png"),
  balanceMonth: real(3_163_474, "demo2.png"),
  planTo25: real(1_612_904, "demo2.png"),
  planOverflow: real(4_248_596, "demo2.png"),
  planOverflowPct: real(263, "demo2.png"),
  topIncome: real(
    [{ name: "Поступления от клиентов", amount: 5_861_500, share: 100 }] satisfies SvodkaTopExpense[],
    "demo2.png",
  ),
  topExpenses: real(
    [
      { name: "Зарплата", amount: 1_165_000, share: 43 },
      { name: "Закупки", amount: 674_520, share: 25 },
      { name: "Стройматериалы", amount: 464_600, share: 17 },
      { name: "НДС", amount: 300_000, share: 11 },
      { name: "Транспортные услуги", amount: 58_100, share: 2 },
    ] satisfies SvodkaTopExpense[],
    "demo2.png",
  ),
};

export type DealsMetric = {
  key: string;
  label: string;
  value: string;
  hint?: string;
  highlight?: "primary" | "secondary";
};

export const dealsDashboard: { metrics: Tagged<DealsMetric[]> } = {
  metrics: real(
    [
      { key: "total", label: "Всего", value: "7 сделок" },
      { key: "sumDeals", label: "Сумма сделок", value: "17 175 000 ₽" },
      { key: "paidReceived", label: "Получено оплат", value: "13 675 000 ₽ (80%)" },
      { key: "paidExpected", label: "Ожидается оплат", value: "3 500 000 ₽ (2 сделки)" },
      { key: "revenue", label: "Сумма выручки", value: "16 165 000 ₽" },
      {
        key: "marginPct",
        label: "Рент. по марж. доходу",
        value: "89%",
        hint: "Сумма возможной выручки за вычетом себестоимости и сдельного ФОТ",
        highlight: "primary",
      },
      {
        key: "grossPct",
        label: "Рент. по валовой прибыли",
        value: "74%",
        hint: "Сумма возможной выручки за вычетом расходов по сделкам, сумма без НДС",
        highlight: "primary",
      },
      { key: "revenueRecognized", label: "Признано выручки", value: "10 808 333 ₽" },
    ] satisfies DealsMetric[],
    "Учет сделок.png",
  ),
};

export type BridgeSegment = {
  key: string;
  kind: "anchor" | "delta";
  label: string;
  amount: number;
  pct?: number;
  provenance: "REAL" | "INFERRED";
  source: string;
  description?: string;
};

export const marginBridge: BridgeSegment[] = [
  {
    key: "revenue",
    kind: "anchor",
    label: "Сумма выручки",
    amount: 16_165_000,
    pct: 100,
    provenance: "REAL",
    source: "Учет сделок.png — карточка «Сумма выручки»",
  },
  {
    key: "cogs",
    kind: "delta",
    label: "Себестоимость и сдельный ФОТ",
    amount: -1_735_770,
    provenance: "INFERRED",
    source: "Выручка − Маржинальный доход (16 165 000 − 14 429 230)",
    description: "Прямая себестоимость работ + сдельный ФОТ производственных бригад",
  },
  {
    key: "marginIncome",
    kind: "anchor",
    label: "Маржинальный доход",
    amount: 14_429_230,
    pct: 89,
    provenance: "REAL",
    source: "Учет сделок.png — карточка «Рент. по марж. доходу 89%»",
  },
  {
    key: "otherDealExpenses",
    kind: "delta",
    label: "Прочие расходы по сделкам",
    amount: -2_403_170,
    provenance: "INFERRED",
    source: "Маржинальный доход − Валовая прибыль (14 429 230 − 12 026 060)",
    description:
      "Расходы, прикреплённые к сделкам в Финтабло (не себестоимость и не сдельный ФОТ)",
  },
  {
    key: "grossProfit",
    kind: "anchor",
    label: "Валовая прибыль",
    amount: 12_026_060,
    pct: 74,
    provenance: "REAL",
    source: "Учет сделок.png — карточка «Рент. по валовой прибыли 74%»",
  },
];

export type DrillDownCategory = {
  key: string;
  label: string;
  amount: Tagged<number>;
  example?: string;
};

export const drillDownCandidates: DrillDownCategory[] = [
  {
    key: "materials",
    label: "Материалы по объектам",
    amount: simulated(880_000, "Доля 36% от 2.4M — иллюстративная"),
    example: "Закупка материалов для конкретной сделки сверх сдельной себестоимости",
  },
  {
    key: "logistics",
    label: "Транспорт и логистика по объектам",
    amount: simulated(420_000, "Доля 17% от 2.4M — иллюстративная"),
    example: "Доставка, выезды бригад на объект",
  },
  {
    key: "overheadOnDeal",
    label: "НЗП и накладные, привязанные к сделке",
    amount: simulated(560_000, "Доля 23% от 2.4M — иллюстративная"),
    example: "Время команды, отнесённое на сделку",
  },
  {
    key: "warranty",
    label: "Гарантийный сервис до подписания акта",
    amount: simulated(310_000, "Доля 13% от 2.4M — иллюстративная"),
    example: "Доработки и устранение замечаний до приёмки",
  },
  {
    key: "trips",
    label: "Командировки и проживание",
    amount: simulated(233_170, "Остаток до 2.4M — иллюстративный"),
    example: "Поездки исполнителей по проекту",
  },
];

export const drillDownTotal = real(
  2_403_170,
  "INFERRED из дашборда сделок (МД − ВП). Сумма в Финтабло — реальная, разбивка по категориям — иллюстративная",
);

export type BankOperation = {
  amount: Tagged<number>;
  date: Tagged<string>;
  counterparty: Tagged<string>;
  category: Tagged<string>;
  account: Tagged<string>;
  description: Tagged<string>;
};

export const bankOperationExample: BankOperation = {
  amount: real(-110_000, "demo1.png"),
  date: real("30.08.2024", "demo1.png"),
  counterparty: real("ИП Васильев Иван Николаевич", "demo1.png"),
  category: real("Аренда офиса", "demo1.png"),
  account: real("р/с Сбер ООО Строев", "demo1.png"),
  description: real(
    "Оплата по договору аренды офисного помещения",
    "demo1.png",
  ),
};

export const insightLayers = [
  {
    label: "Маржинальный доход",
    formula: "Выручка − себестоимость − сдельный ФОТ",
    accent: "from-emerald-500 to-emerald-600",
  },
  {
    label: "Валовая прибыль",
    formula: "Выручка − все расходы по сделкам",
    accent: "from-amber-500 to-amber-600",
  },
  {
    label: "Операционная прибыль",
    formula: "Валовая − косвенные расходы",
    accent: "from-rose-500 to-rose-600",
  },
] as const;
