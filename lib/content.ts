import type { Metadata } from "next";

export const siteUrl = "https://stroyo.cz";
export const contactEmail = "hello@stroyo.cz";

export type Locale = "cs" | "en";

export const photos = {
  hero: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/main%20hero.jpg",
  garden: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/stroyo%20garden%20tools%20for%20rent.jpg",
  build: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/stroyo%20building%20equipment%20for%20rent.jpg",
  dig: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/stroyo%20bagger%20and%20dumper%20rental.jpg",
  height: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/stroyo%20working%20on%20height.jpg",
  move: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/moving%20equipment%20for%20rent.jpg",
  tools: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/stroyo%20tools%20for%20rent.jpg",
  listing: "https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/stroyo/Eliet%20Maestro.jpg",
} as const;

export type CategoryId = keyof Omit<typeof photos, "hero" | "listing">;

type Category = {
  id: CategoryId;
  name: string;
  detail: string;
  ask: string;
  soon: string;
};

type Mode = { id: string; title: string; text: string; ask?: string };

export type Copy = {
  metaTitle: string;
  metaDescription: string;
  skip: string;
  langLabel: string;
  navRent: string;
  navBuy: string;
  navCategories: string;
  navList: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  lead: string;
  find: string;
  listCta: string;
  heroKicker: string;
  heroLine: string;
  heroNeed: string;
  heroHave: string;
  heroSubmit: string;
  heroHint: string;
  points: string[];
  heroAlt: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchLocation: string;
  searchButton: string;
  searchTitle: string;
  searchBody: string;
  searchSaved: string;
  searchSubmit: string;
  categoriesTitle: string;
  explore: string;
  categories: Category[];
  demoLabel: string;
  sampleName: string;
  sampleKind: string;
  samplePlace: string;
  dayPrice: string;
  dayUnit: string;
  weekPrice: string;
  weekUnit: string;
  buyPrice: string;
  buyLabel: string;
  delivery: string;
  availability: string;
  lookingLabel: string;
  lookingPlaceholder: string;
  whenLabel: string;
  timings: { id: string; label: string }[];
  categorySubmit: string;
  demoTitle: string;
  demoBody: string;
  demoRent: string;
  demoBuy: string;
  demoSubmit: string;
  ownerFormTitle: string;
  ownerWhat: string;
  ownerWhatPlaceholder: string;
  ownerWhere: string;
  ownerRent: string;
  ownerSell: string;
  ownerBoth: string;
  ownerSubmit: string;
  ownerHint: string;
  bottomNeed: string;
  bottomHave: string;
  bottomNeedWhat: string;
  bottomNeedWhere: string;
  bottomHaveWhat: string;
  bottomHaveWhere: string;
  bottomSubmit: string;
  conceptTitle: string;
  conceptLead: string;
  modes: Mode[];
  ownerEyebrow: string;
  ownerTitle: string;
  ownerLead: string;
  ownerCta: string;
  audiences: string[];
  notifyTitle: string;
  notifyLead: string;
  bandCta: string;
  need: string;
  have: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  submitting: string;
  hint: string;
  success: string;
  errorInvalid: string;
  errorFailBefore: string;
  errorFailAfter: string;
  band: Mode[];
  footerLine: string;
};

