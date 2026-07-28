import * as React from "react";
import { cn } from "../../../utils";
import { X } from "lucide-react";

const Chip = React.forwardRef(({ className, label, onRemove, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] px-3 py-1 text-sm font-medium text-[#525252] transition-colors hover:bg-[#F5F5F5]",
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 rounded-full p-0.5 hover:bg-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#E6002D]"
          aria-label={`Remove ${label}`}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
});
Chip.displayName = "Chip";

export default Chip;
