import * as React from "react";
import { cn } from "../../../utils";

const Input = React.forwardRef(
  ({ className, type, label, error, helperText, prefix, suffix, disabled, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[#111111]">
            {label} {props.required && <span className="text-[#E6002D]">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {prefix && <span className="absolute left-3 text-[#737373]">{prefix}</span>}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-2xl border border-[#EAEAEA] bg-white px-4 py-2 text-sm text-[#111111] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#737373] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] disabled:cursor-not-allowed disabled:opacity-50",
              prefix && "pl-10",
              suffix && "pr-10",
              error && "border-[#EF4444] focus-visible:ring-[#EF4444]",
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {suffix && <span className="absolute right-3 text-[#737373]">{suffix}</span>}
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
Input.displayName = "Input";

export default Input;
