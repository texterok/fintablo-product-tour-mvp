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
