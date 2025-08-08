import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes"

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
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
