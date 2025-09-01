"use client";

import React from "react";
import SkeletonCard from "@/components/ui/skeleton-loading";

const AccountSettingsSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <SkeletonCard className="h-7 w-1/5" />

      <div className="shadow-md rounded-2xl w-full border p-6 space-y-6">
        <SkeletonCard className="h-6 w-32" />

        <div className="flex flex-col items-center space-y-3">
          <SkeletonCard className="h-28 w-28 rounded-full" />
          <SkeletonCard className="h-4 w-40" />
        </div>

        <div className="flex gap-4 w-full">
          <SkeletonCard className="h-10 w-1/2" />
          <SkeletonCard className="h-10 w-1/2" />
        </div>

        <SkeletonCard className="h-10 w-full" />
        <SkeletonCard className="h-10 w-full" />
      </div>

      <div className="shadow-md rounded-2xl w-full border p-6 space-y-4">
        <SkeletonCard className="h-6 w-28" /> 
        <SkeletonCard className="h-10 w-full" />
        <SkeletonCard className="h-10 w-full" />
        <SkeletonCard className="h-10 w-full" />
      </div>

      <div className="shadow-md rounded-2xl w-full border p-6 space-y-4">
        <SkeletonCard className="h-6 w-24" /> 
        <div className="flex gap-4 w-full">
          <SkeletonCard className="h-10 w-1/2" />
          <SkeletonCard className="h-10 w-1/2" /> 
        </div>
        <SkeletonCard className="h-10 w-full" />
      </div>

      <div className="shadow-md rounded-2xl w-full border p-6 space-y-4">
        <SkeletonCard className="h-6 w-20" />
        <SkeletonCard className="h-4 w-1/2" />
        <SkeletonCard className="h-10 w-full" />
      </div>
    </div>
  );
};

export default AccountSettingsSkeleton;
