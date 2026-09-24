"use client";

import { useState } from "react";
import { LeadForm } from "@/components/lead-form";
import type { Copy, Locale } from "@/lib/content";

function fill(template: string, query: string) {
  return template.replaceAll("{query}", query);
}

export function EquipmentSearch({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [query, setQuery] = useState("");
  const [where, setWhere] = useState(copy.searchLocation);
  const [asked, setAsked] = useState("");

  return (
    <div>
      <form
        className="border border-line bg-white"
        onSubmit={(event) => {
          event.preventDefault();
          const next = query.trim();
          if (next) setAsked(next);
        }}
      >
        <div className="flex flex-col md:flex-row">
          <label className="flex min-w-0 flex-1 flex-col px-4 py-3">
            <span className="text-xs font-bold tracking-[0.08em] text-muted uppercase">{copy.searchLabel}</span>
            <input
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="mt-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
            />
          </label>
          <label className="flex min-w-0 items-center border-t border-line px-4 py-3 md:w-44 md:border-t-0 md:border-l">
            <input
              name="where"
              value={where}
              onChange={(event) => setWhere(event.target.value)}
              aria-label={copy.searchLocation}
              className="w-full bg-transparent text-base font-bold text-ink outline-none"
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer bg-orange px-8 py-4 text-sm font-bold tracking-[0.06em] text-ink uppercase hover:bg-[#e85a00]"
          >
            {copy.searchButton}
          </button>
        </div>
      </form>
      {asked ? (
        <div className="mt-4 border border-line bg-paper p-5">
          <h2 className="text-2xl font-black tracking-tight">{fill(copy.searchTitle, asked)}</h2>
          <p className="mt-2 max-w-2xl leading-relaxed">{fill(copy.searchBody, asked)}</p>
          <div className="mt-5 max-w-xl">
            <LeadForm
              locale={locale}
              copy={copy}
              context="search"
              query={asked}
              defaultIntent="need"
              locationLabel={copy.searchLocation}
              locationDefault={where}
              submit={copy.searchSubmit}
              hint={copy.heroHint}
              successNote={fill(copy.searchSaved, asked)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
