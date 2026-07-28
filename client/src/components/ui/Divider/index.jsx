import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const dividerVariants = cva("shrink-0 bg-[#EAEAEA]", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const Divider = React.forwardRef(
  ({ className, orientation, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(dividerVariants({ orientation, className }))}
      {...props}
    />
  )
);
Divider.displayName = "Divider";

export default Divider;
