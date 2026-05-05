export function TopBar() {
  return (
    <header className="flex h-[60px] items-center justify-between border-b border-ft-border bg-ft-surface px-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Свернуть меню"
          className="flex size-7 items-center justify-center rounded text-ft-text-on-nav/60 hover:bg-ft-surface-muted"
        >
          «
        </button>
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-ft-primary text-[13px] font-bold tracking-tight text-white">
            ФТ
          </span>
          <span className="text-[18px] font-bold tracking-tight text-ft-primary">
            Финтабло
          </span>
        </div>
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-4 text-[14px]">
        <button className="flex items-center gap-1 truncate font-semibold text-ft-text-on-nav hover:text-ft-primary">
          Строительство <span className="text-ft-text-on-nav/60">▾</span>
        </button>
        <span className="hidden font-bold text-ft-text-on-nav sm:inline">
          16 683 116 ₽
        </span>
        <button className="flex items-center gap-1 text-ft-text-on-nav hover:text-ft-primary">
          Помощь <span className="text-ft-text-on-nav/60">▾</span>
        </button>
        <button
          aria-label="Уведомления"
          className="hidden size-9 items-center justify-center rounded-full text-ft-text-on-nav hover:bg-ft-surface-muted sm:flex"
        >
          <BellIcon />
        </button>
        <button
          aria-label="Профиль"
          className="flex size-9 items-center justify-center rounded-full border border-ft-border text-ft-text-on-nav hover:bg-ft-surface-muted"
        >
          <UserIcon />
        </button>
      </div>
    </header>
  );
}

function ThemeToggle() {
  return (
    <div className="ml-2 hidden h-7 items-center gap-1 rounded-full border border-ft-border bg-ft-surface px-1 sm:flex">
      <span className="flex size-5 items-center justify-center rounded-full bg-ft-primary text-[10px] text-white">
        ☀
      </span>
      <span className="flex size-5 items-center justify-center text-[11px] text-ft-text-muted">
        ☾
      </span>
    </div>
  );
}

function BellIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
