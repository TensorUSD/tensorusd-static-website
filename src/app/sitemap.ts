import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tensorusd.com",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://tensorusd.com/app",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
