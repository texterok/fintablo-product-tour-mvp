import { CopyButton } from "./CopyButton";

// Brand palette inspired by jarvis-memory:
// bg-deep #0a0712, bg #120d1f, bg-card #1a1428, bg-elev #241d37
// amber #e8c154, violet #9d7cff, teal #50e3c2, pink #ff6b9d
// text #f0ebe0, muted #a79fb0, dim #6f6780

const STEPS = [
  {
    n: "01",
    title: "Установи VS Code и расширения",
    body: (
      <>
        <p>
          VS Code — это редактор, в котором будешь работать с проектом. Сам
          ничего не делает, просто открывает папку с кодом и подсвечивает что
          где лежит.
        </p>
        <ul>
          <li>
            Скачай{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VS Code
            </a>{" "}
            под свою систему (Mac или Windows) → установи
          </li>
          <li>
            Открой VS Code → нажми иконку расширений слева (квадратики) →
            установи <span className="kbd">GitLens</span> и{" "}
            <span className="kbd">GitHub Pull Requests</span>. Они помогут
            видеть мои обновления глазами.
          </li>
          <li>
            Если у тебя нет GitHub-аккаунта — заведи на{" "}
            <a
              href="https://github.com/join"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
            . Это нужно только чтобы тянуть мои апдейты.
          </li>
        </ul>
        <p className="hint">
          На Mac также нужен <span className="kbd">Node.js 20+</span> — скачай с{" "}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nodejs.org
          </a>{" "}
          (кнопка LTS). На Windows то же самое.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Клонируй проект в VS Code (1 минута)",
    body: (
      <>
        <p>
          Это значит «скачать копию репозитория на свой компьютер». Один клик
          по URL — и проект у тебя на диске, готов к работе.
        </p>
        <ol>
          <li>
            Открой VS Code → нажми <span className="kbd">⌘⇧P</span> (Mac) или{" "}
            <span className="kbd">Ctrl+Shift+P</span> (Windows)
          </li>
          <li>
            Набери <span className="kbd">Git: Clone</span> → выбери эту команду
          </li>
          <li>
            Вставь URL ↓ → выбери папку на диске (например, рабочий стол) → жди
            ~10 секунд
          </li>
        </ol>
        <PromptBlock
          label="URL репозитория"
          text="https://github.com/texterok/fintablo-product-tour-mvp.git"
        />
        <p>
          VS Code предложит «Open the cloned repository» — соглашайся. Откроется
          окно с папкой проекта. В корне ты увидишь этот же самый онбординг как
          файл{" "}
          <span className="kbd">handoff.html</span> — открыть его или
          продолжить с этой страницы, как удобнее.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "Создай свою ветку, чтобы не затирать мои апдейты",
    body: (
      <>
        <p>
          Ветка — это твоя личная версия проекта. Ты работаешь в ней, я работаю
          в своей <span className="kbd">main</span>. Когда я обновлю проект — ты
          подтянешь мои изменения в свою ветку одной кнопкой. Твои правки при
          этом сохранятся.
        </p>
        <ol>
          <li>
            В VS Code снизу слева видишь имя ветки (по умолчанию{" "}
            <span className="kbd">main</span>) → клик
          </li>
          <li>
            Появится меню → выбери <span className="kbd">Create new branch from…</span>
          </li>
          <li>
            Выбери <span className="kbd">main</span> как источник → введи имя{" "}
            <span className="kbd">roma/main</span> → жми Enter
          </li>
        </ol>
        <p className="hint">
          С этого момента всё что ты редактируешь падает в твою ветку{" "}
          <span className="kbd">roma/main</span>. Моя ветка{" "}
          <span className="kbd">main</span> не трогается.
        </p>
      </>
    ),
  },
  {
    n: "04",
    title: "Установи зависимости и запусти проект локально",
    body: (
      <>
        <p>
          Один раз скачиваем библиотеки (~2 минуты), один раз запускаем сервер.
          Дальше открываешь сайт у себя в браузере на{" "}
          <span className="kbd">localhost:3000</span> — там всё работает как
          боевая версия.
        </p>
        <ol>
          <li>
            В VS Code открой встроенный терминал:{" "}
            <span className="kbd">⌃`</span> (Mac) /{" "}
            <span className="kbd">Ctrl+`</span> (Windows)
          </li>
          <li>Перейди в папку mvp (она вложена в репозиторий):</li>
        </ol>
        <PromptBlock label="Шаг A · перейти в папку mvp" text="cd mvp" />
        <PromptBlock label="Шаг B · скачать библиотеки" text="npm install" />
        <PromptBlock label="Шаг C · запустить сервер" text="npm run dev" />
        <p>
          Когда увидишь строку <span className="kbd">Ready in N ms</span> —
          открой в браузере{" "}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000
          </a>
          . Лендинг стройки покажется первым.
        </p>
        <p className="hint">
          Чтобы остановить сервер — в терминале нажми{" "}
          <span className="kbd">Ctrl+C</span>.
        </p>
      </>
    ),
  },
  {
    n: "05",
    title: "Что под капотом — за 3 минуты",
    body: (
      <>
        <p>
          Проект построен на двух идеях. Не вникай в детали сейчас — просто
          увидишь, где что лежит, и сможешь вернуться позже.
        </p>
        <div className="under-hood">
          <div className="hood-card">
            <p className="hood-tag">A · Методология</p>
            <h4>AJTBD-разбор кейсов</h4>
            <p>
              Каждый кейс с сайта Финтабло разобран по Замесинскому фреймворку:
              работа клиента, триггер, контекст, барьеры, ага-момент. 22 кейса в
              базе.
            </p>
            <p className="hood-where">
              Где: <span className="kbd">research/AJTBD/</span> — начни с файла{" "}
              <span className="kbd">00-MASTER-graph-of-jobs.md</span>
            </p>
          </div>
          <div className="hood-card">
            <p className="hood-tag">B · Технология</p>
            <h4>Сборка посадки из AJTBD</h4>
            <p>
              Из разбора кейсов собирается лендинг по Замесинскому Модулю 4:
              7 факторов конверсии, пирамида ценности, 50+ формул H1, четыре
              силы прогресса.
            </p>
            <p className="hood-where">
              Где: <span className="kbd">research/zamesin-module-4-applied.md</span>{" "}
              + <span className="kbd">research/landing-ajtbd-blocks.md</span>
            </p>
          </div>
        </div>
        <p>
          Все остальные файлы — это код для отрисовки. Тебе их трогать
          необязательно, если только не хочешь поменять копи или цифры.
        </p>
      </>
    ),
  },
  {
    n: "06",
    title: "Что у тебя в руках — 7 страниц",
    body: (
      <>
        <p>
          Три лендинга, три тура, один роутер. Все живут локально на{" "}
          <span className="kbd">localhost:3000/&lt;путь&gt;</span> когда сервер
          запущен.
        </p>
        <div className="routes-grid">
          <RouteCard
            url="/"
            kind="Лендинг"
            who="Стройка / СМР / ПИР"
            file="src/components/StroykaLanding.tsx"
            tone="amber"
          />
          <RouteCard
            url="/tour"
            kind="Тур"
            who="Стройка — 16 млн выручки → 12 млн прибыли"
            file="src/components/FintabloApp.tsx"
            tone="amber"
          />
          <RouteCard
            url="/agency"
            kind="Лендинг"
            who="Агентство с авансами"
            file="src/components/AgencyLanding.tsx"
            tone="violet"
          />
          <RouteCard
            url="/agency/tour"
            kind="Тур"
            who="Агентство — сделка Путешествия"
            file="src/components/FintabloAppAgency.tsx"
            tone="violet"
          />
          <RouteCard
            url="/start"
            kind="Лендинг"
            who="Монтаж и сервис"
            file="src/components/UniversalLanding.tsx"
            tone="teal"
          />
          <RouteCard
            url="/start/tour"
            kind="Тур"
            who="Климат-Сервис — БЦ Северная Долина"
            file="src/components/FintabloAppUniversal.tsx"
            tone="teal"
          />
          <RouteCard
            url="/demo"
            kind="Роутер"
            who="Холодный трафик выбирает свой тур"
            file="src/components/DemoRouter.tsx"
            tone="pink"
          />
        </div>
      </>
    ),
  },
  {
    n: "07",
    title: "Где ты можешь менять копи и цифры",
    body: (
      <>
        <p>
          Граница зон ответственности. Зелёное — твоё, можешь свободно править
          в своей ветке. Красное — моё, лучше не трогать (или предупреди меня).
        </p>
        <div className="zone-table">
          <div className="zone-row zone-green">
            <span className="zone-icon">✓</span>
            <div>
              <p className="zone-what">Тексты лендингов (H1, подзаголовок, секции, кнопки)</p>
              <p className="zone-where">
                Где: <span className="kbd">src/components/*Landing.tsx</span>,{" "}
                <span className="kbd">src/components/DemoRouter.tsx</span>
              </p>
            </div>
          </div>
          <div className="zone-row zone-green">
            <span className="zone-icon">✓</span>
            <div>
              <p className="zone-what">Цифры в туре (выручка, прибыль, авансы, имена компаний)</p>
              <p className="zone-where">
                Где: <span className="kbd">src/lib/data.ts</span>,{" "}
                <span className="kbd">src/lib/agency-data.ts</span>,{" "}
                <span className="kbd">src/lib/universal-data.ts</span>
              </p>
            </div>
          </div>
          <div className="zone-row zone-green">
            <span className="zone-icon">✓</span>
            <div>
              <p className="zone-what">Заголовки страниц и SEO-описания</p>
              <p className="zone-where">
                Где: <span className="kbd">src/app/&lt;route&gt;/page.tsx</span>,
                поле metadata
              </p>
            </div>
          </div>
          <div className="zone-row zone-red">
            <span className="zone-icon">✗</span>
            <div>
              <p className="zone-what">Движок тура (overlay, навигация, шаги)</p>
              <p className="zone-where">
                Не трогай: <span className="kbd">src/components/*App*.tsx</span>,{" "}
                <span className="kbd">src/components/*TourOverlay.tsx</span>
              </p>
            </div>
          </div>
          <div className="zone-row zone-red">
            <span className="zone-icon">✗</span>
            <div>
              <p className="zone-what">Дизайн-система (цвета, шрифты, отступы)</p>
              <p className="zone-where">
                Не трогай: <span className="kbd">src/app/globals.css</span>
              </p>
            </div>
          </div>
          <div className="zone-row zone-red">
            <span className="zone-icon">✗</span>
            <div>
              <p className="zone-what">Структура шагов тура и методология</p>
              <p className="zone-where">
                Не трогай: <span className="kbd">src/lib/tour*.ts</span>,{" "}
                <span className="kbd">research/</span>
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    n: "08",
    title: "Как тянуть мои апдейты без потери своих правок",
    body: (
      <>
        <p>
          Я каждые 2-4 недели улучшаю проект на своей стороне (новые туры,
          обновлённая методология, дизайн-фиксы). Чтобы получить эти изменения у
          себя — два клика в VS Code.
        </p>
        <ol>
          <li>
            Открой проект в VS Code → проверь, что ты на ветке{" "}
            <span className="kbd">roma/main</span> (имя ветки видно слева внизу)
          </li>
          <li>
            Сначала закоммить свои изменения, если они есть: Source Control
            панель → введи описание → жми <span className="kbd">Commit</span> →
            затем <span className="kbd">Sync Changes</span>
          </li>
          <li>
            Открой Source Control панель (квадратная иконка слева, или{" "}
            <span className="kbd">⌃⇧G</span>)
          </li>
          <li>
            Нажми три точки <span className="kbd">…</span> сверху → выбери{" "}
            <span className="kbd">Pull, Push</span> →{" "}
            <span className="kbd">Pull from…</span>
          </li>
          <li>
            Выбери <span className="kbd">origin/main</span> → жми Enter
          </li>
        </ol>
        <p>
          VS Code подтянет мои изменения и автоматически смерджит с твоими.
          Если ты редактировал только «зелёные» файлы из шага 7 — конфликтов не
          будет. Если конфликт случился — VS Code откроет визуальный merge
          editor с кнопками «Accept Current / Accept Incoming». Если непонятно
          — пиши мне.
        </p>
      </>
    ),
  },
  {
    n: "09",
    title: "Как опубликовать на свой канал (по желанию)",
    body: (
      <>
        <p>
          Сейчас проект задеплоен на{" "}
          <a
            href="https://texterok.github.io/fintablo-product-tour-mvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            texterok.github.io
          </a>{" "}
          — это моя страница. Ты можешь развернуть свою копию на{" "}
          <span className="kbd">fintablo.ru/demo</span> или на отдельном
          поддомене.
        </p>
        <p>Самый простой путь — Vercel:</p>
        <ol>
          <li>
            Заведи аккаунт на{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com
            </a>{" "}
            (вход через GitHub)
          </li>
          <li>
            Кнопка <span className="kbd">Add new → Project</span> → выбери fork
            этого репозитория из списка
          </li>
          <li>
            Root Directory → укажи <span className="kbd">mvp</span> → нажми
            Deploy
          </li>
        </ol>
        <p className="hint">
          Если будет нужна сборка под GitHub Pages твоего аккаунта — скажи,
          сделаем за 15 минут.
        </p>
      </>
    ),
  },
  {
    n: "10",
    title: "Что от тебя нужно после первого прохождения",
    body: (
      <>
        <p>
          Прошёл шаги 1-8 — отлично. Дальше короткий обмен и можно стартовать
          работу.
        </p>
        <ol>
          <li>
            Ответь одной строкой в Telegram: «зашло» / «непонятно — нужен
            созвон 30 мин» / «есть вопросы по списку»
          </li>
          <li>
            Если зашло — попробуй поменять один H1 на любом лендинге (твоя
            зона из шага 7) → закоммить в ветку{" "}
            <span className="kbd">roma/main</span> → запусти{" "}
            <span className="kbd">npm run dev</span> → проверь что обновилось.
            Это и есть твой главный workflow.
          </li>
          <li>
            Если есть вопросы по методологии (AJTBD, технология сбора посадки)
            — отлично, заведу 30-мин созвон, пройдёмся по логике.
          </li>
        </ol>
      </>
    ),
  },
];

function PromptBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="prompt-block">
      <div className="prompt-head">
        <span className="prompt-label">{label}</span>
        <CopyButton text={text} />
      </div>
      <pre>{text}</pre>
    </div>
  );
}

function RouteCard({
  url,
  kind,
  who,
  file,
  tone,
}: {
  url: string;
  kind: string;
  who: string;
  file: string;
  tone: "amber" | "violet" | "teal" | "pink";
}) {
  return (
    <div className={`route-card tone-${tone}`}>
      <p className="route-kind">{kind}</p>
      <p className="route-url">{url}</p>
      <p className="route-who">{who}</p>
      <p className="route-file">
        <span className="kbd">{file}</span>
      </p>
    </div>
  );
}

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
          --grad-brand-soft: linear-gradient(135deg, rgba(232,193,84,0.15), rgba(157,124,255,0.15));
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
        .handoff-root .kbd {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          font-size: 0.88em;
          padding: 1px 6px;
          border-radius: 4px;
          background: rgba(240, 235, 224, 0.06);
          border: 1px solid var(--border-soft);
          color: var(--amber-soft);
        }

        /* Top header */
        .h-header {
          padding: 32px 24px 24px;
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
          padding: 56px 24px 48px;
          text-align: left;
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
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
          background: var(--grad-text);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          max-width: 880px;
        }
        .h-sub {
          font-size: 18px;
          line-height: 1.55;
          color: var(--muted);
          max-width: 720px;
          margin: 0 0 32px;
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
          padding: 14px 22px;
          background: var(--grad-brand);
          color: var(--bg-deep);
          font-weight: 700;
          border-radius: 999px;
          border: none !important;
          font-size: 15px;
        }
        .h-btn-primary:hover { opacity: 0.92; }
        .h-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 22px;
          background: transparent;
          color: var(--text) !important;
          font-weight: 600;
          border-radius: 999px;
          border: 1px solid var(--border) !important;
          font-size: 15px;
        }
        .h-btn-secondary:hover { background: rgba(232,193,84,0.06); }

        /* Section headers */
        .h-section {
          max-width: 1080px;
          margin: 0 auto;
          padding: 32px 24px;
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
          margin: 0 0 8px;
          color: var(--text);
        }
        .h-section-sub {
          font-size: 16px;
          color: var(--muted);
          margin: 0 0 28px;
          max-width: 720px;
        }

        /* Skills grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .skill-card {
          padding: 22px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 14px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .skill-card:hover { border-color: var(--border); }
        .skill-title {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 8px;
          color: var(--amber);
        }
        .skill-text {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }

        /* Stack section */
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }
        .stack-item {
          padding: 18px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stack-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
        }
        .stack-meta {
          font-size: 12px;
          color: var(--dim);
        }
        .stack-link {
          font-size: 13px;
          color: var(--amber);
          margin-top: 4px;
        }

        /* Steps */
        .steps-intro {
          padding: 16px 20px;
          background: rgba(157, 124, 255, 0.06);
          border: 1px solid rgba(157, 124, 255, 0.2);
          border-radius: 12px;
          margin-bottom: 28px;
          font-size: 14px;
          color: var(--muted);
        }
        .step {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-top: 1px solid var(--border-soft);
        }
        .step:first-child { border-top: none; padding-top: 8px; }
        .step-num {
          font-family: ui-monospace, SFMono-Regular, monospace;
          font-size: 28px;
          font-weight: 700;
          background: var(--grad-text);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          padding-top: 2px;
        }
        .step-body h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 14px;
          color: var(--text);
          line-height: 1.25;
        }
        .step-body p { color: var(--muted); font-size: 15px; line-height: 1.65; margin: 12px 0; }
        .step-body ul,
        .step-body ol {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
          margin: 12px 0;
          padding-left: 22px;
        }
        .step-body li { margin: 4px 0; }
        .step-body .hint {
          font-size: 13px;
          color: var(--dim);
          padding: 10px 14px;
          background: rgba(232,193,84,0.04);
          border-left: 2px solid var(--amber);
          border-radius: 0 8px 8px 0;
          margin: 14px 0;
        }

        /* Prompt block */
        .prompt-block {
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 12px;
          margin: 14px 0;
          overflow: hidden;
        }
        .prompt-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: rgba(232, 193, 84, 0.04);
          border-bottom: 1px solid var(--border-soft);
        }
        .prompt-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--amber);
          text-transform: none;
        }
        .prompt-block pre {
          margin: 0;
          padding: 14px 16px;
          font-family: ui-monospace, SFMono-Regular, monospace;
          font-size: 13px;
          color: var(--text);
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }

        /* Under-hood cards */
        .under-hood {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 14px;
          margin: 16px 0;
        }
        .hood-card {
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 12px;
        }
        .hood-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--violet);
          margin: 0 0 8px;
        }
        .hood-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 8px;
        }
        .hood-card p {
          font-size: 14px;
          color: var(--muted);
          margin: 8px 0;
          line-height: 1.55;
        }
        .hood-where {
          padding-top: 10px;
          border-top: 1px solid var(--border-soft);
          font-size: 13px;
          color: var(--dim);
        }

        /* Routes grid */
        .routes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
          margin: 16px 0;
        }
        .route-card {
          padding: 16px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-left-width: 3px;
          border-radius: 10px;
        }
        .route-card.tone-amber { border-left-color: var(--amber); }
        .route-card.tone-violet { border-left-color: var(--violet); }
        .route-card.tone-teal { border-left-color: var(--teal); }
        .route-card.tone-pink { border-left-color: var(--pink); }
        .route-kind {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--dim);
          margin: 0 0 4px;
        }
        .route-url {
          font-family: ui-monospace, SFMono-Regular, monospace;
          font-size: 15px;
          font-weight: 700;
          color: var(--amber);
          margin: 0 0 8px;
        }
        .route-who {
          font-size: 14px;
          color: var(--text);
          margin: 0 0 12px;
          line-height: 1.45;
        }
        .route-file {
          font-size: 12px;
          color: var(--dim);
          margin: 0;
        }

        /* Zone table */
        .zone-table {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 16px 0;
        }
        .zone-row {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 14px;
          padding: 16px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 12px;
          align-items: start;
        }
        .zone-green { border-left: 3px solid var(--teal); }
        .zone-red { border-left: 3px solid var(--pink); }
        .zone-icon {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
        }
        .zone-green .zone-icon { color: var(--teal); }
        .zone-red .zone-icon { color: var(--pink); }
        .zone-what {
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 4px;
        }
        .zone-where {
          font-size: 13px;
          color: var(--dim);
          margin: 0;
        }

        /* Final */
        .final-block {
          max-width: 1080px;
          margin: 48px auto 0;
          padding: 36px 28px;
          border-radius: 18px;
          background: var(--grad-brand-soft);
          border: 1px solid var(--border);
          text-align: center;
        }
        .final-block h2 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 12px;
        }
        .final-block p {
          color: var(--muted);
          font-size: 16px;
          margin: 0 0 24px;
        }

        @media (max-width: 640px) {
          .step { grid-template-columns: 48px 1fr; gap: 14px; }
          .step-num { font-size: 22px; }
        }
      `}</style>

      {/* Header */}
      <header className="h-header">
        <div className="h-logo">
          <span className="h-logo-mark">F</span>
          <span>Fintablo · Product Tour</span>
        </div>
        <span className="h-tag">Передача · ~30 мин</span>
      </header>

      {/* Hero */}
      <section className="h-hero">
        <p className="h-eyebrow">Привет, Рома</p>
        <h1 className="h-title">
          Передаю исходник product tour — собирай посадки агентствам
        </h1>
        <p className="h-sub">
          Прототип MVP уже работает на{" "}
          <a
            href="https://texterok.github.io/fintablo-product-tour-mvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            texterok.github.io
          </a>
          . Под капотом — AJTBD-разбор кейсов и алгоритм сборки посадок.
          За 30 минут ты у себя на компе откроешь проект, поймёшь что
          где, и научишься править копи без помощи разработчика.
        </p>
        <div className="h-cta-row">
          <a href="#steps" className="h-btn-primary">
            Перейти к шагам →
          </a>
          <a
            href="https://texterok.github.io/fintablo-product-tour-mvp/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-btn-secondary"
          >
            Сначала посмотреть прототип
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="h-section">
        <p className="h-section-eyebrow">Что научишься делать</p>
        <h2 className="h-section-title">Пять навыков — твоя автономия от меня</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <p className="skill-title">Открыть проект</p>
            <p className="skill-text">
              VS Code → Clone → URL. Один клик. Проект у тебя на компьютере.
            </p>
          </div>
          <div className="skill-card">
            <p className="skill-title">Запустить локально</p>
            <p className="skill-text">
              <span className="kbd">npm install</span> →{" "}
              <span className="kbd">npm run dev</span>. Браузер открывает твою
              копию сайта.
            </p>
          </div>
          <div className="skill-card">
            <p className="skill-title">Менять копи и цифры</p>
            <p className="skill-text">
              Зоны ответственности расписаны. Меняешь H1, цифры в туре,
              описания страниц — без страха сломать.
            </p>
          </div>
          <div className="skill-card">
            <p className="skill-title">Тянуть мои апдейты</p>
            <p className="skill-text">
              Source Control → Pull. Твои правки сохраняются. Конфликтов нет
              если ты в зелёной зоне.
            </p>
          </div>
          <div className="skill-card">
            <p className="skill-title">Понимать методологию</p>
            <p className="skill-text">
              AJTBD под капотом + Замесин Модуль 4. 2 параграфа, дальше можешь
              нырнуть глубже сам.
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="h-section">
        <p className="h-section-eyebrow">Что понадобится</p>
        <h2 className="h-section-title">Стек — три инструмента, ноль терминала</h2>
        <div className="stack-grid">
          <div className="stack-item">
            <span className="stack-name">VS Code</span>
            <span className="stack-meta">Бесплатно · редактор кода</span>
            <a
              className="stack-link"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              code.visualstudio.com →
            </a>
          </div>
          <div className="stack-item">
            <span className="stack-name">Node.js 20+</span>
            <span className="stack-meta">Бесплатно · LTS</span>
            <a
              className="stack-link"
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              nodejs.org →
            </a>
          </div>
          <div className="stack-item">
            <span className="stack-name">GitHub аккаунт</span>
            <span className="stack-meta">Бесплатно · для апдейтов</span>
            <a
              className="stack-link"
              href="https://github.com/join"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/join →
            </a>
          </div>
          <div className="stack-item">
            <span className="stack-name">Vercel (опционально)</span>
            <span className="stack-meta">Бесплатно · деплой на свой домен</span>
            <a
              className="stack-link"
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com →
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="h-section">
        <p className="h-section-eyebrow">Пошаговая инструкция</p>
        <h2 className="h-section-title">
          От нуля до запущенного проекта за 30 минут
        </h2>
        <p className="h-section-sub">
          Десять шагов, каждый — отдельная карточка. Команды и URL копируются
          одной кнопкой. Порядок важен — не перескакивай.
        </p>
        <div className="steps-intro">
          <strong>Если что-то не получается</strong> — не залипай. Пиши мне в
          Telegram, разберёмся за 10 минут. Лучше один вопрос сразу, чем час
          гугления.
        </div>
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-body">
              <h3>{s.title}</h3>
              {s.body}
            </div>
          </div>
        ))}
      </section>

      <section className="h-section">
        <div className="final-block">
          <h2>Готов начать?</h2>
          <p>
            Открой VS Code и стартуй с шага 02 → клонируй проект → запусти
            локально → пиши в Telegram «зашло» или «вопрос».
          </p>
          <div className="h-cta-row" style={{ justifyContent: "center" }}>
            <a href="#steps" className="h-btn-primary">
              К шагам ↑
            </a>
            <a
              href="https://github.com/texterok/fintablo-product-tour-mvp"
              target="_blank"
              rel="noopener noreferrer"
              className="h-btn-secondary"
            >
              Открыть репозиторий
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
