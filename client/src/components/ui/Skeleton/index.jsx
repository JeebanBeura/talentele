import * as React from "react";
import { cn } from "../../../utils";
import { cva } from "class-variance-authority";

const skeletonVariants = cva("animate-pulse rounded-md bg-[#EAEAEA]", {
  variants: {
    variant: {
      text: "h-4 w-full",
      card: "h-48 w-full rounded-3xl",
      avatar: "h-10 w-10 rounded-full",
      button: "h-12 w-32 rounded-2xl",
      image: "h-64 w-full rounded-[28px]",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

function Skeleton({ className, variant, ...props }) {
  return (
    <div
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  );
}

export default Skeleton;
