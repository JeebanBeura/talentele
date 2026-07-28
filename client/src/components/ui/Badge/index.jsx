import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-[#E6002D] text-white",
        secondary: "border-transparent bg-[#F5F5F5] text-[#111111]",
        success: "border-transparent bg-[#16A34A] text-white",
        warning: "border-transparent bg-[#F59E0B] text-white",
        error: "border-transparent bg-[#EF4444] text-white",
        neutral: "border-[#EAEAEA] bg-white text-[#525252]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export default Badge;
