import Image from "next/image";
import Link from "next/link";
import { BenefitCards } from "@/components/benefit-cards";
import { CategoryBoard } from "@/components/category-board";
import { DemoInterest } from "@/components/demo-interest";
import { EquipmentSearch } from "@/components/equipment-search";
import { LeadForm } from "@/components/lead-form";
import { Logo } from "@/components/logo";
import { contactEmail, copy, photos, siteUrl, type Locale } from "@/lib/content";

const btn = "inline-flex items-center justify-center px-5 py-3 text-sm font-bold tracking-[0.04em] uppercase";

export function Landing({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const homeHref = locale === "en" ? "/en" : "/";
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stroyo",
    url: siteUrl,
    email: contactEmail,
    description: t.metaDescription,
    areaServed: { "@type": "Country", name: "Czechia" },
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-30 focus:bg-white focus:px-3 focus:py-2"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-20 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-6 py-3 md:px-12 lg:px-16">
          <Logo href={homeHref} locale={locale} />
          <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label={t.categoriesTitle}>
            <a href="#rent" className="text-[13px] font-bold tracking-[0.08em] uppercase">
              {t.navRent}
            </a>
            <a href="#buy" className="text-[13px] font-bold tracking-[0.08em] uppercase">
              {t.navBuy}
            </a>
            <a href="#categories" className="text-[13px] font-bold tracking-[0.08em] uppercase">
              {t.navCategories}
            </a>
          </nav>
          <nav aria-label={t.langLabel} className="ml-auto flex items-center gap-3 text-sm font-bold lg:ml-4">
            <Link
              href="/"
              hrefLang="cs"
              lang="cs"
              aria-current={locale === "cs" ? "page" : undefined}
              className={locale === "cs" ? "underline decoration-orange decoration-2 underline-offset-4" : "text-muted"}
            >
              CZ
            </Link>
            <Link
              href="/en"
              hrefLang="en"
              lang="en"
              aria-current={locale === "en" ? "page" : undefined}
              className={locale === "en" ? "underline decoration-orange decoration-2 underline-offset-4" : "text-muted"}
            >
              EN
            </Link>
          </nav>
          <a href="#list" className={`${btn} bg-orange text-ink hover:bg-[#e85a00]`}>
            {t.navList}
          </a>
        </div>
      </header>

      <section id="obsah" className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="px-4 pt-8 pb-14 md:px-8 md:pt-10 md:pb-16 lg:pt-10 lg:pb-16">
          <div className="mx-auto max-w-xl lg:mx-0 lg:ml-auto lg:pr-8">
            <p className="text-xs font-bold tracking-[0.12em] text-orange uppercase">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-[12ch] text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.02] font-black tracking-tight">
              {t.headline}
            </h1>
            <p className="mt-4 text-2xl leading-snug font-bold">{t.subhead}</p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">{t.lead}</p>
            <p className="mt-8 text-lg font-bold">{t.heroKicker}</p>
            <p className="mt-1 max-w-lg">{t.heroLine}</p>
            <div className="mt-4 max-w-xl">
              <LeadForm
                locale={locale}
                copy={t}
                context="hero"
                defaultIntent="need"
                intents={[
                  { id: "need", label: t.heroNeed },
                  { id: "have", label: t.heroHave },
                ]}
                submit={t.heroSubmit}
                hint={t.heroHint}
              />
            </div>
            <a href="#list" className={`${btn} mt-4 border border-ink bg-transparent hover:bg-ink hover:text-white`}>
              {t.listCta}
            </a>
            <p className="mt-8 text-sm font-bold tracking-[0.04em] text-muted uppercase">
              {t.points.join(" · ")}
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] bg-ink lg:min-h-full">
          <Image src={photos.hero} alt={t.heroAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>

      <section id="search" className="border-y border-line bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
          <EquipmentSearch locale={locale} copy={t} />
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-[1280px] px-4 py-20 md:px-8 md:py-28">
        <h2 className="text-4xl leading-none font-black tracking-tight md:text-5xl">{t.categoriesTitle}</h2>
        <CategoryBoard locale={locale} copy={t} />
      </section>

      <section id="demo" className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <article className="border border-line bg-paper">
            <div className="relative aspect-[16/10] bg-ink">
              <Image src={photos.listing} alt="" fill className="object-cover object-center" sizes="(min-width: 1024px) 40vw, 100vw" />
              <p className="absolute top-3 left-3 bg-orange px-2 py-1 text-[11px] font-bold tracking-[0.08em] text-ink uppercase">
                {t.demoLabel}
              </p>
            </div>
            <div className="p-5">
              <h3 className="text-3xl font-black tracking-tight uppercase">{t.sampleName}</h3>
              <p className="mt-1 text-muted">{t.sampleKind}</p>
              <p className="mt-3 text-sm font-bold">{t.samplePlace}</p>
              <p className="mt-5 text-2xl font-black">
                {t.dayPrice} <span className="text-base font-bold text-muted">{t.dayUnit}</span>
              </p>
              <p className="mt-1 font-bold">
                {t.weekPrice} <span className="font-medium text-muted">{t.weekUnit}</span>
              </p>
              <p className="mt-4 text-xl font-black">
                {t.buyPrice} <span className="text-base font-bold">{t.buyLabel}</span>
              </p>
              <p className="mt-4 text-sm font-bold">{t.delivery}</p>
              <DemoInterest locale={locale} copy={t} />
            </div>
          </article>
          <div>
            <h2 className="max-w-md text-4xl leading-[1.05] font-black tracking-tight md:text-5xl">{t.conceptTitle}</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">{t.conceptLead}</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {t.modes.map((mode) => (
                <li key={mode.id} id={mode.id} className="scroll-mt-28">
                  <h3 className="text-sm font-bold tracking-[0.08em] uppercase">{mode.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{mode.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="list" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.12em] text-orange uppercase">{t.ownerEyebrow}</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-[1.05] font-black tracking-tight md:text-5xl">{t.ownerTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{t.ownerLead}</p>
            <a href="#owner-form" className={`${btn} mt-8 bg-orange text-ink hover:bg-[#e85a00]`}>
              {t.ownerCta}
            </a>
            <p className="mt-8 text-sm font-bold tracking-[0.04em] text-white/70 uppercase">{t.audiences.join(" · ")}</p>
          </div>
          <div id="owner-form" className="scroll-mt-28 border border-white/20 p-5">
            <h3 className="text-2xl font-black tracking-tight">{t.ownerFormTitle}</h3>
            <div className="mt-4">
              <LeadForm
                locale={locale}
                copy={t}
                context="owner"
                defaultIntent="have"
                equipmentLabel={t.ownerWhat}
                equipmentPlaceholder={t.ownerWhatPlaceholder}
                locationLabel={t.ownerWhere}
                showOffer
                submit={t.ownerSubmit}
                hint={t.ownerHint}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="notify" className="scroll-mt-24 mx-auto max-w-[1280px] px-4 py-20 md:px-8 md:py-28">
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-black tracking-tight md:text-5xl">{t.notifyTitle}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{t.notifyLead}</p>
        <BenefitCards locale={locale} copy={t} />
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-8 md:px-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-black tracking-tight">STROYO.CZ</p>
            <p className="mt-1 font-bold">{t.footerLine}</p>
          </div>
          <a href={`mailto:${contactEmail}`} className="text-sm font-bold hover:text-orange">
            {contactEmail}
          </a>
          <p className="text-sm text-muted">© {year} Stroyo</p>
        </div>
      </footer>
    </div>
  );
}
