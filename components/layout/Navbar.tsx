"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Why POS?", href: "#why-pos" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full md:h-20 h-16 bg-secondaryBackground border-b border-border flex justify-center">
      <div
        className="w-full max-w-[1440px] mx-auto h-full flex justify-between items-center sm:px-5 px-4"
        role="navigation"
      >
        {/* Logo */}
        <Link href="/" className="md:w-full md:max-w-43">
          <Image
            src="/logo/logo-light.svg"
            alt="Logo Light"
            className="block dark:hidden"
            width={130}
            height={40}
            priority
          />
          <Image
            src="/logo/logo-dark.svg"
            alt="Logo Dark"
            className="hidden dark:block"
            width={130}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="md:flex h-10 hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`px-4 h-full rounded-md text-sm border text-foreground flex justify-center items-center cursor-pointer
                  ${
                    active === link.label
                      ? "bg-input dark:border-border border-borderBrand"
                      : "border-transparent"
                  }
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="md:w-full md:max-w-43 flex md:gap-3 gap-2 h-10">
          <ThemeToggle />

          <Button asChild className="md:block hidden">
            <Link href="/login">Get Started</Link>
          </Button>

          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="h-9 px-2 bg-input border border-border rounded-md"
            >
              {mobileOpen ? (
                <FiX className="text-xl text-foreground" />
              ) : (
                <FiMenu className="text-xl text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-md bg-secondaryBackground md:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-foreground text-2xl"
            >
              <FiX />
            </button>

            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
              {navLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMobileOpen(false);
                  }}
                  className={`text-foreground text-sm font-medium px-6 py-2 rounded-md border transition duration-150 ${
                    active === link.label
                      ? "bg-input dark:border-border border-borderBrand"
                      : "border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
