"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../utils";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";
import { useScrollPosition } from "../../../hooks";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-5 z-50 flex w-full justify-center px-6 md:px-8 lg:px-10"
      >
        <div
          className={cn(
            "flex h-[72px] w-full max-w-[1440px] items-center justify-between rounded-full px-6 transition-all duration-300 md:px-8",
            isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-sm border border-[#EAEAEA]"
              : "bg-transparent border-transparent"
          )}
        >
          <DesktopNav />
          <MobileNav onMenuOpen={() => setIsMobileMenuOpen(true)} />
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
