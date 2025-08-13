import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import { AuthContextProvider } from "./context/AuthContext";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "SupaPOS",
  description: "A smart and efficient point-of-sale system for managing sales, inventory, and analytics.",
   icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <AuthContextProvider>
            <SidebarProvider>
              <div className="flex min-h-screen flex-1">
                {/* Sidebar */}
                <AppSidebar />

                {/* Main page content */}
                <SidebarInset className="flex-1">
                  {children}
                </SidebarInset>
              </div>
            </SidebarProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
