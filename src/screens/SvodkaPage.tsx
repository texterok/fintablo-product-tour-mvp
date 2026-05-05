import { svodkaAugust } from "@/lib/data";
import { formatRub } from "@/lib/provenance";
import { PeriodPills } from "@/components/PeriodPills";

export function SvodkaPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">
          Сводка Строительство
        </h1>
      </div>

      <PeriodPills />

      <div id="anchor-svodka-balance" className="grid gap-4 md:grid-cols-3">
        <Card label="Поступления" amount={svodkaAugust.income.value} tone="green" />
        <Card label="Списания" amount={-svodkaAugust.expense.value} tone="neutral" />
        <Card label="Сальдо" amount={svodkaAugust.balanceMonth.value} tone="green" emphasize />
      </div>

      <div className="flex items-center gap-2">
        <Tab active>Все</Tab>
        <Tab>В динамике <span className="ml-1 rounded-sm bg-emerald-500 px-1 py-px text-[9px] font-bold text-white">NEW</span></Tab>
        <Tab>По направлениям</Tab>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <PlanCard />
        <PlanFactChart />
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 pb-1 text-sm">
        <span className="cursor-pointer border-b-2 border-blue-600 pb-2 font-semibold text-blue-700">
          Статьи
        </span>
        <span className="cursor-pointer pb-2 text-slate-500">Направления</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <TopBlock
          title="ТОП поступлений"
          rows={svodkaAugust.topIncome.value.map((r) => ({ ...r, color: "emerald" }))}
        />
        <TopBlock
          title="ТОП списаний"
          rows={svodkaAugust.topExpenses.value.map((r) => ({ ...r, color: "amber" }))}
        />
      </div>
    </div>
  );
}

function Card({
  label,
  amount,
  tone,
  emphasize,
}: {
  label: string;
  amount: number;
  tone: "green" | "neutral";
  emphasize?: boolean;
}) {
  const isPositive = amount >= 0;
  const color =
    tone === "green" && isPositive ? "text-emerald-600" : tone === "green" ? "text-emerald-600" : "text-slate-900";
  return (
    <div
      className={`rounded-md border bg-white p-4 ${
        emphasize ? "border-emerald-300" : "border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-slate-600">{label}</p>
        <span className="h-1 w-12 rounded bg-emerald-500" />
      </div>
      <p className={`mt-2 text-2xl font-semibold tabular-nums ${color}`}>
        {formatRub(Math.abs(amount))}
      </p>
    </div>
  );
}

function Tab({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-md px-3 py-1.5 text-[13px] transition ${
        active
          ? "bg-blue-600 text-white"
          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

function PlanCard() {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-700">План с 1 по 25 августа</p>
      <p className="mt-1 text-xl font-semibold tabular-nums text-slate-900">
        1 612 904 ₽
      </p>
      <p className="mt-4 text-sm text-slate-700">Перевыполнение</p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="text-xl font-semibold tabular-nums text-emerald-600">
          4 248 596 ₽
        </p>
        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-700">
          263%
        </span>
      </div>
      <button
        type="button"
        className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        Заполнить бюджет →
      </button>

      <div className="mt-4 flex items-center justify-center">
        <div className="relative size-44">
          <div className="absolute inset-0 rounded-full border-[14px] border-slate-100" />
          <div
            className="absolute inset-0 rounded-full border-[14px] border-emerald-500"
            style={{
              clipPath: "polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
              transform: "rotate(40deg)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold tabular-nums text-emerald-600">
              &gt;200%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanFactChart() {
  return (
    <div className="flex h-full flex-col rounded-md border border-slate-200 bg-white p-5">
      <p className="text-right text-sm font-semibold tabular-nums text-emerald-600">
        5 861 500 ₽
      </p>
      <div className="mt-4 grid flex-1 grid-cols-2 items-end gap-8 pb-2">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tabular-nums text-slate-600">1 612 904 ₽</p>
          <div className="h-16 w-20 rounded-sm bg-blue-200" />
          <p className="text-xs text-slate-500">План</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tabular-nums text-emerald-700">5 861 500 ₽</p>
          <div className="h-48 w-20 rounded-sm bg-emerald-500" />
          <p className="text-xs text-slate-500">Факт</p>
        </div>
      </div>
    </div>
  );
}

function TopBlock({
  title,
  rows,
}: {
  title: string;
  rows: { name: string; amount: number; share: number; color: "emerald" | "amber" }[];
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 text-sm">
            <span className="w-1/3 truncate text-slate-700">{r.name}</span>
            <div className="flex-1">
              <div className="h-1.5 rounded-full bg-slate-100">
                <div
                  className={`h-1.5 rounded-full ${
                    r.color === "emerald" ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                  style={{ width: `${r.share}%` }}
                />
              </div>
            </div>
            <span className="w-9 text-right text-xs text-slate-600">
              {r.share}%
            </span>
            <span className="w-24 text-right font-mono tabular-nums text-slate-900">
              {formatRub(r.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
