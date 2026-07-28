import { SITE_CONFIG } from "../constants/site";

export default function manifest() {
  return {
    name: SITE_CONFIG.name,
    short_name: "Talentele",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#E6002D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
