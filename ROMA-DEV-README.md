# ROMA-DEV — инструкция для разработчика на стороне Финтабло

> Этот файл — для **разработчика Романа**. Если вы Роман — не нужно читать,
> просто откройте [/handoff](https://texterok.github.io/fintablo-product-tour-mvp/handoff/)
> и передайте эту страницу разработчику.

---

## TL;DR

- Это публичный репозиторий Ивана (texterok). Вы форкаете его в аккаунт Финтабло.
- В форке работаете только в ветке `roma/main` и **только в зоне Романа** (см. ниже).
- Подтягиваете обновления Ивана командой `git merge upstream/main`.
- Деплоите фронт с форка на свой канал (Vercel или GitHub Pages вашего аккаунта).
- CI-скрипт `scripts/check-roma-boundary.mjs` ломает билд если случайно правите файлы Ивана.

---

## Первичная настройка (один раз, ~15 минут)

### 1. Форк репозитория

```bash
# В GitHub UI: открыть https://github.com/texterok/fintablo-product-tour-mvp
# → нажать "Fork" → выбрать аккаунт fintablo (или личный)
```

После форка получится `https://github.com/<your-org>/fintablo-product-tour-mvp`.

### 2. Локальный клон

```bash
git clone git@github.com:<your-org>/fintablo-product-tour-mvp.git
cd fintablo-product-tour-mvp/mvp
```

### 3. Связь с upstream (репо Ивана) для синка обновлений

```bash
git remote add upstream https://github.com/texterok/fintablo-product-tour-mvp.git
git fetch upstream
```

### 4. Ветка для работы Романа

```bash
git switch -c roma/main main
git push -u origin roma/main
```

С этого момента вы работаете в `roma/main`. **Никогда не коммитьте в `main`** —
оставьте её синхронной с upstream.

### 5. Зависимости и проверка локального запуска

```bash
npm ci
npm run build
npm run dev   # http://localhost:3000
```

### 6. Включить boundary check на форке

В GitHub Settings → Secrets and variables → Actions → Variables → New variable:

```
Name:  UPSTREAM_URL
Value: https://github.com/texterok/fintablo-product-tour-mvp.git
```

Это даст возможность CI-скрипту `scripts/check-roma-boundary.mjs` сравнивать
ваши изменения против upstream и блокировать билд если тронули файлы Ивана.

---

## Регулярный workflow

### Получить обновления Ивана

```bash
cd fintablo-product-tour-mvp
git switch roma/main
git fetch upstream
git merge upstream/main
```

Если конфликта нет — готово. Если есть конфликт (редко, только если правили
тот же файл что и Иван) — VS Code откроет merge editor. Обычно конфликт в
файле зоны Ивана = что-то пошло не так, **спросите Ивана**.

После мержа — пуш:

```bash
git push origin roma/main
```

### Внести правку Романа (копи / цифры)

```bash
git switch roma/main
# открыть в редакторе нужный файл, например:
#   src/tours/agency/data.ts        — цифры тура
#   src/components/AgencyLanding.tsx — копи лендинга (пока живёт здесь)
git add <file>
git commit -m "<что изменили>"
git push origin roma/main
```

Vercel/GitHub Pages подхватит и задеплоит.

---

## Что МОЖНО править (зона Романа)

| Файл / папка | Что внутри |
|---|---|
| `src/tours/<slug>/data.ts` | Цифры тура — выручка, прибыль, имена компаний, статьи. **Имена exported констант менять нельзя**, только значения. |
| `src/tours/<slug>/landing-copy.ts` | Тексты лендинга (когда вынесем — пока их нет, копи живёт прямо в компоненте лендинга) |
| `src/tours/<slug>/manifest.ts` | **Только** флаг `enabledForRoma: true/false`. Остальное не трогать. |
| `src/components/*Landing.tsx` | Тексты лендингов (временно, до выноса в landing-copy.ts). Менять можно тексты, JSX-структуру оставлять как есть. |
| `src/content/roma/**` | Любые свои static-файлы (картинки, etc.) — папка может быть пустой, создаёте по нужде |
| `public/roma/**` | Свои public-ассеты (логотипы, favicons и т.п.) |
| `ROMA-DEV-README.md` | Этот файл — можете расширять под свои нужды |

---

## Что НЕЛЬЗЯ править (зона Ивана)

При попытке закоммитить эти файлы — CI на форке заблокирует push в `roma/main`:

| Файл / папка | Почему |
|---|---|
| `src/app/**` | Роуты и layout — архитектура |
| `src/components/Fintablo*.tsx` | Движок тура (Stroyka/Agency/Universal apps) |
| `src/components/*Sidebar.tsx`, `*TourOverlay.tsx` | Движок тура — навигация и overlay |
| `src/components/handoff/**` | Страница `/handoff` — это инструкция Ивана |
| `src/screens/**` | Экраны Финтабло-приложения внутри тура — макеты модулей |
| `src/lib/tour*.ts` | Структура шагов тура (методология) |
| `src/lib/tour.ts` | Общий тип шагов тура |
| `src/lib/track.ts` | Аналитика |
| `src/app/globals.css` | Дизайн-система |
| `src/app/layout.tsx` | Root layout (шрифты, счётчик) |
| `package.json`, `package-lock.json` | Зависимости |
| `next.config.ts`, `tsconfig.json` | Конфиг билда |
| `scripts/**` | CI-скрипты |
| `.github/**` | CI-конфиги |

**Если очень нужно поправить что-то из зоны Ивана:**

1. Напишите Ивану в Telegram (контакт в `/handoff`).
2. Иван внесёт изменение в upstream `main`.
3. Вы тянете через `git fetch upstream && git merge upstream/main`.

**Не делайте PR из своей зоны Ивана в upstream** — Ивану нужно осмыслить
изменение, а не просто принять патч.

---

## Что происходит когда Иван добавляет новый тур

Иван создаст новую папку, например `src/tours/restaurants/`, с файлами:

```
src/tours/restaurants/
  manifest.ts        ← с enabledForRoma: false
  data.ts            ← с демо-цифрами
  landing-copy.ts    ← с placeholder-текстами
```

Когда вы сделаете `git merge upstream/main`:

1. Эти файлы появятся у вас.
2. **Тур НЕ покажется** на проде Романа — потому что `enabledForRoma: false`.
3. `/demo` router тура не покажет (registry фильтрует).
4. Роман со своей стороны решает: «берём в работу» — тогда вы:
   - Открываете `src/tours/restaurants/data.ts` и заменяете цифры на свои
   - Открываете `src/tours/restaurants/landing-copy.ts` и заменяете тексты
   - В `src/tours/restaurants/manifest.ts` меняете `enabledForRoma: true`
   - Билд + push в `roma/main` → автодеплой

Этот процесс — **safe by default**: новые туры не уезжают в прод сами.

---

## Deploy (Vercel рекомендован)

```bash
# В Vercel: New Project → Import git repository → выбрать форк
# Root Directory: mvp
# Framework: Next.js
# Branch: roma/main
# Environment variables: NEXT_PUBLIC_POSTHOG_KEY (если нужна аналитика)
```

GitHub Pages альтернатива: настраивается в Settings → Pages, source = GitHub Actions,
ветка = `roma/main`. Иван может помочь со скриптом деплоя.

---

## Метаданные сборки на странице (для контроля свежести)

В правом нижнем углу `/handoff` показывается commit hash + дата upstream sync.
Если дата старая (например 2 месяца назад) — пора тянуть upstream.

Если хотите автомат: GitHub Action в форке раз в неделю проверяет
`origin/roma/main` vs `upstream/main` и создаёт issue если отстаёте больше
чем на 7 дней. Скрипт можно попросить у Ивана.

---

## Точки контакта

- **Иван**: Telegram (контакт на `/handoff`). Вопросы по архитектуре, новые туры, релизы.
- **Этот README**: обновляется при изменении схемы. Перечитайте после каждого
  крупного upstream-merge (можно посмотреть `git log upstream/main -- ROMA-DEV-README.md`).
- **Boundary check**: если CI ругается на ваш коммит, прочитайте сообщение —
  там указан конкретный файл и что с ним не так.

---

## Чек-лист первого дня

- [ ] Форк создан в аккаунте Финтабло
- [ ] Локальный клон сделан
- [ ] `upstream` remote добавлен и `fetch upstream` отработал
- [ ] Ветка `roma/main` создана от `main`
- [ ] `UPSTREAM_URL` variable в Settings → Variables на форке
- [ ] `npm ci && npm run build && npm run dev` отработали локально
- [ ] Открыли `http://localhost:3000/` — увидели лендинг Стройки
- [ ] Поменяли одну цифру в `src/tours/stroyka/data.ts` (например выручку с 16 на 17) — увидели изменение в браузере
- [ ] Закоммитили правку в `roma/main`, запушили — CI на форке прошёл OK
- [ ] Vercel/GH Pages подцепил `roma/main` — увидели изменение на boevом домене
- [ ] Roma подтвердил «зашло»

После этого первая полноценная итерация передачи завершена.
