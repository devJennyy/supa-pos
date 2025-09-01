import SkeletonCard from "@/components/ui/skeleton-loading";
import React from "react";

const Chart = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      <div className="w-full flex lg:flex-row flex-col justify-between gap-4">
        <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full sm:h-[350px] h-[405px] xl:h-[450px] 2xl:h-[460px] rounded-xl">
          <div className="flex flex-col gap-2">
            <SkeletonCard className="h-5 w-1/8" />
            <SkeletonCard className="h-5 w-1/12" />
          </div>

          <SkeletonCard className="4xl:h-[980px] xl:h-[320px] sm:h-[220px] h-[60px] w-full" />

          <SkeletonCard className="h-5 w-1/4" />
        </div>
        <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full  sm:h-[350px] h-[405px] xl:h-[450px] 2xl:h-[460px] rounded-xl">
          <div className="flex flex-col gap-2">
            <SkeletonCard className="h-5 w-1/8" />
            <SkeletonCard className="h-5 w-1/12" />
          </div>

          <SkeletonCard className="4xl:h-[980px] xl:h-[320px] sm:h-[220px] h-[60px] w-full" />

          <SkeletonCard className="h-5 w-1/4" />
        </div>
      </div>

      <div className="flex flex-col p-5 justify-between bg-secondaryBackground border w-full  sm:h-[350px] h-[405px] xl:h-[450px] 2xl:h-[460px] rounded-xl">
        <div className="flex flex-col gap-2">
          <SkeletonCard className="h-5 w-1/8" />
          <SkeletonCard className="h-5 w-1/12" />
        </div>

        <SkeletonCard className="4xl:h-[980px] xl:h-[320px] sm:h-[220px] h-[60px] w-full" />

        <SkeletonCard className="h-5 w-1/4" />
      </div>
    </div>
  );
};

export default Chart;
