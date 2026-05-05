export type Page = "svodka" | "opiu" | "deals" | "profitability" | "operation";

export type TourStep = {
  id: string;
  page: Page;
  anchor: string;
  title: string;
  body: string;
  placement?: "right" | "left" | "top" | "bottom";
  cta?: string;
};

export const tourScript: TourStep[] = [
  {
    id: "intro",
    page: "svodka",
    anchor: "#anchor-svodka-balance",
    title: "Сводка за август — на первый взгляд всё хорошо",
    body: "Поступления +5,86 млн ₽, сальдо +3,16 млн ₽, план перевыполнен на 263%. Никаких тревожных сигналов. Это типичная картина, которую видит менеджмент каждый день.",
    placement: "right",
    cta: "Открыть Учёт сделок →",
  },
  {
    id: "deals-overview",
    page: "deals",
    anchor: "#anchor-deals-grid",
    title: "Дашборд сделок — 8 ключевых метрик",
    body: "Этот экран собирает финансовое состояние всех сделок. Слева направо: количество, суммы, оплаты, выручка, рентабельности, признание выручки.",
    placement: "bottom",
  },
  {
    id: "deals-margin",
    page: "deals",
    anchor: "#anchor-deals-margin",
    title: "Рентабельность по марж. доходу — 89%",
    body: "Это выручка минус себестоимость и сдельный ФОТ производственных бригад. То, что директор обычно называет «прямая маржа».",
    placement: "bottom",
  },
  {
    id: "deals-gross",
    page: "deals",
    anchor: "#anchor-deals-gross",
    title: "Рентабельность по валовой прибыли — 74%",
    body: "Это выручка минус все расходы по сделкам. Между 89% и 74% — 15 пунктов или 2 403 170 ₽. Куда они уходят? Откроем разбор.",
    placement: "bottom",
    cta: "Показать margin bridge →",
  },
  {
    id: "bridge",
    page: "profitability",
    anchor: "#anchor-bridge",
    title: "Margin bridge — куда ушли 2,4 млн ₽",
    body: "Финтабло раскладывает разницу на конкретные шаги. Выручка 16,16 млн → −1,74 млн себестоимость → марж. доход 14,43 млн → −2,40 млн прочие расходы по сделкам → валовая 12,03 млн.",
    placement: "right",
  },
  {
    id: "drilldown",
    page: "profitability",
    anchor: "#anchor-drilldown",
    title: "Расшифровка 2,4 млн ₽",
    body: "Категории расходов, которые попадают в этот разрез: материалы по объекту, транспорт, командировки, гарантия, НЗП. Сумма реальная (REAL), разбивка иллюстративная (SIMULATED).",
    placement: "left",
    cta: "Дойти до банка →",
  },
  {
    id: "trace",
    page: "operation",
    anchor: "#anchor-operation",
    title: "Любую цифру — до строки в выписке",
    body: "Это реальная операция из demo: −110 000 ₽, ИП Васильев, аренда офиса. Любую цифру в Финтабло можно открыть до конкретного платежа в банке. Это работает в обе стороны.",
    placement: "right",
    cta: "Завершить →",
  },
  {
    id: "cta",
    page: "operation",
    anchor: "#anchor-cta",
    title: "Загрузите выписку — увидим margin bridge ваших сделок",
    body: "14-дневный триал, без привязки карты. Загружаете выписку 1С или банка — Финтабло автоматически считает марж. доход → валовую → операционную и трассирует каждую цифру до операции.",
    placement: "left",
  },
];
