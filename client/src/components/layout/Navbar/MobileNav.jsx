import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";

export default function MobileNav({ onMenuOpen }) {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <Logo />
      <MobileMenuButton onClick={onMenuOpen} />
    </div>
  );
}
