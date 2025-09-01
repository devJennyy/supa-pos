import SkeletonCard from "@/components/ui/skeleton-loading";
import React from "react";

const Chart = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      <div className="w-full flex justify-betwee gap-4">
        <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full h-[200px] lg:h-[664px] 3xl:h-[980px] rounded-xl">
          <div className="flex flex-col gap-2">
            <SkeletonCard className="h-5 w-1/8" />
            <SkeletonCard className="h-5 w-1/12" />
          </div>

          <SkeletonCard className="3xl:h-[980px] lg:h-[480px] h-[200px] w-full" />

          <SkeletonCard className="h-5 w-1/4" />
        </div>
        <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full h-[200px] lg:h-[664px] 3xl:h-[980px] rounded-xl">
          <div className="flex flex-col gap-2">
            <SkeletonCard className="h-5 w-1/8" />
            <SkeletonCard className="h-5 w-1/12" />
          </div>

          <SkeletonCard className="3xl:h-[980px] lg:h-[480px] h-[200px] w-full" />

          <SkeletonCard className="h-5 w-1/4" />
        </div>
      </div>

      <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full h-[200px] lg:h-[664px] 3xl:h-[980px] rounded-xl">
        <div className="flex flex-col gap-2">
          <SkeletonCard className="h-5 w-1/8" />
          <SkeletonCard className="h-5 w-1/12" />
        </div>

        <SkeletonCard className="3xl:h-[980px] lg:h-[480px] h-[200px] w-full" />

        <SkeletonCard className="h-5 w-1/4" />
      </div>
    </div>
  );
};

export default Chart;
