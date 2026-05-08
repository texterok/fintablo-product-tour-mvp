import type { Metadata } from "next";
import { AgencyLanding } from "@/components/AgencyLanding";

export const metadata: Metadata = {
  title:
    "Финтабло для агентств — видеть, сколько денег осталось по каждой сделке",
  description:
    "Связываем авансы клиентов, расходы по сделкам и платёжный календарь — чтобы вы видели, в какую неделю по конкретной сделке нечем будет платить команде. И принимали решение раньше, чем это случится.",
};

export default function AgencyLandingPage() {
  return <AgencyLanding />;
}
