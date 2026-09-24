"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LeadForm } from "@/components/lead-form";
import { photos, type Copy, type Locale } from "@/lib/content";

export function CategoryBoard({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [active, setActive] = useState<string | null>(null);
  const category = copy.categories.find((item) => item.id === active);

  useEffect(() => {
    if (active) document.getElementById("category-lead")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [active]);

  return (
    <>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.categories.map((item) => (
          <li key={item.id} id={item.id} className="scroll-mt-24">
            <button
              type="button"
              onClick={() => setActive(item.id)}
              className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-ink text-left"
            >
              <Image
                src={photos[item.id]}
                alt=""
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-2xl font-black tracking-tight uppercase">{item.name}</h3>
                <p className="mt-1 text-sm text-white/85">{item.detail}</p>
                <p className="mt-3 text-xs font-bold tracking-[0.08em] text-orange uppercase">{copy.explore} →</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {category ? <div id="category-lead" className="mt-6 scroll-mt-24 border border-line bg-paper p-5 md:p-8">
        <h3 className="max-w-2xl text-2xl font-black tracking-tight md:text-3xl">{category.ask}</h3>
        <p className="mt-2 max-w-2xl leading-relaxed">{category.soon}</p>
        <div className="mt-5 max-w-xl">
          <LeadForm
            key={category.id}
            locale={locale}
            copy={copy}
            context="category"
            category={category.id}
            defaultIntent="need"
            equipmentLabel={copy.lookingLabel}
            equipmentPlaceholder={copy.lookingPlaceholder}
            showTiming
            submit={copy.categorySubmit}
            hint={copy.heroHint}
          />
        </div>
      </div> : null}
    </>
  );
}
