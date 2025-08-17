"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

export const description = "An area chart with axes";

const chartData = [
  { month: "January", desktop: 8000, mobile: 4000 },
  { month: "February", desktop: 15000, mobile: 9000 },
  { month: "March", desktop: 12000, mobile: 7000 },
  { month: "April", desktop: 20000, mobile: 15000 },
  { month: "May", desktop: 18000, mobile: 11000 },
  { month: "June", desktop: 23000, mobile: 14000 },
];

const chartConfig = {
  desktop: {
    label: "Profit",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Showing your monthly profit</CardTitle>
        <CardDescription>Data shown: January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="lg:h-[350px] h-[200px]">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000}k`
              }
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.5}
              stroke="var(--color-mobile)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 text-sm">
          <div className="text-muted-foreground flex items-center gap-2 leading-tight">
            Click the curves to see your monthly profits & revenues
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
