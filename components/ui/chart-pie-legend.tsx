"use client";

import { Pie, PieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { data: "cash", amount: 25000, fill: "var(--color-cash)" },
  { data: "onlineBanks", amount: 15000, fill: "var(--color-onlineBanks)" },
];

const chartConfig = {
  cash: {
    label: "Cash",
    color: "var(--chart-1)",
  },
  onlineBanks: {
    label: "Online Banks",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartPieLegend() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Payment Mix</CardTitle>
        <CardDescription>June 2025</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="sm:!mx-auto sm:aspect-square sm:max-h-[300px] min-h-[200px] sm:!mt-0 !mt-[-2rem] !ml-[-1.7rem]"
        >
          <PieChart>
             <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="data"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {chartData[index].amount.toLocaleString()}
                  </text>
                );
              }}
              labelLine={false}
            />

            <ChartLegend
              content={<ChartLegendContent nameKey="data" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center whitespace-nowrap"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full flex-col gap-2 text-sm">
          <div className="text-muted-foreground flex items-center gap-2 leading-normal">
            Showing you the payment breakdown of your sales
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
