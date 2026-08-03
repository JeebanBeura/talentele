"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAVIGATION } from "../../../constants";
import { cn } from "../../../utils";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAVIGATION.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        
        return (
          <div key={item.label} className="relative group">
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors duration-300",
                isActive ? "text-[#E6002D]" : "text-[#525252] hover:text-[#E6002D]"
              )}
            >
              {item.label}
              {item.submenu && <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
            </Link>

            {/* Underline indicator */}
            {isActive && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#E6002D] rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            
            {/* Dropdown Menu */}
            {item.submenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-56">
                <div className="bg-white/90 backdrop-blur-xl border border-[#EAEAEA] rounded-2xl p-2 shadow-xl flex flex-col gap-1">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="px-4 py-2.5 text-sm text-[#525252] hover:text-[#E6002D] hover:bg-[#F5F5F5] rounded-xl transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
