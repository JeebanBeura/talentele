import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const headingVariants = cva("font-display", {
  variants: {
    level: {
      display: "text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight",
      h1: "text-3xl md:text-5xl font-bold tracking-[-0.03em]",
      h2: "text-2xl md:text-4xl font-bold tracking-[-0.025em]",
      h3: "text-xl md:text-3xl font-semibold tracking-[-0.02em]",
      h4: "text-lg md:text-2xl font-semibold",
      h5: "text-base md:text-xl font-medium",
      h6: "text-sm md:text-lg font-medium",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "text-[#111111]",
      muted: "text-[#737373]",
      primary: "text-[#E6002D]",
      white: "text-white",
    },
  },
  defaultVariants: {
    level: "h2",
    align: "left",
    color: "default",
  },
});

const Heading = React.forwardRef(({ className, level = "h2", align, color, children, as, ...props }, ref) => {
  const Comp = as || (level === "display" ? "h1" : level);
  return (
    <Comp ref={ref} className={cn(headingVariants({ level, align, color, className }))} {...props}>
      {children}
    </Comp>
  );
});
Heading.displayName = "Heading";

export default Heading;
