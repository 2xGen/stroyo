"use client";

import Image from "next/image";
import { useState } from "react";
import { LeadForm } from "@/components/lead-form";
import { copy, type Locale } from "@/lib/content";
import { categoryUi, type CategoryPageData } from "@/lib/category-pages";

export function CategoryDemand({ locale, page }: { locale: Locale; page: CategoryPageData }) {
  const t = copy[locale];
  const ui = categoryUi[locale];
  const text = page[locale];
  const [query, setQuery] = useState("");
  const [where, setWhere] = useState<string>(ui.whereValue);
  const [draftQuery, setDraftQuery] = useState("");
  const [draftWhere, setDraftWhere] = useState<string>(ui.whereValue);

  const focusDemand = (nextQuery: string, nextWhere: string) => {
    setQuery(nextQuery);
    setWhere(nextWhere);
    document.getElementById("poptavka")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="mx-auto grid max-w-[1280px] items-start gap-10 px-4 py-12 md:px-8 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.12em] text-orange uppercase">{t.eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-black tracking-tight md:text-5xl">{text.h1}</h1>
          <p className="mt-4 text-xl font-bold leading-snug">{text.lead}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">{text.body}</p>
      <form
        className="mt-8 grid gap-3 sm:grid-cols-[1fr_180px_auto]"
        onSubmit={(event) => {
          event.preventDefault();
          focusDemand(draftQuery, draftWhere);
        }}
      >
        <label className="text-sm font-bold">
          {ui.what}
          <input
            value={draftQuery}
            onChange={(event) => setDraftQuery(event.target.value)}
            placeholder={text.searchPlaceholder}
            className="mt-2 h-12 w-full border border-line bg-white px-3 text-base font-medium"
          />
        </label>
        <label className="text-sm font-bold">
          {ui.where}
          <input
            value={draftWhere}
            onChange={(event) => setDraftWhere(event.target.value)}
            className="mt-2 h-12 w-full border border-line bg-white px-3 text-base font-medium"
          />
        </label>
        <button type="submit" className="h-12 cursor-pointer self-end bg-orange px-5 text-sm font-bold tracking-[0.04em] text-ink uppercase hover:bg-[#e85a00]">
          {ui.find}
        </button>
      </form>
      <p className="mt-4 text-sm font-bold text-muted">{ui.launch}</p>
        </div>
        <div className="relative min-h-[320px] bg-ink lg:min-h-[520px]">
          <Image src={page.image} alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-16 md:px-8">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">{text.groupTitle}</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {text.subs.map((item) => (
          <li key={item.name}>
            <button
              type="button"
              onClick={() => focusDemand(item.name, draftWhere)}
              className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-ink text-left"
            >
              <Image src={item.image ?? page.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 30vw, 50vw" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-2xl font-black tracking-tight uppercase">{item.name}</h3>
                <p className="mt-1 text-sm text-white/85">{item.text}</p>
                <p className="mt-3 text-xs font-bold tracking-[0.08em] text-orange uppercase">{ui.view} →</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-20">
          <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">{text.nearbyTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{text.nearbyBody}</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {text.samples.map((item) => (
              <li key={item.name} className="border border-line bg-paper p-5">
                <p className="text-[11px] font-bold tracking-[0.08em] text-orange uppercase">{ui.demo}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">{item.name}</h3>
                <p className="mt-2 text-sm font-bold">{item.place}</p>
                {item.delivery ? <p className="mt-4 text-sm font-bold">{ui.delivery}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 md:px-8">
      <div id="poptavka" className="scroll-mt-28 border border-ink bg-white p-5 md:p-8">
        <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">{text.demandTitle}</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed">{text.demandLead}</p>
        <div className="mt-6 max-w-xl">
          <LeadForm
            key={`${query}-${where}`}
            locale={locale}
            copy={t}
            context="category"
            category={page.id}
            defaultIntent="need"
            equipmentLabel={ui.what}
            equipmentPlaceholder={text.searchPlaceholder}
            queryDefault={query}
            locationLabel={ui.place}
            locationDefault={where}
            showTiming
            whenLabel={ui.when}
            submit={ui.notify}
            hint={ui.free}
          />
        </div>
      </div>
      </section>
    </>
  );
}
