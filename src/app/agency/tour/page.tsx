import type { Metadata } from "next";
import { FintabloAppAgency } from "@/components/FintabloAppAgency";

export const metadata: Metadata = {
  title:
    "Финтабло — клиенты заплатили вперёд, а через месяц нечем платить команде",
  description:
    "Покажем на примере одной сделки агентства, как Финтабло связывает авансы клиента, расходы по сделке и платёжный календарь — чтобы вы видели, когда деньги по сделке уйдут в минус.",
};

export default function AgencyPage() {
  return <FintabloAppAgency />;
}
