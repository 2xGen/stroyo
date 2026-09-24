import { consentCookie, type ConsentChoice } from "@/lib/legal";

const storageKey = "stroyo-consent";
const maxAge = 60 * 60 * 24 * 180;

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice;
    if (parsed.necessary !== true || typeof parsed.measurement !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(measurement: boolean) {
  const choice: ConsentChoice = { necessary: true, measurement, at: new Date().toISOString() };
  window.localStorage.setItem(storageKey, JSON.stringify(choice));
  document.cookie = `${consentCookie}=${measurement ? "1" : "0"}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("stroyo-consent", { detail: choice }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("stroyo-cookies"));
}
