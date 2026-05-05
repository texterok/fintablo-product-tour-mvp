export type ScreenMeta = {
  step: number;
  slug: string;
  title: string;
  kicker?: string;
};

export const screens: ScreenMeta[] = [
  { step: 1, slug: "welcome", title: "Где утекает прибыль" },
  { step: 2, slug: "context", title: "Сводка август", kicker: "Контекст" },
  { step: 3, slug: "trigger", title: "Дашборд сделок", kicker: "Триггер" },
  { step: 4, slug: "bridge", title: "Margin bridge", kicker: "Главный разбор" },
  { step: 5, slug: "drilldown", title: "Куда ушли 2,4 млн", kicker: "Расшифровка" },
  { step: 6, slug: "insight", title: "Финтабло раскрывает разницу", kicker: "Инсайт" },
  { step: 7, slug: "bank", title: "Trace до банка", kicker: "Доказательство" },
  { step: 8, slug: "cta", title: "Загрузите выписку — увидим margin bridge", kicker: "Дальше" },
];

export const totalSteps = screens.length;
