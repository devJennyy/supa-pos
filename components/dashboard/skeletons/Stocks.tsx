import SkeletonCard from "@/components/ui/skeleton-loading";
import React from "react";

const StocksSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      <div className="flex justify-between">
        <SkeletonCard className="h-6 w-1/8" />
        <SkeletonCard className="h-6 w-1/6" />
      </div>

      <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full h-[200px] lg:h-[664px] 3xl:h-[980px] rounded-xl">
        <div className="flex flex-col gap-2">
          <SkeletonCard className="h-5 w-1/8" />
          <SkeletonCard className="h-5 w-1/6" />
        </div>

        <SkeletonCard className="3xl:h-[980px] lg:h-[480px] h-[200px] w-full" />
        <div className="flex flex-col gap-2">
          <SkeletonCard className="h-5 w-1/8" />
          <SkeletonCard className="h-5 w-1/6" />
        </div>
      </div>
    </div>
  );
};

export default StocksSkeleton;
