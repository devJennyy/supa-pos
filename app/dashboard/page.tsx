"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
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
import { FaCog } from "react-icons/fa";
import React from "react";
import { FaEyeSlash } from "react-icons/fa";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);

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
                Sunday, 16, August 2023
              </p>
            </div>

            <div className="grid auto-rows-min gap-4 md:grid-cols-4 grid-cols-2">
              <div className="bg-secondaryBackground border aspect-video rounded-xl" />
              <div className="bg-secondaryBackground border aspect-video rounded-xl" />
              <div className="bg-secondaryBackground border aspect-video rounded-xl" />
              <div className="bg-secondaryBackground border aspect-video rounded-xl" />
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
                    Sunday, 15, August 2023
                  </p>
                )}
              </div>

              {isVisible && (
                <>
                  <div className="grid auto-rows-min gap-4 md:grid-cols-4 grid-cols-2">
                    <div className="bg-[#F9F9FA] dark:bg-secondaryBackground border border-border/20 aspect-video rounded-xl" />
                    <div className="bg-[#F9F9FA] dark:bg-secondaryBackground border border-border/20 aspect-video rounded-xl" />
                    <div className="bg-[#F9F9FA] dark:bg-secondaryBackground border border-border/20 aspect-video rounded-xl" />
                    <div className="bg-[#F9F9FA] dark:bg-secondaryBackground border border-border/20 aspect-video rounded-xl" />
                  </div>

                  <div className="w-full flex justify-end">
                    <Button className="w-fit bg-secondaryBackground border lg:text-sm text-xs text-secondary hover:text-foreground">
                      Choose Date
                    </Button>
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
            <div className="bg-secondaryBackground border lg:min-h-[100vh] min-h-[50vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
