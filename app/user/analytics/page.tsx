"use client";

import OverviewCard from "@/components/dashboard/OverviewCard";
import CustomOverview from "@/components/dashboard/CustomOverview";
import { Chart } from "@/components/ui/chart-area";
import { ChartBarMultiple } from "@/components/ui/chart-bar-multiple";
import { ChartPieLegend } from "@/components/ui/chart-pie-legend";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <OverviewCard />
      <CustomOverview />
      <div className="flex lg:flex-row flex-col w-full lg:gap-4 gap-8">
        <ChartBarMultiple />
        <ChartPieLegend />
      </div>
      <Chart />
    </main>
  );
}
