import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#E6002D] text-white hover:bg-[#C40026] focus-visible:ring-[#E6002D]",
        secondary: "bg-white border border-[#EAEAEA] text-[#111111] hover:bg-[#FAFAFA] focus-visible:ring-[#111111]",
        outline: "border-2 border-[#E6002D] text-[#E6002D] hover:bg-[#E6002D] hover:text-white focus-visible:ring-[#E6002D]",
        ghost: "bg-transparent hover:bg-[#FAFAFA] text-[#525252] hover:text-[#111111] focus-visible:ring-[#111111]",
        link: "text-[#E6002D] underline-offset-4 hover:underline focus-visible:ring-[#E6002D]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, fullWidth, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
