import { SITE_CONFIG } from "../constants/site";
import { NAVIGATION } from "../constants/navigation";

export default function sitemap() {
  const routes = NAVIGATION.map((route) => ({
    url: `${SITE_CONFIG.url}${route.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...routes,
  ];
}
