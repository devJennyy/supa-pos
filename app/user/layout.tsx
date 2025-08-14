"use client";

import { ReactNode, useState } from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AppSidebar } from "@/components/app-sidebar";
import { RightSidebar } from "@/components/sales/BillDetails";
import { IoMdClose } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const rightSidebarWidth = 379.2;

  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const showRightSidebar = pathname.startsWith("/user/sales");

  return (
    <div className="flex min-h-screen flex-1 relative">
      {/* Left Sidebar */}
      <SidebarProvider>
        <AppSidebar />

        {/* Main content */}
        <SidebarInset className="flex-1 relative">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-secondaryBackground px-4">
            <SidebarTrigger />
            <div className="flex-1 lg:flex justify-end hidden">
              <ThemeToggle />
            </div>
          </header>

          <motion.div
            animate={{
              marginRight:
                showRightSidebar && isRightSidebarOpen ? rightSidebarWidth : 0,
            }}
            transition={{ type: "tween", duration: 0.3 }}
            className="flex flex-col min-h-[calc(100%-4rem)]"
          >
            <div className="flex-1">{children}</div>
          </motion.div>
        </SidebarInset>
      </SidebarProvider>

      {/* Floating Open Arrow */}
      {showRightSidebar && !isRightSidebarOpen && (
        <button
          onClick={() => setIsRightSidebarOpen(true)}
          className="absolute cursor-pointer top-1/2 right-0 transform -translate-y-1/2 z-30 text-foreground bg-secondaryBackground border py-2.5 px-2 rounded-l-lg hover:bg-input transition-default"
        >
          <IoChevronBackOutline size={20} />
        </button>
      )}

      {/* Right Sidebar */}
      <AnimatePresence>
        {showRightSidebar && isRightSidebarOpen && (
          <motion.div
            key="right-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 right-0 z-20 h-full w-full max-w-[380px] bg-secondaryBackground border-l"
          >
            <SidebarProvider>
              {/* Close Icon */}
              <div className="absolute top-4 right-4 z-30">
                <IoMdClose
                  size={22}
                  className="cursor-pointer hover:text-foreground text-secondary"
                  onClick={() => setIsRightSidebarOpen(false)}
                />
              </div>

              <RightSidebar side="right" />
            </SidebarProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
