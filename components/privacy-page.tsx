import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { Logo } from "@/components/logo";
import { contactEmail, type Locale } from "@/lib/content";
import { legal } from "@/lib/legal";

export function privacyMetadata(locale: Locale): Metadata {
  const t = legal[locale];
  return {
    title: { absolute: `${t.privacyTitle} — Stroyo.cz` },
    description: t.privacyMeta,
    alternates: {
      canonical: t.privacyHref,
      languages: { cs: "/ochrana-osobnich-udaju", en: "/en/privacy", "x-default": "/ochrana-osobnich-udaju" },
    },
    openGraph: { title: t.privacyTitle, description: t.privacyMeta, url: t.privacyHref },
  };
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = legal[locale];
  const home = locale === "en" ? "/en" : "/";

  return (
    <div>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[1280px] items-center px-6 py-3 md:px-12 lg:px-16">
          <Logo href={home} locale={locale} />
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-20">
        <h1 className="text-4xl leading-[1.05] font-black tracking-tight md:text-5xl">{t.privacyTitle}</h1>
        <p className="mt-6 text-lg leading-relaxed">{t.privacyIntro}</p>
        <h2 className="mt-10 text-2xl font-black tracking-tight">{t.privacyEmailTitle}</h2>
        <p className="mt-3 leading-relaxed">{t.privacyEmail}</p>
        <p className="mt-3 font-bold">{t.privacySale}</p>
        <h2 className="mt-10 text-2xl font-black tracking-tight">{t.privacyCookiesTitle}</h2>
        <p className="mt-3 leading-relaxed">{t.privacyCookies}</p>
        <h2 className="mt-10 text-2xl font-black tracking-tight">{t.privacyRightsTitle}</h2>
        <p className="mt-3 leading-relaxed">{t.privacyRights}</p>
        <p className="mt-8">
          <a href={`mailto:${contactEmail}`} className="font-bold hover:text-orange">
            {contactEmail}
          </a>
        </p>
        <p className="mt-8">
          <Link href={home} className="text-sm font-bold tracking-[0.04em] uppercase hover:text-orange">
            Stroyo.cz
          </Link>
        </p>
      </article>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-8 md:px-8 sm:flex-row sm:items-center sm:justify-between">
          <CookieSettingsButton locale={locale} className="cursor-pointer text-left text-sm font-bold hover:text-orange" />
          <a href={`mailto:${contactEmail}`} className="text-sm font-bold hover:text-orange">
            {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}
