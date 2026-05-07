export type Page = "svodka" | "opiu" | "deals" | "profitability" | "operation";

export type TourStepRole =
  | "intro"
  | "anomaly"
  | "cause"
  | "evidence"
  | "trust"
  | "cta";

export type TourStep = {
  id: string;
  page: Page;
  anchor: string;
  title: string;
  body: string;
  placement?: "right" | "left" | "top" | "bottom";
  cta?: string;
  role: TourStepRole;
};

export const tourScript: TourStep[] = [
  {
    id: "intro",
    page: "svodka",
    anchor: "#anchor-svodka-balance",
    title: "Август закрыт хорошо",
    body: "За месяц пришло 5,86 млн ₽, ушло 2,7 млн ₽, сальдо месяца +3,16 млн ₽. Поступления оказались на 4,25 млн ₽ выше плана — это +263% к плану. Картина выглядит как у успешного бизнеса.",
    placement: "right",
    cta: "Открыть сделки →",
    role: "intro",
  },
  {
    id: "deals-overview",
    page: "deals",
    anchor: "#anchor-deals-grid",
    title: "Активные сделки — 17,17 млн ₽",
    body: "Это уже не касса августа. Здесь показаны 7 активных договоров на разных стадиях: 13,68 млн ₽ уже оплачено, 3,5 млн ₽ ещё ждём, 10,8 млн ₽ выручки признано. Две главные цифры справа — про то, какая часть денег по этим сделкам реально становится прибылью.",
    placement: "bottom",
    role: "anomaly",
  },
  {
    id: "deals-margin",
    page: "deals",
    anchor: "#anchor-deals-margin",
    title: "Из 16,16 млн выручки по этим сделкам остаются 14,43 млн после прямых расходов",
    body: "Это 89%. Прямые расходы — это материалы и сдельная зарплата бригад. Цифра большая — кажется, что бизнес очень прибыльный.",
    placement: "bottom",
    role: "anomaly",
  },
  {
    id: "deals-gross",
    page: "deals",
    anchor: "#anchor-deals-gross",
    title: "А до прибыли по сделкам доходит только 12,03 млн — 74%",
    body: "Между двумя показателями по сделкам теряется 2 403 170 ₽. Это не движение денег за август, а управленческая разница внутри активных сделок. Куда ушли эти деньги? Покажем по шагам.",
    placement: "bottom",
    cta: "Показать, куда уходит прибыль →",
    role: "anomaly",
  },
  {
    id: "bridge",
    page: "profitability",
    anchor: "#anchor-bridge",
    title: "Как 16,16 млн ₽ превращаются в 12,03 млн ₽ прибыли",
    body: "Всего по дороге уходит 4,14 млн ₽. Первый кусок — 1,74 млн ₽ прямых расходов на материалы и сдельную зарплату. Второй, который разбираем дальше, — 2,40 млн ₽ прочих расходов по сделкам.",
    placement: "right",
    role: "cause",
  },
  {
    id: "drilldown",
    page: "profitability",
    anchor: "#anchor-drilldown",
    title: "Что прячется внутри 2,4 млн ₽",
    body: "Это материалы по конкретным объектам, доставка, командировки, гарантийные доделки, время команды на сделке. В реальном аккаунте такие строки открываются до банковских операций. В демо ниже покажем механику на отдельном реальном платеже из августовских списаний.",
    placement: "left",
    cta: "Показать связь отчёт → банк →",
    role: "evidence",
  },
  {
    id: "trace",
    page: "operation",
    anchor: "#anchor-operation",
    title: "Расход можно открыть до исходной операции",
    body: "Это отдельный реальный платёж из августовских списаний: 110 000 ₽ за аренду офиса, 30 августа, со счёта ООО Строев. Так Финтабло показывает источник цифры — банковскую операцию, акт или документ, из которого она попала в отчёт.",
    placement: "right",
    cta: "Завершить →",
    role: "trust",
  },
  {
    id: "cta",
    page: "operation",
    anchor: "#anchor-cta",
    title: "Хотите увидеть то же самое на своих данных?",
    body: "Загрузите выписку из 1С или банка — Финтабло разложит ваши сделки и покажет, где утекает прибыль. 14 дней бесплатно, без привязки карты.",
    placement: "left",
    role: "cta",
  },
];
