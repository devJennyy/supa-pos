"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const ItemSelectionSkeleton = () => {
  const skeletonItems = Array.from({ length: 12 });

  return (
    <div className="flex flex-col gap-4">
      <SkeletonCard className="h-6 lg:w-1/12 sm:w-1/8 w-1/4" />

      <div className="grid lg:gap-5 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="border lg:p-5 p-2.5 rounded-xl cursor-pointer text-start"
          >
            <div className="w-full h-full flex flex-col lg:gap-4 gap-1.5">
              <div className="w-full lg:h-16 flex lg:flex-row flex-col justify-between lg:gap-4 gap-3">
                <SkeletonCard className="w-full lg:max-w-16 lg:h-full h-24 rounded-lg mb-2" />

                <div className="flex flex-col justify-between lg:gap-1 gap-1.5 w-full">
                  <SkeletonCard className="h-4 lg:text-sm text-[13px] rounded-md mb-1" />
                  <SkeletonCard className="h-4 lg:text-sm text-[13px] rounded-md mb-3" />
                  <div className="flex justify-between">
                    <SkeletonCard className="h-3 w-1/3 rounded-md" />
                    <SkeletonCard className="h-3 w-1/4 rounded-md" />
                  </div>
                </div>
              </div>

              <SkeletonCard className="w-1/3 h-5 rounded-md my-1" />

              <div className="flex flex-col lg:gap-3 gap-1.5">
                <SkeletonCard className="h-9 rounded-md" />
                <SkeletonCard className="h-9 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSelectionSkeleton;
