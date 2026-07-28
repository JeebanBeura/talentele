import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      body: "text-base leading-7 tracking-normal",
      bodyLarge: "text-lg leading-8 tracking-normal",
      small: "text-sm leading-6 tracking-normal",
      caption: "text-xs tracking-[0.12em] uppercase",
      muted: "text-base leading-7 text-[#737373]",
      lead: "text-xl text-[#525252]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "text-[#525252]",
      heading: "text-[#111111]",
      muted: "text-[#737373]",
      primary: "text-[#E6002D]",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "normal",
    align: "left",
    color: "default",
  },
});

const Text = React.forwardRef(({ className, variant, weight, align, color, as: Comp = "p", ...props }, ref) => {
  return (
    <Comp ref={ref} className={cn(textVariants({ variant, weight, align, color, className }))} {...props} />
  );
});
Text.displayName = "Text";

export default Text;
