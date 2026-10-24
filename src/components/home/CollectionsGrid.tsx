import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

export function CollectionsGrid() {
  const collections = [
    {
      title: "Indoor Furniture",
      description: "Dining tables, sculptured chairs, sideboards, and relaxed modular sofas.",
      href: "/product-category/indoor-furniture",
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Outdoor Furniture",
      description: "All-weather woven rattan, grade-A teak lounges, and poolside sunbeds.",
      href: "/product-category/outdoor-furniture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Home Decoration",
      description: "Artisan stoneware lamps, sculptural mirrors, and handcrafted interior accents.",
      href: "/product-category/home-decoration",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section id="collections" className="py-24 bg-white text-[#1b1b1b]">
      <div className="container-custom">
        {/* Header */}
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow block">Category Product</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1b1b1b]">
            Our Furniture Collections
          </h2>
        </Reveal>

        {/* 3-Column Grid */}
        <StaggerContainer as="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col) => (
            <StaggerItem key={col.title}>
              <Link
                href={col.href}
                className="group relative block aspect-3/4 overflow-hidden bg-[#f0f0ee]"
              >
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />

                {/* Bottom Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex items-end justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light tracking-wide text-white mb-2">
                      {col.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 max-w-[240px] font-light">
                      {col.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-[#f05c1a] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
