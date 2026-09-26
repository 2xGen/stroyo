import { CategoryDemand } from "@/components/category-demand";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { copy, contactEmail, type Locale } from "@/lib/content";
import { categoryPath, categoryUi, type CategoryPageData } from "@/lib/category-pages";
import { legal } from "@/lib/legal";

export function CategoryLanding({ locale, page }: { locale: Locale; page: CategoryPageData }) {
  const t = copy[locale];
  const ui = categoryUi[locale];
  const text = page[locale];
  const home = locale === "en" ? "/en" : "/";
  const year = new Date().getFullYear();

  return (
    <div>
      <SiteHeader
        locale={locale}
        copy={t}
        homeHref={home}
        rentHref={`${home}#rent`}
        buyHref={`${home}#buy`}
        categoriesHref={`${home}#categories`}
        listHref="#nabidnout"
        csHref={categoryPath("cs", page.id)}
        enHref={categoryPath("en", page.id)}
      />

      <CategoryDemand locale={locale} page={page} />

      <section id="nabidnout" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <h2 className="max-w-xl text-3xl font-black tracking-tight md:text-4xl">{text.supplyTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{text.supplyLead}</p>
            <p className="mt-3 text-lg leading-relaxed text-white/80">{text.supplyBody}</p>
            <p className="mt-8 text-sm font-bold tracking-[0.04em] text-white/70 uppercase">{text.audiences}</p>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-2xl font-black tracking-tight">{ui.supplyCta}</h3>
            <div className="mt-4">
              <LeadForm
                locale={locale}
                copy={t}
                context="owner"
                category={page.id}
                defaultIntent="have"
                equipmentLabel={t.ownerWhat}
                equipmentPlaceholder={t.ownerWhatPlaceholder}
                locationLabel={t.ownerWhere}
                showOffer
                submit={ui.supplyCta}
                hint={t.ownerHint}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-20">
        <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">{text.partnerTitle}</h2>
        <p className="mt-3 text-sm font-bold tracking-[0.08em] text-orange uppercase">{locale === "en" ? "Run a rental company?" : "Provozujete půjčovnu?"}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{text.partnerLead}</p>
        <p className="mt-4 font-bold">{text.partnerAsk}</p>
        <div className="mt-6 max-w-xl">
          <LeadForm
            locale={locale}
            copy={t}
            context="owner"
            category={page.id}
            defaultIntent="have"
            equipmentLabel={ui.partnerWhat}
            equipmentPlaceholder={text.partnerPlaceholder}
            locationLabel={ui.place}
            submit={ui.partnerCta}
            hint={ui.free}
          />
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">{ui.howTitle}</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {ui.steps.map((step, index) => (
              <li key={step.title} className="border-t border-ink pt-4">
                <p className="text-sm font-black text-orange">{index + 1}</p>
                <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-lg font-bold leading-relaxed">{ui.closing}</p>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-8 md:px-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-black tracking-tight">STROYO.CZ</p>
            <p className="mt-1 font-bold">{t.footerLine}</p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a href={legal[locale].privacyHref} className="text-sm font-bold hover:text-orange">
              {legal[locale].privacyLabel}
            </a>
            <CookieSettingsButton locale={locale} className="cursor-pointer text-left text-sm font-bold hover:text-orange sm:text-right" />
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
