# Fintablo Product Tour MVP

Внутренний прототип Финтабло — интерактивный продакт-тур, который показывает строительной компании, где «утекает» прибыль между маржинальным доходом (89%) и валовой прибылью (74%).

Дизайн-токены извлечены с my.fintablo.ru с разрешения владельца аккаунта.

**Демо:** https://texterok.github.io/fintablo-product-tour-mvp/

## Локальный запуск

```bash
npm install
npm run dev
# открыть http://localhost:3000
```

## Аналитика (Track P)

Per-step события tour'а: `tour_start`, `anomaly_seen`, `cause_revealed`, `evidence_opened`, `aha_completed`, `cta_clicked`, `tour_next/prev/close/finish/resumed`, `nav_click`. Все события сегментируются по `utm_source`, `utm_medium`, `utm_campaign`, `partner_id`, `referrer_host`, `is_returning`, `session_id`.

`aha_completed` — производное событие: visitor дошёл от `anomaly_seen` (шаг 2) до `evidence_opened` (drilldown) в окне 8–40 секунд. Сырой dwell time не используется как метрика (long dwell = интерес, конфузия или дистракция — неоднозначно).

В dev-окружении события логируются в `console.debug`. Для production-tracking — задать ENV-переменные перед билдом:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com  # опционально, default = EU
```

Без `NEXT_PUBLIC_POSTHOG_KEY` PostHog snippet не загружается, события идут только в console. Buffer 100 events удерживает события до init'а, потом flushed.

## Стек

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Source Sans Pro (локальный шрифт)
- Кастомный SVG margin-bridge waterfall
- Tour overlay со spotlight через SVG mask

## Структура

- `src/components/FintabloApp.tsx` — оболочка с sidebar/topbar и роутингом по 5 страницам
- `src/components/TourOverlay.tsx` — подсветка элементов и подсказки
- `src/screens/` — 5 страниц, имитирующих интерфейс Финтабло (Сводка, Учёт сделок, ОПиУ, Рентабельность, Операции)
- `src/lib/tour.ts` — сценарий разбора (8 шагов)
- `src/lib/data.ts` — данные с метками `[REAL]` / `[INFERRED]` / `[SIMULATED]`
- `src/lib/fintablo-tokens.ts` — извлечённые токены дизайн-системы Финтабло
