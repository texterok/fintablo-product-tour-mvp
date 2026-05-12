import type { TourStepRole } from "@/lib/tour";

export type UniversalPage =
  | "contracts"
  | "anomaly"
  | "cause"
  | "evidence"
  | "soft-capture"
  | "trust"
  | "real-path"
  | "cta";

export type UniversalTourStep = {
  id: string;
  page: UniversalPage;
  anchor: string;
  title: string;
  body: string;
  placement?: "right" | "left" | "top" | "bottom";
  cta?: string;
  role: TourStepRole;
};

// Universal tour for installation/service project businesses (60-1200M revenue, CFO required).
// Example business: «Климат-Сервис» — installation of climate, engineering, security systems.
// All numbers are illustrative (synthetic, based on typical project-business profile).
export const universalTourScript: UniversalTourStep[] = [
  {
    id: "contracts-overview",
    page: "contracts",
    anchor: "#anchor-contracts-summary",
    title: "Контракт должен был дать 3 млн прибыли. Собрали 1,7 млн",
    body: "Это «Климат-Сервис» — монтаж климатических систем и инженерных сетей. 5 контрактов в работе. Один из них планировался прибыльным — по факту собрали меньше. Расхождение по портфелю — 1 824 000 ₽. Откроем и разберём.",
    placement: "bottom",
    cta: "Где утечка? →",
    role: "intro",
  },
  {
    id: "anomaly-row",
    page: "contracts",
    anchor: "#anchor-problem-contract",
    title: "Один контракт ушёл в минус — БЦ «Северная Долина»",
    body: "По плану — прибыль 1,8 млн. По факту — 560 тыс. Расхождение −1 240 000 ₽. Из 5 контрактов один проседает, остальные близко к плану. Без разложения по статьям — непонятно, куда конкретно ушли деньги.",
    placement: "top",
    cta: "Раскрыть причину →",
    role: "anomaly",
  },
  {
    id: "cause-bridge",
    page: "cause",
    anchor: "#anchor-cause-blocks",
    title: "Куда ушли 1 824 000 ₽",
    body: "Разделено на два блока: реально потеряли 1,3 млн (перерасход ФОТ монтажников + материалы сверх сметы), а 524 тыс. — гарантийные удержания клиента, придут через 6 месяцев. Не путать одно с другим — это разные деньги.",
    placement: "right",
    cta: "Показать доказательство →",
    role: "cause",
  },
  {
    id: "evidence-drilldown",
    page: "evidence",
    anchor: "#anchor-evidence-rows",
    title: "Откуда взялся перерасход ФОТ — 700 000 ₽",
    body: "Это 4 операции из банк-выписки за месяц — выплаты монтажникам сверх графика на объекте БЦ «Северная Долина». Каждая операция — конкретная дата, контрагент, сумма. В Финтабло любая цифра в отчёте раскрывается до исходной банковской операции.",
    placement: "left",
    cta: "Сохранить пример на почту →",
    role: "evidence",
  },
  {
    id: "soft-capture",
    page: "soft-capture",
    anchor: "#anchor-soft-capture",
    title: "Сохранить пример с разбивкой по статьям",
    body: "Можно сохранить этот разбор на почту — пришлём PDF с разложением 1,8 млн по статьям и таблицей по 5 контрактам. Или пропустить и продолжить. Не блокирует.",
    placement: "right",
    cta: "Пропустить →",
    role: "evidence",
  },
  {
    id: "trust-sources",
    page: "trust",
    anchor: "#anchor-trust-sources",
    title: "Откуда цифры в Финтабло",
    body: "Банк-выписка загружается автоматически, 1С через выгрузку, Excel-импорт для смет вручную. Ниже честный список — что НЕ видно в этом примере до первой встречи: ваши конкретные цифры, маппинг ваших категорий, прогноз по кварталу.",
    placement: "right",
    cta: "Что после регистрации? →",
    role: "trust",
  },
  {
    id: "real-path",
    page: "real-path",
    anchor: "#anchor-real-path",
    title: "Что произойдёт после первой встречи",
    body: "За 30 минут вместе разберём один ваш контракт. Покажем, какие данные и интеграции нужны, чтобы собрать такую же картину на ваших цифрах. Без обязательств. Без презентаций. Сразу к разбору.",
    placement: "left",
    cta: "Записаться на разбор →",
    role: "trust",
  },
  {
    id: "cta",
    page: "cta",
    anchor: "#anchor-cta",
    title: "Хотите проверить на одном своём контракте?",
    body: "За 30 минут разберём один контракт. Покажем, какие данные нужны. Заполните короткую форму ниже — рабочая почта, выручка, есть ли финдиректор. Это нужно, чтобы подобрать аналитика, который понимает ваш масштаб.",
    placement: "left",
    role: "cta",
  },
];
