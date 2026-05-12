import type { Metadata } from "next";
import { DemoRouter } from "@/components/DemoRouter";

export const metadata: Metadata = {
  title:
    "Финтабло — выбор демо-тура для проектного бизнеса",
  description:
    "Три тура по реальным модулям Финтабло — стройка, агентство, монтаж/сервис. Выберите тот, чей JTBD ближе к вашей боли.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoPage() {
  return <DemoRouter />;
}
