"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-100 transition-all duration-300 px-6 py-4",
        scrolled ? "md:py-4" : "md:py-8",
      )}
    >
      <div
        className={cn(
          "container mx-auto px-6 py-3 rounded-full border transition-all duration-500 flex items-center justify-between",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/5"
            : "bg-transparent border-transparent",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 group-hover:rotate-12 transition-transform duration-500">
            <Image
              src="/nav-logo.png"
              alt="Vision Edit Co."
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden sm:block">
            {COMPANY_INFO.name.split(" ")[0]}{" "}
            <span className="text-primary">
              {COMPANY_INFO.name.split(" ")[1]}
            </span>{" "}
            {COMPANY_INFO.name.split(" ")[2]}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href={
              NAV_LINKS.find((l) => l.name === "Contact")?.href || "/contact-us"
            }
            className="px-6 py-2 rounded-full bg-primary text-background font-bold text-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 rounded-[2rem] bg-background/95 backdrop-blur-2xl border border-border/50 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={
                  NAV_LINKS.find((l) => l.name === "Contact")?.href ||
                  "/contact-us"
                }
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-2xl bg-primary text-background font-bold text-center text-lg"
              >
                Hire Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
