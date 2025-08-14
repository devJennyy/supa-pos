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
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    description: "Lewis and Pearl Powder Chill ",
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

export function RightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="w-full max-w-[380px]">
      <SidebarHeader className="p-5">
        <h1 className="text-xl font-semibold">Bill Details</h1>
      </SidebarHeader>
      <SidebarContent className="px-4">
        {/* Item Description */}
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
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
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
