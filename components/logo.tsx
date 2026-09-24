import Link from "next/link";
import type { Locale } from "@/lib/content";

const taglines: Record<Locale, [string, string, string]> = {
  cs: ["PRONAJMĚTE.", "KUPTE.", "NABÍDNĚTE."],
  en: ["RENT IT.", "BUY IT.", "LIST IT."],
};

const labels: Record<Locale, string> = {
  cs: "Stroyo.cz — Pronajměte, kupte, nabídněte",
  en: "Stroyo.cz — Rent it, buy it, list it",
};

export function Logo({ href = "/", locale = "cs" }: { href?: string; locale?: Locale }) {
  const [first, second, third] = taglines[locale];

  return (
    <Link href={href} aria-label={labels[locale]} className="relative inline-flex shrink-0 pb-2 leading-none sm:pb-2.5">
      <span className="text-[1.65rem] font-black tracking-[-0.04em] text-ink sm:text-[2rem]" aria-hidden="true">
        Str<span className="text-orange">o</span>yo.cz
      </span>
      <span
        className="absolute inset-x-0 top-full -mt-1 flex items-center justify-between text-[6.5px] font-bold whitespace-nowrap text-ink uppercase sm:-mt-1.5 sm:text-[8px]"
        aria-hidden="true"
      >
        <span>{first}</span>
        <span className="text-orange">|</span>
        <span>{second}</span>
        <span className="text-orange">|</span>
        <span>{third}</span>
      </span>
    </Link>
  );
}
