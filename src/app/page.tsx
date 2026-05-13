import type { Metadata } from "next";
import { StroykaLanding } from "@/components/StroykaLanding";

export const metadata: Metadata = {
  title: "Финтабло — куда утекает прибыль строительной компании",
  description:
    "Выручка 16 млн ₽, а до прибыли доходит только 12. За 90 секунд покажем на одной строительной компании, куда уходят остальные 4 млн — по объектам, статьям и подрядчикам.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StroykaLandingPage() {
  return <StroykaLanding />;
}
