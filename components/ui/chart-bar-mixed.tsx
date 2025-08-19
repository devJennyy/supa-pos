"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Top selling convenience store products";

const chartData = [
  { product: "Instant Noodles", sold: 275, fill: "var(--chart-1)" },
  { product: "Bottled Water", sold: 250, fill: "var(--chart-2)" },
  { product: "Chocolate Bar", sold: 230, fill: "var(--chart-3)" },
  { product: "Chips", sold: 210, fill: "var(--chart-4)" },
  { product: "Energy Drink", sold: 190, fill: "var(--chart-5)" },
  { product: "Coffee", sold: 175, fill: "var(--chart-6)" },
  { product: "Candy", sold: 160, fill: "var(--chart-7)" },
  { product: "Sandwich", sold: 145, fill: "var(--chart-8)" },
  { product: "Ice Cream", sold: 130, fill: "var(--chart-9)" },
  { product: "Juice Box", sold: 120, fill: "var(--chart-10)" },
];

const chartConfig = {
  sold: { label: "Units Sold" },
  "Instant Noodles": { label: "Instant Noodles", color: "var(--chart-1)" },
  "Bottled Water": { label: "Bottled Water", color: "var(--chart-2)" },
  "Chocolate Bar": { label: "Chocolate Bar", color: "var(--chart-3)" },
  Chips: { label: "Chips", color: "var(--chart-4)" },
  "Energy Drink": { label: "Energy Drink", color: "var(--chart-5)" },
  Coffee: { label: "Coffee", color: "var(--chart-6)" },
  Candy: { label: "Candy", color: "var(--chart-7)" },
  Sandwich: { label: "Sandwich", color: "var(--chart-8)" },
  "Ice Cream": { label: "Ice Cream", color: "var(--chart-9)" },
  "Juice Box": { label: "Juice Box", color: "var(--chart-10)" },
} satisfies ChartConfig;

export function ChartBarMixed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Selling Products</CardTitle>
        <CardDescription>June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="hidden lg:block 2xl:h-[980px] lg:h-[480px] h-[200px] w-full">
          {/* Desktop Chart */}
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 0 }}
          >
            <YAxis
              dataKey="product"
              type="category"
              tickLine={false}
              axisLine={false}
              width={120}
              tick={({ y, payload }) => {
                const label =
                  chartConfig[payload.value as keyof typeof chartConfig]?.label;
                return (
                  <text
                    x={0}
                    y={y}
                    textAnchor="start"
                    dominantBaseline="middle"
                    style={{ fontSize: 12 }}
                  >
                    {label}
                  </text>
                );
              }}
            />
            <XAxis dataKey="sold" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sold" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
        <ChartContainer config={chartConfig} className="lg:hidden">
          {/* Mobile Chart */}
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 20 }}
          >
            <YAxis
              dataKey="product"
              type="category"
              tickLine={false}
              axisLine={false}
              width={80}
              interval={0}
              tick={({ y, payload }) => {
                const label =
                  chartConfig[payload.value as keyof typeof chartConfig]?.label;
                return (
                  <text
                    x={5}
                    y={y}
                    textAnchor="start"
                    dominantBaseline="middle"
                    style={{ fontSize: 11 }}
                  >
                    {label}
                  </text>
                );
              }}
              className="lg:hidden"
            />

            <XAxis dataKey="sold" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sold" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-normal">
          Showing the top 10 selling products
        </div>
      </CardFooter>
    </Card>
  );
}
