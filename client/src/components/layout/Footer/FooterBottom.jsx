import { Text } from "../../ui";
import { SITE_CONFIG } from "../../../constants";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-[#EAEAEA] py-8 md:flex-row">
      <Text variant="small" color="muted">
        © {currentYear} {SITE_CONFIG?.name || "Talentele"}. All rights reserved.
      </Text>
      <div className="flex items-center gap-4">
      </div>
    </div>
  );
}
