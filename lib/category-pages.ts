import type { Metadata } from "next";
import { photos, siteUrl, type CategoryId, type Locale } from "@/lib/content";

export type CategorySlug = {
  id: CategoryId;
  csSlug: string;
  enSlug: string;
};

export const categorySlugs: CategorySlug[] = [
  { id: "garden", csSlug: "zahradni-technika", enSlug: "garden-equipment" },
  { id: "build", csSlug: "stavebni-technika", enSlug: "construction-equipment" },
  { id: "dig", csSlug: "vykopova-technika", enSlug: "excavation-equipment" },
  { id: "height", csSlug: "prace-ve-vyskach", enSlug: "access-equipment" },
  { id: "move", csSlug: "stehovani", enSlug: "moving-equipment" },
  { id: "tools", csSlug: "naradi", enSlug: "tools" },
];

type Subcategory = { name: string; text: string; image?: string };
type Sample = { name: string; place: string; delivery?: boolean };

export type CategoryCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  body: string;
  groupTitle: string;
  nearbyTitle: string;
  nearbyBody: string;
  demandTitle: string;
  demandLead: string;
  supplyTitle: string;
  supplyLead: string;
  supplyBody: string;
  audiences: string;
  partnerTitle: string;
  partnerLead: string;
  partnerAsk: string;
  searchPlaceholder: string;
  partnerPlaceholder: string;
  subs: Subcategory[];
  samples: Sample[];
};

export type CategoryPageData = CategorySlug & {
  image: string;
  cs: CategoryCopy;
  en: CategoryCopy;
};

const gardenImage = (file: string) =>
  `https://ieaogqcdasyhxlkuzkyq.supabase.co/storage/v1/object/public/website%20images/${file}`;

const gardenImages = {
  chipper: gardenImage("Wood%20chipper.jpg"),
  splitter: gardenImage("log%20splitter.jpg"),
  scarifier: gardenImage("scarifiers.jpg"),
  mower: gardenImage("lawn%20mower.jpg"),
  trimmer: gardenImage("hedge%20trimmer.jpg"),
  blower: gardenImage("leaf%20blowers.jpg"),
};

const toolImages = {
  power: gardenImage("05%20powertools.jpg"),
  cordless: gardenImage("05%20cordless%20tools.jpg"),
  drills: gardenImage("05%20drills%20and%20hammers.jpg"),
  saws: gardenImage("05%20saws.jpg"),
  grinders: gardenImage("05%20grinders.jpg"),
  specialist: gardenImage("05%20specialist%20equipment.jpg"),
};

const moveImages = {
  lifts: gardenImage("04%20moving%20lifts.jpg"),
  trailers: gardenImage("04%20trailers.jpg"),
  transport: gardenImage("04%20transport%20equipment.jpg"),
  trolleys: gardenImage("04%20trolleys.jpg"),
  cargo: gardenImage("04%20cargo%20trailers.jpg"),
  straps: gardenImage("04%20straps%20and%20protection.jpg"),
};

const heightImages = {
  scaffold: gardenImage("03%20scafolding.jpg"),
  lifts: gardenImage("03%20lifts.jpg"),
  hoists: gardenImage("03%20hoists.jpg"),
  ladders: gardenImage("03%20ladders.jpg"),
  platforms: gardenImage("03%20suspended%20platforms.jpg"),
};

const digImages = {
  mini: gardenImage("02%20mini%20bagr.jpg"),
  dumper: gardenImage("02%20mini%20dumper.jpg"),
  tracked: gardenImage("02%20tracked%20mini.jpg"),
  wheeled: gardenImage("02%20wheeled%20mini.jpg"),
  attachments: gardenImage("02%20attachements.jpg"),
  compaction: gardenImage("02%20compaction.jpg"),
};

const buildImages = {
  compactor: gardenImage("01%20compactor.jpg"),
  mixer: gardenImage("01%20mixer.jpg"),
  saw: gardenImage("01%20concrete%20saw.jpg"),
  hammer: gardenImage("01%20demolition%20hammer.jpg"),
  grinder: gardenImage("01%20grinders.jpg"),
  generator: gardenImage("01%20generator.jpg"),
};

