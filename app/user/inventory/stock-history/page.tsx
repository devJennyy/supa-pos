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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { subDays } from "date-fns";
import StockHistorySkeleton from "@/components/inventory/skeleton/StockHistory";

export type StockHistoryItem = {
  id: string;
  name: string;
  category: string;
  unitDescription?: string;
  action: "Added" | "Deducted";
  quantity: number;
  timestamp: string;
};

const history: StockHistoryItem[] = [
  {
    id: "1",
    name: "Eggs",
    category: "Ingredients",
    unitDescription: "1 tray (12 pcs) medium",
    action: "Deducted",
    quantity: 2,
    timestamp: "2025-08-19 10:23 AM",
  },
  {
    id: "2",
    name: "Butter (Unsalted)",
    category: "Ingredients",
    unitDescription: "1 block",
    action: "Added",
    quantity: 5,
    timestamp: "2025-08-18 02:15 PM",
  },
  {
    id: "3",
    name: "Cupcake Box (6s)",
    category: "Packaging",
    unitDescription: "1 box",
    action: "Deducted",
    quantity: 3,
    timestamp: "2025-08-18 09:45 AM",
  },
];

export default function StockHistoryPage() {
  const [tab, setTab] = useState<"all" | "deducted" | "added">("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    subDays(new Date(), 1)
  );
  const [isLoading, setIsLoading] = useState(true);

  const filteredData = history.filter((item) => {
    if (tab === "deducted") return item.action === "Deducted";
    if (tab === "added") return item.action === "Added";
    return true;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 lg:p-5 p-4">
      {isLoading ? (
        <StockHistorySkeleton />
      ) : (
        <>
          <SectionTitle
            title="Stock History"
            label="View all added and deducted stock activities"
            direction="col"
          />

          {/* Today's History */}
          <Tabs
            value={tab}
            onValueChange={(value) =>
              setTab(value as "all" | "deducted" | "added")
            }
          >
            <div className="flex lg:flex-row flex-col justify-between lg:!mb-1 !mb-2 gap-2">
              <SectionTitle title="Today" />
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="deducted">Deducted</TabsTrigger>
                <TabsTrigger value="added">Added</TabsTrigger>
              </TabsList>
            </div>
            <Card className="border border-border/50 px-5 bg-secondaryBackground/30">
              <TabsContent value={tab}>
                <Table className="rounded-lg border overflow-hidden">
                  <TableHeader className="sticky top-0 bg-input z-10 h-14">
                    <TableRow>
                      <TableHead className="w-[25%] px-5">Item</TableHead>
                      <TableHead className="w-[20%]">Category</TableHead>
                      <TableHead className="w-[20%]">Unit</TableHead>
                      <TableHead className="w-[15%]">Action</TableHead>
                      <TableHead className="w-[10%]">Quantity</TableHead>
                      <TableHead className="w-[20%]">Date & Time</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="bg-secondaryBackground">
                    {filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium px-5 text-secondary h-14">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.unitDescription || "unit"}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.action === "Added"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {item.action}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="pr-5">{item.timestamp}</TableCell>
                      </TableRow>
                    ))}

                    {filteredData.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="text-center py-10 text-muted-foreground"
                        >
                          No stock history available.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TabsContent>
            </Card>
          </Tabs>

          {/* Custom Date History */}
          <Tabs
            value={tab}
            onValueChange={(value) =>
              setTab(value as "all" | "deducted" | "added")
            }
            className="!mt-5"
          >
            <div className="flex lg:flex-row flex-col justify-between lg:!mb-1 !mb-2 gap-2">
              <DatePicker date={selectedDate} setDate={setSelectedDate} />
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="deducted">Deducted</TabsTrigger>
                <TabsTrigger value="added">Added</TabsTrigger>
              </TabsList>
            </div>
            <Card className="border border-border/50 px-5 bg-secondaryBackground/30">
              <TabsContent value={tab}>
                <Table className="rounded-lg border overflow-hidden">
                  <TableHeader className="sticky top-0 bg-input z-10 h-14">
                    <TableRow>
                      <TableHead className="w-[25%] px-5">Item</TableHead>
                      <TableHead className="w-[20%]">Category</TableHead>
                      <TableHead className="w-[20%]">Unit</TableHead>
                      <TableHead className="w-[15%]">Action</TableHead>
                      <TableHead className="w-[10%]">Quantity</TableHead>
                      <TableHead className="w-[20%]">Date & Time</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="bg-secondaryBackground">
                    {filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium px-5 text-secondary h-14">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.unitDescription || "unit"}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.action === "Added"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {item.action}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="pr-5">{item.timestamp}</TableCell>
                      </TableRow>
                    ))}

                    {filteredData.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="text-center py-10 text-muted-foreground"
                        >
                          No stock history available.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TabsContent>
            </Card>
          </Tabs>
        </>
      )}
    </main>
  );
}
