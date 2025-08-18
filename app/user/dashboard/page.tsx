"use client";

import React from "react";
import OverviewCard from "@/components/dashboard/OverviewCard";
import { Stocks } from "@/components/dashboard/Stocks";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <OverviewCard />
      <Stocks />
    </main>
  );
}
