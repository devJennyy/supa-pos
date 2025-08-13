import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import { AuthContextProvider } from "./context/AuthContext";

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
            {children}
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
