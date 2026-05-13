import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mogasa.com.ar",
      lastModified: new Date()
    }
  ];
}
