"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const DeductStocksSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      <div className="flex flex-col gap-2">
        <SkeletonCard className="h-6 w-1/6" />
        <SkeletonCard className="h-4 w-1/3" />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <div className="grid gap-2 w-full">
          <SkeletonCard className="h-4 w-12" />
          <div className="flex items-center gap-2">
            <SkeletonCard className="h-10 w-full" />
            <SkeletonCard className="h-10 w-10" />
          </div>
        </div>

        <div className="grid gap-2 md:w-1/5">
          <SkeletonCard className="h-4 w-16" />
          <SkeletonCard className="h-10 w-full" />
        </div>
      </div>

      <div className="border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl !mt-2">
        <div className="flex justify-between py-3 border-b">
          <SkeletonCard className="h-4 w-[25%]" />
          <SkeletonCard className="h-4 w-[20%]" />
          <SkeletonCard className="h-4 w-[20%]" />
          <SkeletonCard className="h-4 w-[15%]" />
          <SkeletonCard className="h-4 w-[10%]" />
        </div>

        <div className="flex flex-col divide-y">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between py-3 items-center">
              <SkeletonCard className="h-4 w-[25%]" />
              <SkeletonCard className="h-4 w-[20%]" />
              <SkeletonCard className="h-4 w-[20%]" />
              <SkeletonCard className="h-8 w-20" />
              <SkeletonCard className="h-8 w-24 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeductStocksSkeleton;
