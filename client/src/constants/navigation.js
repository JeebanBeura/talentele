export const NAVIGATION = [
  { label: "Home", href: "/" },
  { 
    label: "Programs", 
    href: "/programs",
    submenu: [
      { label: "Full Stack Development", href: "/programs/full-stack" },
      { label: "Data Science", href: "/programs/data-science" },
      { label: "UI/UX Design", href: "/programs/ui-ux" },
    ]
  },
  { label: "Placement", href: "/placement" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Full Stack Development", href: "/programs/full-stack" },
      { label: "Data Science", href: "/programs/data-science" },
      { label: "UI/UX Design", href: "/programs/ui-ux" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/placement" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
