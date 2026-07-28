import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";
import { Loader2 } from "lucide-react";

const spinnerVariants = cva("animate-spin text-[#E6002D]", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Spinner = React.forwardRef(({ className, size, ...props }, ref) => {
  return <Loader2 ref={ref} className={cn(spinnerVariants({ size, className }))} {...props} />;
});
Spinner.displayName = "Spinner";

export default Spinner;
