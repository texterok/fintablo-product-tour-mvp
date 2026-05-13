// Brand palette inspired by jarvis-memory:
// bg-deep #0a0712, bg #120d1f, bg-card #1a1428, bg-elev #241d37
// amber #e8c154, violet #9d7cff, teal #50e3c2, pink #ff6b9d

export function HandoffPage() {
  return (
    <div className="handoff-root">
      <style>{`
        :root {
          --bg-deep: #070510;
          --bg: #120d1f;
          --bg-card: #1a1428;
          --bg-elev: #241d37;
          --border: rgba(232, 193, 84, 0.18);
          --border-soft: rgba(240, 235, 224, 0.08);
          --text: #f0ebe0;
          --muted: #a79fb0;
          --dim: #6f6780;
          --amber: #e8c154;
          --amber-soft: #ffd970;
          --violet: #9d7cff;
          --violet-soft: #b79aff;
          --teal: #50e3c2;
          --pink: #ff6b9d;
          --grad-brand: linear-gradient(135deg, var(--amber), var(--violet));
          --grad-brand-soft: linear-gradient(135deg, rgba(232,193,84,0.18), rgba(157,124,255,0.18));
          --grad-text: linear-gradient(180deg, var(--amber), var(--violet));
        }
        .handoff-root {
          min-height: 100vh;
          background: var(--bg);
          background-image: radial-gradient(circle at top, rgba(232, 193, 84, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(157, 124, 255, 0.06) 0%, transparent 50%);
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
          line-height: 1.6;
          padding-bottom: 80px;
        }
        .handoff-root a {
          color: var(--amber);
          text-decoration: none;
          border-bottom: 1px solid rgba(232, 193, 84, 0.3);
          transition: border-color 0.2s;
        }
        .handoff-root a:hover {
          border-bottom-color: var(--amber);
        }

        /* Header */
        .h-header {
          padding: 32px 24px 0;
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .h-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 18px;
        }
        .h-logo-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--grad-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: var(--bg-deep);
        }
        .h-tag {
          display: inline-block;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--amber);
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(232, 193, 84, 0.04);
        }

        /* Hero */
        .h-hero {
          max-width: 1080px;
          margin: 24px auto 0;
          padding: 56px 24px 56px;
        }
        .h-eyebrow {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
          margin: 0 0 16px;
        }
        .h-title {
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 22px;
          background: var(--grad-text);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          max-width: 900px;
        }
        .h-sub {
          font-size: 19px;
          line-height: 1.55;
          color: var(--muted);
          max-width: 720px;
          margin: 0 0 36px;
        }
        .h-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .h-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 26px;
          background: var(--grad-brand);
          color: var(--bg-deep) !important;
          font-weight: 700;
          border-radius: 999px;
          border: none !important;
          font-size: 16px;
        }
        .h-btn-primary:hover { opacity: 0.92; }
        .h-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 26px;
          background: transparent;
          color: var(--text) !important;
          font-weight: 600;
          border-radius: 999px;
          border: 1px solid var(--border) !important;
          font-size: 16px;
        }
        .h-btn-secondary:hover { background: rgba(232,193,84,0.06); }

        /* Sections */
        .h-section {
          max-width: 1080px;
          margin: 0 auto;
          padding: 40px 24px;
        }
        .h-section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--violet);
          margin: 0 0 10px;
        }
        .h-section-title {
          font-size: clamp(28px, 3.4vw, 40px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
          color: var(--text);
        }
        .h-section-sub {
          font-size: 17px;
          color: var(--muted);
          margin: 0 0 28px;
          max-width: 760px;
          line-height: 1.55;
        }

        /* Demo grid */
        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
          margin-top: 8px;
        }
        .demo-card {
          padding: 22px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-left: 3px solid;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none !important;
          color: inherit !important;
        }
        .demo-card:hover {
          transform: translateY(-2px);
          border-color: var(--border);
        }
        .demo-card.tone-amber { border-left-color: var(--amber); }
        .demo-card.tone-violet { border-left-color: var(--violet); }
        .demo-card.tone-teal { border-left-color: var(--teal); }
        .demo-card.tone-pink { border-left-color: var(--pink); }
        .demo-eyebrow {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--dim);
          margin: 0;
        }
        .demo-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--text);
          margin: 0;
          line-height: 1.25;
        }
        .demo-desc {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }
        .demo-link {
          font-size: 13px;
          color: var(--amber);
          font-weight: 600;
          margin-top: auto;
          padding-top: 8px;
        }

        /* Under the hood */
        .hood-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
          margin-top: 8px;
        }
        .hood-card {
          padding: 28px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 14px;
        }
        .hood-tag {
          display: inline-block;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--violet-soft);
          background: rgba(157, 124, 255, 0.1);
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .hood-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .hood-card p {
          font-size: 15px;
          color: var(--muted);
          margin: 10px 0;
          line-height: 1.6;
        }
        .hood-points {
          margin: 14px 0 0;
          padding-left: 0;
          list-style: none;
        }
        .hood-points li {
          font-size: 14px;
          color: var(--muted);
          padding: 6px 0 6px 22px;
          position: relative;
          line-height: 1.5;
        }
        .hood-points li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--amber);
          font-weight: 700;
        }

        /* Receive section */
        .receive-block {
          padding: 32px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .receive-block h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 12px;
        }
        .receive-block p {
          color: var(--muted);
          font-size: 16px;
          margin: 0 0 20px;
          line-height: 1.6;
        }
        .receive-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        /* How it works — two copies + SVG */
        .branches-wrap {
          margin: 8px 0 32px;
          padding: 24px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 14px;
          overflow-x: auto;
        }
        .branches-svg {
          width: 100%;
          height: auto;
          min-width: 720px;
          display: block;
        }
        .flow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .flow-card {
          padding: 24px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 12px;
        }
        .flow-tag {
          display: inline-block;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--amber);
          background: rgba(232, 193, 84, 0.1);
          border-radius: 999px;
          margin: 0 0 12px;
        }
        .flow-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .flow-card p {
          font-size: 14px;
          color: var(--muted);
          margin: 10px 0;
          line-height: 1.6;
        }
        .flow-note {
          padding: 12px 14px;
          background: rgba(80, 227, 194, 0.06);
          border-left: 2px solid var(--teal);
          border-radius: 0 8px 8px 0;
          font-size: 13px !important;
          color: var(--muted) !important;
          margin: 12px 0 0 !important;
        }
        .conflict-block {
          margin-top: 20px;
          padding: 22px 26px;
          background: rgba(255, 107, 157, 0.05);
          border: 1px solid rgba(255, 107, 157, 0.25);
          border-radius: 14px;
        }
        .conflict-block h4 {
          font-size: 15px;
          font-weight: 700;
          color: var(--pink);
          margin: 0 0 8px;
          text-transform: none;
        }
        .conflict-block p {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          line-height: 1.6;
        }
        .zones-note {
          margin-top: -12px;
          margin-bottom: 24px;
          padding: 18px 22px;
          background: rgba(157, 124, 255, 0.06);
          border-left: 3px solid var(--violet);
          border-radius: 0 10px 10px 0;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }
        .zones-note strong {
          color: var(--text);
        }
        .kbd {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          font-size: 0.88em;
          padding: 1px 6px;
          border-radius: 4px;
          background: rgba(240, 235, 224, 0.06);
          border: 1px solid var(--border-soft);
          color: var(--amber-soft);
        }

        /* Boundaries — what Roma changes / what Ivan owns */
        .boundary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 8px;
        }
        .boundary-card {
          padding: 26px;
          background: var(--bg-card);
          border-radius: 14px;
          border: 1px solid var(--border-soft);
        }
        .boundary-card.zone-roma {
          border-left: 3px solid var(--teal);
        }
        .boundary-card.zone-ivan {
          border-left: 3px solid var(--violet);
        }
        .boundary-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .boundary-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 800;
        }
        .zone-roma .boundary-icon { background: rgba(80, 227, 194, 0.15); color: var(--teal); }
        .zone-ivan .boundary-icon { background: rgba(157, 124, 255, 0.15); color: var(--violet); }
        .boundary-head h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .boundary-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .boundary-list li {
          font-size: 15px;
          color: var(--muted);
          padding: 8px 0;
          line-height: 1.5;
          border-top: 1px solid var(--border-soft);
        }
        .boundary-list li:first-child { border-top: none; }

        /* Updates */
        .updates-block {
          padding: 28px;
          background: rgba(80, 227, 194, 0.04);
          border: 1px solid rgba(80, 227, 194, 0.2);
          border-radius: 14px;
        }
        .updates-block h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 10px;
        }
        .updates-block p {
          color: var(--muted);
          font-size: 15px;
          margin: 0;
          line-height: 1.6;
        }

        /* Final */
        .final-block {
          max-width: 1080px;
          margin: 56px auto 0;
          padding: 48px 32px;
          border-radius: 18px;
          background: var(--grad-brand-soft);
          border: 1px solid var(--border);
          text-align: center;
        }
        .final-block h2 {
          font-size: clamp(28px, 3.4vw, 36px);
          font-weight: 800;
          color: var(--text);
          margin: 0 0 14px;
        }
        .final-block p {
          color: var(--muted);
          font-size: 17px;
          margin: 0 0 28px;
          line-height: 1.55;
        }

        @media (max-width: 720px) {
          .boundary-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header */}
      <header className="h-header">
        <div className="h-logo">
          <span className="h-logo-mark">F</span>
          <span>Fintablo · Product Tour</span>
        </div>
        <span className="h-tag">Для Романа</span>
      </header>

      {/* Hero */}
      <section className="h-hero">
        <p className="h-eyebrow">Привет, Рома</p>
        <h1 className="h-title">
          Прототип product tour для агентств — готов к работе
        </h1>
        <p className="h-sub">
          Открой его в браузере, потрогай, посмотри как устроен. Если зайдёт —
          договоримся, как передать тебе и куда двигаться дальше.
        </p>
        <div className="h-cta-row">
          <a
            href="/fintablo-product-tour-mvp/demo/"
            className="h-btn-primary"
          >
            Открыть прототип →
          </a>
          <a href="#how" className="h-btn-secondary">
            Что под капотом
          </a>
        </div>
      </section>

      {/* Demo entry points */}
      <section className="h-section">
        <p className="h-section-eyebrow">Что посмотреть</p>
        <h2 className="h-section-title">Три демо-разбора для трёх типов бизнеса</h2>
        <p className="h-section-sub">
          Каждый разбор — 90 секунд по одной реальной задаче. Открой любой,
          пройди до конца. Кликабельные, без регистрации.
        </p>
        <div className="demo-grid">
          <a
            className="demo-card tone-pink"
            href="/fintablo-product-tour-mvp/demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="demo-eyebrow">Стартовая точка</p>
            <p className="demo-title">Роутер выбора разбора</p>
            <p className="demo-desc">
              Холодный посетитель выбирает свой бизнес — стройка, агентство
              или монтаж. Дальше уходит в нужный разбор.
            </p>
            <span className="demo-link">Открыть →</span>
          </a>
          <a
            className="demo-card tone-amber"
            href="/fintablo-product-tour-mvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="demo-eyebrow">Стройка · СМР · ПИР</p>
            <p className="demo-title">Куда утекает прибыль</p>
            <p className="demo-desc">
              Выручка 16 млн, до прибыли доходит только 12. Покажем где
              исчезают остальные 4 — по объектам, статьям и подрядчикам.
            </p>
            <span className="demo-link">Открыть →</span>
          </a>
          <a
            className="demo-card tone-violet"
            href="/fintablo-product-tour-mvp/agency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="demo-eyebrow">Агентство · услуги с авансами</p>
            <p className="demo-title">Клиент заплатил, команде нечем</p>
            <p className="demo-desc">
              Аванс получили, через 3 недели на счёте −340 000 ₽. Покажем как
              отделить деньги клиента от заработанных и видеть кассовый разрыв
              заранее.
            </p>
            <span className="demo-link">Открыть →</span>
          </a>
          <a
            className="demo-card tone-teal"
            href="/fintablo-product-tour-mvp/start/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="demo-eyebrow">Монтаж · сервис · ОВК</p>
            <p className="demo-title">Контракт ушёл в минус на этапе</p>
            <p className="demo-desc">
              План 7 млн прибыли, факт 5,56 млн. Покажем где именно потеряли
              1,44 млн — на этапе монтажа, ФОТ-перерасход и гарантийное
              удержание.
            </p>
            <span className="demo-link">Открыть →</span>
          </a>
        </div>
      </section>

      {/* Under the hood */}
      <section id="how" className="h-section">
        <p className="h-section-eyebrow">Что под капотом</p>
        <h2 className="h-section-title">Две вещи, на которых всё держится</h2>
        <p className="h-section-sub">
          Это не «креативный лендинг». Это алгоритм: AJTBD-разбор кейсов
          переплавляется в посадку по чёткой схеме. Меньше гадания, больше
          повторяемости.
        </p>
        <div className="hood-grid">
          <div className="hood-card">
            <span className="hood-tag">Часть 1 · Методология</span>
            <h3>AJTBD-разбор кейсов клиентов</h3>
            <p>
              Каждый клиентский кейс с сайта Финтабло разложен по фреймворку
              Ивана Замесина: что человек на самом деле «нанимает» делать,
              в какой момент он это понимает, что мешает решиться.
            </p>
            <ul className="hood-points">
              <li>Главная задача собственника (Big Job)</li>
              <li>Конкретные работы продукта (Core Jobs)</li>
              <li>Триггеры и контексты — когда возникает потребность</li>
              <li>Барьеры — что мешает купить и что мешает действовать</li>
              <li>Aha-моменты — когда человек понимает ценность</li>
            </ul>
            <p>
              На входе — 22 разобранных кейса. На выходе — таблица фактов,
              из которой собирается лендинг.
            </p>
          </div>
          <div className="hood-card">
            <span className="hood-tag">Часть 2 · Технология</span>
            <h3>Сборка посадки из разобранных кейсов</h3>
            <p>
              По методологии Замесин Модуль 4 «Упаковать продукт и вырастить
              конверсию» из AJTBD-блоков собирается лендинг по конкретной
              структуре, без креатива.
            </p>
            <ul className="hood-points">
              <li>Заголовок по одной из 50+ формул (Core Job + ценность, триггер + задача и т.п.)</li>
              <li>Блок «где болит сейчас» — против текущих инструментов клиента</li>
              <li>Превью разбора — что покажем за 90 секунд</li>
              <li>Барьеры к покупке и барьеры к действию — каждый со своим контр-аргументом</li>
              <li>Социальное доказательство — три реальных кейса</li>
              <li>Финальный CTA — без формы, сразу в разбор</li>
            </ul>
            <p>
              Каждая посадка проходит ревью на соответствие методологии и
              copy-guidelines (русский язык, рубли важнее процентов, никаких
              абстрактных «быстро/удобно»).
            </p>
          </div>
        </div>
      </section>

      {/* How it works — two copies */}
      <section className="h-section">
        <p className="h-section-eyebrow">Как это работает</p>
        <h2 className="h-section-title">Две копии проекта — твоя и моя</h2>
        <p className="h-section-sub">
          После «беру» у тебя своя копия проекта, у меня — своя. Они не
          синхронизированы автоматически. Твои правки не приезжают ко мне,
          мои не приезжают к тебе в фоновом режиме. Обновления — по команде.
        </p>

        <div className="branches-wrap">
          <svg
            viewBox="0 0 800 240"
            className="branches-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Схема двух веток проекта"
          >
            <defs>
              <marker
                id="arrow-amber"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="#e8c154" />
              </marker>
              <marker
                id="arrow-teal"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="#50e3c2" />
              </marker>
            </defs>

            {/* Ivan branch */}
            <text x="20" y="38" fill="#9d7cff" fontSize="14" fontWeight="700">
              Моя копия
            </text>
            <text x="20" y="56" fill="#a79fb0" fontSize="12">
              методология, движок туров
            </text>
            <line x1="20" y1="80" x2="780" y2="80" stroke="#9d7cff" strokeWidth="2" />

            {/* Ivan commits */}
            <circle cx="80" cy="80" r="7" fill="#9d7cff" />
            <text x="80" y="105" fill="#a79fb0" fontSize="11" textAnchor="middle">
              старт
            </text>
            <circle cx="260" cy="80" r="7" fill="#9d7cff" />
            <text x="260" y="105" fill="#a79fb0" fontSize="11" textAnchor="middle">
              новая формула H1
            </text>
            <circle cx="500" cy="80" r="7" fill="#9d7cff" />
            <text x="500" y="105" fill="#a79fb0" fontSize="11" textAnchor="middle">
              разобран новый кейс
            </text>
            <circle cx="700" cy="80" r="7" fill="#9d7cff" />
            <text x="700" y="105" fill="#a79fb0" fontSize="11" textAnchor="middle">
              ...
            </text>

            {/* Roma branch */}
            <text x="20" y="200" fill="#50e3c2" fontSize="14" fontWeight="700">
              Твоя копия
            </text>
            <text x="20" y="218" fill="#a79fb0" fontSize="12">
              тексты, цифры, кейсы
            </text>
            <line x1="80" y1="160" x2="780" y2="160" stroke="#50e3c2" strokeWidth="2" />

            {/* Branch off */}
            <path d="M 80 80 Q 80 120 110 130 L 110 160" stroke="#50e3c2" strokeWidth="2" fill="none" />

            {/* Roma commits */}
            <circle cx="160" cy="160" r="7" fill="#50e3c2" />
            <text x="160" y="148" fill="#a79fb0" fontSize="11" textAnchor="middle">
              правишь H1
            </text>
            <circle cx="340" cy="160" r="7" fill="#50e3c2" />
            <text x="340" y="148" fill="#a79fb0" fontSize="11" textAnchor="middle">
              меняешь цифры
            </text>

            {/* Pull arrow from Ivan to Roma */}
            <path
              d="M 500 90 Q 480 130 440 152"
              stroke="#e8c154"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
              markerEnd="url(#arrow-amber)"
            />
            <text x="430" y="125" fill="#e8c154" fontSize="11" fontWeight="700">
              Pull
            </text>

            <circle cx="440" cy="160" r="9" fill="#e8c154" stroke="#1a1428" strokeWidth="2" />
            <text x="440" y="185" fill="#e8c154" fontSize="11" textAnchor="middle" fontWeight="700">
              мерж
            </text>

            {/* Roma continues */}
            <circle cx="560" cy="160" r="7" fill="#50e3c2" />
            <text x="560" y="148" fill="#a79fb0" fontSize="11" textAnchor="middle">
              ещё правки
            </text>
            <circle cx="700" cy="160" r="7" fill="#50e3c2" />
            <text x="700" y="148" fill="#a79fb0" fontSize="11" textAnchor="middle">
              ...
            </text>
          </svg>
        </div>

        <div className="flow-grid">
          <div className="flow-card">
            <p className="flow-tag">Что делаешь ты</p>
            <h3>Правишь — изменения только у тебя</h3>
            <p>
              Когда твой разработчик меняет текст заголовка или цифру в
              разборе — это сохраняется в твоей копии. На твоём боевом
              домене новый текст. На моём <span className="kbd">texterok.github.io</span>{" "}
              — старый. Ко мне ничего не приезжает автоматически.
            </p>
            <p className="flow-note">
              Если хочешь, чтобы я о твоей правке узнал — напиши в Telegram.
              Если хочешь, чтобы правка стала частью основы для всех будущих
              версий — тоже напиши, перенесу к себе.
            </p>
          </div>
          <div className="flow-card">
            <p className="flow-tag">Что делаю я</p>
            <h3>Обновляю — приезжает к тебе по команде</h3>
            <p>
              Я разбираю новый кейс или меняю формулу H1 — это уходит в мою
              копию. У тебя ничего не меняется автоматически. Когда захочешь
              получить мои обновления, твой разработчик нажимает одну
              кнопку — называется «Pull». Это 5 секунд.
            </p>
            <p className="flow-note">
              Твои тексты и цифры остаются на месте — Pull их не трогает.
              Объединение делается автоматически.
            </p>
          </div>
        </div>

        <div className="conflict-block">
          <h4>А если конфликт?</h4>
          <p>
            Конфликт случается только если ты и я правили <strong>одну и ту
            же строку в одном и том же файле</strong> — это бывает редко,
            если соблюдать зоны (см. ниже). Когда такое всё-таки случается,
            VS Code у разработчика показывает простой выбор: «оставить
            твоё», «взять моё», «взять оба». 1 клик, конфликт закрыт.
          </p>
        </div>
      </section>

      {/* Boundaries */}
      <section className="h-section">
        <p className="h-section-eyebrow">Зоны ответственности</p>
        <h2 className="h-section-title">Что меняешь ты, что обновляю я</h2>
        <p className="h-section-sub">
          Чтобы не наступать друг другу на ноги. Если захочешь править копи
          и цифры — это безопасно. Архитектуру и методологию обновляю я и
          присылаю тебе свежую версию.
        </p>
        <div className="zones-note">
          <strong>Технически можно править всё.</strong> Граница работает
          через договорённость, не через запрет. Если ты тронешь файл из
          моей зоны — при следующем Pull твои правки в этом файле
          перезапишутся моей версией. Если хочешь внести что-то в основу —
          скажи мне в Telegram, я внесу у себя, и оно прикатит к тебе со
          следующим обновлением как новая стандартная часть.
        </div>
        <div className="boundary-grid">
          <div className="boundary-card zone-roma">
            <div className="boundary-head">
              <span className="boundary-icon">✓</span>
              <h3>Твоя зона</h3>
            </div>
            <ul className="boundary-list">
              <li>Тексты лендингов — заголовки, подзаголовки, кнопки</li>
              <li>Цифры в разборах — выручка, прибыль, имена компаний</li>
              <li>Список кейсов в социальном доказательстве</li>
              <li>SEO-описания страниц и метатеги</li>
              <li>Брендинг — лого, цвета второстепенных элементов</li>
            </ul>
          </div>
          <div className="boundary-card zone-ivan">
            <div className="boundary-head">
              <span className="boundary-icon">◆</span>
              <h3>Моя зона</h3>
            </div>
            <ul className="boundary-list">
              <li>Методология AJTBD — разбор новых кейсов</li>
              <li>Алгоритм сборки посадки — обновления формул</li>
              <li>Архитектура и движок туров</li>
              <li>Дизайн-система — общие цвета, шрифты, отступы</li>
              <li>Шаги внутри туров — последовательность экранов</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to receive + updates */}
      <section className="h-section">
        <p className="h-section-eyebrow">Как получить</p>
        <h2 className="h-section-title">Передача в три шага</h2>
        <p className="h-section-sub">
          Никаких терминалов и сложных инструкций. Дальше всё делается
          через разработчика на твоей стороне или мной по запросу.
        </p>
        <div className="receive-block">
          <h3>1. Скажи «беру»</h3>
          <p>
            Напиши в Telegram, что хочешь получить исходник. Я открою тебе
            доступ к репозиторию и пришлю короткое видео-обзорное прохождение
            (10 минут, без кода — на уровне «вот тут лендинги, вот тут
            методология, вот тут кейсы»).
          </p>
          <h3 style={{ marginTop: 28 }}>2. Передай разработчику</h3>
          <p>
            Если у тебя есть человек, который верстает лендинги — отдай ему
            одну ссылку на инструкцию:{" "}
            <a
              href="https://github.com/texterok/fintablo-product-tour-mvp/blob/main/ROMA-DEV-README.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--amber)" }}
            >
              ROMA-DEV-README.md
            </a>
            . Внутри — пошагово: форк репозитория в аккаунт Финтабло, локальная
            настройка, как тянуть мои обновления, как деплоить копию на{" "}
            <span style={{ color: "var(--amber)", whiteSpace: "nowrap" }}>
              fintablo.ru/demo
            </span>{" "}
            (Vercel — 15 минут, один клик). Структурно проект разделён на
            «зону Романа» и «зону Ивана» — разработчик видит границу,
            CI-скрипт на форке блокирует случайные правки за границу.
          </p>
          <h3 style={{ marginTop: 28 }}>3. Меняй копи у себя</h3>
          <p>
            Когда хочешь заменить заголовок, цифру в разборе или добавить
            кейс — твой разработчик правит файлы из «твоей зоны» (папка{" "}
            <span style={{ color: "var(--amber)", whiteSpace: "nowrap" }}>
              src/tours/&lt;тур&gt;/data.ts
            </span>{" "}
            и landing-copy). 5 минут на правку, автодеплой Vercel, без
            согласования со мной.
          </p>
          <div className="receive-cta-row">
            <a
              href="https://t.me/texterok"
              target="_blank"
              rel="noopener noreferrer"
              className="h-btn-primary"
            >
              Написать в Telegram →
            </a>
          </div>
        </div>

        <div className="updates-block" style={{ marginTop: 20 }}>
          <h3>Обновления от меня</h3>
          <p>
            Каждые 2–4 недели я улучшаю методологию и движок. Когда есть
            что-то полезное — пишу тебе, твой разработчик подтягивает мои
            изменения одной командой. Твои правки текстов остаются на месте.
          </p>
        </div>
      </section>

      {/* Final */}
      <section className="h-section">
        <div className="final-block">
          <h2>Если зашло — пишем дальше</h2>
          <p>
            Прошёлся по разборам, посмотрел на методологию. Дальше я готов
            обсудить как именно ты будешь это использовать в маркетинге
            Финтабло — и доработать под твои задачи.
          </p>
          <div className="h-cta-row" style={{ justifyContent: "center" }}>
            <a
              href="https://t.me/texterok"
              target="_blank"
              rel="noopener noreferrer"
              className="h-btn-primary"
            >
              Написать в Telegram →
            </a>
            <a
              href="/fintablo-product-tour-mvp/demo/"
              className="h-btn-secondary"
            >
              Ещё раз открыть демо
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
