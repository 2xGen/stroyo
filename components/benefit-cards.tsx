"use client";

import { useEffect, useState } from "react";
import { LeadForm } from "@/components/lead-form";
import type { Copy, Locale } from "@/lib/content";

const cardClass = [
  "bg-orange text-ink",
  "bg-ink text-white",
  "border border-ink bg-white text-ink",
];

export function BenefitCards({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [active, setActive] = useState<string | null>(null);
  const item = copy.band.find((entry) => entry.id === active);
  const listing = item?.id === "band-list";

  useEffect(() => {
    if (active) document.getElementById("benefit-lead")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [active]);

  return (
    <>
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {copy.band.map((entry, index) => {
          const selected = active === entry.id;
          const onOrange = index === 0;
          return (
            <li key={entry.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(selected ? null : entry.id)}
                className={`w-full cursor-pointer p-6 text-left ${cardClass[index]} ${
                  selected ? (onOrange ? "ring-2 ring-ink ring-offset-2" : "ring-2 ring-orange ring-offset-2") : ""
                }`}
              >
                <h3 className="text-2xl font-black tracking-tight uppercase">{entry.title}</h3>
                <p className={`mt-3 leading-relaxed ${index === 1 ? "text-white/75" : "text-ink/80"}`}>{entry.text}</p>
                <p className={`mt-6 text-xs font-bold tracking-[0.08em] uppercase ${onOrange ? "text-ink" : "text-orange"}`}>
                  {copy.bandCta} →
                </p>
              </button>
            </li>
          );
        })}
      </ul>
      {item ? (
        <div id="benefit-lead" className="mt-4 scroll-mt-24 border border-ink bg-white p-5 md:p-8">
          <h3 className="max-w-2xl text-2xl font-black tracking-tight md:text-3xl">{item.ask}</h3>
          <div className="mt-5 max-w-xl">
            <LeadForm
              key={item.id}
              locale={locale}
              copy={copy}
              context="bottom"
              defaultIntent={listing ? "have" : item.id === "band-buy" ? "buy" : "rent"}
              equipmentLabel={listing ? copy.ownerWhat : copy.bottomNeedWhat}
              equipmentPlaceholder={listing ? copy.ownerWhatPlaceholder : copy.lookingPlaceholder}
              locationLabel={listing ? copy.ownerWhere : copy.bottomNeedWhere}
              showOffer={listing}
              submit={listing ? copy.ownerSubmit : copy.heroSubmit}
              hint={listing ? copy.ownerHint : copy.heroHint}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
