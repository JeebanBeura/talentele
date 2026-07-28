import * as React from "react";
import { cn } from "../../../utils";

const Textarea = React.forwardRef(
  ({ className, label, error, helperText, disabled, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[#111111]">
            {label} {props.required && <span className="text-[#E6002D]">*</span>}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-2xl border border-[#EAEAEA] bg-white px-4 py-3 text-sm text-[#111111] transition-colors placeholder:text-[#737373] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            error && "border-[#EF4444] focus-visible:ring-[#EF4444]",
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn("text-xs", error ? "text-[#EF4444]" : "text-[#737373]")}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
