"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-1">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main page content */}
        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="w-full flex items-center gap-2">
              <SidebarTrigger />
              <div className="w-full h-16 bg-secondaryBackground border-b lg:flex justify-end items-center px-10 hidden">
                <ThemeToggle />
              </div>
            </div>
          </header>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
