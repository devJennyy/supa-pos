"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

export default function ThemeSwitchPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  return (
    <div className="flex flex-1 flex-col lg:p-5 p-4 transition-default">
      <SectionTitle
        title="Choose a theme color"
        label="Switch between Light and Dark mode"
        direction="col"
      />

      <div className="flex flex-col items-center lg:gap-10 gap-8 w-full lg:!mt-10 !mt-8">
        {/* Dark Mode Option */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-sm">Dark Mode</span>

            <div
              className={`border lg:p-3 p-2 rounded-3xl transition-default ${
                isDark
                  ? "border-primary shadow-md"
                  : "border hover:border-primary"
              }`}
              onClick={() => {
                setTheme("dark");
                document.documentElement.classList.toggle("dark", true);
              }}
            >
              <div className="overflow-hidden relative w-full sm:h-80 h-40 rounded-2xl border shadow-sm transition-all duration-500 ease-in-out bg-[#1A202C] text-white flex flex-col">
                <div className="h-12 w-full flex-shrink-0 rounded-t-xl bg-[#1F2733] flex items-center px-4 lg:gap-3 gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-6 h-4 w-32 rounded bg-[#2F3A4A]" />
                </div>

                <div className="flex flex-1 overflow-hidden">
                  <div className="w-32 bg-[#1F2733] p-4 flex flex-col gap-3">
                    <div className="h-6 w-full rounded bg-[#2F3A4A]" />
                    <div className="h-6 w-3/4 rounded bg-[#2F3A4A]" />
                    <div className="h-6 w-2/3 rounded bg-[#2F3A4A]" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">
                    <div className="h-6 w-2/3 rounded bg-[#2F3A4A]" />
                    <div className="h-6 w-full rounded bg-[#2F3A4A]" />
                    <div className="h-6 w-5/6 rounded bg-[#2F3A4A]" />
                    <div className="sm:h-40 w-full rounded bg-[#2F3A4A]" />
                  </div>
                </div>

                {isDark && (
                  <div className="absolute top-4 right-4 border bg-primary text-white rounded-full lg:p-3 sm:p-2 p-1.5 shadow-sm transition-all duration-500 ease-in-out">
                    <Check className="lg:h-6 lg:w-6 sm:h-5 sm:w-5 h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Light Mode Option */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-sm">Light Mode</span>

            <div
              className={`border lg:p-3 p-2 rounded-3xl transition-default ${
                isDark
                  ? "border hover:border-primary"
                  : "border-primary shadow-md"
              }`}
              onClick={() => {
                setTheme("light");
                document.documentElement.classList.toggle("dark", false);
              }}
            >
              <div className="overflow-hidden relative w-full sm:h-80 h-40 rounded-2xl border shadow-sm transition-all duration-500 ease-in-out bg-[#FCFCFD] flex flex-col">
                <div className="h-12 w-full flex-shrink-0 rounded-t-xl bg-zinc-100 flex items-center px-4 lg:gap-3 gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-6 h-4 w-32 rounded bg-zinc-300" />
                </div>

                <div className="flex flex-1 overflow-hidden">
                  <div className="w-32 bg-zinc-100 p-4 flex flex-col gap-3">
                    <div className="h-6 w-full rounded bg-zinc-300" />
                    <div className="h-6 w-3/4 rounded bg-zinc-300" />
                    <div className="h-6 w-2/3 rounded bg-zinc-300" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">
                    <div className="h-6 w-2/3 rounded bg-zinc-300" />
                    <div className="h-6 w-full rounded bg-zinc-300" />
                    <div className="h-6 w-5/6 rounded bg-zinc-300" />
                    <div className="sm:h-40 w-full rounded bg-zinc-200" />
                  </div>
                </div>

                {!isDark && (
                  <div className="absolute top-4 right-4 bg-primary text-white rounded-full lg:p-3 sm:p-2 p-1.5 shadow-sm transition-all duration-500 ease-in-out">
                    <Check className="lg:h-6 lg:w-6 sm:h-5 sm:w-5 h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