const pages: CategoryPageData[] = [
  {
    ...categorySlugs[0],
    image: photos.garden,
    cs: {
      title: "Pronájem zahradní techniky Praha | Stroyo.cz",
      description:
        "Hledáte zahradní techniku k pronájmu v Praze a okolí? Stroyo propojuje půjčovny, firmy a soukromé majitele s lidmi, kteří techniku potřebují.",
      h1: "Pronájem zahradní techniky v Praze a okolí",
      lead: "Najděte zahradní techniku k pronájmu od půjčoven, firem, řemeslníků a soukromých majitelů.",
      body: "Stroyo připravuje jedno místo, kde snadno porovnáte zahradní techniku dostupnou ve vašem okolí. Od štěpkovačů a štípaček na dřevo až po vertikutátory a sekačky.",
      groupTitle: "Zahradní technika k pronájmu",
      nearbyTitle: "Zahradní technika ve vašem okolí",
      nearbyBody:
        "Stroyo právě připravujeme. Brzy zde najdete zahradní techniku od půjčoven, firem a soukromých majitelů v Praze a Středočeském kraji.",
      demandTitle: "Hledáte konkrétní stroj?",
      demandLead: "Řekněte nám, co hledáte. Jakmile se na Stroyo objeví odpovídající nabídky ve vašem okolí, dáme vám vědět.",
      supplyTitle: "Máte zahradní techniku, která stojí ladem?",
      supplyLead: "Stroyo propojuje majitele techniky s lidmi a firmami, kteří ji právě potřebují.",
      supplyBody:
        "Máte štěpkovač, štípačku na dřevo, vertikutátor nebo jinou zahradní techniku? Nabídněte ji k pronájmu lidem ve vašem okolí.",
      audiences: "Soukromí majitelé · Řemeslníci · Zahradnické firmy · Půjčovny",
      partnerTitle: "Pro půjčovny a profesionální majitele",
      partnerLead:
        "Stroyo vám pomůže dostat vaši techniku k lidem, kteří ji právě hledají. Připravujeme možnost zobrazit nabídku půjčoven vedle techniky od firem a soukromých majitelů.",
      partnerAsk: "Máte zájem nabídnout svou techniku na Stroyo?",
      searchPlaceholder: "Štěpkovač, vertikutátor, sekačka...",
      partnerPlaceholder: "Půjčovna, zahradnická firma…",
      subs: [
        { name: "Štěpkovače", text: "Na větve, keře a zahradní odpad.", image: gardenImages.chipper },
        { name: "Štípačky na dřevo", text: "Na palivové dřevo doma i na zakázku.", image: gardenImages.splitter },
        { name: "Vertikutátory", text: "Na provzdušnění a vyčesání trávníku.", image: gardenImages.scarifier },
        { name: "Sekačky", text: "Na pravidelnou údržbu menších i větších ploch.", image: gardenImages.mower },
        { name: "Plotostřihy", text: "Na živé ploty, keře a tvarování zeleně.", image: gardenImages.trimmer },
        { name: "Foukače listí", text: "Na podzimní úklid zahrady a chodníků.", image: gardenImages.blower },
      ],
      samples: [
        { name: "Štěpkovač", place: "Praha 6 · 3 km", delivery: true },
        { name: "Štípačka na dřevo", place: "Praha-východ · 9 km" },
        { name: "Vertikutátor", place: "Praha 5 · 6 km" },
      ],
    },
    en: {
      title: "Garden equipment rental Prague | Stroyo.cz",
      description:
        "Looking for garden equipment to rent in Prague and nearby? Stroyo connects rental companies, businesses and private owners with people who need equipment.",
      h1: "Garden equipment rental in Prague and nearby",
      lead: "Find garden equipment for rent from rental companies, businesses, tradespeople and private owners.",
      body: "Stroyo is preparing one place to compare garden equipment available near you. From chippers and log splitters to scarifiers and mowers.",
      groupTitle: "Garden equipment for rent",
      nearbyTitle: "Garden equipment near you",
      nearbyBody:
        "Stroyo is in preparation. Soon you will find garden equipment from rental companies, businesses and private owners in Prague and Central Bohemia.",
      demandTitle: "Looking for a specific machine?",
      demandLead: "Tell us what you need. When a matching listing appears near you, we will let you know.",
      supplyTitle: "Got garden equipment sitting idle?",
      supplyLead: "Stroyo connects equipment owners with the people and companies who need it now.",
      supplyBody: "Have a chipper, log splitter, scarifier or other garden machine? List it for rent to people nearby.",
      audiences: "Private owners · Tradespeople · Garden firms · Rental companies",
      partnerTitle: "For rental companies and professional owners",
      partnerLead:
        "Stroyo helps put your equipment in front of people who need it now. We are preparing a way to show rental-company listings next to equipment from businesses and private owners.",
      partnerAsk: "Want to list your equipment on Stroyo?",
      searchPlaceholder: "Chipper, scarifier, mower...",
      partnerPlaceholder: "Rental company, garden firm…",
      subs: [
        { name: "Chippers", text: "For branches, shrubs and garden waste.", image: gardenImages.chipper },
        { name: "Log splitters", text: "For firewood at home or on a job.", image: gardenImages.splitter },
        { name: "Scarifiers", text: "For opening up and cleaning a lawn.", image: gardenImages.scarifier },
        { name: "Mowers", text: "For regular cutting of smaller and larger areas.", image: gardenImages.mower },
        { name: "Hedge trimmers", text: "For hedges, shrubs and shaping.", image: gardenImages.trimmer },
        { name: "Leaf blowers", text: "For autumn clearance of gardens and paths.", image: gardenImages.blower },
      ],
      samples: [
        { name: "Wood chipper", place: "Prague 6 · 3 km", delivery: true },
        { name: "Log splitter", place: "Prague-east · 9 km" },
        { name: "Scarifier", place: "Prague 5 · 6 km" },
      ],
    },
  },
  {
    ...categorySlugs[1],
    image: photos.build,
    cs: {
      title: "Pronájem stavební techniky Praha | Stroyo.cz",
      description:
        "Hledáte stavební techniku k pronájmu v Praze a okolí? Stroyo propojuje půjčovny, firmy a soukromé majitele s lidmi, kteří techniku potřebují.",
      h1: "Pronájem stavební techniky v Praze a okolí",
      lead: "Najděte stavební techniku k pronájmu od půjčoven, firem, řemeslníků a soukromých majitelů.",
      body: "Stroyo připravuje jedno místo, kde snadno porovnáte stavební techniku dostupnou ve vašem okolí. Od vibračních desek a míchaček až po pily na beton a bourací kladiva.",
      groupTitle: "Stavební technika k pronájmu",
      nearbyTitle: "Stavební technika ve vašem okolí",
      nearbyBody:
        "Stroyo právě připravujeme. Brzy zde najdete stavební techniku od půjčoven, firem a soukromých majitelů v Praze a Středočeském kraji.",
      demandTitle: "Hledáte konkrétní stroj?",
      demandLead: "Řekněte nám, co hledáte. Jakmile se na Stroyo objeví odpovídající nabídky ve vašem okolí, dáme vám vědět.",
      supplyTitle: "Máte stavební techniku, která stojí ladem?",
      supplyLead: "Stroyo propojuje majitele techniky s lidmi a firmami, kteří ji právě potřebují.",
      supplyBody:
        "Máte vibrační desku, míchačku, bourací kladivo nebo jinou stavební techniku? Nabídněte ji k pronájmu lidem ve vašem okolí.",
      audiences: "Soukromí majitelé · Řemeslníci · Stavební firmy · Půjčovny",
      partnerTitle: "Pro půjčovny a profesionální majitele",
      partnerLead:
        "Stroyo vám pomůže dostat vaši techniku k lidem, kteří ji právě hledají. Připravujeme možnost zobrazit nabídku půjčoven vedle techniky od firem a soukromých majitelů.",
      partnerAsk: "Máte zájem nabídnout svou techniku na Stroyo?",
      searchPlaceholder: "Vibrační deska, míchačka, pila...",
      partnerPlaceholder: "Půjčovna, stavební firma…",
      subs: [
        { name: "Vibrační desky", text: "Pro hutnění zeminy, štěrku a dlažby.", image: buildImages.compactor },
        { name: "Míchačky", text: "Míchačky na beton a maltu pro menší i větší projekty.", image: buildImages.mixer },
        { name: "Pily na beton", text: "Profesionální technika pro řezání betonu, asfaltu a zdiva.", image: buildImages.saw },
        { name: "Bourací kladiva", text: "Elektrická a profesionální bourací kladiva.", image: buildImages.hammer },
        { name: "Brusky", text: "Brusky na beton, podlahy a další stavební povrchy.", image: buildImages.grinder },
        { name: "Elektrocentrály", text: "Přenosné zdroje energie pro stavbu a práci v terénu.", image: buildImages.generator },
      ],
      samples: [
        { name: "Vibrační deska 90 kg", place: "Praha 6 · 4 km", delivery: true },
        { name: "Míchačka na beton", place: "Praha-západ · 12 km" },
        { name: "Bourací kladivo", place: "Praha 4 · 7 km" },
      ],
    },
    en: {
      title: "Construction equipment rental Prague | Stroyo.cz",
      description:
        "Looking for construction equipment to rent in Prague and nearby? Stroyo connects rental companies, businesses and private owners with people who need equipment.",
      h1: "Construction equipment rental in Prague and nearby",
      lead: "Find construction equipment for rent from rental companies, businesses, tradespeople and private owners.",
      body: "Stroyo is preparing one place to compare construction equipment available near you. From compactors and mixers to concrete saws and demolition hammers.",
      groupTitle: "Construction equipment for rent",
      nearbyTitle: "Construction equipment near you",
      nearbyBody:
        "Stroyo is in preparation. Soon you will find construction equipment from rental companies, businesses and private owners in Prague and Central Bohemia.",
      demandTitle: "Looking for a specific machine?",
      demandLead: "Tell us what you need. When a matching listing appears near you, we will let you know.",
      supplyTitle: "Got construction equipment sitting idle?",
      supplyLead: "Stroyo connects equipment owners with the people and companies who need it now.",
      supplyBody: "Have a compactor, mixer, demolition hammer or other construction machine? List it for rent to people nearby.",
      audiences: "Private owners · Tradespeople · Construction firms · Rental companies",
      partnerTitle: "For rental companies and professional owners",
      partnerLead:
        "Stroyo helps put your equipment in front of people who need it now. We are preparing a way to show rental-company listings next to equipment from businesses and private owners.",
      partnerAsk: "Want to list your equipment on Stroyo?",
      searchPlaceholder: "Compactor, mixer, saw...",
      partnerPlaceholder: "Rental company, construction firm…",
      subs: [
        { name: "Compactors", text: "For compacting soil, gravel and paving.", image: buildImages.compactor },
        { name: "Mixers", text: "Concrete and mortar mixers for smaller and larger jobs.", image: buildImages.mixer },
        { name: "Concrete saws", text: "Professional saws for concrete, asphalt and masonry.", image: buildImages.saw },
        { name: "Demolition hammers", text: "Electric and professional breaker hammers.", image: buildImages.hammer },
        { name: "Grinders", text: "Grinders for concrete, floors and other site surfaces.", image: buildImages.grinder },
        { name: "Generators", text: "Portable power for sites and work away from the mains.", image: buildImages.generator },
      ],
      samples: [
        { name: "90 kg compactor", place: "Prague 6 · 4 km", delivery: true },
        { name: "Concrete mixer", place: "Prague-west · 12 km" },
        { name: "Demolition hammer", place: "Prague 4 · 7 km" },
      ],
    },
  },
  {
    ...categorySlugs[2],
    image: photos.dig,
    cs: {
      title: "Pronájem výkopové techniky Praha | Stroyo.cz",
      description:
        "Hledáte výkopovou techniku k pronájmu v Praze a okolí? Stroyo propojuje půjčovny, firmy a soukromé majitele s lidmi, kteří techniku potřebují.",
      h1: "Pronájem výkopové techniky v Praze a okolí",
      lead: "Najděte minibagry, minidumpery a další výkopovou techniku od půjčoven, firem a soukromých majitelů.",
      body: "Stroyo připravuje jedno místo, kde snadno porovnáte výkopovou techniku dostupnou ve vašem okolí. Od minibagrů a minidumperů až po příslušenství na výkop.",
      groupTitle: "Výkopová technika k pronájmu",
      nearbyTitle: "Výkopová technika ve vašem okolí",
      nearbyBody:
        "Stroyo právě připravujeme. Brzy zde najdete výkopovou techniku od půjčoven, firem a soukromých majitelů v Praze a Středočeském kraji.",
      demandTitle: "Hledáte konkrétní stroj?",
      demandLead: "Řekněte nám, co hledáte. Jakmile se na Stroyo objeví odpovídající nabídky ve vašem okolí, dáme vám vědět.",
      supplyTitle: "Máte výkopovou techniku, která stojí ladem?",
      supplyLead: "Stroyo propojuje majitele techniky s lidmi a firmami, kteří ji právě potřebují.",
      supplyBody: "Máte minibagr, minidumper nebo jinou výkopovou techniku? Nabídněte ji k pronájmu lidem ve vašem okolí.",
      audiences: "Soukromí majitelé · Řemeslníci · Stavební firmy · Půjčovny",
      partnerTitle: "Pro půjčovny a profesionální majitele",
      partnerLead:
        "Stroyo vám pomůže dostat vaši techniku k lidem, kteří ji právě hledají. Připravujeme možnost zobrazit nabídku půjčoven vedle techniky od firem a soukromých majitelů.",
      partnerAsk: "Máte zájem nabídnout svou techniku na Stroyo?",
      searchPlaceholder: "Minibagr, minidumper...",
      partnerPlaceholder: "Půjčovna, stavební firma…",
      subs: [
        { name: "Minibagry", text: "Na výkopy, základy, přípojky a terénní úpravy.", image: digImages.mini },
        { name: "Minidumpery", text: "Na odvoz zeminy a suti i v úzkém prostoru.", image: digImages.dumper },
        { name: "Pásové minibagry", text: "Na měkký, mokrý a nerovný terén.", image: digImages.tracked },
        { name: "Kolové minibagry", text: "Na zpevněné plochy a přesun po stavbě.", image: digImages.wheeled },
        { name: "Příslušenství", text: "Lžíce, bourací kladiva a vrtáky k bagru.", image: digImages.attachments },
        { name: "Hutnění po výkopu", text: "Technika na zásyp a zhutnění rýhy.", image: digImages.compaction },
      ],
      samples: [
        { name: "Minibagr", place: "Praha 6 · 5 km", delivery: true },
        { name: "Minidumper", place: "Praha 9 · 8 km" },
        { name: "Pásový minibagr", place: "Praha-západ · 11 km" },
      ],
    },
    en: {
      title: "Excavation equipment rental Prague | Stroyo.cz",
      description:
        "Looking for excavation equipment to rent in Prague and nearby? Stroyo connects rental companies, businesses and private owners with people who need equipment.",
      h1: "Excavation equipment rental in Prague and nearby",
      lead: "Find mini excavators, dumpers and other digging equipment from rental companies, businesses and private owners.",
      body: "Stroyo is preparing one place to compare excavation equipment available near you. From mini excavators and dumpers to buckets and breakers.",
      groupTitle: "Excavation equipment for rent",
      nearbyTitle: "Excavation equipment near you",
      nearbyBody:
        "Stroyo is in preparation. Soon you will find excavation equipment from rental companies, businesses and private owners in Prague and Central Bohemia.",
      demandTitle: "Looking for a specific machine?",
      demandLead: "Tell us what you need. When a matching listing appears near you, we will let you know.",
      supplyTitle: "Got excavation equipment sitting idle?",
      supplyLead: "Stroyo connects equipment owners with the people and companies who need it now.",
      supplyBody: "Have a mini excavator, dumper or other digging machine? List it for rent to people nearby.",
      audiences: "Private owners · Tradespeople · Construction firms · Rental companies",
      partnerTitle: "For rental companies and professional owners",
      partnerLead:
        "Stroyo helps put your equipment in front of people who need it now. We are preparing a way to show rental-company listings next to equipment from businesses and private owners.",
      partnerAsk: "Want to list your equipment on Stroyo?",
      searchPlaceholder: "Mini excavator, dumper...",
      partnerPlaceholder: "Rental company, construction firm…",
      subs: [
        { name: "Mini excavators", text: "For trenches, foundations, connections and groundworks.", image: digImages.mini },
        { name: "Dumpers", text: "For moving soil and rubble, including tight access.", image: digImages.dumper },
        { name: "Tracked minis", text: "For soft, wet and uneven ground.", image: digImages.tracked },
        { name: "Wheeled minis", text: "For hard surfaces and moving around a site.", image: digImages.wheeled },
        { name: "Attachments", text: "Buckets, breakers and augers for an excavator.", image: digImages.attachments },
        { name: "Compaction", text: "Equipment for backfill and trench compaction.", image: digImages.compaction },
      ],
      samples: [
        { name: "Mini excavator", place: "Prague 6 · 5 km", delivery: true },
        { name: "Dumper", place: "Prague 9 · 8 km" },
        { name: "Tracked mini excavator", place: "Prague-west · 11 km" },
      ],
    },
  },
  {
    ...categorySlugs[3],
    image: photos.height,
    cs: {
      title: "Pronájem techniky pro práci ve výškách Praha | Stroyo.cz",
      description:
        "Hledáte lešení, plošinu nebo výtah k pronájmu v Praze a okolí? Stroyo propojuje půjčovny, firmy a soukromé majitele s lidmi, kteří techniku potřebují.",
      h1: "Pronájem techniky pro práci ve výškách v Praze a okolí",
      lead: "Najděte lešení, pracovní plošiny a stavební výtahy od půjčoven, firem a soukromých majitelů.",
      body: "Stroyo připravuje jedno místo, kde snadno porovnáte techniku pro práci ve výškách dostupnou ve vašem okolí. Od lešení a plošin až po stavební výtahy.",
      groupTitle: "Technika pro práci ve výškách k pronájmu",
      nearbyTitle: "Technika pro práci ve výškách ve vašem okolí",
      nearbyBody:
        "Stroyo právě připravujeme. Brzy zde najdete lešení, plošiny a výtahy od půjčoven, firem a soukromých majitelů v Praze a Středočeském kraji.",
      demandTitle: "Hledáte konkrétní stroj?",
      demandLead: "Řekněte nám, co hledáte. Jakmile se na Stroyo objeví odpovídající nabídky ve vašem okolí, dáme vám vědět.",
      supplyTitle: "Máte techniku pro práci ve výškách, která stojí ladem?",
      supplyLead: "Stroyo propojuje majitele techniky s lidmi a firmami, kteří ji právě potřebují.",
      supplyBody: "Máte lešení, pracovní plošinu nebo stavební výtah? Nabídněte je k pronájmu lidem ve vašem okolí.",
      audiences: "Soukromí majitelé · Řemeslníci · Stavební firmy · Půjčovny",
      partnerTitle: "Pro půjčovny a profesionální majitele",
      partnerLead:
        "Stroyo vám pomůže dostat vaši techniku k lidem, kteří ji právě hledají. Připravujeme možnost zobrazit nabídku půjčoven vedle techniky od firem a soukromých majitelů.",
      partnerAsk: "Máte zájem nabídnout svou techniku na Stroyo?",
      searchPlaceholder: "Lešení, plošina, výtah...",
      partnerPlaceholder: "Půjčovna, stavební firma…",
      subs: [
        { name: "Lešení", text: "Fasádní, rámové a pojízdné lešení.", image: heightImages.scaffold },
        { name: "Pracovní plošiny", text: "Nůžkové a kloubové plošiny na práci ve výšce.", image: heightImages.lifts },
        { name: "Stavební výtahy", text: "Na dopravu materiálu do patra.", image: heightImages.hoists },
        { name: "Žebříky", text: "Profesionální žebříky a schůdky.", image: heightImages.ladders },
        { name: "Pojízdné věže", text: "Lešení na kolech pro práce uvnitř i venku.", image: heightImages.scaffold },
        { name: "Závěsné lávky", text: "Na práci na fasádě tam, kde lešení nestačí.", image: heightImages.platforms },
      ],
      samples: [
        { name: "Pojízdné lešení", place: "Praha 6 · 4 km", delivery: true },
        { name: "Nůžková plošina", place: "Praha 8 · 7 km" },
        { name: "Stavební výtah", place: "Praha 4 · 9 km" },
      ],
    },
    en: {
      title: "Access equipment rental Prague | Stroyo.cz",
      description:
        "Looking for scaffolding, a lift or a hoist to rent in Prague and nearby? Stroyo connects rental companies, businesses and private owners with people who need equipment.",
      h1: "Access equipment rental in Prague and nearby",
      lead: "Find scaffolding, lifts and hoists from rental companies, businesses and private owners.",
      body: "Stroyo is preparing one place to compare access equipment available near you. From scaffolding and lifts to construction hoists.",
      groupTitle: "Access equipment for rent",
      nearbyTitle: "Access equipment near you",
      nearbyBody:
        "Stroyo is in preparation. Soon you will find scaffolding, lifts and hoists from rental companies, businesses and private owners in Prague and Central Bohemia.",
      demandTitle: "Looking for a specific machine?",
      demandLead: "Tell us what you need. When a matching listing appears near you, we will let you know.",
      supplyTitle: "Got access equipment sitting idle?",
      supplyLead: "Stroyo connects equipment owners with the people and companies who need it now.",
      supplyBody: "Have scaffolding, a lift or a construction hoist? List it for rent to people nearby.",
      audiences: "Private owners · Tradespeople · Construction firms · Rental companies",
      partnerTitle: "For rental companies and professional owners",
      partnerLead:
        "Stroyo helps put your equipment in front of people who need it now. We are preparing a way to show rental-company listings next to equipment from businesses and private owners.",
      partnerAsk: "Want to list your equipment on Stroyo?",
      searchPlaceholder: "Scaffolding, lift, hoist...",
      partnerPlaceholder: "Rental company, construction firm…",
      subs: [
        { name: "Scaffolding", text: "Facade, frame and mobile scaffold towers.", image: heightImages.scaffold },
        { name: "Lifts", text: "Scissor and boom lifts for work at height.", image: heightImages.lifts },
        { name: "Hoists", text: "For moving materials up to the floor.", image: heightImages.hoists },
        { name: "Ladders", text: "Professional ladders and steps.", image: heightImages.ladders },
        { name: "Mobile towers", text: "Wheeled scaffold for indoor and outdoor work.", image: heightImages.scaffold },
        { name: "Suspended platforms", text: "For facade work where a scaffold is not enough.", image: heightImages.platforms },
      ],
      samples: [
        { name: "Mobile scaffold", place: "Prague 6 · 4 km", delivery: true },
        { name: "Scissor lift", place: "Prague 8 · 7 km" },
        { name: "Construction hoist", place: "Prague 4 · 9 km" },
      ],
    },
  },
  {
    ...categorySlugs[4],
    image: photos.move,
    cs: {
      title: "Pronájem stěhovací techniky Praha | Stroyo.cz",
      description:
        "Hledáte stěhovací techniku k pronájmu v Praze a okolí? Stroyo propojuje půjčovny, firmy a soukromé majitele s lidmi, kteří techniku potřebují.",
      h1: "Pronájem stěhovací techniky v Praze a okolí",
      lead: "Najděte stěhovací výtahy, přívěsy a přepravní techniku od půjčoven, firem a soukromých majitelů.",
      body: "Stroyo připravuje jedno místo, kde snadno porovnáte stěhovací techniku dostupnou ve vašem okolí. Od stěhovacích výtahů a přívěsů až po rudly a přepravníky.",
      groupTitle: "Stěhovací technika k pronájmu",
      nearbyTitle: "Stěhovací technika ve vašem okolí",
      nearbyBody:
        "Stroyo právě připravujeme. Brzy zde najdete stěhovací techniku od půjčoven, firem a soukromých majitelů v Praze a Středočeském kraji.",
      demandTitle: "Hledáte konkrétní stroj?",
      demandLead: "Řekněte nám, co hledáte. Jakmile se na Stroyo objeví odpovídající nabídky ve vašem okolí, dáme vám vědět.",
      supplyTitle: "Máte stěhovací techniku, která stojí ladem?",
      supplyLead: "Stroyo propojuje majitele techniky s lidmi a firmami, kteří ji právě potřebují.",
      supplyBody: "Máte stěhovací výtah, přívěs nebo jinou přepravní techniku? Nabídněte ji k pronájmu lidem ve vašem okolí.",
      audiences: "Soukromí majitelé · Řemeslníci · Stěhovací firmy · Půjčovny",
      partnerTitle: "Pro půjčovny a profesionální majitele",
      partnerLead:
        "Stroyo vám pomůže dostat vaši techniku k lidem, kteří ji právě hledají. Připravujeme možnost zobrazit nabídku půjčoven vedle techniky od firem a soukromých majitelů.",
      partnerAsk: "Máte zájem nabídnout svou techniku na Stroyo?",
      searchPlaceholder: "Stěhovací výtah, přívěs...",
      partnerPlaceholder: "Půjčovna, stěhovací firma…",
      subs: [
        { name: "Stěhovací výtahy", text: "Na nábytek a krabice do vyšších pater.", image: moveImages.lifts },
        { name: "Přívěsy", text: "Valníky a skříňové přívěsy na převoz věcí.", image: moveImages.trailers },
        { name: "Přepravní technika", text: "Na stěhování těžších kusů a materiálu.", image: moveImages.transport },
        { name: "Rudly a vozíky", text: "Na krabice, spotřebiče a kratší přesuny.", image: moveImages.trolleys },
        { name: "Nákladní přívěsy", text: "Na větší náklad, kdy osobní auto nestačí.", image: moveImages.cargo },
        { name: "Popruhy a ochrana", text: "Kurty, deky a ochrana nábytku při převozu.", image: moveImages.straps },
      ],
      samples: [
        { name: "Stěhovací výtah", place: "Praha 6 · 4 km", delivery: true },
        { name: "Valníkový přívěs", place: "Praha 5 · 6 km" },
        { name: "Rudl", place: "Praha 10 · 8 km" },
      ],
    },
    en: {
      title: "Moving equipment rental Prague | Stroyo.cz",
      description:
        "Looking for moving equipment to rent in Prague and nearby? Stroyo connects rental companies, businesses and private owners with people who need equipment.",
      h1: "Moving equipment rental in Prague and nearby",
      lead: "Find moving lifts, trailers and transport equipment from rental companies, businesses and private owners.",
      body: "Stroyo is preparing one place to compare moving equipment available near you. From furniture lifts and trailers to trolleys and transporters.",
      groupTitle: "Moving equipment for rent",
      nearbyTitle: "Moving equipment near you",
      nearbyBody:
        "Stroyo is in preparation. Soon you will find moving equipment from rental companies, businesses and private owners in Prague and Central Bohemia.",
      demandTitle: "Looking for a specific machine?",
      demandLead: "Tell us what you need. When a matching listing appears near you, we will let you know.",
      supplyTitle: "Got moving equipment sitting idle?",
      supplyLead: "Stroyo connects equipment owners with the people and companies who need it now.",
      supplyBody: "Have a moving lift, trailer or other transport equipment? List it for rent to people nearby.",
      audiences: "Private owners · Tradespeople · Moving companies · Rental companies",
      partnerTitle: "For rental companies and professional owners",
      partnerLead:
        "Stroyo helps put your equipment in front of people who need it now. We are preparing a way to show rental-company listings next to equipment from businesses and private owners.",
      partnerAsk: "Want to list your equipment on Stroyo?",
      searchPlaceholder: "Moving lift, trailer...",
      partnerPlaceholder: "Rental company, moving firm…",
      subs: [
        { name: "Moving lifts", text: "For furniture and boxes to upper floors.", image: moveImages.lifts },
        { name: "Trailers", text: "Flatbed and box trailers for a move.", image: moveImages.trailers },
        { name: "Transport equipment", text: "For heavier pieces and materials.", image: moveImages.transport },
        { name: "Trolleys", text: "For boxes, appliances and short carries.", image: moveImages.trolleys },
        { name: "Cargo trailers", text: "For a larger load than a car can take.", image: moveImages.cargo },
        { name: "Straps and protection", text: "Ratchet straps, blankets and furniture protection.", image: moveImages.straps },
      ],
      samples: [
        { name: "Moving lift", place: "Prague 6 · 4 km", delivery: true },
        { name: "Flatbed trailer", place: "Prague 5 · 6 km" },
        { name: "Sack truck", place: "Prague 10 · 8 km" },
      ],
    },
  },
  {
    ...categorySlugs[5],
    image: photos.tools,
    cs: {
      title: "Pronájem nářadí Praha | Stroyo.cz",
      description:
        "Hledáte nářadí k pronájmu v Praze a okolí? Stroyo propojuje půjčovny, firmy a soukromé majitele s lidmi, kteří techniku potřebují.",
      h1: "Pronájem nářadí v Praze a okolí",
      lead: "Najděte elektrické a specializované nářadí od půjčoven, firem, řemeslníků a soukromých majitelů.",
      body: "Stroyo připravuje jedno místo, kde snadno porovnáte nářadí dostupné ve vašem okolí. Od vrtaček a pil až po brusky a bourací kladiva.",
      groupTitle: "Nářadí k pronájmu",
      nearbyTitle: "Nářadí ve vašem okolí",
      nearbyBody:
        "Stroyo právě připravujeme. Brzy zde najdete nářadí od půjčoven, firem a soukromých majitelů v Praze a Středočeském kraji.",
      demandTitle: "Hledáte konkrétní nářadí?",
      demandLead: "Řekněte nám, co hledáte. Jakmile se na Stroyo objeví odpovídající nabídky ve vašem okolí, dáme vám vědět.",
      supplyTitle: "Máte nářadí, na které se jen práší?",
      supplyLead: "Stroyo propojuje majitele techniky s lidmi a firmami, kteří ji právě potřebují.",
      supplyBody: "Máte vrtačku, pilu, brusku nebo jiné nářadí? Nabídněte je k pronájmu lidem ve vašem okolí.",
      audiences: "Soukromí majitelé · Řemeslníci · Stavební firmy · Půjčovny",
      partnerTitle: "Pro půjčovny a profesionální majitele",
      partnerLead:
        "Stroyo vám pomůže dostat vaše nářadí k lidem, kteří ho právě hledají. Připravujeme možnost zobrazit nabídku půjčoven vedle techniky od firem a soukromých majitelů.",
      partnerAsk: "Máte zájem nabídnout své nářadí na Stroyo?",
      searchPlaceholder: "Vrtačka, pila, bruska...",
      partnerPlaceholder: "Půjčovna, řemeslná firma…",
      subs: [
        { name: "Elektrické nářadí", text: "Nářadí do zásuvky na stavbu i do dílny.", image: toolImages.power },
        { name: "Aku nářadí", text: "Na práci tam, kde není přívod elektřiny.", image: toolImages.cordless },
        { name: "Vrtačky a kladiva", text: "Vrtání, sekání a kotvení do zdiva a betonu.", image: toolImages.drills },
        { name: "Pily", text: "Okružní, přímočaré a pokosové pily.", image: toolImages.saws },
        { name: "Brusky", text: "Úhlové brusky a nářadí na povrchy.", image: toolImages.grinders },
        { name: "Specializované vybavení", text: "Nářadí na konkrétní řemeslnou práci.", image: toolImages.specialist },
      ],
      samples: [
        { name: "Bourací kladivo", place: "Praha 6 · 3 km", delivery: true },
        { name: "Pokosová pila", place: "Praha 5 · 5 km" },
        { name: "Úhlová bruska", place: "Praha 4 · 7 km" },
      ],
    },
    en: {
      title: "Tool rental Prague | Stroyo.cz",
      description:
        "Looking for tools to rent in Prague and nearby? Stroyo connects rental companies, businesses and private owners with people who need equipment.",
      h1: "Tool rental in Prague and nearby",
      lead: "Find power tools and specialist equipment from rental companies, businesses, tradespeople and private owners.",
      body: "Stroyo is preparing one place to compare tools available near you. From drills and saws to grinders and breaker hammers.",
      groupTitle: "Tools for rent",
      nearbyTitle: "Tools near you",
      nearbyBody:
        "Stroyo is in preparation. Soon you will find tools from rental companies, businesses and private owners in Prague and Central Bohemia.",
      demandTitle: "Looking for a specific tool?",
      demandLead: "Tell us what you need. When a matching listing appears near you, we will let you know.",
      supplyTitle: "Got tools collecting dust?",
      supplyLead: "Stroyo connects equipment owners with the people and companies who need it now.",
      supplyBody: "Have a drill, saw, grinder or other tools? List them for rent to people nearby.",
      audiences: "Private owners · Tradespeople · Construction firms · Rental companies",
      partnerTitle: "For rental companies and professional owners",
      partnerLead:
        "Stroyo helps put your tools in front of people who need them now. We are preparing a way to show rental-company listings next to equipment from businesses and private owners.",
      partnerAsk: "Want to list your tools on Stroyo?",
      searchPlaceholder: "Drill, saw, grinder...",
      partnerPlaceholder: "Rental company, trade firm…",
      subs: [
        { name: "Power tools", text: "Corded tools for the site and the workshop.", image: toolImages.power },
        { name: "Cordless tools", text: "For work away from a power socket.", image: toolImages.cordless },
        { name: "Drills and hammers", text: "Drilling, breaking and fixing into masonry and concrete.", image: toolImages.drills },
        { name: "Saws", text: "Circular, jigsaw and mitre saws.", image: toolImages.saws },
        { name: "Grinders", text: "Angle grinders and surface tools.", image: toolImages.grinders },
        { name: "Specialist equipment", text: "Tools for a specific trade.", image: toolImages.specialist },
      ],
      samples: [
        { name: "Breaker hammer", place: "Prague 6 · 3 km", delivery: true },
        { name: "Mitre saw", place: "Prague 5 · 5 km" },
        { name: "Angle grinder", place: "Prague 4 · 7 km" },
      ],
    },
  },
];

