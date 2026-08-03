import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import ThemeToggle from "../../ui/ThemeToggle";

export default function MobileNav({ onMenuOpen }) {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <Logo />
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <MobileMenuButton onClick={onMenuOpen} />
      </div>
    </div>
  );
}
