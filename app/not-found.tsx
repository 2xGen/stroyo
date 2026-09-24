import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main>
      <header className="border-b border-line">
        <div className="mx-auto flex min-h-16 max-w-[1180px] items-center px-4 py-2">
          <Logo />
        </div>
        <div className="h-1 bg-orange" />
      </header>
      <div className="mx-auto max-w-[1180px] px-4 py-16">
        <p className="text-sm font-bold text-orange">404</p>
        <h1 className="mt-2 text-3xl font-bold">Tahle stránka tu není.</h1>
        <p className="mt-2 text-muted">This page isn’t here.</p>
        <div className="mt-6 flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-orange">
            Stroyo.cz
          </Link>
          <Link href="/en" className="hover:text-orange">
            English
          </Link>
        </div>
      </div>
    </main>
  );
}
