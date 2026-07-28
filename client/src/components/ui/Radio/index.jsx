import * as React from "react";
import { cn } from "../../../utils";

const Radio = React.forwardRef(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <div className="flex h-6 items-center">
          <input
            type="radio"
            className={cn(
              "peer h-5 w-5 shrink-0 appearance-none rounded-full border border-[#EAEAEA] bg-white transition-all checked:border-[#E6002D] checked:border-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-[#EF4444]",
              className
            )}
            ref={ref}
            {...props}
          />
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
Radio.displayName = "Radio";

export default Radio;
