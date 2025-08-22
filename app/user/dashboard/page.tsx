"use client";

import React, { useEffect, useState } from "react";
import OverviewCard from "@/components/dashboard/OverviewCard";
import { Stocks } from "@/components/dashboard/Stocks";
import OverviewCardSkeleton from "@/components/dashboard/skeletons/OverviewCard";
import StocksSkeleton from "@/components/dashboard/skeletons/Stocks";

export default function DashboardPage() {
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
          <StocksSkeleton />
        </>
      ) : (
        <>
          <OverviewCard />
          <Stocks />
        </>
      )}
    </main>
  );
}
