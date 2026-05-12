export function UniversalTrustPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Откуда цифры в Финтабло
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Три источника данных. И честный список того, что ВЫ не увидите в
          этом примере до встречи с аналитиком.
        </p>
      </div>

      <div id="anchor-trust-sources" className="grid gap-4 lg:grid-cols-3">
        <SourceCard
          title="Банковская выписка"
          desc="Операции из банка загружаются автоматически по подключённой интеграции. Привязка к контрактам — по правилам, которые вы настраиваете один раз."
          example="Платёж монтажнику → автоматически в статью «Перерасход ФОТ» → контракт БЦ «Северная Долина»"
        />
        <SourceCard
          title="1С через выгрузку"
          desc="Если в 1С ведутся проводки по объектам и подрядчикам — выгрузка раз в неделю, формат поддерживается."
          example="Закрывающие документы и акты подгружаются вместе с банковскими операциями"
        />
        <SourceCard
          title="Excel-импорт смет"
          desc="Для тех, у кого сметы по контрактам ведутся в Excel — импорт через шаблон, разбор по этапам."
          example="План по статьям из сметы → факт из банка → расхождение в моменте"
        />
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50/40 p-5">
        <h2 className="text-[15px] font-semibold text-slate-900">
          Что ВЫ НЕ увидите в этом примере до первой встречи с аналитиком
        </h2>
        <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
          <li className="flex gap-2">
            <span className="text-amber-700">•</span>
            <span>
              Свои конкретные цифры. Это пример «Климат-Сервиса» — синтетика на
              основе типичного профиля. Ваши цифры появятся только после
              подключения банка и 1С/Excel
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-700">•</span>
            <span>
              Маппинг ваших категорий. У вас может быть «Подрядчики», у других
              — «Внешние работы». Это первая задача аналитика на встрече
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-700">•</span>
            <span>
              Прогноз на следующий квартал. Есть в Финтабло, но требует 60 дней
              истории — поэтому на первой встрече не показываем
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SourceCard({
  title,
  desc,
  example,
}: {
  title: string;
  desc: string;
  example: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="text-[14px] font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{desc}</p>
      <p className="mt-3 rounded bg-slate-50 p-2 text-[12px] italic leading-snug text-slate-600">
        {example}
      </p>
    </div>
  );
}
