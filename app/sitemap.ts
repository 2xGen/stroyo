import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    cs: siteUrl,
    en: `${siteUrl}/en`,
  };

  return [
    { url: siteUrl, lastModified, alternates: { languages } },
    { url: `${siteUrl}/en`, lastModified, alternates: { languages } },
  ];
}
