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

  if (isLoading) {
    return <TransactionHistorySkeleton />;
  }

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      {/* Today's History */}
      <div className="flex flex-col gap-4">
        <SectionTitle title="Today's Transaction History" />

        {/* Desktop View (Table) */}
        <Card className="hidden md:block">
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Mobile View (Accordion) */}
        <Card className="md:hidden">
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {transactions.map((txn) => (
                <AccordionItem key={txn.id} value={txn.id}>
                  <AccordionTrigger className="flex justify-between text-sm">
                    <span className="font-medium">{txn.id}</span>
                    <span className="text-muted-foreground">{txn.date}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 text-sm p-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Time:</span>
                        <span>{txn.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Items:</span>
                        <span>{txn.items}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Total:</span>
                        <span>{txn.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Payment:</span>
                        <span>{txn.paymentMethod}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={openRight}
                        className="mt-2"
                      >
                        View Details
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Custom Date History */}
      <div className="flex flex-col gap-4">
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-3">
          <SectionTitle title="Yesterday" />
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>

        {/* Desktop View */}
        <Card className="hidden md:block">
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Mobile View */}
        <Card className="md:hidden">
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {transactions.map((txn) => (
                <AccordionItem key={txn.id} value={txn.id}>
                  <AccordionTrigger className="flex justify-between text-sm">
                    <span className="font-medium">{txn.id}</span>
                    <span className="text-muted-foreground">{txn.date}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 text-sm p-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Time:</span>
                        <span>{txn.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Items:</span>
                        <span>{txn.items}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Total:</span>
                        <span>{txn.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Payment:</span>
                        <span>{txn.paymentMethod}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={openRight}
                        className="mt-2"
                      >
                        View Details
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
