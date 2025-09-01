"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const LowStockSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Section Title */}
      <div className="flex flex-col gap-2">
        <SkeletonCard className="h-6 w-1/6" />
        <SkeletonCard className="h-5 sm:w-1/3 w-1/2" />
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
      <div className="md:block hidden border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl !mt-2">
        <div className="flex justify-between py-3 border-b">
          <SkeletonCard className="h-8 w-[25%]" />
          <SkeletonCard className="h-8 w-[20%]" />
          <SkeletonCard className="h-8 w-[20%]" />
          <SkeletonCard className="h-8 w-[15%]" />
          <SkeletonCard className="h-8 w-[10%]" />
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

      {/* Mobile Accordion Skeleton */}
      <div className="md:hidden flex flex-col gap-2">
        <div className="border rounded-lg overflow-hidden">
        <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
          <SkeletonCard className="h-4 w-3/4" />
          <SkeletonCard className="h-3 w-1/2" />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
          <SkeletonCard className="h-4 w-3/4" />
          <SkeletonCard className="h-3 w-1/2" />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
          <SkeletonCard className="h-4 w-3/4" />
          <SkeletonCard className="h-3 w-1/2" />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
          <SkeletonCard className="h-4 w-3/4" />
          <SkeletonCard className="h-3 w-1/2" />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
          <SkeletonCard className="h-4 w-3/4" />
          <SkeletonCard className="h-3 w-1/2" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LowStockSkeleton;
