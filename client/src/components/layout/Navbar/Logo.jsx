import Link from "next/link";
import { ROUTES } from "../../../constants";

export default function Logo({ className }) {
  return (
    <Link 
      href={ROUTES.home || "/"} 
      className={`flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] rounded-md transition-transform hover:scale-[1.02] active:scale-[0.98] ${className || ""}`}
      aria-label="Talentele Home"
    >
      {/* Fallback styling for light background */}
      <span className="text-xl md:text-2xl font-bold tracking-tight text-[#111111] dark:text-white font-display">
        Talentele<span className="text-[#E6002D]">.</span>
      </span>
    </Link>
  );
}
