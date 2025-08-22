import SkeletonCard from "@/components/ui/skeleton-loading";
import React from "react";

const OverviewCardSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between">
        <SkeletonCard className="h-6 w-1/8" />
        <SkeletonCard className="h-6 w-1/8" />
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

      <div className="w-full flex justify-between !mt-5">
        <SkeletonCard className="h-6 w-1/8" />

        <div className="flex gap-2 w-1/2">
          <SkeletonCard className="h-6 flex-1" />
          <SkeletonCard className="h-6 flex-1" />
          <SkeletonCard className="h-6 flex-1" />
          <SkeletonCard className="h-6 flex-1" />
        </div>
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

export default OverviewCardSkeleton;
