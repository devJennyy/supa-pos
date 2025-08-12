import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
      }}
      className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -60 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 60 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <MdSunny size={25} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -60 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 60 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <BsFillMoonStarsFill size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
