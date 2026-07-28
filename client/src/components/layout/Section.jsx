import Container from "./Container";
import { SPACING } from "../../constants";

/**
 * Reusable section component with vertical spacing and background variants.
 */
export default function Section({
  children,
  className = "",
  id,
  variant = "transparent",
  useContainer = true,
  ...props
}) {
  // Use spacing constants
  const baseClasses = `w-full ${SPACING.section.default}`;
  
  const variants = {
    white: "bg-white",
    surface: "bg-[#FAFAFA]",
    gradient: "bg-gradient-to-b from-white to-[#F5F5F5]",
    transparent: "bg-transparent",
  };

  const bgClass = variants[variant] || variants.transparent;
  const sectionClasses = `${baseClasses} ${bgClass} ${className}`;

  return (
    <section id={id} className={sectionClasses} {...props}>
      {useContainer ? <Container>{children}</Container> : children}
    </section>
  );
}
