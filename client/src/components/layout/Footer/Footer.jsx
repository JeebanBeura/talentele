import Container from "../Container";
import Logo from "../Navbar/Logo";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAEAEA] bg-white pt-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo />
            <p className="text-sm text-[#737373] max-w-sm">
              Build a premium, modern, enterprise-grade education platform that focuses on career transformation.
            </p>
            <SocialLinks />
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <FooterLinks />
              <Newsletter />
            </div>
          </div>
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}
