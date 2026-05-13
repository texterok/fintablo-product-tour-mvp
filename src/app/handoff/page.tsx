import type { Metadata } from "next";
import { HandoffPage } from "@/components/handoff/HandoffPage";

export const metadata: Metadata = {
  title: "Финтабло — передача product tour MVP (для Романа)",
  description:
    "Пошаговая инструкция: как открыть проект в VS Code, что под капотом (AJTBD + Замесин Модуль 4), где менять копи и цифры, как тянуть апдейты без потери своих правок.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <HandoffPage />;
}
