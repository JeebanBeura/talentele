"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { NAVIGATION } from "../../../constants";
import { IconButton, Button } from "../../ui";

export default function MobileMenu({ onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] lg:hidden flex justify-end">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      
      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-[85%] max-w-sm h-full bg-[#121212]/80 backdrop-blur-2xl border-l border-white/10 shadow-2xl p-6 flex flex-col gap-8 rounded-l-[32px]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white font-display">
            Talentele<span className="text-[#E6002D]">.</span>
          </span>
          <IconButton onClick={onClose} variant="ghost" className="text-white hover:bg-white/10">
            <X className="h-6 w-6" />
          </IconButton>
        </div>

        <nav className="flex flex-col gap-4 overflow-y-auto pb-6">
          {NAVIGATION.map((item) => {
            const hasSubmenu = !!item.submenu;
            const [isOpen, setIsOpen] = require("react").useState(false);
            
            return (
              <div key={item.label} className="flex flex-col gap-2">
                {hasSubmenu ? (
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between text-lg font-medium text-white/90 hover:text-[#E6002D] transition-colors w-full text-left"
                  >
                    {item.label}
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-lg font-medium text-white/90 hover:text-[#E6002D] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                
                {hasSubmenu && (
                  <motion.div 
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col gap-3 mt-2 border-l border-white/10 pb-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={onClose}
                          className="text-white/60 hover:text-[#E6002D] transition-colors py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto pb-8">
          <Button variant="primary" className="w-full rounded-2xl bg-[#E6002D] py-6 text-lg hover:bg-[#C40026] shadow-[0_0_15px_rgba(230,0,45,0.3)]">
            Book Free Counselling
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
