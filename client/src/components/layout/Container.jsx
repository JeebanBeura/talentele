import { cn } from "../../utils";

/**
 * Reusable container component for horizontal centering and max-width.
 */
export default function Container({ children, className, ...props }) {
  return (
    <div 
      className={cn("w-full max-w-[1440px] mx-auto px-6 md:px-10", className)} 
      {...props}
    >
      {children}
    </div>
  );
}
