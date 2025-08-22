"use client";

import OverviewCard from "@/components/dashboard/OverviewCard";
import CustomOverview from "@/components/analytics/CustomOverview";
import { Chart } from "@/components/ui/chart-area";
import { ChartBarMultiple } from "@/components/ui/chart-bar-multiple";
import { ChartPieLegend } from "@/components/ui/chart-pie-legend";
import { useEffect, useState } from "react";
import OverviewCardSkeleton from "@/components/analytics/skeleton/Overview";
import Charts from "@/components/analytics/skeleton/Charts";

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      {isLoading ? (
        <>
          <OverviewCardSkeleton />
          <Charts />
        </>
      ) : (
        <>
          <OverviewCard />
          <CustomOverview />
          <div className="flex lg:flex-row flex-col w-full lg:gap-4 gap-8">
            <ChartBarMultiple />
            <ChartPieLegend />
          </div>
          <Chart />
        </>
      )}
    </main>
  );
}
