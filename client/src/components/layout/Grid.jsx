import { SPACING } from "../../constants";

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  12: "grid-cols-1 lg:grid-cols-12",
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
  const colClass = gridCols[columns] || "grid-cols-1 lg:grid-cols-12";

  return (
    <div 
      className={`grid w-full ${colClass} ${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
