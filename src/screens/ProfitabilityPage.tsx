"use client";

import { useState } from "react";
import { drillDownCandidates, drillDownTotal, marginBridge } from "@/lib/data";
import { formatRubCompact, formatRub } from "@/lib/provenance";
import { ProvenanceTag } from "@/components/ProvenanceTag";

export function ProfitabilityPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-slate-900">
        Рентабельность сделок и направлений
      </h1>

      <div className="flex items-center gap-6 border-b border-slate-200">
        <Tab>Учёт сделок</Tab>
        <Tab>Услуги</Tab>
        <Tab>Товары</Tab>
        <Tab active>Рентабельность</Tab>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded border border-slate-300 bg-white px-3 text-sm text-slate-800"
        >
          ‹ Август 2024 ›
        </button>
        <button className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
          ⟳
        </button>
        <Tab2 active>Сделки</Tab2>
        <Tab2>Направления</Tab2>
      </div>

      <ProfitabilityTable />

      <div id="anchor-bridge">
        <BridgeBlock />
      </div>

      <div id="anchor-drilldown">
        <DrillDown />
      </div>
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
      className={`-mb-px border-b-2 px-1 pb-2 text-sm transition ${
        active
          ? "border-blue-600 font-semibold text-blue-700"
          : "border-transparent text-slate-600 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  );
}

function Tab2({
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
        active ? "bg-blue-600 text-white" : "border border-slate-300 bg-white text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function ProfitabilityTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
      <table className="w-full min-w-[900px] text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Сделка</th>
            <th className="px-3 py-2 text-right font-semibold">Сумма (с НДС)</th>
            <th className="px-3 py-2 text-right font-semibold">Выручка</th>
            <th className="px-3 py-2 text-right font-semibold">ФОТ</th>
            <th className="px-3 py-2 text-right font-semibold">Маржинальный доход</th>
            <th className="px-3 py-2 text-right font-semibold">Рент. по МД</th>
            <th className="px-3 py-2 text-right font-semibold">Прямые расходы</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          <tr className="bg-blue-50/40">
            <td className="px-3 py-2 font-medium">▾ ЖК Просторы 2024</td>
            <td className="px-3 py-2 text-right tabular-nums text-blue-700">700 000</td>
            <td className="px-3 py-2 text-right tabular-nums">700 000</td>
            <td className="px-3 py-2 text-right tabular-nums">0</td>
            <td className="px-3 py-2 text-right tabular-nums">700 000</td>
            <td className="px-3 py-2 text-right tabular-nums text-emerald-600">100%</td>
            <td className="px-3 py-2 text-right tabular-nums">4 586</td>
          </tr>
          <tr>
            <td className="px-3 py-2 pl-8 italic text-slate-600">— Август 24</td>
            <td className="px-3 py-2 text-right tabular-nums">700 000</td>
            <td className="px-3 py-2 text-right tabular-nums">700 000</td>
            <td className="px-3 py-2 text-right tabular-nums">0</td>
            <td className="px-3 py-2 text-right tabular-nums">700 000</td>
            <td className="px-3 py-2 text-right tabular-nums text-emerald-600">100%</td>
            <td className="px-3 py-2 text-right tabular-nums">4 586</td>
          </tr>
          <tr>
            <td className="px-3 py-2">▸ Договор ИРРЗПИЗ-4693</td>
            <td className="px-3 py-2 text-right tabular-nums">875 000</td>
            <td className="px-3 py-2 text-right tabular-nums">875 000</td>
            <td className="px-3 py-2 text-right tabular-nums">218 750</td>
            <td className="px-3 py-2 text-right tabular-nums">656 250</td>
            <td className="px-3 py-2 text-right tabular-nums text-emerald-600">75%</td>
            <td className="px-3 py-2 text-right tabular-nums">4 586</td>
          </tr>
          <tr className="bg-slate-50 font-semibold">
            <td className="px-3 py-2">Итого</td>
            <td className="px-3 py-2 text-right tabular-nums">1 575 000</td>
            <td className="px-3 py-2 text-right tabular-nums">1 575 000</td>
            <td className="px-3 py-2 text-right tabular-nums">218 750</td>
            <td className="px-3 py-2 text-right tabular-nums">1 356 250</td>
            <td className="px-3 py-2 text-right tabular-nums text-emerald-600">86,11%</td>
            <td className="px-3 py-2 text-right tabular-nums">4 586</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function BridgeBlock() {
  return (
    <div className="space-y-3 rounded-md border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Margin bridge: 89% → 74%
        </h2>
        <span className="rounded bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-700">
          Августовские итоги по 7 сделкам
        </span>
      </div>
      <p className="text-sm text-slate-600">
        Между маржинальным доходом и валовой прибылью —{" "}
        <span className="font-semibold text-slate-900">2 403 170 ₽</span>. Финтабло
        раскладывает разницу на 5 шагов.
      </p>
      <Waterfall />
    </div>
  );
}

const VBW = 920;
const VBH = 320;
const PADX = 40;
const PADTOP = 40;
const PADBOT = 60;
const GAP = 16;

function Waterfall() {
  const [active, setActive] = useState<string | null>("otherDealExpenses");

  let running = 0;
  const max = 16_500_000;
  const items = marginBridge.map((seg) => {
    let start: number, end: number;
    if (seg.kind === "anchor") {
      start = 0;
      end = seg.amount;
      running = seg.amount;
    } else {
      const next = running + seg.amount;
      start = Math.min(running, next);
      end = Math.max(running, next);
      running = next;
    }
    return { seg, start, end };
  });

  const innerW = VBW - PADX * 2;
  const innerH = VBH - PADTOP - PADBOT;
  const barW = (innerW - GAP * (items.length - 1)) / items.length;
  const yScale = (v: number) => PADTOP + innerH - (v / max) * innerH;

  const activeSeg = items.find((it) => it.seg.key === active)?.seg ?? items[0].seg;

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded border border-slate-100 bg-slate-50/50 p-3">
        <svg viewBox={`0 0 ${VBW} ${VBH}`} className="w-full min-w-[640px]">
          <line x1={PADX} x2={VBW - PADX} y1={yScale(0)} y2={yScale(0)} stroke="#cbd5e1" />
          {items.map((it, i) => {
            const x = PADX + i * (barW + GAP);
            const y = yScale(it.end);
            const h = Math.max(yScale(it.start) - yScale(it.end), 4);
            const fill =
              it.seg.kind === "anchor"
                ? it.seg.key === "revenue"
                  ? "#1e293b"
                  : it.seg.key === "marginIncome"
                    ? "#10b981"
                    : "#f59e0b"
                : it.seg.amount < 0
                  ? "#fca5a5"
                  : "#86efac";
            const isActive = active === it.seg.key;
            return (
              <g
                key={it.seg.key}
                onMouseEnter={() => setActive(it.seg.key)}
                tabIndex={0}
                onFocus={() => setActive(it.seg.key)}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={h}
                  fill={fill}
                  rx={4}
                  opacity={isActive ? 1 : 0.85}
                  stroke={isActive ? "#1d4ed8" : "transparent"}
                  strokeWidth={2}
                />
                <text
                  x={x + barW / 2}
                  y={y - 8}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={600}
                  fill="#0f172a"
                >
                  {formatRubCompact(it.seg.amount)}
                </text>
                {it.seg.pct !== undefined && (
                  <text
                    x={x + barW / 2}
                    y={y + h / 2 + 6}
                    textAnchor="middle"
                    fontSize={20}
                    fontWeight={700}
                    fill="#fff"
                  >
                    {it.seg.pct}%
                  </text>
                )}
                <text
                  x={x + barW / 2}
                  y={VBH - PADBOT + 18}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#475569"
                >
                  {wrap(it.seg.label)[0]}
                </text>
                <text
                  x={x + barW / 2}
                  y={VBH - PADBOT + 32}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#475569"
                >
                  {wrap(it.seg.label)[1] ?? ""}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="rounded border border-slate-200 bg-white p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-slate-900">{activeSeg.label}</span>
          <ProvenanceTag provenance={activeSeg.provenance} source={activeSeg.source} />
          <span className="ml-auto font-mono text-sm tabular-nums text-slate-900">
            {activeSeg.amount > 0 ? "+" : ""}
            {formatRub(activeSeg.amount)}
          </span>
        </div>
        {activeSeg.description && (
          <p className="mt-1 text-xs text-slate-600">{activeSeg.description}</p>
        )}
        <p className="mt-1 text-[11px] text-slate-500">{activeSeg.source}</p>
      </div>
    </div>
  );
}

function wrap(label: string): [string, string?] {
  if (label.length <= 22) return [label];
  const words = label.split(" ");
  const half = Math.ceil(words.length / 2);
  return [words.slice(0, half).join(" "), words.slice(half).join(" ")];
}

function DrillDown() {
  const [open, setOpen] = useState<string | null>("materials");
  return (
    <div className="rounded-md border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
        <p className="text-sm font-semibold text-slate-900">
          Прочие расходы по сделкам — расшифровка
        </p>
        <div className="flex items-center gap-2">
          <ProvenanceTag provenance="REAL" source={drillDownTotal.source} />
          <span className="font-mono text-base font-semibold tabular-nums text-slate-900">
            {formatRub(drillDownTotal.value)}
          </span>
        </div>
      </div>
      <div className="border-l-4 border-amber-400 bg-amber-50 px-5 py-3 text-[13px] text-amber-900">
        <span className="font-semibold">Расшифровка категорий смоделирована.</span>{" "}
        Итог 2 403 170 ₽ — реальный (REAL). Разбивка по категориям —
        иллюстративная (SIMULATED): какие именно расходы по сделкам обычно
        встречаются у строительных компаний.
      </div>
      <ul className="divide-y divide-slate-100">
        {drillDownCandidates.map((cat) => {
          const isOpen = open === cat.key;
          return (
            <li key={cat.key}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : cat.key)}
                className="flex w-full items-center gap-3 px-5 py-3 text-left transition hover:bg-slate-50"
              >
                <span className="text-slate-400">{isOpen ? "▾" : "▸"}</span>
                <span className="flex-1 text-sm text-slate-800">{cat.label}</span>
                <ProvenanceTag
                  provenance={cat.amount.provenance}
                  source={cat.amount.source}
                />
                <span className="w-32 text-right font-mono tabular-nums text-slate-900">
                  {formatRubCompact(cat.amount.value)}
                </span>
              </button>
              {isOpen && cat.example && (
                <div className="bg-slate-50/60 px-12 pb-4 pt-1 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">Пример: </span>
                    {cat.example}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    В реальном Финтабло строка кликабельна до конкретной операции
                    в банке. Trace-механика — на следующем шаге разбора.
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
