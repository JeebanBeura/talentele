import { SPACING } from "../../constants";

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
};

/**
 * Reusable responsive grid component.
 */
export default function Grid({
  children,
  columns = 12,
  gap = SPACING.grid.gap,
  className = "",
  ...props
}) {
  const colClass = gridCols[columns] || "grid-cols-12";

  return (
    <div 
      className={`grid w-full ${colClass} ${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
