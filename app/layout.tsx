import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stroyo.cz"),
  applicationName: "Stroyo",
  title: {
    default: "Stroyo.cz — Stroje na jednom místě",
    template: "%s",
  },
  description:
    "České tržiště pro pronájem a prodej nářadí, zahradní techniky a stavebních strojů.",
};

export const viewport: Viewport = {
  themeColor: "#ff6500",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const lang = headerList.get("x-locale") === "en" ? "en" : "cs";

  return (
    <html lang={lang} className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
