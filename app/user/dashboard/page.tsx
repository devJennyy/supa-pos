"use client";

import React from "react";
import OverviewCard from "@/components/dashboard/OverviewCard";
import CustomOverview from "@/components/dashboard/CustomOverview";
import MonthlyGraph from "@/components/dashboard/MonthlyGraph";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-5">
      <OverviewCard />
      <CustomOverview />
      <MonthlyGraph />
    </div>
  );
}
