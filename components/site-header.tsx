"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/logo";
import type { Copy, Locale } from "@/lib/content";

const btn = "items-center justify-center px-5 py-3 text-sm font-bold tracking-[0.04em] uppercase";
const navLink = "text-[13px] font-bold tracking-[0.08em] uppercase";

export function SiteHeader({
  locale,
  copy,
  homeHref,
  rentHref,
  buyHref,
  categoriesHref,
  listHref,
  csHref,
  enHref,
}: {
  locale: Locale;
  copy: Copy;
  homeHref: string;
  rentHref: string;
  buyHref: string;
  categoriesHref: string;
  listHref: string;
  csHref: string;
  enHref: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuLabel = locale === "cs" ? (open ? "Zavřít menu" : "Otevřít menu") : open ? "Close menu" : "Open menu";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <div className="relative z-30 mx-auto flex max-w-[1280px] items-center gap-4 bg-paper px-6 py-3 md:px-12 lg:px-16">
        <Logo href={homeHref} locale={locale} />
        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label={copy.categoriesTitle}>
          <a href={rentHref} className={navLink}>
            {copy.navRent}
          </a>
          <a href={buyHref} className={navLink}>
            {copy.navBuy}
          </a>
          <a href={categoriesHref} className={navLink}>
            {copy.navCategories}
          </a>
        </nav>
        <nav aria-label={copy.langLabel} className="ml-4 hidden items-center gap-3 text-sm font-bold lg:flex">
          <LangLink href={csHref} locale="cs" active={locale === "cs"} />
          <LangLink href={enHref} locale="en" active={locale === "en"} />
        </nav>
        <a href={listHref} className={`${btn} hidden bg-orange text-ink hover:bg-[#e85a00] lg:inline-flex`}>
          {copy.navList}
        </a>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-ink lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={menuLabel}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </div>
      {open ? (
        <>
          <button type="button" className="fixed inset-0 z-20 bg-ink/40 lg:hidden" aria-label={menuLabel} onClick={close} />
          <nav
            id={panelId}
            aria-label={copy.categoriesTitle}
            className="absolute inset-x-0 top-full z-30 max-h-[calc(100svh-5.5rem)] overflow-y-auto border-b border-line bg-paper px-6 py-2 lg:hidden"
          >
            <a href={rentHref} onClick={close} className="block border-b border-line py-4 text-lg font-black tracking-[0.08em] uppercase">
              {copy.navRent}
            </a>
            <a href={buyHref} onClick={close} className="block border-b border-line py-4 text-lg font-black tracking-[0.08em] uppercase">
              {copy.navBuy}
            </a>
            <a href={categoriesHref} onClick={close} className="block border-b border-line py-4 text-lg font-black tracking-[0.08em] uppercase">
              {copy.navCategories}
            </a>
            <div className="flex items-center gap-4 border-b border-line py-4 text-sm font-bold">
              <span className="tracking-[0.08em] text-muted uppercase">{copy.langLabel}</span>
              <LangLink href={csHref} locale="cs" active={locale === "cs"} />
              <LangLink href={enHref} locale="en" active={locale === "en"} />
            </div>
            <a href={listHref} onClick={close} className={`${btn} mt-4 mb-3 inline-flex w-full bg-orange text-ink hover:bg-[#e85a00]`}>
              {copy.navList}
            </a>
          </nav>
        </>
      ) : null}
    </header>
  );
}

function LangLink({ href, locale, active }: { href: string; locale: Locale; active: boolean }) {
  return (
    <Link
      href={href}
      hrefLang={locale}
      lang={locale}
      aria-current={active ? "page" : undefined}
      className={active ? "underline decoration-orange decoration-2 underline-offset-4" : "text-muted"}
    >
      {locale === "cs" ? "CZ" : "EN"}
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-3.5 w-5">
      <span className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
      <span className={`absolute top-1.5 left-0 h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
      <span className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
    </span>
  );
}
