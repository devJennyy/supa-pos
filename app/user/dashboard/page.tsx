"use client";

import React, { useEffect, useState } from "react";
import OverviewCard from "@/components/dashboard/OverviewCard";
import { Stocks } from "@/components/dashboard/Stocks";
import SkeletonCard from "@/components/ui/skeleton-loading";

const OverviewCardSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between">
        <SkeletonCard className="h-6 w-1/8" />
        <SkeletonCard className="h-6 w-1/6" />
      </div>

      <div className="grid auto-rows-min gap-4 lg:grid-cols-4 grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between xl:p-5 p-3 bg-secondaryBackground border rounded-xl"
          >
            <SkeletonCard className="h-5 w-3/8 xl:!mb-5 !mb-3" />
            <SkeletonCard className="h-9 xl:h-16 w-3/8 2xl:mb-8 mb-4" />
            <SkeletonCard className="h-5 w-full" />
            <SkeletonCard className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

const StocksSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      <div className="flex justify-between">
        <SkeletonCard className="h-6 w-1/8" />
        <SkeletonCard className="h-6 w-1/6" />
      </div>

      <div className="bg-secondaryBackground border rounded-xl">
        <SkeletonCard className="w-full h-[200px] lg:h-[664px] 3xl:h-[980px] rounded-xl" />
      </div>
    </div>
  );
};

export default function Page() {
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
