import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import ThemeToggle from "../../ui/ThemeToggle";

export default function DesktopNav() {
  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <Logo />
      <NavLinks />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <CTAButton />
      </div>
    </div>
  );
}
