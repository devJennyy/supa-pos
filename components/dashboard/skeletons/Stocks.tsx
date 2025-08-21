import SkeletonCard from "@/components/ui/skeleton-loading";
import React from "react";

const StocksSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      <div className="flex flex-col gap-2">
        <SkeletonCard className="h-6 w-1/8" />
        <SkeletonCard className="h-6 w-1/6" />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <div className="grid gap-2 md:w-2/5">
          <SkeletonCard className="h-4 w-12" />
          <div className="flex items-center gap-2">
            <SkeletonCard className="h-10 w-full" />
            <SkeletonCard className="h-10 w-10" />
          </div>
        </div>

        <div className="grid gap-2 md:w-1/5">
          <SkeletonCard className="h-4 w-16" />
          <SkeletonCard className="h-10 w-32" />
        </div>

        <div className="flex items-center gap-2 md:ml-auto">
          <SkeletonCard className="h-5 w-5 rounded-md" />
          <SkeletonCard className="h-4 w-40" />
        </div>
      </div>

      <div className="border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl !mt-2">
        <div className="flex justify-between py-3 border-b">
          <SkeletonCard className="h-4 w-[15%]" />
          <SkeletonCard className="h-4 w-[15%]" />
          <SkeletonCard className="h-4 w-[10%]" />
          <SkeletonCard className="h-4 w-[15%]" />
          <SkeletonCard className="h-4 w-[10%]" />
          <SkeletonCard className="h-4 w-[10%]" />
        </div>

        <div className="flex flex-col divide-y">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between py-3">
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-4 w-[10%]" />
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-4 w-[10%]" />
              <SkeletonCard className="h-4 w-[10%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StocksSkeleton;
