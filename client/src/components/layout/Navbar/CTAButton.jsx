import { Button } from "../../ui";

export default function CTAButton() {
  return (
    <Button 
      variant="primary" 
      className="hidden lg:flex rounded-full bg-[#E6002D]/90 backdrop-blur-sm border border-white/10 shadow-[0_0_15px_rgba(230,0,45,0.2)] hover:bg-[#E6002D] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(230,0,45,0.4)] transition-all duration-300"
    >
      Book Free Counselling
    </Button>
  );
}