const categoriesCs: Category[] = [
  {
    id: "garden",
    name: "Zahrada",
    detail: "Štěpkovače · Štípačky na dřevo · Vertikutátory",
    ask: "Hledáte štěpkovač, štípačku na dřevo nebo vertikutátor?",
    soon: "Nabídku zahradní techniky na Stroyo právě připravujeme pro Prahu a okolí.",
  },
  {
    id: "build",
    name: "Stavba",
    detail: "Míchačky · Vibrační desky · Pily na beton",
    ask: "Hledáte míchačku, vibrační desku nebo pilu na beton?",
    soon: "Nabídku stavební techniky na Stroyo právě připravujeme pro Prahu a okolí.",
  },
  {
    id: "dig",
    name: "Výkopové práce",
    detail: "Minibagry · Minidumpery",
    ask: "Hledáte minibagr nebo minidumper?",
    soon: "Nabídku výkopové techniky na Stroyo právě připravujeme pro Prahu a okolí.",
  },
  {
    id: "height",
    name: "Práce ve výškách",
    detail: "Lešení · Pracovní plošiny · Stavební výtahy",
    ask: "Hledáte lešení, pracovní plošinu nebo stavební výtah?",
    soon: "Nabídku techniky pro práci ve výškách na Stroyo právě připravujeme pro Prahu a okolí.",
  },
  {
    id: "move",
    name: "Stěhování",
    detail: "Stěhovací výtahy · Přívěsy · Přepravní technika",
    ask: "Hledáte stěhovací výtah, přívěs nebo přepravní techniku?",
    soon: "Nabídku stěhovací techniky na Stroyo právě připravujeme pro Prahu a okolí.",
  },
  {
    id: "tools",
    name: "Nářadí",
    detail: "Elektrické nářadí · Specializované vybavení",
    ask: "Hledáte elektrické nářadí nebo specializované vybavení?",
    soon: "Nabídku nářadí na Stroyo právě připravujeme pro Prahu a okolí.",
  },
];

const categoriesEn: Category[] = [
  {
    id: "garden",
    name: "Garden",
    detail: "Chippers · Log splitters · Scarifiers",
    ask: "Looking for a wood chipper, log splitter or scarifier?",
    soon: "Stroyo Garden is launching soon around Prague.",
  },
  {
    id: "build",
    name: "Construction",
    detail: "Mixers · Compactors · Concrete saws",
    ask: "Looking for a mixer, compactor or concrete saw?",
    soon: "Stroyo Construction is launching soon around Prague.",
  },
  {
    id: "dig",
    name: "Earthworks",
    detail: "Mini excavators · Dumpers",
    ask: "Looking for a mini excavator or dumper?",
    soon: "Stroyo Earthworks is launching soon around Prague.",
  },
  {
    id: "height",
    name: "Work at height",
    detail: "Scaffolding · Lifts · Hoists",
    ask: "Looking for scaffolding, a lift or a hoist?",
    soon: "Stroyo Work at height is launching soon around Prague.",
  },
  {
    id: "move",
    name: "Moving",
    detail: "Moving lifts · Trailers · Transport",
    ask: "Looking for a moving lift, trailer or transport?",
    soon: "Stroyo Moving is launching soon around Prague.",
  },
  {
    id: "tools",
    name: "Tools",
    detail: "Power tools · Specialist equipment",
    ask: "Looking for power tools or specialist equipment?",
    soon: "Stroyo Tools is launching soon around Prague.",
  },
];

