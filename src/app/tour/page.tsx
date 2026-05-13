import type { Metadata } from "next";
import { FintabloApp } from "@/components/FintabloApp";

export const metadata: Metadata = {
  title: "Финтабло — разбор строительной компании (демо-тур)",
  description:
    "Интерактивный разбор одной строительной компании. 90 секунд, реальные модули Финтабло. Где из 16 млн ₽ выручки до прибыли доходит только 12.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StroykaTourPage() {
  return <FintabloApp />;
}
