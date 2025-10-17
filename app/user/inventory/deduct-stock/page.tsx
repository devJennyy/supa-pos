"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCcw } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import { Label } from "@/components/ui/label";
import DeductStocksSkeleton from "@/components/inventory/skeleton/DeductStock";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type StockItem = {
  id: string;
  name: string;
  category: string;
  unitDescription?: string;
  stock: number;
};

const MOCK: StockItem[] = [
  {
    id: "1",
    name: "Eggs",
    category: "Ingredients",
    stock: 4,
    unitDescription: "1 tray (12 pcs) medium",
  },
  {
    id: "2",
    name: "All-Purpose Flour",
    category: "Ingredients",
    stock: 4,
    unitDescription: "1 kg bag",
  },
  {
    id: "3",
    name: "Butter (Unsalted)",
    category: "Ingredients",
    stock: 7,
    unitDescription: "1 block",
  },
  {
    id: "4",
    name: "Chocolate Chips",
    category: "Ingredients",
    stock: 13,
    unitDescription: "1 pack",
  },
  {
    id: "5",
    name: "Cupcake Box (6s)",
    category: "Packaging",
    stock: 22,
    unitDescription: "1 box",
  },
  {
    id: "6",
    name: "White Sugar",
    category: "Ingredients",
    stock: 5,
    unitDescription: "1 kg bag",
  },
  {
    id: "7",
    name: "Vanilla Extract",
    category: "Ingredients",
    stock: 0,
    unitDescription: "1 bottle",
  },
  {
    id: "8",
    name: "Delivery Tape",
    category: "Supplies",
    stock: 9,
    unitDescription: "1 roll",
  },
  {
    id: "9",
    name: "Feeling Fresh",
    category: "Products",
    stock: 4,
    unitDescription: "55g",
  },
];

export default function DeductStockPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [deductValues, setDeductValues] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = React.useMemo(() => {
    const set = new Set<string>(MOCK.map((d) => d.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK.filter((item) => {
      const matchesSearch = !q || item.name.toLowerCase().includes(q);
      const matchesCategory = category === "all" || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [query, category]);

  const handleDeductChange = (id: string, value: string) => {
    const num = parseInt(value) || 0;
    setDeductValues((prev) => ({ ...prev, [id]: num }));
  };

  const handleDeductItem = (id: string) => {
    alert(`Deducted ${deductValues[id] || 0} from item ${id}`);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 lg:p-5 p-4">
      {isLoading ? (
        <DeductStocksSkeleton />
      ) : (
        <>
          <SectionTitle
            title="Deduct Stocks"
            label="Enter the quantity to deduct for each item"
            direction="col"
          />

          {/* Filters */}
          <div className="flex flex-col lg:gap-3 gap-5 md:flex-row md:items-end !mt-3">
            <div className="grid gap-3 w-full">
              <Label htmlFor="search">Search</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="search"
                  placeholder="Search name..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border border-gray-150 w-full focus:outline-none focus:ring-1 focus:ring-input hover:shadow-sm transition placeholder:text-secondary"
                />
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => setQuery("")}
                >
                  <RefreshCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-3 md:w-1/5">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full hover:bg-input/40 dark:bg-input/30 border border-gray-150 hover:border-borderBrand/80 dark:border-input/60 dark:hover:border-primary cursor-pointer">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c === "all" ? "All" : c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="bg-input/20 border border-borderBrand/40 dark:border-border/50 px-5 dark:bg-secondaryBackground/30 hidden md:block">
              <Table>
                <TableHeader className="sticky top-0 bg-primary dark:bg-input z-10 h-14">
                  <TableRow className="border border-primary dark:border-input">
                    <TableHead className="w-[35%] px-5">Item</TableHead>
                    <TableHead className="w-[25%]">Category</TableHead>
                    <TableHead className="w-[20%]">Unit</TableHead>
                    <TableHead className="w-[20%]">Deduct</TableHead>
                    <TableHead className="w-[10%]"></TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="bg-secondaryBackground">
                  {filtered.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium px-5 text-secondary">
                        {item.name}
                      </TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.unitDescription || "unit"}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min={0}
                          value={deductValues[item.id] || ""}
                          onChange={(e) =>
                            handleDeductChange(item.id, e.target.value)
                          }
                          className="w-20 h-8 border border-gray-150 focus:outline-none focus:ring-1 focus:ring-input hover:shadow-sm transition placeholder:text-secondary"
                        />
                      </TableCell>
                      <TableCell className="pr-5">
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => handleDeductItem(item.id)}
                        >
                          Deduct Item
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-10 text-muted-foreground"
                      >
                        No items match your filters.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Mobile Accordion */}
          <div className="block md:hidden">
            <Accordion type="single" collapsible className="space-y-3 w-full">
              {filtered.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="flex items-center justify-between w-full p-3 bg-secondaryBackground rounded-t rounded-b-none">
                    <div className="flex flex-col text-left gap-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">
                        Unit: {item.unitDescription || "unit"}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-3 pb-3 border-t space-y-3 text-sm">
                    <div className="flex justify-between items-center !mt-3">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{item.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Deduct:</span>
                      <Input
                        type="number"
                        min={0}
                        value={deductValues[item.id] || ""}
                        onChange={(e) =>
                          handleDeductChange(item.id, e.target.value)
                        }
                        className="w-20 h-8"
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="default"
                      className="w-full !mt-5 flex items-center justify-center gap-2"
                      onClick={() => handleDeductItem(item.id)}
                    >
                      Deduct Item
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}

              {filtered.length === 0 && (
                <p className="text-center text-muted-foreground py-6">
                  No items match your filters.
                </p>
              )}
            </Accordion>
          </div>
        </>
      )}
    </main>
  );
}
