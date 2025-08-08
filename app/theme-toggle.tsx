"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full cursor-pointer relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <MdSunny className="absolute h-10 w-10 rotate-0 scale-120 dark:-rotate-90 dark:scale-0 transition-slow" />
      <BsFillMoonStarsFill className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 transition-slow" />
    </Button>
  );
}
