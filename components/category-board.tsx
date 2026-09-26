import Image from "next/image";
import Link from "next/link";
import { photos, type Copy, type Locale } from "@/lib/content";
import { categoryPath } from "@/lib/category-pages";

export function CategoryBoard({ locale, copy }: { locale: Locale; copy: Copy }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {copy.categories.map((item) => (
        <li key={item.id} id={item.id} className="scroll-mt-24">
          <Link href={categoryPath(locale, item.id)} className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink text-left">
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
          </Link>
        </li>
      ))}
    </ul>
  );
}
