import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

export default function DesktopNav() {
  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <Logo />
      <NavLinks />
      <CTAButton />
    </div>
  );
}
