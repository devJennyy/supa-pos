"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import OverviewCard from "@/components/dashboard/OverviewCard";
import CustomOverview from "@/components/dashboard/CustomOverview";
import { Chart } from "@/components/ui/chart-area";
import { ChartBarMultiple } from "@/components/ui/chart-bar-multiple";
import { ChartPieLegend } from "@/components/ui/chart-pie-legend";

const salesOverTime = [
  { date: "Aug 1", cash: 1200, bank: 800 },
  { date: "Aug 2", cash: 1500, bank: 500 },
  { date: "Aug 3", cash: 1000, bank: 1200 },
  { date: "Aug 4", cash: 1800, bank: 1000 },
];

const monthlyProfit = [
  { date: "Week 1", profit: 3000, revenue: 5000 },
  { date: "Week 2", profit: 3500, revenue: 5400 },
  { date: "Week 3", profit: 2800, revenue: 4700 },
  { date: "Week 4", profit: 4000, revenue: 6000 },
];

const paymentMix = [
  { name: "Cash", value: 5500 },
  { name: "Bank", value: 3700 },
];

const COLORS = ["#0088FE", "#00C49F"];

const topSellers = [
  { name: "Ramen Special", sold: 120 },
  { name: "Sushi Platter", sold: 95 },
  { name: "Bento Lunch", sold: 60 },
];

const lowStock = [
  { name: "Soy Sauce", stock: 5 },
  { name: "Nori Sheets", stock: 2 },
  { name: "Rice", stock: 8 },
];

export default function Page() {

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <OverviewCard />
      <CustomOverview />
      <div className="flex lg:flex-row flex-col w-full lg:gap-4 gap-8">
        <ChartBarMultiple />
        <ChartPieLegend />
      </div>
      <Chart />

      {/* Product Insights */}
      <Tabs defaultValue="top">
        <TabsList>
          <TabsTrigger value="top">Top Sellers</TabsTrigger>
          <TabsTrigger value="low">Low Stock</TabsTrigger>
        </TabsList>
        <TabsContent value="top">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              {topSellers.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b last:border-0">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.sold}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="low">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle>Low Stock Products</CardTitle>
            </CardHeader>
            <CardContent>
              {lowStock.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b last:border-0">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.stock}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
