"use client";

import { ReactNode } from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AppSidebar } from "@/components/app-sidebar";
import { RightSidebar } from "@/components/bill-details";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const showRightSidebar = pathname.startsWith("/user/inventory");
  const rightSidebarWidth = 379.2;

  return (
    <div className="flex min-h-screen flex-1 relative">
      {/* Left Sidebar */}
      <SidebarProvider>
        <AppSidebar />

        {/* Main content */}
        <SidebarInset className="flex-1 relative">
          <motion.div
            animate={{ marginRight: showRightSidebar ? rightSidebarWidth : 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="flex flex-col min-h-full"
          >
            <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-secondaryBackground px-4">
              <SidebarTrigger />
              <div className="flex-1 flex justify-end">
                <ThemeToggle />
              </div>
            </header>

            <div className="flex-1">{children}</div>
          </motion.div>
        </SidebarInset>
      </SidebarProvider>

      {/* Right Sidebar */}
      <AnimatePresence>
        {showRightSidebar && (
          <motion.div
            key="right-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 right-0 z-20 h-full w-full max-w-[380px]"
          >
            <SidebarProvider>
              <RightSidebar side="right" />
            </SidebarProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
