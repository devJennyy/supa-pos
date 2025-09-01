"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const ReportSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-3">
       <div className="flex flex-col gap-2">
        <SkeletonCard className="h-6 w-1/6" />
        <SkeletonCard className="h-5 sm:w-1/3 w-full" />

        <SkeletonCard className="sm:hidden h-5 w-1/2" />
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-2 !mt-2">
        <SkeletonCard className="h-5 w-20" />
        <div className="flex gap-2">
          <SkeletonCard className="h-8 w-16 rounded-md" />
          <SkeletonCard className="h-8 w-20 rounded-md" />
          <SkeletonCard className="h-8 w-20 rounded-md" />
        </div>
      </div>

      <div className="border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl hidden md:block">
        <div className="flex justify-between py-3 border-b">
          <SkeletonCard className="h-8 w-[15%]" />
          <SkeletonCard className="h-8 w-[15%]" />
          <SkeletonCard className="h-8 w-[15%]" />
          <SkeletonCard className="h-8 w-[10%]" />
          <SkeletonCard className="h-8 w-[10%]" />
          <SkeletonCard className="h-8 w-[20%]" />
        </div>

        <div className="flex flex-col divide-y">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex justify-between py-3 items-center">
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-4 w-[15%]" />
              <SkeletonCard className="h-6 w-[10%] rounded-md" />
              <SkeletonCard className="h-4 w-[10%]" />
              <SkeletonCard className="h-4 w-[20%]" />
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden space-y-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden bg-secondaryBackground"
          >
            <div className="flex items-center justify-between w-full px-3 py-5">
              <div className="flex flex-col gap-1">
                <SkeletonCard className="h-4 w-24" />
                <SkeletonCard className="h-3 w-20" />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-4">
          <SkeletonCard className="h-7 w-24 rounded-md" />
        </div>

        <div className="flex justify-between text-sm !my-6 px-2">
          <SkeletonCard className="h-4 w-24" />
          <SkeletonCard className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
};

export default ReportSkeleton;
