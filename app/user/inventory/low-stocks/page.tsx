"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
import { Checkbox } from "@/components/ui/checkbox";
import { RefreshCcw } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import { FiPlus } from "react-icons/fi";
import StocksSkeleton from "@/components/dashboard/skeletons/Stocks";

export type StockItem = {
  id: string;
  name: string;
  category: string;
  stock: number;
  unitDescription?: string;
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

function statusOf(item: StockItem) {
  if (item.stock === 0)
    return { label: "Out of stock", tone: "destructive" as const };
  if (item.stock <= 5) return { label: "Low", tone: "warning" as const };
  return { label: "Ok", tone: "default" as const };
}

function toneBadge(tone: "destructive" | "warning" | "default") {
  if (tone === "destructive")
    return "bg-destructive text-destructive-foreground";
  if (tone === "warning") return "bg-yellow-500 text-white";
  return "bg-primary text-foreground";
}

function classNames(...s: (string | undefined | false)[]) {
  return s.filter(Boolean).join(" ");
}

export default function Page({ data = MOCK }: { data?: StockItem[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string>("all");
  const [onlyLow, setOnlyLow] = React.useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

  const categories = React.useMemo(() => {
    const set = new Set<string>(data.map((d) => d.category));
    return ["all", ...Array.from(set)];
  }, [data]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter((d) => {
      const matchesQ = !q || d.name.toLowerCase().includes(q);
      const matchesC = category === "all" || d.category === category;
      const { label } = statusOf(d);
      const matchesLow = !onlyLow || label !== "Ok";
      return matchesQ && matchesC && matchesLow;
    });
  }, [data, query, category, onlyLow]);

  return (
    <main className="flex flex-1 flex-col gap-4 lg:p-5 p-4">
      {isLoading ? (
        <>
          <StocksSkeleton />
        </>
      ) : (
        <>
          <SectionTitle
            title="Low Stocks"
            label="Track items and prioritize restocking."
            direction="col"
          />

          {/* Filters */}
          <div className="flex flex-col gap-3 md:flex-row md:items-end !mt-3">
            <div className="grid gap-3 md:w-2/5">
              <Label htmlFor="search">Search</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="search"
                  placeholder="Search name..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                <SelectTrigger className="w-32 cursor-pointer">
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

            <div className="flex items-center gap-2 md:ml-auto">
              <Checkbox
                id="onlyLow"
                checked={onlyLow}
                onCheckedChange={(v) => setOnlyLow(Boolean(v))}
                className="cursor-pointer"
              />
              <Label htmlFor="onlyLow">Only show Low / Out of stock</Label>
            </div>
          </div>

          {/* Table */}
          <Card className="border border-border/50 px-5 bg-secondaryBackground/30 !mt-2">
            <Table className="rounded-lg border overflow-hidden">
              <TableHeader className="sticky top-0 bg-input z-10 h-14">
                <TableRow>
                  <TableHead className="w-[30%] px-5">Item</TableHead>
                  <TableHead className="w-[20%]">Category</TableHead>
                  <TableHead className="w-[15%]">Stocks</TableHead>
                  <TableHead className="w-[20%]">Unit</TableHead>
                  <TableHead className="w-[15%]">Status</TableHead>
                  <TableHead className="w-[10%]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filtered.map((item) => {
                  const st = statusOf(item);
                  return (
                    <TableRow
                      key={item.id}
                      className={classNames(st.label !== "Ok" && "bg-input/20")}
                    >
                      <TableCell className="font-medium px-5 text-secondary">
                        {item.name}
                      </TableCell>
                      <TableCell>
                        <p className="text-secondary">{item.category}</p>
                      </TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell>{item.unitDescription || "unit"}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${toneBadge(
                            st.tone
                          )} opacity-90 rounded-sm`}
                        >
                          {st.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="pr-5">
                        {st.label !== "Ok" && (
                          <Button size="sm" variant="default">
                            <FiPlus />
                            <p className="pr-2">Restock</p>
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}

                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-10 text-muted-foreground"
                    >
                      No items match your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </>
      )}
    </main>
  );
}
