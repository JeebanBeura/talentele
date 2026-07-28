import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden bg-[#FAFAFA]",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-20 w-20",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
      },
    },
    defaultVariants: {
      size: "default",
      rounded: "full",
    },
  }
);

const Avatar = React.forwardRef(({ className, src, alt = "", fallback, size, rounded, ...props }, ref) => {
  const [error, setError] = React.useState(false);

  return (
    <div ref={ref} className={cn(avatarVariants({ size, rounded, className }))} {...props}>
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#EAEAEA] text-[#525252] font-medium uppercase">
          {fallback || alt.charAt(0) || "?"}
        </div>
      )}
    </div>
  );
});
Avatar.displayName = "Avatar";

export default Avatar;
