"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, DividerReveal } from "@/components/motion";

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 4 products at a time on desktop, 2 on tablet, 1 on mobile
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= featured.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? featured.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white text-[#1b1b1b] border-t border-[#eeeeee]">
      <div className="container-custom">
        {/* Section Heading */}
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow block">Our Product</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1b1b1b]">
            Curated for Global Living
          </h2>
        </Reveal>

        {/* Carousel Container with Arrows */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous products"
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#f05c1a] text-white flex items-center justify-center shadow-md hover:bg-[#1b1b1b] transition-colors focus:outline-hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next products"
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#f05c1a] text-white flex items-center justify-center shadow-md hover:bg-[#1b1b1b] transition-colors focus:outline-hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Product Cards Grid / View */}
          <StaggerContainer as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Show 4 products starting from currentIndex */}
            {[0, 1, 2, 3].map((offset) => {
              const item = featured[(currentIndex + offset) % featured.length];
              if (!item) return null;

              return (
                <StaggerItem key={`${item.id}-${offset}`}>
                  <Link
                    href={`/product/${item.slug}`}
                    className="group block bg-white"
                  >
                    {/* Image Container with subtle gray backdrop matching reference */}
                    <div className="relative aspect-square w-full bg-[#f4f4f2] overflow-hidden p-6 flex items-center justify-center">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Title & Arrow */}
                    <div className="pt-4 flex items-center justify-between text-xs">
                      <div className="min-w-0 pr-2">
                        <h3 className="font-medium text-[#1b1b1b] truncate group-hover:text-[#f05c1a] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-[#5a5758] mt-0.5">
                          {item.subcategoryLabel}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#5a5758] group-hover:text-[#f05c1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Bottom Bar: Narrative + "View All Product" Button */}
        <div className="mt-16 pt-8 border-t border-[#eeeeee]">
          <Reveal direction="up" className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs md:text-sm text-[#5a5758] font-light max-w-xl text-center md:text-left">
              Handcrafted furniture combining traditional artisan skills with modern materials and design.
            </p>
            <Link href="/products" className="btn-outline-dark shrink-0">
              VIEW ALL PRODUCT
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
