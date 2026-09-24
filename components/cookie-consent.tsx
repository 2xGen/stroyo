"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { openCookieSettings, readConsent, writeConsent } from "@/lib/consent";
import { legal } from "@/lib/legal";
import type { Locale } from "@/lib/content";

export function CookieConsent({ locale }: { locale: Locale }) {
  const t = legal[locale];
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [measurement, setMeasurement] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    if (!saved) setVisible(true);
    const open = () => {
      const current = readConsent();
      setMeasurement(current?.measurement ?? false);
      setDetails(true);
      setVisible(true);
    };
    window.addEventListener("stroyo-cookies", open);
    return () => window.removeEventListener("stroyo-cookies", open);
  }, []);

  if (!visible) return null;

  const close = (allowMeasurement: boolean) => {
    writeConsent(allowMeasurement);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-paper p-4 shadow-[0_-8px_24px_rgba(25,25,25,0.08)] md:p-6">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4">
        <div>
          <h2 className="text-lg font-black tracking-tight">{t.cookieTitle}</h2>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed">
            {t.cookieLead}{" "}
            <Link href={t.privacyHref} className="font-bold underline underline-offset-2 hover:text-orange">
              {t.privacyLabel}
            </Link>
          </p>
        </div>
        {details ? (
          <div className="grid gap-3 md:grid-cols-2">
            <div className="border border-line bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black">{t.necessaryTitle}</h3>
                <span className="text-xs font-bold tracking-[0.08em] text-muted uppercase">{t.alwaysOn}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.necessaryText}</p>
            </div>
            <div className="border border-line bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black">{t.measurementTitle}</h3>
                <button
                  type="button"
                  role="switch"
                  aria-checked={measurement}
                  onClick={() => setMeasurement((value) => !value)}
                  className={`flex h-7 w-12 shrink-0 cursor-pointer items-center border border-ink p-0.5 ${measurement ? "bg-orange" : "bg-white"}`}
                >
                  <span className={`block h-5 w-5 bg-ink ${measurement ? "ml-auto" : ""}`} />
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.measurementText}</p>
            </div>
          </div>
        ) : null}
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={() => close(true)} className="h-11 cursor-pointer bg-orange px-5 text-sm font-bold tracking-[0.04em] text-ink uppercase hover:bg-[#e85a00]">
            {t.accept}
          </button>
          <button type="button" onClick={() => close(false)} className="h-11 cursor-pointer border border-ink bg-white px-5 text-sm font-bold tracking-[0.04em] uppercase hover:bg-ink hover:text-white">
            {t.reject}
          </button>
          {details ? (
            <button type="button" onClick={() => close(measurement)} className="h-11 cursor-pointer border border-ink bg-white px-5 text-sm font-bold tracking-[0.04em] uppercase hover:bg-ink hover:text-white">
              {t.save}
            </button>
          ) : (
            <button type="button" onClick={() => setDetails(true)} className="h-11 cursor-pointer px-5 text-sm font-bold tracking-[0.04em] uppercase underline underline-offset-4">
              {t.settings}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ locale, className }: { locale: Locale; className?: string }) {
  const t = legal[locale];
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {t.cookieSettings}
    </button>
  );
}
