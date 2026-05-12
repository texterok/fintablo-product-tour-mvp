import type { TourStepRole } from "@/lib/tour";

export type UniversalPage =
  | "deals"
  | "stages"
  | "operations"
  | "virtual-account"
  | "calendar"
  | "trust"
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
// Example business: «Климат-Сервис» — installation of climate/engineering/security systems.
// IMPORTANT: every step lands on a real Fintablo module — Сделки / Карточка сделки (Этапы / Операции) /
// Счета и реквизиты / Платёжный календарь. No invented UI.
export const universalTourScript: UniversalTourStep[] = [
  {
    id: "deals-overview",
    page: "deals",
    anchor: "#anchor-deals-grid",
    title: "Это раздел «Сделки» в Финтабло",
    body: "Сверху — цифры по 5 контрактам Климат-Сервис. Получено по актам 11,74 млн. Рентабельность по плану — 25%. По факту — 17%. Один контракт утянул общий результат вниз.",
    placement: "bottom",
    cta: "Найти проблемный контракт →",
    role: "intro",
  },
  {
    id: "deals-problem-row",
    page: "deals",
    anchor: "#anchor-problem-deal",
    title: "БЦ «Северная Долина» — план 7 млн, факт 5,56 млн",
    body: "Получили от заказчика 5,2 млн, по факту собрали 5,56 млн (часть — гарантийное удержание). Расхождение план/факт — 1,44 млн. Чтобы понять, где именно ушли деньги, нужно открыть карточку контракта.",
    placement: "top",
    cta: "Открыть карточку →",
    role: "anomaly",
  },
  {
    id: "stages",
    page: "stages",
    anchor: "#anchor-stage-three",
    title: "Этап 3 «Монтаж и пусконаладка» — план 1,8 млн, факт 0,56 млн",
    body: "Контракт состоит из 4 этапов. Этапы 1 и 2 закрылись по плану. Этап 4 ещё не начат. На этапе 3 разница: −1 240 000 ₽. Это и есть та цифра, которая утянула рентабельность. Чтобы увидеть причину — нужно открыть «Операции» по контракту.",
    placement: "left",
    cta: "Перейти в операции →",
    role: "anomaly",
  },
  {
    id: "operations",
    page: "operations",
    anchor: "#anchor-operations-fot",
    title: "ФОТ монтажников — 4 выплаты на 700 тыс. сверх плана",
    body: "Это 4 операции из банк-выписки за месяц — выплаты монтажникам за смены сверх графика и субподряду. Плановый ФОТ этапа: 400 тыс. По факту: 700 тыс. Плюс материалы сверх сметы 540 тыс. (жёлтым) — кабель-каналы по новой цене поставщика. Это реально потерянные деньги.",
    placement: "left",
    cta: "А что с удержанием? →",
    role: "cause",
  },
  {
    id: "operations-timing",
    page: "operations",
    anchor: "#anchor-operations-timing",
    title: "Гарантийное удержание 524 тыс. — это НЕ убыток",
    body: "Заказчик удержал 10% по актам до подписания гарантийных обязательств. Эти деньги не потеряны — они придут через 6 месяцев. Чтобы не путать их с заработанными — Финтабло предлагает виртуальный счёт.",
    placement: "left",
    cta: "Показать виртуальный счёт →",
    role: "cause",
  },
  {
    id: "virtual-account",
    page: "virtual-account",
    anchor: "#anchor-virtual-account",
    title: "Виртуальный счёт «Гарантийные удержания» — 524 тыс.",
    body: "Финтабло советует: для гарантийных удержаний завести отдельный виртуальный счёт. Тогда на основном счёте остаётся только то, что реально ваше — 3,48 млн. Удержания живут отдельно. Когда заказчик их вернёт — они вернутся на основной.",
    placement: "right",
    cta: "Когда деньги кончатся? →",
    role: "evidence",
  },
  {
    id: "calendar",
    page: "calendar",
    anchor: "#anchor-calendar-negative",
    title: "Через 2 недели на сделке: −40 тыс.",
    body: "Платёжный календарь по сделке: финальная смена монтажников ставит баланс в минус до акта ввода. Когда подпишут акт (через 4 недели) — придёт 1,48 млн. А гарантийные 524 тыс. — только через 6 месяцев. Календарь делает кассовый разрыв видимым заранее.",
    placement: "top",
    cta: "Что с этим делать →",
    role: "evidence",
  },
  {
    id: "trust",
    page: "trust",
    anchor: "#anchor-trust-sources",
    title: "Откуда цифры в Финтабло",
    body: "Банк-выписка подгружается автоматически из подключённых счетов. 1С — через выгрузку. Excel-сметы — ручной импорт. Это пример на синтетических данных — ваши цифры за 30-минутный разбор подключаются по той же логике.",
    placement: "right",
    cta: "Записаться на разбор →",
    role: "trust",
  },
  {
    id: "cta",
    page: "cta",
    anchor: "#anchor-cta",
    title: "Проверьте на одном своём контракте",
    body: "За 30 минут разберём один ваш контракт. Покажем, какие данные нужны, чтобы собрать такую же картину на ваших цифрах. Без презентаций.",
    placement: "left",
    role: "cta",
  },
];
