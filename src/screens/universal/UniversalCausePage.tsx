import { universalCauseBlocks } from "@/lib/universal-data";
import { formatRub } from "@/lib/provenance";

export function UniversalCausePage() {
  return (
    <div className="space-y-5">
      <div className="text-[12px] text-slate-500">
        <span className="hover:text-slate-700">Контракты</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">БЦ «Северная Долина»</span>
        <span className="mx-1.5">/</span>
        <span className="text-slate-900">Разложение расхождения</span>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Куда ушли 1 824 000 ₽ по портфелю
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Разложение разделено на два блока — потеря прибыли и кэш-тайминг. Это
          разные деньги.
        </p>
      </div>

      <div id="anchor-cause-blocks" className="space-y-4">
        {universalCauseBlocks.map((block) => (
          <div
            key={block.type}
            className={`rounded-md border p-5 ${
              block.type === "loss"
                ? "border-rose-200 bg-rose-50/40"
                : "border-amber-200 bg-amber-50/40"
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p
                  className={`text-[11px] font-semibold uppercase tracking-wider ${
                    block.type === "loss"
                      ? "text-rose-700"
                      : "text-amber-700"
                  }`}
                >
                  {block.type === "loss" ? "Блок А" : "Блок Б"}
                </p>
                <h2 className="mt-1 text-[15px] font-semibold text-slate-900">
                  {block.title}
                </h2>
              </div>
              <p
                className={`text-2xl font-bold tabular-nums ${
                  block.type === "loss" ? "text-rose-700" : "text-amber-700"
                }`}
              >
                {formatRub(block.total)}
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {block.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-md border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium text-slate-900">
                      {item.category}
                    </p>
                    <p className="font-mono tabular-nums text-slate-900">
                      {formatRub(item.amount)}
                    </p>
                  </div>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Контракт: {item.contract}
                  </p>
                  <p className="mt-2 text-[13px] leading-snug text-slate-700">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50/60 p-4 text-[13px] text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">
            Маржа упала с 25% до 17%
          </span>{" "}
          — это 8 п.п. по портфелю. Но важнее не процент: важно, что 1,3 млн —
          реальная потеря, а 524 тыс. — отложенные деньги, они вернутся через 6
          месяцев. Это разные суммы для разных решений.
        </p>
      </div>
    </div>
  );
}
