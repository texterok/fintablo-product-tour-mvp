import type { Metadata } from "next";
import { UniversalLanding } from "@/components/UniversalLanding";

export const metadata: Metadata = {
  title:
    "Финтабло — план/факт по контрактам для проектного бизнеса 60-1200 млн",
  description:
    "Контракт планировался прибыльным — по факту собрали половину. За 90 секунд покажем, как Финтабло связывает план, факт и операции по одному контракту. Демо-разбор для монтажных и сервисных компаний.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UniversalLandingPage() {
  return <UniversalLanding />;
}
