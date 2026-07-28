import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";
import { Loader2 } from "lucide-react";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#E6002D] text-white hover:bg-[#C40026] focus-visible:ring-[#E6002D]",
        secondary: "bg-white border border-[#EAEAEA] text-[#111111] hover:bg-[#FAFAFA] focus-visible:ring-[#111111]",
        outline: "border-2 border-[#E6002D] text-[#E6002D] hover:bg-[#E6002D] hover:text-white focus-visible:ring-[#E6002D]",
        ghost: "bg-transparent hover:bg-[#FAFAFA] text-[#525252] hover:text-[#111111] focus-visible:ring-[#111111]",
      },
      size: {
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
      shape: "circle",
    },
  }
);

const IconButton = React.forwardRef(
  ({ className, variant, size, shape, isLoading, icon, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, shape, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

export default IconButton;
