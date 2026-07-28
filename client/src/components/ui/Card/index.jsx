import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const cardVariants = cva("rounded-3xl border transition-all duration-200", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-soft",
      md: "shadow-medium",
      lg: "shadow-lg",
    },
    border: {
      none: "border-transparent",
      default: "border-[#EAEAEA]",
    },
    surface: {
      white: "bg-white",
      alt: "bg-[#FAFAFA]",
    },
    hover: {
      true: "hover:-translate-y-1 hover:shadow-medium",
      false: "",
    },
  },
  defaultVariants: {
    padding: "md",
    shadow: "sm",
    border: "default",
    surface: "white",
    hover: false,
  },
});

const Card = React.forwardRef(({ className, padding, shadow, border, surface, hover, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ padding, shadow, border, surface, hover, className }))} {...props} />
));
Card.displayName = "Card";

export default Card;
