export function UniversalRealPathPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Что произойдёт после первой встречи
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Без обязательств. Без презентаций. Сразу к разбору одного вашего
          контракта.
        </p>
      </div>

      <div id="anchor-real-path" className="rounded-md border border-slate-200 bg-white p-6">
        <div className="space-y-5">
          <Step
            num={1}
            title="Заявка"
            desc="Заполняете короткую форму на следующем шаге — рабочая почта, выручка компании, есть ли финдиректор. По этим параметрам подбираем аналитика, который понимает ваш масштаб."
            time="2 минуты"
          />
          <Step
            num={2}
            title="Встреча с аналитиком"
            desc="За 30 минут вместе разберём один ваш контракт. Покажем, какие данные и интеграции нужны, чтобы собрать такую же картину на ваших цифрах. Никаких презентаций — сразу к разбору."
            time="30 минут"
          />
          <Step
            num={3}
            title="Решение"
            desc="После встречи решаете сами — нужно ли подключаться. Никто не давит. Если решите попробовать — 14 дней доступа на тестовых данных без привязки карты."
            time="по вашему графику"
          />
        </div>
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50/60 p-4 text-[13px] leading-relaxed text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">
            Что в этом не так как в демо:
          </span>{" "}
          в демо мы показали готовый разбор за 30 секунд. В реальности первая
          встреча — это разбор того, какие данные у вас есть и как их собрать.
          Дольше, чем демо. И не такой чистый, как демо. Но цифра будет ваша.
        </p>
      </div>
    </div>
  );
}

function Step({
  num,
  title,
  desc,
  time,
}: {
  num: number;
  title: string;
  desc: string;
  time: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
        {num}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
          <span className="text-[11px] text-slate-500">{time}</span>
        </div>
        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-700">
          {desc}
        </p>
      </div>
    </div>
  );
}
