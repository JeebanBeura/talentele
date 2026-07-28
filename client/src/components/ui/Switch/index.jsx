import * as React from "react";
import { cn } from "../../../utils";

const Switch = React.forwardRef(({ className, label, description, checked, onChange, ...props }, ref) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-[#E6002D]" : "bg-[#EAEAEA]",
          className
        )}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
      {(label || description) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              className="text-sm font-medium leading-none text-[#111111] cursor-pointer"
              onClick={() => onChange?.(!checked)}
            >
              {label}
            </label>
          )}
          {description && <p className="text-sm text-[#737373]">{description}</p>}
        </div>
      )}
    </div>
  );
});
Switch.displayName = "Switch";

export default Switch;
