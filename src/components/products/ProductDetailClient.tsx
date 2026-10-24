"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { QuotationModal } from "@/components/products/QuotationModal";
import { ProductCard } from "@/components/products/ProductCard";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ImageReveal } from "@/components/motion";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(
    product.finishes && product.finishes.length > 0 ? product.finishes[0].name : product.woodFinishing
  );
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState(false);

  const images = product.images.length > 0 ? product.images : ["/placeholder.jpg"];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full pt-28 pb-20 bg-white text-[#1b1b1b]">
      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <Reveal direction="none" delay={0.05}>
          <nav className="text-xs text-[#5a5758] mb-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#f05c1a]">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#f05c1a]">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/product-category/${product.category}`}
              className="hover:text-[#f05c1a]"
            >
              {product.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-[#1b1b1b] font-medium">{product.name}</span>
          </nav>
        </Reveal>

        {/* 2-Column Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image Gallery (7 cols) */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-4/3 w-full bg-[#f4f4f2] overflow-hidden flex items-center justify-center">
              <Image
                src={images[activeImageIndex]}
                alt={`${product.name} preview`}
                fill
                priority
                className="object-cover object-center transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Prev / Next Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs text-[#1b1b1b] flex items-center justify-center hover:bg-[#f05c1a] hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs text-[#1b1b1b] flex items-center justify-center hover:bg-[#f05c1a] hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 shrink-0 bg-[#f4f4f2] overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? "border-[#1b1b1b]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          {/* Right Column: Info & Specification (5 cols) */}
          <Reveal direction="right" delay={0.15} className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#5a5758] block mb-1">
                {product.categoryLabel}, {product.subcategoryLabel}
              </span>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b]">
                {product.name}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Specification Panel */}
            <div className="space-y-4 pt-2 border-t border-[#eeeeee]">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1b1b1b]">
                Specification:
              </h3>

              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-[#5a5758]">Materials</span>
                  <span className="col-span-8 text-[#1b1b1b] font-medium">
                    : {product.materials}
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-[#5a5758]">Dimension</span>
                  <span className="col-span-8 text-[#1b1b1b] font-medium">
                    : {product.dimensions}
                  </span>
                </div>
              </div>
            </div>

            {/* Finishing Swatch Selector */}
            {product.finishes && product.finishes.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[#eeeeee]">
                <div className="text-xs">
                  <span className="text-[#5a5758] block">Finishing Option:</span>
                  <span className="font-semibold text-[#1b1b1b] text-sm">
                    {selectedFinish}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {product.finishes.map((finish) => {
                    const isSelected = selectedFinish === finish.name;
                    return (
                      <button
                        key={finish.name}
                        onClick={() => setSelectedFinish(finish.name)}
                        className={`relative w-12 h-12 border-2 transition-all flex items-center justify-center ${
                          isSelected ? "border-[#1b1b1b] scale-105" : "border-[#eeeeee]"
                        }`}
                        title={finish.name}
                        style={{ backgroundColor: finish.colorHex || "#C4A482" }}
                      >
                        {isSelected && (
                          <Check className="w-4 h-4 text-white drop-shadow-md" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Request a Quotation Action Button */}
            <div className="pt-6">
              <button
                onClick={() => setIsQuotationModalOpen(true)}
                className="btn-outline-dark w-full text-center py-4"
              >
                REQUEST A QUOTATION
              </button>
            </div>
          </Reveal>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-28 pt-16 border-t border-[#eeeeee] space-y-10">
            <Reveal direction="up" className="text-center">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#1b1b1b]">
                Related Products
              </h2>
            </Reveal>

            <StaggerContainer as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <StaggerItem key={rel.id}>
                  <ProductCard product={rel} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </div>

      {/* Inquiry Modal */}
      <QuotationModal
        product={product}
        isOpen={isQuotationModalOpen}
        onClose={() => setIsQuotationModalOpen(false)}
      />
    </div>
  );
}
