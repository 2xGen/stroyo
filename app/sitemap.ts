import type { MetadataRoute } from "next";
import { categoryPages } from "@/lib/category-pages";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const home = {
    cs: siteUrl,
    en: `${siteUrl}/en`,
    "x-default": siteUrl,
  };
  const privacy = {
    cs: `${siteUrl}/ochrana-osobnich-udaju`,
    en: `${siteUrl}/en/privacy`,
    "x-default": `${siteUrl}/ochrana-osobnich-udaju`,
  };

  return [
    { url: home.cs, lastModified, alternates: { languages: home } },
    { url: home.en, lastModified, alternates: { languages: home } },
    { url: privacy.cs, lastModified, alternates: { languages: privacy } },
    { url: privacy.en, lastModified, alternates: { languages: privacy } },
    ...categoryPages().flatMap((page) => {
      const languages = {
        cs: `${siteUrl}/pronajem/${page.csSlug}`,
        en: `${siteUrl}/en/rent/${page.enSlug}`,
      };
      return [
        { url: languages.cs, lastModified, alternates: { languages: { ...languages, "x-default": languages.cs } } },
        { url: languages.en, lastModified, alternates: { languages: { ...languages, "x-default": languages.cs } } },
      ];
    }),
  ];
}
