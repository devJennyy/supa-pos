"use client";

import { TrendingDown } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";

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

export const description = "Low stock convenience store products";

const chartData = [
  { product: "Instant Noodles", stock: 5, fill: "var(--chart-yellow)" },
  { product: "Bottled Water", stock: 0, fill: "var(--chart-red)" },
  { product: "Chocolate Bar", stock: 3, fill: "var(--chart-yellow)" },
  { product: "Chips", stock: 2, fill: "var(--chart-orange)" },
  { product: "Energy Drink", stock: 1, fill: "var(--chart-orange)" },
  { product: "Coffee", stock: 4, fill: "var(--chart-yellow)" },
  { product: "Candy", stock: 2, fill: "var(--chart-orange)" },
  { product: "Sandwich", stock: 5, fill: "var(--chart-yellow)" },
  { product: "Ice Cream", stock: 0, fill: "var(--chart-red)" },
  { product: "Juice Box", stock: 1, fill: "var(--chart-orange)" },
];

const chartConfig = {
  stock: { label: "Stock Remaining" },
} satisfies ChartConfig;

const MAX_DOMAIN = 10;

export function ChartLowStock() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Low Stock Products</CardTitle>
        <CardDescription>June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Desktop Chart */}
        <ChartContainer config={chartConfig} className="hidden lg:block">
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
              width={220}
              tick={({ y, payload }) => {
                const item = chartData.find((d) => d.product === payload.value);
                return (
                  <g>
                    {/* Number of stocks */}
                    <text
                      x={0}
                      y={y}
                      textAnchor="start"
                      dominantBaseline="middle"
                      style={{
                        fontSize: 14,
                        fill: item?.fill,
                        fontWeight: 700,
                      }}
                    >
                      {item?.stock === 0
                        ? "Out of Stock"
                        : `${item?.stock} stock`}
                    </text>
                    {/* Product name */}
                    <text
                      x={110}
                      y={y}
                      textAnchor="start"
                      dominantBaseline="middle"
                      style={{ fontSize: 12, fontWeight: 500 }}
                    >
                      {payload.value}
                    </text>
                  </g>
                );
              }}
            />
            <XAxis
              dataKey="stock"
              type="number"
              domain={[0, MAX_DOMAIN]}
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="stock"
              layout="vertical"
              radius={5}
              background={{ fill: "rgba(0,0,0,0.08)", radius: 5 }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>

        {/* Mobile Chart */}
        <ChartContainer config={chartConfig} className="lg:hidden">
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
              width={160}
              interval={0}
              tick={({ y, payload }) => {
                const item = chartData.find((d) => d.product === payload.value);
                return (
                  <g>
                    {/* Number of stocks */}
                    <text
                      x={0}
                      y={y}
                      textAnchor="start"
                      dominantBaseline="middle"
                      style={{
                        fontSize: 11,
                        fill: item?.fill,
                        fontWeight: 500,
                      }}
                    >
                      {item?.stock === 0
                        ? "Out of Stock"
                        : `${item?.stock} stock`}
                    </text>
                    {/* Product name */}
                    <text
                      x={90}
                      y={y}
                      textAnchor="start"
                      dominantBaseline="middle"
                      style={{ fontSize: 11, fontWeight: 500 }}
                    >
                      {payload.value}
                    </text>
                  </g>
                );
              }}
            />
            <XAxis
              dataKey="stock"
              type="number"
              domain={[0, MAX_DOMAIN]}
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="stock"
              layout="vertical"
              radius={5}
              background={{ fill: "rgba(0,0,0,0.08)", radius: 5 }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Low stock alerts generated <TrendingDown className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-normal">
          Showing products with stock 5 and below
        </div>
      </CardFooter>
    </Card>
  );
}
