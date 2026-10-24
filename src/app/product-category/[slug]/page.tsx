import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/brand";
import { ProductCard } from "@/components/products/ProductCard";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sub?: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function ProductCategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const { sub } = await searchParams;

  const currentCategory = PRODUCT_CATEGORIES.find((c) => c.slug === slug);

  if (!currentCategory) {
    notFound();
  }

  // Filter products by category and optional subcategory
  const categoryProducts = PRODUCTS.filter((p) => {
    if (p.category !== slug) return false;
    if (sub && p.subcategory !== sub) return false;
    return true;
  });

  return (
    <div className="w-full">
      {/* Category Hero Banner */}
      <PageHero
        eyebrow="Collection"
        title={currentCategory.title}
        subtitle={`Discover our curated ${currentCategory.title.toLowerCase()} handcrafted for timeless living spaces.`}
        imageSrc="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop"
        imageAlt={currentCategory.title}
      />

      {/* Main Content */}
      <section className="py-20 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          {/* Subcategory Filter Tabs */}
          <StaggerContainer as="div" className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-[#eeeeee] pb-6">
            <StaggerItem>
              <Link
                href={`/product-category/${slug}`}
                className={`text-xs uppercase tracking-wider px-4 py-2 border transition-all ${
                  !sub
                    ? "border-black bg-black text-white font-semibold"
                    : "border-[#eeeeee] text-[#5a5758] hover:border-black hover:text-black"
                }`}
              >
                All {currentCategory.title}
              </Link>
            </StaggerItem>

            {currentCategory.subcategories.map((sc) => {
              const isSelected = sub === sc.slug;
              return (
                <StaggerItem key={sc.slug}>
                  <Link
                    href={`/product-category/${slug}?sub=${sc.slug}`}
                    className={`text-xs uppercase tracking-wider px-4 py-2 border transition-all ${
                      isSelected
                        ? "border-black bg-black text-white font-semibold"
                        : "border-[#eeeeee] text-[#5a5758] hover:border-black hover:text-black"
                    }`}
                  >
                    {sc.title}
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Product Grid */}
          {categoryProducts.length > 0 ? (
            <StaggerContainer as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="py-20 text-center space-y-3">
              <p className="text-base text-[#1b1b1b] font-light">
                No items available in this subcategory at the moment.
              </p>
              <Link href="/products" className="btn-outline-dark text-xs">
                Back to All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
