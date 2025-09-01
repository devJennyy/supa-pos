"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const ThemeSwitchSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col lg:p-5 p-4 transition-default">
      <div className="space-y-2">
        <SkeletonCard className="h-6 w-48" />
        <SkeletonCard className="h-4 w-72" />
      </div>

      <div className="flex flex-col items-center lg:gap-10 gap-8 w-full lg:!mt-10 !mt-8">
        {/* Dark Mode Skeleton */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-3 w-full">
            <SkeletonCard className="h-4 w-20" />
            <div className="border lg:p-3 p-2 rounded-3xl">
              <SkeletonCard className="overflow-hidden relative w-full sm:h-80 h-40 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Light Mode Skeleton */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-3 w-full">
            <SkeletonCard className="h-4 w-20" />
            <div className="border lg:p-3 p-2 rounded-3xl">
              <SkeletonCard className="overflow-hidden relative w-full sm:h-80 h-40 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitchSkeleton;
