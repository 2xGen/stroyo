import { notFound } from "next/navigation";
import { CategoryLanding } from "@/components/category-landing";
import { categoryBySlug, categoryMetadata, categoryPages } from "@/lib/category-pages";

export function generateStaticParams() {
  return categoryPages().map((page) => ({ slug: page.csSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = categoryBySlug("cs", slug);
  if (!page) return {};
  return categoryMetadata("cs", page);
}

export default async function CzechCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = categoryBySlug("cs", slug);
  if (!page) notFound();
  return <CategoryLanding locale="cs" page={page} />;
}