export const copy: Record<Locale, Copy> = {
  cs: {
    metaTitle: "Stroyo.cz — Stroje na jednom místě",
    metaDescription:
      "Pronájem a prodej nářadí, zahradní techniky a stavebních strojů. Praha a střední Čechy.",
    skip: "Přeskočit na obsah",
    langLabel: "Jazyk",
    navRent: "Pronájem",
    navBuy: "Prodej",
    navCategories: "Kategorie",
    navList: "Nabídnout techniku",
    eyebrow: "Již brzy · Praha a Středočeský kraj",
    headline: "Technika pro každý projekt.",
    subhead: "Pronajměte si ji. Kupte ji. Nabídněte svou.",
    lead: "Najděte nářadí, zahradní techniku a stavební stroje od soukromých majitelů, profesionálů a půjčoven ve vašem okolí.",
    find: "Najít stroj",
    listCta: "Nabídnout techniku",
    heroKicker: "Buďte mezi prvními na Stroyo.",
    heroLine: "Získejte přednostní přístup k nabídkám techniky v Praze a Středočeském kraji.",
    heroNeed: "Chci si techniku pronajmout nebo koupit",
    heroHave: "Chci nabídnout svou techniku",
    heroSubmit: "Získat přednostní přístup",
    heroHint: "Zdarma. Až spustíme Stroyo, dáme vám vědět. Žádný spam.",
    points: ["Pronájem", "Použitá technika", "Dostupnost v okolí", "Profesionální stroje"],
    heroAlt: "Štěpkovač Eliet, míchačka a nářadí na stavbě",
    searchLabel: "Co potřebujete?",
    searchPlaceholder: "Hledat techniku…",
    searchLocation: "Praha",
    searchButton: "Hledat",
    searchTitle: "Hledáte {query}?",
    searchBody: "První nabídky na Stroyo připravujeme v Praze a okolí. Zadejte svůj e-mail a dáme vám vědět, jakmile bude {query} k dispozici.",
    searchSaved: "Váš zájem o {query} si uložíme.",
    searchSubmit: "Upozornit na dostupnost",
    categoriesTitle: "Kategorie",
    explore: "Prozkoumat",
    categories: categoriesCs,
    demoLabel: "Ukázkový inzerát",
    sampleName: "Eliet Maestro",
    sampleKind: "Benzínový štěpkovač",
    samplePlace: "Praha 6 · 3 km",
    dayPrice: "1\u00a0200\u00a0Kč",
    dayUnit: "/ den",
    weekPrice: "6\u00a0000\u00a0Kč",
    weekUnit: "/ týden",
    buyPrice: "24\u00a0900\u00a0Kč",
    buyLabel: "koupit",
    delivery: "Doprava možná",
    availability: "Zjistit dostupnost",
    lookingLabel: "Jakou techniku hledáte?",
    lookingPlaceholder: "Štěpkovač, minibagr…",
    whenLabel: "Kdy ji potřebujete?",
    timings: [
      { id: "week", label: "Tento týden" },
      { id: "month", label: "Tento měsíc" },
      { id: "browse", label: "Jen se rozhlížím" },
    ],
    categorySubmit: "Upozornit na dostupnost",
    demoTitle: "Máte zájem o Eliet Maestro?",
    demoBody: "Stroyo ještě není spuštěné. Právě hledáme první štěpkovače k pronájmu a prodeji v Praze a okolí.",
    demoRent: "Chci si ho pronajmout",
    demoBuy: "Chci ho koupit",
    demoSubmit: "Dejte mi vědět, až bude dostupný",
    ownerFormTitle: "Buďte mezi prvními, kdo nabídnou techniku na Stroyo.",
    ownerWhat: "Co chcete nabídnout?",
    ownerWhatPlaceholder: "Štěpkovač, minibagr, nářadí…",
    ownerWhere: "Lokalita",
    ownerRent: "K pronájmu",
    ownerSell: "K prodeji",
    ownerBoth: "Obojí",
    ownerSubmit: "Chci nabídnout techniku",
    ownerHint: "Registrace je zdarma a nezávazná.",
    bottomNeed: "Hledám techniku",
    bottomHave: "Chci nabídnout techniku",
    bottomNeedWhat: "Jakou techniku hledáte?",
    bottomNeedWhere: "Kde ji hledáte?",
    bottomHaveWhat: "Jakou techniku chcete nabídnout?",
    bottomHaveWhere: "Kde se nachází?",
    bottomSubmit: "Získat přednostní přístup",
    conceptTitle: "Pronajměte dnes. Kupte, když budete chtít.",
    conceptLead: "Některé stroje jsou k pronájmu. Některé na prodej. Některé na obojí.",
    modes: [
      { id: "rent", title: "Pronájem", text: "Denní a týdenní cena a dostupnost." },
      { id: "buy", title: "Koupě", text: "Nové, použité a repasované stroje." },
      { id: "list-mode", title: "Nabídněte", text: "Nevyužitý stroj může vydělávat." },
    ],
    ownerEyebrow: "Máte vlastní techniku?",
    ownerTitle: "Nenechte své stroje zbytečně stát.",
    ownerLead:
      "Máte štěpkovač, který téměř nepoužíváte, minibagr, který mezi zakázkami stojí ladem, nebo nářadí, na které se jen práší? Dejte své technice práci – nabídněte ji na Stroyo k pronájmu nebo prodeji lidem ve vašem okolí.",
    ownerCta: "Nabídnout techniku",
    audiences: ["Soukromí majitelé", "Řemeslníci", "Půjčovny", "Prodejci"],
    notifyTitle: "Jedno místo pro techniku.",
    notifyLead:
      "Stroyo spojuje lidi, kteří techniku potřebují, s těmi, kteří ji mají. Pronájem, když ji potřebujete. Koupě, když si ji chcete nechat. Nabídka, když vám stojí ladem.",
    bandCta: "Napište nám",
    need: "Potřebuji stroj",
    have: "Mám stroj",
    emailLabel: "E-mail",
    emailPlaceholder: "eva@email.cz",
    submit: "Dejte mi vědět",
    submitting: "Odesílám…",
    hint: "Zdarma. Až spustíme Stroyo, dáme vám vědět. Žádný spam.",
    success: "Děkujeme. Ozveme se, až spustíme.",
    errorInvalid: "Zadejte platný e-mail.",
    errorFailBefore: "Teď to nešlo odeslat. Napište na",
    errorFailAfter: ".",
    band: [
      { id: "band-rent", title: "Pronajměte", text: "Stroj, když ho potřebujete.", ask: "Jakou techniku si chcete pronajmout?" },
      { id: "band-buy", title: "Kupte", text: "Kvalitní použitou a profesionální techniku.", ask: "Jakou techniku chcete koupit?" },
      { id: "band-list", title: "Nabídněte", text: "Nevyužitý stroj znovu do práce.", ask: "Buďte mezi prvními, kdo nabídnou techniku na Stroyo." },
    ],
    footerLine: "Pronajměte. Kupte. Nabídněte.",
  },
  en: {
    metaTitle: "Stroyo.cz — Machines in one place",
    metaDescription:
      "Rent and buy tools, garden equipment and construction machinery. Prague and Central Bohemia.",
    skip: "Skip to content",
    langLabel: "Language",
    navRent: "Rent",
    navBuy: "Buy",
    navCategories: "Categories",
    navList: "List equipment",
    eyebrow: "Coming soon · Prague & Central Bohemia",
    headline: "Machines for the job.",
    subhead: "Rent them. Buy them. List yours.",
    lead: "Find tools, garden equipment and construction machinery from owners, professionals and rental companies near you.",
    find: "Find equipment",
    listCta: "List your equipment",
    heroKicker: "Be first when Stroyo launches.",
    heroLine: "Get early access to equipment listings in Prague and Central Bohemia.",
    heroNeed: "I need equipment",
    heroHave: "I have equipment",
    heroSubmit: "Get early access",
    heroHint: "Free early access. One launch email. No spam.",
    points: ["Rental", "Used equipment", "Local availability", "Professional machines"],
    heroAlt: "Eliet chipper, mixer and tools on a worksite",
    searchLabel: "What do you need?",
    searchPlaceholder: "Search equipment…",
    searchLocation: "Prague",
    searchButton: "Search",
    searchTitle: "{query} is coming to Stroyo",
    searchBody: "We're building the first selection around Prague. Leave your email and we'll let you know when one becomes available.",
    searchSaved: "Your search for {query} will be saved.",
    searchSubmit: "Notify me",
    categoriesTitle: "Categories",
    explore: "Explore",
    categories: categoriesEn,
    demoLabel: "Demo listing",
    sampleName: "Eliet Maestro",
    sampleKind: "Petrol chipper",
    samplePlace: "Prague 6 · 3 km",
    dayPrice: "1,200 Kč",
    dayUnit: "/ day",
    weekPrice: "6,000 Kč",
    weekUnit: "/ week",
    buyPrice: "24,900 Kč",
    buyLabel: "to buy",
    delivery: "Delivery available",
    availability: "Check availability",
    lookingLabel: "What are you looking for?",
    lookingPlaceholder: "Chipper, mini excavator…",
    whenLabel: "When do you need it?",
    timings: [
      { id: "week", label: "This week" },
      { id: "month", label: "This month" },
      { id: "browse", label: "Just browsing" },
    ],
    categorySubmit: "Notify me when available",
    demoTitle: "Interested in an Eliet Maestro?",
    demoBody: "Stroyo isn't live yet. We're looking for the first chippers available around Prague.",
    demoRent: "I want to rent one",
    demoBuy: "I want to buy one",
    demoSubmit: "Tell me when available",
    ownerFormTitle: "Become one of Stroyo's first equipment owners.",
    ownerWhat: "What do you have?",
    ownerWhatPlaceholder: "Wood chipper, mini excavator, tools…",
    ownerWhere: "Location",
    ownerRent: "Rent it",
    ownerSell: "Sell it",
    ownerBoth: "Both",
    ownerSubmit: "Join Stroyo early",
    ownerHint: "Free to join. No obligation.",
    bottomNeed: "I need equipment",
    bottomHave: "I have equipment",
    bottomNeedWhat: "What equipment are you looking for?",
    bottomNeedWhere: "Where?",
    bottomHaveWhat: "What equipment do you have?",
    bottomHaveWhere: "Where?",
    bottomSubmit: "Get early access",
    conceptTitle: "Rent it today. Buy it if you want it.",
    conceptLead: "Some machines are available for rent. Some for sale. Some for both.",
    modes: [
      { id: "rent", title: "Rent", text: "Daily and weekly pricing with availability." },
      { id: "buy", title: "Buy", text: "New, used and refurbished equipment." },
      { id: "list-mode", title: "List", text: "Turn idle equipment into income." },
    ],
    ownerEyebrow: "Own equipment?",
    ownerTitle: "Your machine shouldn’t be sitting idle.",
    ownerLead:
      "Got a chipper you rarely use, a mini excavator sitting idle between jobs, or tools collecting dust? Put your equipment to work by listing it on Stroyo for people nearby to rent or buy.",
    ownerCta: "List equipment",
    audiences: ["Private owners", "Tradespeople", "Rental companies", "Dealers"],
    notifyTitle: "One place for the machine.",
    notifyLead:
      "Stroyo connects people who need equipment with people who have it. Rent it for the job. Buy it if you want to keep it. List it when it’s sitting idle.",
    bandCta: "Tell us",
    need: "I need equipment",
    have: "I have equipment",
    emailLabel: "Email address",
    emailPlaceholder: "eva@email.com",
    submit: "Notify me",
    submitting: "Sending…",
    hint: "Free early access. One launch email. No spam.",
    success: "Thank you. We’ll write when we launch.",
    errorInvalid: "Enter a valid email address.",
    errorFailBefore: "Couldn’t send that. Email",
    errorFailAfter: ".",
    band: [
      { id: "band-rent", title: "Rent", text: "Rent equipment when you need it.", ask: "What do you want to rent?" },
      { id: "band-buy", title: "Buy", text: "Find quality used and professional equipment.", ask: "What do you want to buy?" },
      { id: "band-list", title: "List", text: "Put your unused equipment to work.", ask: "Become one of Stroyo's first equipment owners." },
    ],
    footerLine: "Rent it. Buy it. List it.",
  },
};

export function pageMetadata(locale: Locale): Metadata {
  const t = copy[locale];
  const path = locale === "en" ? "/en" : "/";

  return {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: {
      canonical: path,
      languages: { cs: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: path,
      siteName: "Stroyo",
      locale: locale === "en" ? "en_US" : "cs_CZ",
      alternateLocale: locale === "en" ? ["cs_CZ"] : ["en_US"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}
