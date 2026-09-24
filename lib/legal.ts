import type { Locale } from "@/lib/content";

export const consentCookie = "stroyo-consent";

export type ConsentChoice = {
  necessary: true;
  measurement: boolean;
  at: string;
};

export const legal = {
  cs: {
    privacyHref: "/ochrana-osobnich-udaju",
    privacyLabel: "Ochrana osobních údajů",
    cookieSettings: "Nastavení cookies",
    privacyTitle: "Ochrana osobních údajů",
    privacyMeta: "Jak Stroyo zachází s e-maily a cookies.",
    cookieTitle: "Cookies",
    cookieLead: "Nutné cookies jsou zapnuté vždy. Měření návštěvnosti zapneme až po vašem souhlasu.",
    accept: "Přijmout vše",
    reject: "Odmítnout volitelné",
    save: "Uložit volbu",
    settings: "Podrobné nastavení",
    necessaryTitle: "Nutné",
    necessaryText: "Uloží vaši volbu k cookies. Bez nich bychom se vás ptali při každé návštěvě.",
    alwaysOn: "Vždy zapnuto",
    measurementTitle: "Měření návštěvnosti",
    measurementText: "Google Search Console a Bing Webmaster. Slouží nám k tomu, abychom viděli, jak lidé Stroyo najdou ve vyhledávání.",
    privacyIntro: "Stroyo zpracovává údaje, které nám sami napíšete do formulářů na tomto webu.",
    privacyEmailTitle: "K čemu e-mail použijeme",
    privacyEmail:
      "E-mail a to, co k němu napíšete (jakou techniku hledáte nebo nabízíte, kde a jestli jde o pronájem nebo prodej), použijeme k tomu, abychom vás kontaktovali, až bude Stroyo spuštěné. Jde o naše vlastní obchodní účely: oznámení spuštění a nabídky techniky na Stroyo.",
    privacySale: "Údaje neprodáváme třetím stranám.",
    privacyCookiesTitle: "Cookies",
    privacyCookies:
      "Nutná cookie si pamatuje, jestli jste měření návštěvnosti povolili, nebo odmítli. Google Search Console a Bing Webmaster zapneme jen tehdy, když je v nastavení cookies povolíte. Návštěvnost webu počítáme také přes Vercel Analytics, které cookies nepoužívá.",
    privacyRightsTitle: "Vaše volba",
    privacyRights:
      "Volbu cookies změníte kdykoli odkazem Nastavení cookies v patičce. O výpis, opravu nebo smazání e-mailu napište na hello@stroyo.cz. Stížnost můžete podat u Úřadu pro ochranu osobních údajů.",
  },
  en: {
    privacyHref: "/en/privacy",
    privacyLabel: "Privacy",
    cookieSettings: "Cookie settings",
    privacyTitle: "Privacy",
    privacyMeta: "How Stroyo uses emails and cookies.",
    cookieTitle: "Cookies",
    cookieLead: "Necessary cookies stay on. Search measurement stays off until you allow it.",
    accept: "Accept all",
    reject: "Reject optional",
    save: "Save choice",
    settings: "Cookie settings",
    necessaryTitle: "Necessary",
    necessaryText: "Stores your cookie choice. Without it we would ask on every visit.",
    alwaysOn: "Always on",
    measurementTitle: "Search measurement",
    measurementText: "Google Search Console and Bing Webmaster. We use them to see how people find Stroyo in search.",
    privacyIntro: "Stroyo processes the details you type into the forms on this site.",
    privacyEmailTitle: "How we use your email",
    privacyEmail:
      "We use your email, and what you tell us with it (the equipment you need or want to list, where, and whether it is for rent or sale), to contact you once Stroyo is live. We use it only for our own commercial purposes: a launch note and equipment on Stroyo.",
    privacySale: "We do not sell your data to third parties.",
    privacyCookiesTitle: "Cookies",
    privacyCookies:
      "A necessary cookie remembers whether you allowed or refused search measurement. Google Search Console and Bing Webmaster run only after you allow them in cookie settings. We also count visits with Vercel Analytics, which does not use cookies.",
    privacyRightsTitle: "Your choice",
    privacyRights:
      "Change cookies any time with Cookie settings in the footer. To see, correct, or delete your email, write to hello@stroyo.cz. You can also complain to the Czech Office for Personal Data Protection (ÚOOÚ).",
  },
} as const satisfies Record<Locale, Record<string, string>>;
