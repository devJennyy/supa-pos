"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionTitle from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import StockHistory from "@/components/reports/skeleton/StockHistory";

export type StockHistoryItem = {
  id: string;
  name: string;
  action: "Added" | "Sold" | "Used" | "Removed";
  quantity: number;
  price: number;
  timestamp: string;
};

const stockData: Record<"daily" | "weekly" | "monthly", StockHistoryItem[]> = {
  daily: [
    {
      id: "1",
      name: "Eggs",
      action: "Added",
      quantity: 2,
      price: 250,
      timestamp: "2025-08-20 08:10 AM",
    },
    {
      id: "2",
      name: "Butter (Unsalted)",
      action: "Sold",
      quantity: 1,
      price: 450,
      timestamp: "2025-08-20 09:30 AM",
    },
    {
      id: "3",
      name: "Cupcake Box (6s)",
      action: "Used",
      quantity: 3,
      price: 300,
      timestamp: "2025-08-20 10:15 AM",
    },
    {
      id: "4",
      name: "Flour (1kg)",
      action: "Added",
      quantity: 5,
      price: 120,
      timestamp: "2025-08-20 11:00 AM",
    },
    {
      id: "5",
      name: "Milk (1L)",
      action: "Removed",
      quantity: 2,
      price: 100,
      timestamp: "2025-08-20 01:45 PM",
    },
  ],
  weekly: [
    {
      id: "1",
      name: "Eggs",
      action: "Added",
      quantity: 12,
      price: 250,
      timestamp: "2025-08-14 to 2025-08-20",
    },
    {
      id: "2",
      name: "Butter (Unsalted)",
      action: "Sold",
      quantity: 5,
      price: 450,
      timestamp: "2025-08-14 to 2025-08-20",
    },
    {
      id: "3",
      name: "Cupcake Box (6s)",
      action: "Used",
      quantity: 10,
      price: 300,
      timestamp: "2025-08-14 to 2025-08-20",
    },
    {
      id: "4",
      name: "Flour (1kg)",
      action: "Added",
      quantity: 20,
      price: 120,
      timestamp: "2025-08-14 to 2025-08-20",
    },
    {
      id: "5",
      name: "Milk (1L)",
      action: "Removed",
      quantity: 8,
      price: 100,
      timestamp: "2025-08-14 to 2025-08-20",
    },
  ],
  monthly: [
    {
      id: "1",
      name: "Eggs",
      action: "Added",
      quantity: 50,
      price: 250,
      timestamp: "August 2025",
    },
    {
      id: "2",
      name: "Butter (Unsalted)",
      action: "Sold",
      quantity: 20,
      price: 450,
      timestamp: "August 2025",
    },
    {
      id: "3",
      name: "Cupcake Box (6s)",
      action: "Used",
      quantity: 30,
      price: 300,
      timestamp: "August 2025",
    },
    {
      id: "4",
      name: "Flour (1kg)",
      action: "Added",
      quantity: 100,
      price: 120,
      timestamp: "August 2025",
    },
    {
      id: "5",
      name: "Milk (1L)",
      action: "Removed",
      quantity: 40,
      price: 100,
      timestamp: "August 2025",
    },
  ],
};

export default function ReportPage() {
  const [tab, setTab] = useState<"daily" | "weekly" | "monthly">("daily");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const getTitle = () => {
    switch (tab) {
      case "daily":
        return "Daily Report";
      case "weekly":
        return "Weekly Report";
      case "monthly":
        return "Monthly Report";
      default:
        return "Report";
    }
  };

  const data = stockData[tab];

  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = data.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <main className="flex flex-1 flex-col lg:p-5 p-4">
      {isLoading ? (
        <>
          <StockHistory />
        </>
      ) : (
        <>
          <SectionTitle
            title="Stock Report"
            label="Summary of stock movements, quantities, and values for the selected period"
            direction="col"
          />

          <Tabs
            value={tab}
            onValueChange={(value) =>
              setTab(value as "daily" | "weekly" | "monthly")
            }
            className="!mt-5"
          >
            <div className="flex lg:flex-row flex-col justify-between items-center lg:!mb-1 !mb-2 gap-2">
              <SectionTitle title={getTitle()} />
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </div>

            <Card className="border border-border/50 px-5 bg-secondaryBackground/30">
              <TabsContent value={tab}>
                <Table className="rounded-lg border overflow-hidden">
                  <TableHeader className="sticky top-0 bg-input z-10 h-14">
                    <TableRow>
                      <TableHead className="w-[20%] px-5">Item</TableHead>
                      <TableHead className="w-[15%]">Action</TableHead>
                      <TableHead className="w-[15%]">Quantity</TableHead>
                      <TableHead className="w-[15%]">Price</TableHead>
                      <TableHead className="w-[15%]">Total</TableHead>
                      <TableHead className="w-[20%]">Date/Period</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="bg-secondaryBackground">
                    {data.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium px-5 text-secondary h-14">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.action}</TableCell>
                        <TableCell>{item.quantity.toLocaleString()}</TableCell>
                        <TableCell>₱{item.price.toLocaleString()}</TableCell>
                        <TableCell>
                          ₱{(item.price * item.quantity).toLocaleString()}
                        </TableCell>
                        <TableCell>{item.timestamp}</TableCell>
                      </TableRow>
                    ))}

                    {data.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="text-center py-10 text-muted-foreground"
                        >
                          No data available.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>

                <div className="flex justify-end gap-10 !mt-4 pr-5">
                  <div className="text-secondary">
                    Total Quantity:{" "}
                    <span className="text-primary font-bold tracking-wide">
                      {totalQuantity.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-secondary">
                    Total Value:{" "}
                    <span className="text-primary font-bold tracking-wide">
                      ₱{totalValue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </TabsContent>
            </Card>
          </Tabs>
        </>
      )}
    </main>
  );
}
