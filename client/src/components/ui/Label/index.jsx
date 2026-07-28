import * as React from "react";
import { cn } from "../../../utils";

const Label = React.forwardRef(({ className, required, children, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none text-[#111111] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  >
    {children}
    {required && <span className="ml-1 text-[#E6002D]">*</span>}
  </label>
));
Label.displayName = "Label";

export default Label;
