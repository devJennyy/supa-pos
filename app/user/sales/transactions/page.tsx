"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

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

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    subDays(new Date(), 1)
  );
  const [isLoading, setIsLoading] = useState(true);
  const { openRight } = useRightSidebar();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <TransactionHistorySkeleton />;
  }

  const renderTransactionsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Reference #</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead className="w-[15%]">Payment Method</TableHead>
          <TableHead className="w-[10%]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((txn) => (
          <TableRow key={txn.id} className="text-[13px]">
            <TableCell>{txn.id}</TableCell>
            <TableCell>{txn.date}</TableCell>
            <TableCell>{txn.time}</TableCell>
            <TableCell>{txn.items}</TableCell>
            <TableCell>{txn.total}</TableCell>
            <TableCell>{txn.paymentMethod}</TableCell>
            <TableCell>
              <Button
                size="sm"
                variant="outline"
                onClick={openRight}
                className="w-full"
              >
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderTransactionsAccordion = () => (
    <div className="space-y-3">
      {transactions.map((txn) => (
        <Collapsible key={txn.id} className="border rounded-lg">
          <CollapsibleTrigger className="flex items-center justify-between w-full p-3">
            <div className="flex flex-col text-left">
              <span className="font-medium">{txn.id}</span>
              <span className="text-xs text-muted-foreground">{txn.date}</span>
            </div>
            <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="p-3 border-t text-sm space-y-2">
              <div className="flex justify-between">
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
                variant="outline"
                onClick={openRight}
                className="w-full mt-2"
              >
                View Details
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <div className="flex flex-col gap-4">
        <SectionTitle title="Transaction History" />

        <Card>
          <CardContent>
            <div className="hidden md:block">{renderTransactionsTable()}</div>
            <div className="block md:hidden">{renderTransactionsAccordion()}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-3">
          <SectionTitle title="Yesterday's Overview" />
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>

        <Card>
          <CardContent>
            <div className="hidden md:block">{renderTransactionsTable()}</div>
            <div className="block md:hidden">{renderTransactionsAccordion()}</div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Page;
