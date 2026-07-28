import { Menu } from "lucide-react";
import { IconButton } from "../../ui";

export default function MobileMenuButton({ onClick }) {
  return (
    <IconButton 
      onClick={onClick}
      variant="ghost" 
      aria-label="Open Menu"
      className="text-[#111111] hover:bg-[#F5F5F5]"
    >
      <Menu className="h-6 w-6" />
    </IconButton>
  );
}
