"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/loading";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        {children}

        {loading && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <LoadingScreen />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
