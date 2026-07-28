import * as React from "react";
import { cn } from "../../../utils";
import { ChevronDown } from "lucide-react";

const Select = React.forwardRef(
  ({ className, label, error, helperText, disabled, children, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[#111111]">
            {label} {props.required && <span className="text-[#E6002D]">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            className={cn(
              "flex h-12 w-full appearance-none rounded-2xl border border-[#EAEAEA] bg-white px-4 py-2 pr-10 text-sm text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-[#EF4444] focus-visible:ring-[#EF4444]",
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <ChevronDown className="h-4 w-4 text-[#737373]" />
          </div>
        </div>
        {(error || helperText) && (
          <p className={cn("text-xs", error ? "text-[#EF4444]" : "text-[#737373]")}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
