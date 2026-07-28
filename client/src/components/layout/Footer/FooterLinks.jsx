import Link from "next/link";
import { FOOTER_LINKS } from "../../../constants";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {FOOTER_LINKS.map((group) => (
        <div key={group.title} className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-[#111111] uppercase tracking-wider">{group.title}</h4>
          <ul className="flex flex-col gap-3">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[#737373] transition-colors hover:text-[#E6002D]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
