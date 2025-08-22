"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const LowStockSkeleton = () => {
  const skeletonItems = Array.from({ length: 3 });

  return (
    <main className="flex flex-1 flex-col gap-6 lg:p-5 p-4">
      <SkeletonCard className="h-6 w-1/4 mb-4" />

      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <SkeletonCard className="h-10 w-1/3 rounded-md" />
        <SkeletonCard className="h-10 w-1/5 rounded-md" />
        <SkeletonCard className="h-10 w-1/4 rounded-md md:ml-auto" />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {skeletonItems.map((_, index) => (
          <SkeletonCard
            key={index}
            className="h-40 w-full rounded-xl"
          />
        ))}
      </div>
    </main>
  );
};

export default LowStockSkeleton;
