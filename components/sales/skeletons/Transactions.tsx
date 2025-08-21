"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const TransactionHistorySkeleton = () => {
  const skeletonRows = Array.from({ length: 7 });

  return (
    <div className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <div className="flex flex-col gap-4">
        <SkeletonCard className="h-6 w-1/8" />

        <div className="overflow-x-auto">
          <div className="w-full border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-5 p-5 bg-secondaryBackground">
              {Array.from({ length: 7 }).map((_, i) => (
                <SkeletonCard key={i} className="h-6 rounded-md" />
              ))}
            </div>

            <div className="divide-y">
              {skeletonRows.map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-5 p-5"
                >
                  {Array.from({ length: 7 }).map((_, i) => (
                    <SkeletonCard key={i} className="h-4 rounded-md" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-3">
          <SkeletonCard className="h-6 w-1/8" />
          <SkeletonCard className="h-6 w-2/8 rounded-md" />
        </div>

        <div className="overflow-x-auto">
          <div className="w-full border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-5 p-5 bg-secondaryBackground">
              {Array.from({ length: 7 }).map((_, i) => (
                <SkeletonCard key={i} className="h-4 rounded-md" />
              ))}
            </div>

            <div className="divide-y">
              {skeletonRows.map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-5 p-5"
                >
                  {Array.from({ length: 7 }).map((_, i) => (
                    <SkeletonCard key={i} className="h-4 rounded-md" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistorySkeleton;
