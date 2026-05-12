import type { Metadata } from "next";
import { DemoRouter } from "@/components/DemoRouter";

export const metadata: Metadata = {
  title:
    "Финтабло — выбор демо-тура для проектного бизнеса",
  description:
    "Три разбора по подтверждённым разделам Финтабло — стройка, агентство, монтаж и сервис. Выберите тот, чей главный вопрос собственника ближе к вашей боли.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoPage() {
  return <DemoRouter />;
}
