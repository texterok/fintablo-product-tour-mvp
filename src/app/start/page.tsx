import type { Metadata } from "next";
import { FintabloAppUniversal } from "@/components/FintabloAppUniversal";

export const metadata: Metadata = {
  title:
    "Финтабло — рентабельность по контрактам в реальном времени",
  description:
    "Универсальный демо-разбор для монтажных и сервисных проектных компаний 60-1200 млн ₽. За 90 секунд покажем, как видно расхождение между планом и фактом по контрактам — и где конкретно утекают деньги.",
};

export default function UniversalStartPage() {
  return <FintabloAppUniversal />;
}
