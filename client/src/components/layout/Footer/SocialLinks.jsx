import { SOCIAL_LINKS } from "../../../constants";

export default function SocialLinks() {
  const iconMap = {
    twitter: <span className="text-xs">X</span>,
    linkedin: <span className="text-xs">in</span>,
    instagram: <span className="text-xs">ig</span>,
    youtube: <span className="text-xs">yt</span>,
  };

  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAFAFA] text-[#525252] transition-colors hover:bg-[#E6002D] hover:text-white"
          aria-label={social.platform}
        >
          {iconMap[social.platform.toLowerCase()] || <span className="text-xs">{social.platform}</span>}
        </a>
      ))}
    </div>
  );
}
