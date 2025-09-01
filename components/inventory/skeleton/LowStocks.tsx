"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const LowStockSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      {/* Section Title */}
      <div className="flex flex-col gap-2">
        <SkeletonCard className="h-6 w-1/6" />
        <SkeletonCard className="h-4 w-1/3" />
      </div>

      {/* Filters */}
      <div className="flex flex-col md:gap-3 gap-5 md:flex-row md:items-end !mt-3">
        <div className="grid gap-2 md:w-2/5 w-full">
          <SkeletonCard className="h-4 w-12" />
          <div className="flex items-center gap-2">
            <SkeletonCard className="h-10 w-full" />
            <SkeletonCard className="h-10 w-10" />
          </div>
        </div>

        <div className="grid gap-2 md:w-1/5 w-full">
          <SkeletonCard className="h-4 w-16" />
          <SkeletonCard className="h-10 w-full" />
        </div>

        <div className="flex items-center gap-2 md:ml-auto md:!my-0 !my-2">
          <SkeletonCard className="h-5 w-5 rounded-md" />
          <SkeletonCard className="h-4 w-40" />
        </div>
      </div>

      {/* Desktop Table Skeleton */}
      <div className="border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl !mt-2 hidden md:block">
        <div className="flex justify-between py-3 border-b">
          <SkeletonCard className="h-8 w-[30%]" />
          <SkeletonCard className="h-8 w-[20%]" />
          <SkeletonCard className="h-8 w-[15%]" />
          <SkeletonCard className="h-8 w-[20%]" />
          <SkeletonCard className="h-8 w-[15%]" />
          <SkeletonCard className="h-8 w-[10%]" />
        </div>

        <div className="flex flex-col divide-y">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between py-3 items-center">
              <SkeletonCard className="h-4 w-[30%]" />
              <SkeletonCard className="h-4 w-[20%]" />
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-4 w-[20%]" />
              <SkeletonCard className="h-8 w-[15%]" />
              <SkeletonCard className="h-8 w-[10%] rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Accordion Skeleton */}
      <div className="block md:hidden space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <div className="flex justify-between w-full p-3 bg-secondaryBackground rounded-t">
              <div className="flex flex-col gap-1">
                <SkeletonCard className="h-4 w-28" />
                <SkeletonCard className="h-3 w-16" />
              </div>
              <SkeletonCard className="h-5 w-5 rounded-full" />
            </div>
            <div className="px-3 pb-3 border-t space-y-3 text-sm">
              <div className="flex justify-between !mt-3">
                <SkeletonCard className="h-3 w-20" />
                <SkeletonCard className="h-3 w-24" />
              </div>
              <div className="flex justify-between">
                <SkeletonCard className="h-3 w-20" />
                <SkeletonCard className="h-3 w-16" />
              </div>
              <div className="flex justify-between items-center">
                <SkeletonCard className="h-3 w-20" />
                <SkeletonCard className="h-5 w-16 rounded-md" />
              </div>
              <SkeletonCard className="h-9 w-full !mt-5 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStockSkeleton;
