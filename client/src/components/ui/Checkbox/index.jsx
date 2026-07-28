import * as React from "react";
import { cn } from "../../../utils";

const Checkbox = React.forwardRef(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            className={cn(
              "peer h-5 w-5 shrink-0 appearance-none rounded-md border border-[#EAEAEA] bg-white transition-all checked:bg-[#E6002D] checked:border-[#E6002D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-[#EF4444]",
              className
            )}
            ref={ref}
            {...props}
          />
          <svg
            className="pointer-events-none absolute hidden h-5 w-5 stroke-white p-1 peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={props.id}
                className={cn(
                  "text-sm font-medium leading-none text-[#111111] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  error && "text-[#EF4444]"
                )}
              >
                {label}
              </label>
            )}
            {description && <p className="text-sm text-[#737373]">{description}</p>}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export default Checkbox;
