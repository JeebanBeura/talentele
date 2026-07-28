/**
 * Reusable vertical spacing stack component.
 */
export default function Stack({
  children,
  spacing = "gap-6",
  className = "",
  ...props
}) {
  return (
    <div 
      className={`flex flex-col w-full ${spacing} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
