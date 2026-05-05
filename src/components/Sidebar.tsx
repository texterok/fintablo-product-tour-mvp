"use client";

import type { Page } from "@/lib/tour";
import {
  Chevron,
  DealsIcon,
  MoneyIcon,
  PayrollIcon,
  PlanningIcon,
  ReferenceIcon,
  ReportsIcon,
  ToolsIcon,
} from "./SidebarIcons";

type Item = { key: string; label: string; page?: Page; badge?: string };
type Group = { label: string; Icon: (p: { className?: string }) => React.JSX.Element; items: Item[] };

const groups: Group[] = [
  {
    label: "Отчёты",
    Icon: ReportsIcon,
    items: [
      { key: "svodka", label: "Сводка", page: "svodka" },
      { key: "panel", label: "Панель приборов" },
      { key: "ddc", label: "Движение денег" },
      { key: "opiu", label: "Прибыли и убытки", page: "opiu" },
      { key: "obyaz", label: "Обязательства" },
      { key: "balans", label: "Баланс" },
      { key: "ai", label: "ИИ-аналитика", badge: "NEW" },
    ],
  },
  {
    label: "Деньги",
    Icon: MoneyIcon,
    items: [
      { key: "operations", label: "Операции", page: "operation" },
      { key: "auto", label: "Автоправила" },
    ],
  },
  {
    label: "Планирование",
    Icon: PlanningIcon,
    items: [
      { key: "calendar", label: "Платёжный календарь" },
      { key: "requests", label: "Заявки на оплату" },
      { key: "budget-dds", label: "Бюджет ДДС" },
      { key: "budget-dir", label: "Бюджет ДиР" },
    ],
  },
  {
    label: "Зарплаты",
    Icon: PayrollIcon,
    items: [
      { key: "vedomost", label: "Ведомость месяца" },
      { key: "svodnaya", label: "Сводная ведомость" },
      { key: "spravochnik", label: "Справочник сотрудников" },
    ],
  },
  {
    label: "Сделки",
    Icon: DealsIcon,
    items: [
      { key: "deals", label: "Учёт сделок", page: "deals" },
      { key: "catalog", label: "Каталог услуг" },
      { key: "warehouse", label: "Склад товаров" },
      { key: "profitability", label: "Рентабельность", page: "profitability" },
    ],
  },
  {
    label: "Инструменты учёта",
    Icon: ToolsIcon,
    items: [],
  },
];

export function Sidebar({
  active,
  onNavigate,
}: {
  active: Page;
  onNavigate: (page: Page) => void;
}) {
  // Detect which group contains the active page (auto-expanded)
  const activeGroupLabel =
    groups.find((g) => g.items.some((i) => i.page === active))?.label;

  return (
    <aside className="hidden w-[225px] shrink-0 flex-col border-r border-ft-border bg-ft-surface md:flex">
      <nav className="flex-1 overflow-y-auto py-2 text-[14px]">
        {groups.map((group) => {
          const isActiveGroup = group.label === activeGroupLabel;
          return (
            <div key={group.label}>
              <div
                className={`flex items-center gap-2.5 px-4 py-2 text-[14px] font-semibold ${
                  isActiveGroup
                    ? "border-l-[3px] border-ft-primary bg-ft-surface-muted pl-[13px] text-ft-primary"
                    : "border-l-[3px] border-transparent text-ft-text-on-nav"
                }`}
              >
                <Chevron open={isActiveGroup} className={isActiveGroup ? "text-ft-primary" : "text-ft-text-on-nav/50"} />
                <group.Icon className={isActiveGroup ? "text-ft-primary" : "text-ft-text-on-nav"} />
                <span>{group.label}</span>
              </div>
              {isActiveGroup && (
                <ul>
                  {group.items.map((item) => {
                    const isActive = item.page && item.page === active;
                    const clickable = !!item.page;
                    return (
                      <li key={item.key}>
                        <button
                          type="button"
                          disabled={!clickable}
                          onClick={() => item.page && onNavigate(item.page)}
                          className={`flex w-full items-center justify-between py-1.5 pl-[46px] pr-4 text-left transition ${
                            isActive
                              ? "font-semibold text-ft-primary"
                              : clickable
                                ? "text-ft-text-on-nav hover:bg-ft-surface-muted"
                                : "cursor-default text-ft-text-on-nav/40"
                          }`}
                        >
                          <span className="text-[13px]">{item.label}</span>
                          {item.badge && (
                            <span className="rounded-sm bg-ft-success px-1 py-px text-[9px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
      <div className="flex items-center gap-2.5 border-t border-ft-border px-4 py-2.5 text-[14px] font-semibold text-ft-text-on-nav">
        <Chevron open={false} className="text-ft-text-on-nav/50" />
        <ReferenceIcon className="text-ft-text-on-nav" />
        Справочники
      </div>
    </aside>
  );
}
