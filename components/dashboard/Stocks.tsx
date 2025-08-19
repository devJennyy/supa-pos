"use client";

import * as React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "../ui/section-title";
import { ChartBarMixed } from "../ui/chart-bar-mixed";
import { ChartLowStock } from "../ui/low-stock-chart";

export function Stocks() {
  return (
    <Tabs defaultValue="top">
      <div className="flex lg:flex-row flex-col justify-between lg:!mb-1 !mb-2 gap-2">
        <SectionTitle title="Inventory Overview" />
        <TabsList>
          <TabsTrigger value="top">Top Selling</TabsTrigger>
          <TabsTrigger value="low">Low Stock</TabsTrigger>
        </TabsList>
      </div>

      {/* Top Sellers Tab */}
      <TabsContent value="top">
        <ChartBarMixed />
      </TabsContent>

      {/* Low Stock Tab */}
      <TabsContent value="low">
        <ChartLowStock />
      </TabsContent>
    </Tabs>
  );
}
