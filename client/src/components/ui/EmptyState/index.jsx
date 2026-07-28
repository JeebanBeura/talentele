import * as React from "react";
import { cn } from "../../../utils";

const EmptyState = React.forwardRef(({ className, icon, title, description, action, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#EAEAEA] bg-[#FAFAFA] p-8 text-center",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F5] text-[#525252]">
          {icon}
        </div>
      )}
      {title && <h3 className="mb-2 text-lg font-semibold text-[#111111]">{title}</h3>}
      {description && <p className="mb-6 max-w-sm text-sm text-[#737373]">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
});
EmptyState.displayName = "EmptyState";

export default EmptyState;
