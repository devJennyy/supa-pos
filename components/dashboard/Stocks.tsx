"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "../ui/section-title";
import { ChartBarMixed } from "../ui/chart-bar-mixed";

const topSellers = [
  { name: "Ramen Special", category: "Ramen", sold: 120 },
  { name: "Sushi Platter", category: "Sushi", sold: 95 },
  { name: "Bento Lunch", category: "Lunch", sold: 60 },
  { name: "Tempura Set", category: "Tempura", sold: 80 },
  { name: "Miso Soup", category: "Soup", sold: 150 },
  { name: "Sashimi Deluxe", category: "Sushi", sold: 70 },
  { name: "Chicken Katsu", category: "Lunch", sold: 65 },
  { name: "Salmon Nigiri", category: "Sushi", sold: 85 },
  { name: "Udon Noodles", category: "Noodles", sold: 90 },
  { name: "Takoyaki", category: "Snacks", sold: 55 },
];

const lowStock = [
  { name: "Soy Sauce", category: "Condiment", stock: 5 },
  { name: "Nori Sheets", category: "Ingredient", stock: 2 },
  { name: "Rice", category: "Ingredient", stock: 8 },
  { name: "Wasabi Paste", category: "Condiment", stock: 3 },
  { name: "Ginger", category: "Condiment", stock: 4 },
  { name: "Tofu", category: "Ingredient", stock: 6 },
  { name: "Green Onions", category: "Ingredient", stock: 7 },
  { name: "Sesame Seeds", category: "Condiment", stock: 2 },
  { name: "Tempura Batter", category: "Ingredient", stock: 5 },
  { name: "Seaweed Salad", category: "Salad", stock: 3 },
];

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
        <Card className="rounded-2xl shadow-md lg:text-base text-sm">
          <CardHeader>
            <CardTitle>Low Stock Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[2fr_1fr_1fr] font-semibold border-b pb-2 mb-2">
              <span>Name</span>
              <span>Category</span>
              <span className="lg:text-left text-right">Stock</span>
            </div>

            {lowStock.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[2fr_1fr_1fr] py-2 border-b border-border/40 last:border-0"
              >
                <span className="text-secondary truncate">{item.name}</span>
                <span className="text-secondary">{item.category}</span>
                <span className="font-semibold lg:text-left text-right">
                  {item.stock}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
