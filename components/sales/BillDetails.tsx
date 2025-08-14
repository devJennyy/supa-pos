"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { RiBankFill } from "react-icons/ri";

const invoices = [
  {
    description: "iWhite Aqua Moisturizer Whitening",
    price: "59.18",
    qty: "2",
    total: "98.16",
  },
  {
    description: "Dutch Mill Yoghurt",
    price: "15.22",
    qty: "1",
    total: "30.22",
  },
  {
    description: "Beng Beng Chocolate",
    price: "25.22",
    qty: "100",
    total: "2,500.22",
  },
];

const summary = [
  {
    label: "Item",
    value: "103 (Items)",
  },
  {
    label: "References Number",
    value: "1234585752222",
  },
  {
    label: "Date",
    value: "Sunday, 16, 13 2025",
  },
  {
    label: "Time",
    value: "12:21 AM",
  },
  {
    label: "Payment Method",
    value: "Cash",
  },
];

export function RightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="none" {...props} className="w-full max-w-[380px]">
      <SidebarHeader className="p-5">
        <h1 className="text-xl font-semibold">Bill Details</h1>
      </SidebarHeader>
      <SidebarContent className="px-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
        {/* Invoices */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="text-left w-15">Price</TableHead>
              <TableHead className="text-left w-15">Qty</TableHead>
              <TableHead className="text-left w-15">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.description} className="text-[13px]">
                <TableCell className="overflow-hidden text-ellipsis line-clamp-2 whitespace-normal text-secondary !mr-2">
                  {invoice.description}
                </TableCell>

                <TableCell className="text-left w-15 text-secondary">
                  {invoice.price}
                </TableCell>
                <TableCell className="text-left w-15 text-secondary">
                  {invoice.qty}
                </TableCell>
                <TableCell className="text-left w-15 font-medium">
                  {invoice.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-t-2 border-dashed !my-3"></div>

        {/* Purchase summary */}
        <Table>
          <TableBody>
            {summary.map((summary) => (
              <TableRow key={summary.label} className="text-[13px]">
                <TableCell className="text-secondary">
                  {summary.label}
                </TableCell>
                <TableCell className="text-secondary text-right">
                  {summary.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-t-2 border-dashed !my-3"></div>

        {/* Amount */}
        <Table>
          <TableFooter>
            <TableRow className="bg-secondaryBackground border-t border-secondaryBackground">
              <TableCell className="font-medium">Total</TableCell>
              <TableCell className="text-right text-base font-bold">
                2,500.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <div className="border-t-2 !my-3"></div>

        {/* Payment Method */}
        <div className="flex flex-col gap-4 !mt-4">
          <h1 className="text-sm">Select Payment</h1>
          <div className="flex justify-between items-center gap-3">
            <div className="w-full h-25 rounded-xl border bg-input flex flex-col justify-center items-center gap-2 cursor-pointer">
              <FaMoneyBillWave size={24} className="text-primary" />
              <p className="text-secondary text-sm">Cash</p>
            </div>
            <div className="w-full h-25 rounded-xl border flex flex-col justify-center items-center gap-2 hover:bg-input hover:text-primary text-secondary transition-default cursor-pointer">
              <BsCreditCardFill size={22} />
              <p className="text-secondary text-sm">Maya</p>
            </div>
            <div className="w-full h-25 rounded-xl border flex flex-col justify-center items-center gap-2 hover:bg-input hover:text-primary text-secondary transition-default cursor-pointer">
              <RiBankFill size={22} />
              <p className="text-secondary text-sm">Other</p>
            </div>
          </div>
        </div>
      </SidebarContent>

      <div className="flex flex-col gap-3 px-5 pb-5 lg:!mt-16 !mt-8">
        <Button className="h-12 font-semibold">Process Transaction</Button>
        <Button className="h-12 text-primary border border-primary bg-transparent font-medium hover:bg-primary/10">
          Print Receipt
        </Button>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
