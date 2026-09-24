"use client";

import { useState } from "react";
import { LeadForm } from "@/components/lead-form";
import type { Copy, Locale } from "@/lib/content";

const btn = "inline-flex items-center justify-center px-5 py-3 text-sm font-bold tracking-[0.04em] uppercase";

export function DemoInterest({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5">
      <button type="button" onClick={() => setOpen(true)} className={`${btn} w-full cursor-pointer border border-ink hover:bg-ink hover:text-white`}>
        {copy.availability}
      </button>
      {open ? (
        <div className="mt-4 border border-line bg-white p-4">
          <h3 className="text-xl font-black tracking-tight">{copy.demoTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed">{copy.demoBody}</p>
          <div className="mt-4">
            <LeadForm
              locale={locale}
              copy={copy}
              context="demo"
              category="garden"
              query={copy.sampleName}
              defaultIntent="rent"
              intents={[
                { id: "rent", label: copy.demoRent },
                { id: "buy", label: copy.demoBuy },
              ]}
              submit={copy.demoSubmit}
              hint={copy.heroHint}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
