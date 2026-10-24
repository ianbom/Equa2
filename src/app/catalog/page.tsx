import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Catalog | GALERYA",
  description:
    "Explore our collection lookbooks and architectural furniture publications from GALERYA.",
};

export default function CatalogPage() {
  return (
    <div className="w-full">
      {/* Catalog Hero */}
      <PageHero
        eyebrow="Publications"
        title="Catalog"
        subtitle="Curated seasonal lookbooks showcasing our complete furniture collections, material finishes, and spatial inspirations."
        imageSrc="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1600&auto=format&fit=crop"
        imageAlt="GALERYA Lookbooks"
      />

      {/* Main Catalog Grid Section */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom space-y-16">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
              Editorial Editions
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b]">
              Discover Our Lookbooks
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5758] font-light">
              Select any publication to preview details or request the full high-resolution digital copy.
            </p>
          </Reveal>

          <CatalogGrid />
        </div>
      </section>

      {/* Hospitality & Contract Inquiry Feature */}
      <section className="py-20 bg-[#fafafa] border-t border-[#eeeeee]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal direction="left" className="lg:col-span-8 space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                Trade & Contract Division
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#1b1b1b]">
                Need Custom Catalogs or BIM / 3D Assets for Your Architecture Firm?
              </h2>
              <p className="text-xs sm:text-sm text-[#5a5758] font-light leading-relaxed">
                We support interior designers, architects, and hospitality procurement teams with comprehensive specification sheets, 3D Revit/SketchUp models, and custom finish sample boxes shipped worldwide.
              </p>
            </Reveal>

            <Reveal direction="right" className="lg:col-span-4 lg:text-right">
              <Link href="/contact" className="btn-solid-orange text-xs py-4 px-8 inline-block">
                Contact Trade Team
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
