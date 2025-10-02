"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import { subDays } from "date-fns";
import { DatePicker } from "@/components/ui/date-picker";
import { useRightSidebar } from "../../layout";
import TransactionHistorySkeleton from "@/components/sales/skeletons/Transactions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Transaction {
  id: string;
  date: string;
  time: string;
  items: number;
  total: string;
  paymentMethod: string;
}

const transactions: Transaction[] = [
  {
    id: "1234585752222",
    date: "Aug 16, 2025",
    time: "12:21 AM",
    items: 103,
    total: "2,500.00",
    paymentMethod: "Cash",
  },
  {
    id: "1234585752223",
    date: "Aug 15, 2025",
    time: "03:45 PM",
    items: 5,
    total: "150.00",
    paymentMethod: "Maya",
  },
  {
    id: "1234585752224",
    date: "Aug 14, 2025",
    time: "10:12 AM",
    items: 12,
    total: "720.00",
    paymentMethod: "Bank",
  },
];

export default function TransactionPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    subDays(new Date(), 1)
  );
  const [isLoading, setIsLoading] = useState(true);
  const { openRight } = useRightSidebar();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <TransactionHistorySkeleton />;

  return (
    <main className="flex flex-1 flex-col gap-4 lg:p-5 p-4">
      {/* Today's Transaction History */}
      <SectionTitle
        title="Today's Transaction History"
        label="Overview of transactions for today."
        direction="col"
      />

      {/* Todasy History */}
      <Card className="bg-input/20 border border-borderBrand/40 dark:border-border/50 px-5 dark:bg-secondaryBackground/30 !mt-2">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <Table className="rounded-lg border overflow-hidden">
            <TableHeader className="sticky top-0 bg-primary dark:bg-input z-10 h-14">
              <TableRow className="border border-primary dark:border-input">
                <TableHead className="px-5">Reference #</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="w-[10%]">Mop</TableHead>
                <TableHead className="w-[15%]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-secondaryBackground">
              {transactions.map((txn) => (
                <TableRow key={txn.id} className="text-[13px]">
                  <TableCell className="font-medium text-secondary px-5">
                    {txn.id}
                  </TableCell>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>{txn.time}</TableCell>
                  <TableCell>{txn.items}</TableCell>
                  <TableCell>{txn.total}</TableCell>
                  <TableCell>{txn.paymentMethod}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="default"
                      className="w-full"
                      onClick={openRight}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {transactions.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No transactions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-3 block md:hidden"
        >
          {transactions.map((txn) => (
            <AccordionItem
              key={txn.id}
              value={txn.id}
              className="border border-borderBrand/70 dark:border-border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="flex justify-between items-center w-full p-3 bg-input/60 dark:bg-secondaryBackground rounded-t rounded-b-none">
                <div className="flex flex-col">
                  <span className="font-medium">{txn.id}</span>
                  <span className="text-xs text-muted-foreground">
                    {txn.date}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 pb-3 border-t border-borderBrand/50 dark:border-border space-y-3 text-sm bg-secondaryBackground dark:bg-background">
                <div className="flex justify-between !mt-3">
                  <span className="text-muted-foreground">Time:</span>
                  <span>{txn.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items:</span>
                  <span>{txn.items}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total:</span>
                  <span>{txn.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment:</span>
                  <span>{txn.paymentMethod}</span>
                </div>
                <Button
                  size="sm"
                  variant="default"
                  className="w-full !mt-5 flex items-center justify-center gap-2"
                  onClick={openRight}
                >
                  View Details
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}

          {transactions.length === 0 && (
            <p className="text-center text-muted-foreground py-6">
              No transactions found.
            </p>
          )}
        </Accordion>
      </Card>

      {/* Custom Date History */}
      <div className="flex flex-col gap-4 !mt-5">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-3">
          <SectionTitle title="Yesterday" />
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>

        <Card className="bg-input/20 border border-borderBrand/40 dark:border-border/50 px-5 dark:bg-secondaryBackground/30 !mt-2">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table className="rounded-lg border overflow-hidden">
              <TableHeader className="sticky top-0 bg-primary dark:bg-input z-10 h-14">
                <TableRow className="border border-primary dark:border-input">
                  <TableHead className="px-5">Reference #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="w-[10%]">Mop</TableHead>
                  <TableHead className="w-[15%]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-secondaryBackground">
                {transactions.map((txn) => (
                  <TableRow key={txn.id} className="text-[13px]">
                    <TableCell className="font-medium text-secondary px-5">
                      {txn.id}
                    </TableCell>
                    <TableCell>{txn.date}</TableCell>
                    <TableCell>{txn.time}</TableCell>
                    <TableCell>{txn.items}</TableCell>
                    <TableCell>{txn.total}</TableCell>
                    <TableCell>{txn.paymentMethod}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="default"
                        className="w-full"
                        onClick={openRight}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {transactions.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-10 text-muted-foreground"
                    >
                      No transactions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Accordion */}
          <Accordion
            type="single"
            collapsible
            className="space-y-3 block md:hidden"
          >
            {transactions.map((txn) => (
              <AccordionItem
                key={txn.id}
                value={txn.id}
                className="border border-borderBrand/70 dark:border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="lex justify-between items-center w-full p-3 bg-input/60 dark:bg-secondaryBackground rounded-t rounded-b-none">
                  <div className="flex flex-col">
                    <span className="font-medium">{txn.id}</span>
                    <span className="text-xs text-muted-foreground">
                      {txn.date}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3 border-t border-borderBrand/50 dark:border-border space-y-3 text-sm bg-secondaryBackground dark:bg-background">
                  <div className="flex justify-between !mt-3">
                    <span className="text-muted-foreground">Time:</span>
                    <span>{txn.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items:</span>
                    <span>{txn.items}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total:</span>
                    <span>{txn.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment:</span>
                    <span>{txn.paymentMethod}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="default"
                    className="w-full !mt-5 flex items-center justify-center gap-2"
                    onClick={openRight}
                  >
                    View Details
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}

            {transactions.length === 0 && (
              <p className="text-center text-muted-foreground py-6">
                No transactions found.
              </p>
            )}
          </Accordion>
        </Card>
      </div>
    </main>
  );
}
