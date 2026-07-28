/**
 * Reusable flex wrapper.
 */
export default function Flex({
  children,
  direction = "flex-row",
  justify = "justify-start",
  align = "items-center",
  wrap = "flex-nowrap",
  gap = "gap-4",
  className = "",
  ...props
}) {
  return (
    <div 
      className={`flex ${direction} ${justify} ${align} ${wrap} ${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
