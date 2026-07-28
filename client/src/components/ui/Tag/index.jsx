import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const tagVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      status: {
        default: "border-transparent bg-[#FAFAFA] text-[#525252]",
        active: "border-transparent bg-[#E6002D]/10 text-[#E6002D]",
        success: "border-transparent bg-[#16A34A]/10 text-[#16A34A]",
        warning: "border-transparent bg-[#F59E0B]/10 text-[#F59E0B]",
        error: "border-transparent bg-[#EF4444]/10 text-[#EF4444]",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);

function Tag({ className, status, ...props }) {
  return <div className={cn(tagVariants({ status }), className)} {...props} />;
}

export default Tag;
