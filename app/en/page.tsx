import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { pageMetadata } from "@/lib/content";

export const metadata: Metadata = pageMetadata("en");

export default function EnglishPage() {
  return <Landing locale="en" />;
}
