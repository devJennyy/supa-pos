"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const StockHistorySkeleton = () => {
  return (
    <>
      <div className="w-full hidden lg:flex flex-col gap-4 !mt-3">
        <div className="flex flex-col gap-2">
          <SkeletonCard className="h-6 w-1/6" />
          <SkeletonCard className="h-4 w-1/3" />
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-2">
          <SkeletonCard className="h-5 w-20" />
          <div className="flex gap-2">
            <SkeletonCard className="h-8 w-16 rounded-md" />
            <SkeletonCard className="h-8 w-20 rounded-md" />
            <SkeletonCard className="h-8 w-20 rounded-md" />
          </div>
        </div>

        <div className="border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl">
          <div className="flex justify-between py-3 border-b">
            <SkeletonCard className="h-8 w-[15%]" />
            <SkeletonCard className="h-8 w-[15%]" />
            <SkeletonCard className="h-8 w-[15%]" />
            <SkeletonCard className="h-8 w-[10%]" />
            <SkeletonCard className="h-8 w-[10%]" />
            <SkeletonCard className="h-8 w-[20%]" />
          </div>

          <div className="flex flex-col divide-y">
            {[...Array(5)].map((_, i) => (
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

        <div className="flex lg:flex-row flex-col justify-between gap-2 !mt-5">
          <SkeletonCard className="h-8 w-2/4 rounded-md" />
          <div className="flex gap-2">
            <SkeletonCard className="h-8 w-16 rounded-md" />
            <SkeletonCard className="h-8 w-20 rounded-md" />
            <SkeletonCard className="h-8 w-20 rounded-md" />
          </div>
        </div>

        <div className="border border-border/50 px-5 bg-secondaryBackground/30 rounded-xl">
          <div className="flex justify-between py-3 border-b">
            <SkeletonCard className="h-8 w-[15%]" />
            <SkeletonCard className="h-8 w-[15%]" />
            <SkeletonCard className="h-8 w-[15%]" />
            <SkeletonCard className="h-8 w-[10%]" />
            <SkeletonCard className="h-8 w-[10%]" />
            <SkeletonCard className="h-8 w-[20%]" />
          </div>

          <div className="flex flex-col divide-y">
            {[...Array(5)].map((_, i) => (
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
      </div>

      <div className="flex flex-col gap-6 lg:hidden">
        <div className="flex flex-col gap-2">
          <SkeletonCard className="h-6 w-1/6" />
          <SkeletonCard className="h-5 sm:w-1/3 w-5/6" />
        </div>
        {/* Container 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <SkeletonCard className="h-5 lg:w-1/8 w-1/4" />
            <SkeletonCard className="h-6 lg:w-1/8 w-3/6" />
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
            <div className="flex gap-2 sm:w-1/2 w-5/6">
              <SkeletonCard className="h-6 flex-1" />
              <SkeletonCard className="h-6 flex-1" />
              <SkeletonCard className="h-6 flex-1" />
            </div>
            <SkeletonCard className="h-6 lg:w-1/8 sm:w-1/4 w-1/2" />
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

export default StockHistorySkeleton;