export const categoryUi = {
  cs: {
    where: "Kde?",
    whereValue: "Praha",
    find: "Najít techniku",
    launch: "Stroyo spouštíme nejprve v Praze a Středočeském kraji.",
    view: "Zobrazit",
    demo: "Ukázková nabídka",
    delivery: "Doprava možná",
    what: "Co hledáte?",
    place: "Lokalita",
    when: "Kdy techniku potřebujete?",
    notify: "Upozornit mě na nabídky",
    free: "Zdarma a nezávazně.",
    supplyCta: "Nabídnout techniku",
    partnerCta: "Chci vědět více",
    partnerWhat: "Co provozujete?",
    howTitle: "Jak bude Stroyo fungovat?",
    steps: [
      { title: "Najděte techniku", text: "Vyberte stroj a lokalitu." },
      { title: "Porovnejte nabídky", text: "Podívejte se na cenu, vzdálenost a dostupnost." },
      { title: "Pronajměte si ji", text: "Vyberte nabídku, která vám vyhovuje." },
    ],
    closing: "Stroyo připravujeme. Přihlaste se k přednostnímu přístupu a dáme vám vědět, až budou první nabídky dostupné.",
  },
  en: {
    where: "Where?",
    whereValue: "Prague",
    find: "Find equipment",
    launch: "Stroyo launches first in Prague and Central Bohemia.",
    view: "View",
    demo: "Sample listing",
    delivery: "Delivery available",
    what: "What do you need?",
    place: "Location",
    when: "When do you need it?",
    notify: "Notify me about listings",
    free: "Free and with no obligation.",
    supplyCta: "List equipment",
    partnerCta: "Tell me more",
    partnerWhat: "What do you run?",
    howTitle: "How Stroyo will work",
    steps: [
      { title: "Find equipment", text: "Choose a machine and a place." },
      { title: "Compare listings", text: "Look at price, distance and availability." },
      { title: "Rent it", text: "Pick the offer that fits the job." },
    ],
    closing: "Stroyo is in preparation. Join for early access and we will tell you when the first listings are available.",
  },
} as const;

export function categoryPath(locale: Locale, id: CategoryId) {
  const page = pages.find((item) => item.id === id);
  if (!page) return locale === "en" ? "/en" : "/";
  return locale === "en" ? `/en/rent/${page.enSlug}` : `/pronajem/${page.csSlug}`;
}

export function categoryBySlug(locale: Locale, slug: string) {
  return pages.find((item) => (locale === "en" ? item.enSlug : item.csSlug) === slug);
}

export function categoryPages() {
  return pages;
}

export function categoryMetadata(locale: Locale, page: CategoryPageData): Metadata {
  const copy = page[locale];
  const csPath = `/pronajem/${page.csSlug}`;
  const enPath = `/en/rent/${page.enSlug}`;
  const path = locale === "en" ? enPath : csPath;

  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical: path,
      languages: { cs: csPath, en: enPath, "x-default": csPath },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${siteUrl}${path}`,
      locale: locale === "en" ? "en_GB" : "cs_CZ",
    },
  };
}
