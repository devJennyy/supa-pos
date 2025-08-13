"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FaCog, FaCoins } from "react-icons/fa";
import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { DatePicker } from "@/components/ui/date-picker";
import { format, subDays } from "date-fns";
import { Chart } from "@/components/ui/chart-area";
import { TrendingDown, TrendingUp } from "lucide-react";
import { BsCashStack } from "react-icons/bs";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoTrendingUp } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    subDays(new Date(), 1)
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="w-full flex items-center gap-2">
            <SidebarTrigger />
            <div className="w-full h-16 bg-secondaryBackground border-b lg:flex justify-end items-center px-10 hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-8 p-5">
          {/* Today’s Overview */}
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-1">
              <h1 className="font-semibold">Today&apos;s Overview</h1>
              <p className="lg:text-sm text-xs text-secondary">
                {format(new Date(), "EEEE, dd, MMMM yyyy")}
              </p>
            </div>

            <div className="grid auto-rows-min gap-4 lg:grid-cols-4 grid-cols-2">
              <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
                <p className="xl:text-sm text-xs font-medium text-foreground">
                  Starting Change
                </p>
                <p className="xl:text-3xl text-2xl font-bold 2xl:my-8 my-4">
                  5,000
                </p>
                <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                  <span className="flex gap-2 text-secondary h-4 xl:hidden">
                    <FaCoins className="xl:text-[22px] text-sm text-secondary" />
                    4 Bills + 1000 coins
                  </span>
                  Prepared change
                </p>
                <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
                  <FaCoins className="xl:text-[22px] text-sm text-primary" />
                </div>
              </div>

              <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
                <p className="xl:text-sm text-xs font-medium text-foreground">
                  Sales In Cash
                </p>
                <p className="xl:text-3xl text-2xl font-bold 2xl:my-8 my-4">
                  5,000
                </p>
                <p className="whitespace-nowrap xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                  <span className="flex gap-2 text-destructive">
                    <TrendingDown className="h-4 w-4" />
                    1.5%
                  </span>
                  Down from yesterday
                </p>
                <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
                  <BsCashStack className="xl:text-[22px] text-sm text-primary" />
                </div>
              </div>

              <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
                <p className="xl:text-sm text-xs font-medium text-foreground">
                  Sales in Banks
                </p>
                <p className="xl:text-3xl text-2xl font-bold xl:my-8 my-4">
                  5,000
                </p>
                <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                  <span className="flex gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    8.5%
                  </span>
                  Up from yesterday
                </p>
                <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
                  <BsFillCreditCard2BackFill className="xl:text-[22px] text-sm text-primary" />
                </div>
              </div>

              <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
                <p className="xl:text-sm text-xs font-medium text-foreground">
                  Profit
                </p>
                <p className="xl:text-3xl text-2xl font-bold xl:my-8 my-4">
                  5,000
                </p>
                <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                  <span className="flex gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    8.5%
                  </span>
                  Up from yesterday
                </p>
                <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
                  <FiTrendingUp className="xl:text-2xl text-sm text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Yesterday’s Overview */}
          {!isRemoved && (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-1">
                {isVisible && (
                  <div className="flex justify-between items-center gap-3">
                    <h1 className="text-secondary font-semibold">
                      Yesterday&apos;s Overview
                    </h1>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-secondary hover:text-foreground transition-colors cursor-pointer">
                          <FaCog />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-fit !mt-2">
                        <DropdownMenuItem onClick={() => setIsVisible(false)}>
                          Hide Section
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => setRemoveDialogOpen(true)}
                        >
                          Remove from Dashboard
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <AlertDialog
                      open={removeDialogOpen}
                      onOpenChange={setRemoveDialogOpen}
                    >
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove Section?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will remove the{" "}
                            <b>Yesterday&apos;s Overview</b> section from your
                            dashboard. You can add it back anytime in your
                            settings.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="text-white bg-destructive hover:bg-destructive/90"
                            onClick={() => {
                              setIsRemoved(true);
                              setRemoveDialogOpen(false);
                            }}
                          >
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}

                {!isVisible && (
                  <FaEyeSlash
                    onClick={() => setIsVisible(true)}
                    className="text-secondary hover:text-foreground transition-colors cursor-pointer"
                  />
                )}

                {isVisible && (
                  <p className="text-secondary lg:text-sm text-xs">
                    {selectedDate
                      ? format(selectedDate, "EEEE, dd, MMMM yyyy")
                      : ""}
                  </p>
                )}
              </div>

              {isVisible && (
                <>
                  <div className="grid auto-rows-min gap-4 lg:grid-cols-4 grid-cols-2">
                    <div className="relative bg-tertiary-background dark:bg-secondaryBackground/40 border dark:border-border/20 rounded-xl flex flex-col justify-between xl:p-5 p-3">
                      <p className="xl:text-sm text-xs font-medium text-foreground/80">
                        Starting Change
                      </p>
                      <p className="xl:text-3xl text-2xl font-bold 2xl:my-8 my-4 text-foreground/80">
                        5,000
                      </p>
                      <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                        <span className="flex gap-2 text-secondary h-4 xl:hidden">
                          <FaCoins className="xl:text-[22px] text-sm text-secondary" />
                          4 Bills + 1000 coins
                        </span>
                        Prepared change
                      </p>
                      <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-secondary/5 flex justify-center items-center">
                        <FaCoins className="xl:text-[22px] text-sm text-secondary" />
                      </div>
                    </div>

                    <div className="relative bg-tertiary-background dark:bg-secondaryBackground/40 border dark:border-border/20 rounded-xl flex flex-col justify-between xl:p-5 p-3">
                      <p className="xl:text-sm text-xs font-medium text-foreground/80">
                        Sales In Cash
                      </p>
                      <p className="xl:text-3xl text-2xl font-bold 2xl:my-8 my-4 text-foreground/80">
                        5,000
                      </p>
                      <p className="whitespace-nowrap xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                        <span className="flex gap-2 text-secondary">
                          <TrendingDown className="h-4 w-4" />
                          1.5%
                        </span>
                        Down from yesterday
                      </p>
                      <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-secondary/5 flex justify-center items-center">
                        <BsCashStack className="xl:text-[22px] text-sm text-secondary" />
                      </div>
                    </div>

                    <div className="relative bg-tertiary-background dark:bg-secondaryBackground/40 border dark:border-border/20 rounded-xl flex flex-col justify-between xl:p-5 p-3">
                      <p className="xl:text-sm text-xs font-medium text-foreground/80">
                        Sales in Banks
                      </p>
                      <p className="xl:text-3xl text-2xl font-bold xl:my-8 my-4 text-foreground/80">
                        5,000
                      </p>
                      <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                        <span className="flex gap-2 text-secondary">
                          <TrendingUp className="h-4 w-4" />
                          8.5%
                        </span>
                        Up from yesterday
                      </p>
                      <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-secondary/5 flex justify-center items-center">
                        <BsFillCreditCard2BackFill className="xl:text-[22px] text-sm text-secondary" />
                      </div>
                    </div>

                    <div className="relative bg-tertiary-background dark:bg-secondaryBackground/40 border dark:border-border/20 rounded-xl flex flex-col justify-between xl:p-5 p-3">
                      <p className="xl:text-sm text-xs font-medium text-foreground/80">
                        Profit
                      </p>
                      <p className="xl:text-3xl text-2xl font-bold xl:my-8 my-4 text-foreground/80">
                        5,000
                      </p>
                      <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
                        <span className="flex gap-2 text-secondary">
                          <TrendingUp className="h-4 w-4" />
                          8.5%
                        </span>
                        Up from yesterday
                      </p>
                      <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-secondary/5 flex justify-center items-center">
                        <FiTrendingUp className="xl:text-2xl text-sm text-secondary" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    <DatePicker date={selectedDate} setDate={setSelectedDate} />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Monthly Profit Graph */}
          <div className="w-full flex-1 flex flex-col gap-4">
            <h1 className="text-secondary font-semibold">
              Your Monthly Profit Graph
            </h1>
            <div className="lg:min-h-[60vh] min-h-[50vh] flex-1 rounded-xl md:min-h-min">
              <Chart />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
