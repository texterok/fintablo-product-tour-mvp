import type { Metadata } from "next";
import { FintabloAppUniversal } from "@/components/FintabloAppUniversal";

export const metadata: Metadata = {
  title:
    "Финтабло — разбор контракта «Климат-Сервис» (демо-тур)",
  description:
    "Интерактивный разбор одного контракта монтажной компании. 90 секунд, реальные модули Финтабло. Без формы, без email на этом шаге.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UniversalStartPage() {
  return <FintabloAppUniversal />;
}
