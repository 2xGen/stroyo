import { notFound } from "next/navigation";
import { CategoryLanding } from "@/components/category-landing";
import { categoryBySlug, categoryMetadata, categoryPages } from "@/lib/category-pages";

export function generateStaticParams() {
  return categoryPages().map((page) => ({ slug: page.enSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = categoryBySlug("en", slug);
  if (!page) return {};
  return categoryMetadata("en", page);
}

export default async function EnglishCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = categoryBySlug("en", slug);
  if (!page) notFound();
  return <CategoryLanding locale="en" page={page} />;
}
