"use client";

import * as React from "react";
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
import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";
import { useRightSidebar } from "../../layout";

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
  const { openRight } = useRightSidebar();

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      {/* Today's History */}
      <div className="flex flex-col gap-4">
        <SectionTitle title="Transaction History" />

        <Card>
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
      </div>

      {/* Custom Date History */}
      <div className="flex flex-col gap-4">
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-3">
          <SectionTitle title="Yesterday's Overview" />
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>

        <Card>
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
      </div>
    </main>
  );
};

export default Page;
