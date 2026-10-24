"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/brand";
import { ProductCard } from "@/components/products/ProductCard";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { Search, RotateCcw } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

const ITEMS_PER_PAGE = 9;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on category, subcategory, search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (selectedCategory && item.category !== selectedCategory) return false;
      if (selectedSubcategory && item.subcategory !== selectedSubcategory) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCat = item.categoryLabel.toLowerCase().includes(query);
        const matchesSub = item.subcategoryLabel.toLowerCase().includes(query);
        const matchesMat = item.materials.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesSub && !matchesMat) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategorySelect = (catSlug: string | null, subSlug: string | null = null) => {
    setSelectedCategory(catSlug);
    setSelectedSubcategory(subSlug);
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop"
          alt="GALERYA Products"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pt-16">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Products
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-light mt-2 max-w-md mx-auto">
              Architectural indoor, outdoor, and decorative furniture handcrafted in Indonesia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-20 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Filter Sidebar (3 cols) */}
            <aside className="lg:col-span-3 space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full border-b border-[#dddddd] py-2 pl-2 pr-8 text-xs focus:border-[#f05c1a] focus:outline-hidden"
                />
                <Search className="w-4 h-4 text-[#5a5758] absolute right-2 top-2.5" />
              </div>

              {/* Reset filter button */}
              {(selectedCategory || selectedSubcategory || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="text-xs text-[#f05c1a] flex items-center gap-1.5 hover:underline font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}

              {/* Product Categories Tree */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#eeeeee] pb-2">
                  <h3 className="text-sm font-semibold text-[#1b1b1b] uppercase tracking-wider">
                    Product Categories
                  </h3>
                  <button
                    onClick={() => handleCategorySelect(null, null)}
                    className={`text-[11px] hover:text-[#f05c1a] ${
                      !selectedCategory ? "text-[#f05c1a] font-bold" : "text-[#5a5758]"
                    }`}
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-6">
                  {PRODUCT_CATEGORIES.map((cat) => {
                    const isCatSelected = selectedCategory === cat.slug;

                    return (
                      <div key={cat.slug} className="space-y-2">
                        <button
                          onClick={() => handleCategorySelect(cat.slug, null)}
                          className={`text-xs uppercase tracking-wider font-semibold block text-left transition-colors ${
                            isCatSelected && !selectedSubcategory
                              ? "text-[#f05c1a]"
                              : "text-[#1b1b1b] hover:text-[#f05c1a]"
                          }`}
                        >
                          {cat.title}
                        </button>

                        <ul className="pl-3 space-y-1.5 border-l border-[#eeeeee]">
                          {cat.subcategories.map((sub) => {
                            const isSubSelected =
                              isCatSelected && selectedSubcategory === sub.slug;

                            return (
                              <li key={sub.slug}>
                                <button
                                  onClick={() => handleCategorySelect(cat.slug, sub.slug)}
                                  className={`text-xs block text-left transition-colors ${
                                    isSubSelected
                                      ? "text-[#f05c1a] font-medium"
                                      : "text-[#5a5758] hover:text-[#f05c1a]"
                                  }`}
                                >
                                  &bull; {sub.title}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Right Column: Product Grid & Pagination (9 cols) */}
            <main className="lg:col-span-9 space-y-12">
              {/* Results status */}
              <div className="flex items-center justify-between text-xs text-[#5a5758] border-b border-[#eeeeee] pb-3">
                <span>
                  Showing {paginatedProducts.length} of {filteredProducts.length} items
                </span>
                {selectedCategory && (
                  <span className="capitalize font-medium text-[#1b1b1b]">
                    Category: {selectedCategory.replace("-", " ")}
                    {selectedSubcategory ? ` / ${selectedSubcategory}` : ""}
                  </span>
                )}
              </div>

              {/* Product Grid */}
              {paginatedProducts.length > 0 ? (
                <StaggerContainer
                  key={`${currentPage}-${selectedCategory}-${selectedSubcategory}-${searchQuery}`}
                  as="div"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {paginatedProducts.map((product) => (
                    <StaggerItem key={product.id}>
                      <ProductCard product={product} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="py-24 text-center space-y-3">
                  <p className="text-base text-[#1b1b1b] font-light">
                    No products found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubcategory(null);
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    className="btn-outline-dark text-xs"
                  >
                    View All Products
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pt-8 border-t border-[#eeeeee] flex items-center justify-center gap-3 text-xs">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-8 h-8 flex items-center justify-center transition-all ${
                        currentPage === page
                          ? "border-b-2 border-black text-black font-semibold"
                          : "text-[#5a5758] hover:text-black"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta />
    </div>
  );
}
