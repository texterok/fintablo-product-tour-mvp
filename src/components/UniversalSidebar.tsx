"use client";

import type { UniversalPage } from "@/lib/tour-universal";
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

type Item = { key: string; label: string; pages?: UniversalPage[]; badge?: string };
type Group = {
  key: string;
  label: string;
  Icon: (p: { className?: string }) => React.JSX.Element;
  items: Item[];
};

const groups: Group[] = [
  {
    key: "reports",
    label: "Отчёты",
    Icon: ReportsIcon,
    items: [
      { key: "svodka", label: "Сводка" },
      { key: "panel", label: "Панель приборов" },
      { key: "ddc", label: "Движение денег" },
      { key: "opiu", label: "Прибыли и убытки" },
      { key: "obyaz", label: "Обязательства" },
      { key: "balans", label: "Баланс" },
      { key: "ai", label: "ИИ-аналитика", badge: "NEW" },
    ],
  },
  {
    key: "money",
    label: "Деньги",
    Icon: MoneyIcon,
    items: [
      { key: "operations", label: "Операции", pages: ["operations"] },
      { key: "auto", label: "Автоправила" },
    ],
  },
  {
    key: "planning",
    label: "Планирование",
    Icon: PlanningIcon,
    items: [
      {
        key: "calendar",
        label: "Платёжный календарь",
        pages: ["calendar"],
      },
      { key: "requests", label: "Заявки на оплату" },
      { key: "budget-dds", label: "Бюджет ДДС" },
      { key: "budget-dir", label: "Бюджет ДиР" },
    ],
  },
  {
    key: "payroll",
    label: "Зарплаты",
    Icon: PayrollIcon,
    items: [
      { key: "vedomost", label: "Ведомость месяца" },
      { key: "svodnaya", label: "Сводная ведомость" },
      { key: "spravochnik", label: "Справочник сотрудников" },
    ],
  },
  {
    key: "deals",
    label: "Сделки",
    Icon: DealsIcon,
    items: [
      {
        key: "all",
        label: "Учёт сделок",
        pages: ["deals", "stages"],
      },
      { key: "services", label: "Услуги" },
      { key: "goods", label: "Товары" },
      { key: "profitability", label: "Рентабельность" },
    ],
  },
  {
    key: "tools",
    label: "Инструменты учёта",
    Icon: ToolsIcon,
    items: [],
  },
];

const refsItems: Item[] = [
  { key: "accounts", label: "Счета и реквизиты", pages: ["virtual-account"] },
  { key: "counterparties", label: "Контрагенты" },
  { key: "categories", label: "Статьи" },
];

export function UniversalSidebar({ active }: { active: UniversalPage }) {
  const activeGroupKey = groups.find((g) =>
    g.items.some((i) => i.pages?.includes(active)),
  )?.key;
  const isRefsActive = refsItems.some((i) => i.pages?.includes(active));

  return (
    <aside className="hidden w-[225px] shrink-0 flex-col border-r border-ft-border bg-ft-surface md:flex">
      <nav className="flex-1 overflow-y-auto py-2 text-[14px]">
        {groups.map((group) => {
          const isActiveGroup = group.key === activeGroupKey;
          return (
            <div key={group.key}>
              <div
                className={`flex items-center gap-2.5 px-4 py-2 text-[14px] font-semibold ${
                  isActiveGroup
                    ? "border-l-[3px] border-ft-primary bg-ft-surface-muted pl-[13px] text-ft-primary"
                    : "border-l-[3px] border-transparent text-ft-text-on-nav"
                }`}
              >
                <Chevron
                  open={isActiveGroup}
                  className={
                    isActiveGroup
                      ? "text-ft-primary"
                      : "text-ft-text-on-nav/50"
                  }
                />
                <group.Icon
                  className={
                    isActiveGroup ? "text-ft-primary" : "text-ft-text-on-nav"
                  }
                />
                <span>{group.label}</span>
              </div>
              {isActiveGroup && (
                <ul>
                  {group.items.map((item) => {
                    const isActive = item.pages?.includes(active) ?? false;
                    return (
                      <li key={item.key}>
                        <div
                          className={`flex w-full items-center justify-between py-1.5 pl-[46px] pr-4 text-left ${
                            isActive
                              ? "font-semibold text-ft-primary"
                              : "text-ft-text-on-nav/60"
                          }`}
                        >
                          <span className="text-[13px]">{item.label}</span>
                          {item.badge && (
                            <span className="rounded-sm bg-ft-success px-1 py-px text-[9px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
      <div>
        <div
          className={`flex items-center gap-2.5 border-l-[3px] border-t border-t-ft-border px-4 py-2.5 text-[14px] font-semibold ${
            isRefsActive
              ? "border-ft-primary bg-ft-surface-muted pl-[13px] text-ft-primary"
              : "border-transparent text-ft-text-on-nav"
          }`}
        >
          <Chevron
            open={isRefsActive}
            className={
              isRefsActive ? "text-ft-primary" : "text-ft-text-on-nav/50"
            }
          />
          <ReferenceIcon
            className={isRefsActive ? "text-ft-primary" : "text-ft-text-on-nav"}
          />
          Справочники
        </div>
        {isRefsActive && (
          <ul>
            {refsItems.map((item) => {
              const isActive = item.pages?.includes(active) ?? false;
              return (
                <li key={item.key}>
                  <div
                    className={`flex w-full items-center justify-between py-1.5 pl-[46px] pr-4 text-left ${
                      isActive
                        ? "font-semibold text-ft-primary"
                        : "text-ft-text-on-nav/60"
                    }`}
                  >
                    <span className="text-[13px]">{item.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}
