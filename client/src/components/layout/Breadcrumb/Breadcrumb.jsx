import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../../utils";

export default function Breadcrumb({ items, className }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm", className)}>
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="flex items-center text-[#737373] transition-colors hover:text-[#E6002D]"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-[#EAEAEA]" />
              {isLast ? (
                <span className="font-medium text-[#111111]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#737373] transition-colors hover:text-[#E6002D]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
