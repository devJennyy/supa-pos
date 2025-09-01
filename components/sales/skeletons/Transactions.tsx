"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const TransactionHistorySkeleton = () => {
  const skeletonRows = Array.from({ length: 7 });

  return (
    <>
      <div className="hidden lg:flex flex-1 flex-col gap-8 lg:p-5 p-4">
        <div className="flex flex-col gap-4">
          <SkeletonCard className="h-6 lg:w-1/6 sm:w-1/4 w-1/2" />
          <SkeletonCard className="h-6 lg:w-1/6 sm:w-1/4 w-1/2" />

          <div className="overflow-x-auto">
            <div className="w-full border rounded-lg overflow-hidden">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-5 p-5 bg-secondaryBackground">
                {Array.from({ length: 7 }).map((_, i) => (
                  <SkeletonCard key={i} className="h-8 rounded-md" />
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
            <div className="flex gap-2 w-1/2">
              <SkeletonCard className="h-6 flex-1" />
              <SkeletonCard className="h-6 flex-1" />
              <SkeletonCard className="h-6 flex-1" />
              <SkeletonCard className="h-6 flex-1" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="w-full border rounded-lg overflow-hidden">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-5 p-5 bg-secondaryBackground">
                {Array.from({ length: 7 }).map((_, i) => (
                  <SkeletonCard key={i} className="h-8 rounded-md" />
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

      {/* Mobile Accordion Skeleton */}
      <div className="flex flex-col gap-6 lg:hidden p-4">
        {/* Container 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <SkeletonCard className="h-6 lg:w-1/8 w-1/2" />
            <SkeletonCard className="h-5 lg:w-1/8 w-1/4" />
          </div>
          <div className="border rounded-lg bg-secondaryBackground/30 p-3 space-y-3">
            {/* Accordion Item 1 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
                <SkeletonCard className="h-4 w-3/4" />
                <SkeletonCard className="h-3 w-1/2" />
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
                <SkeletonCard className="h-4 w-2/3" />
                <SkeletonCard className="h-3 w-1/3" />
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
                <SkeletonCard className="h-4 w-1/2" />
                <SkeletonCard className="h-3 w-1/4" />
              </div>
            </div>
          </div>
        </div>

        {/* Container 2 */}
        <div className="flex flex-col gap-3">
          <div className="w-full flex lg:flex-row flex-col justify-between !mt-5 gap-3">
        <SkeletonCard className="h-6 lg:w-1/8 w-1/6" />

        <div className="flex gap-2 sm:w-1/2 ">
          <SkeletonCard className="h-6 flex-1" />
          <SkeletonCard className="h-6 flex-1" />
          <SkeletonCard className="h-6 flex-1" />
          <SkeletonCard className="h-6 flex-1" />
        </div>
      </div>
          <div className="border rounded-lg bg-secondaryBackground/30 p-3 space-y-3">
            {/* Accordion Item 1 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
                <SkeletonCard className="h-4 w-3/4" /> {/* Reference # */}
                <SkeletonCard className="h-3 w-1/2" /> {/* Date */}
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
                <SkeletonCard className="h-4 w-2/3" />
                <SkeletonCard className="h-3 w-1/3" />
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex flex-col gap-2 px-3 py-4 bg-secondaryBackground/20 rounded-t">
                <SkeletonCard className="h-4 w-1/2" />
                <SkeletonCard className="h-3 w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistorySkeleton;
