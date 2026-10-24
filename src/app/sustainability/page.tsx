import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowUpRight, CheckCircle2, Feather, HeartHandshake, Leaf, Recycle } from "lucide-react";
import { Reveal, ImageReveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Sustainability | GALERYA",
  description:
    "Our commitment to legal plantation timber, circular production, artisan equity, and low-impact packaging in Indonesia.",
};

const PILLARS = [
  {
    icon: Leaf,
    title: "100% Certified Legal Timber",
    desc: "Every cubic meter of teak and mindi wood is sourced through Indonesia's Timber Legality Assurance System (SVLK) and sustainably managed state forestry concessions (Perum Perhutani).",
  },
  {
    icon: Recycle,
    title: "Circular Design & Zero-Waste",
    desc: "Timber offcuts are repurposed into interior accents, architectural joinery plugs, and organic fuel for our drying kilns, reducing workshop waste to near zero.",
  },
  {
    icon: Feather,
    title: "Low-VOC & Non-Toxic Finishes",
    desc: "We exclusively formulate water-based lacquers, natural plant oils, and beeswax treatments that emit zero hazardous fumes into interior living spaces.",
  },
  {
    icon: HeartHandshake,
    title: "Artisan Equity & Safety",
    desc: "Our craftsmen work in well-ventilated, ergonomic studios with fair living wages, medical coverage, and generational craft apprenticeships.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="w-full">
      {/* Sustainability Hero */}
      <PageHero
        eyebrow="Conscious Craft"
        title="Sustainability"
        subtitle="Honoring the Indonesian earth through responsible forestry, circular workshop practices, and ethical artisan welfare."
        imageSrc="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Indonesian sustainable plantation forest canopy"
      />

      {/* Sustainable Philosophy */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b] leading-tight">
                Furniture Made to Outlast Generations, Not landfill Cycles
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                <p>
                  True sustainability begins with intention. The single most eco-friendly piece of furniture is the one that never needs to be discarded.
                </p>
                <p>
                  At GALERYA, we refuse the shortcuts of fast furniture — no particle boards, toxic adhesives, or synthetic veneers engineered for obsolescence. Instead, we use solid Indonesian hardwoods that age gracefully, developing an authentic patina over decades of daily life.
                </p>
                <p>
                  By cultivating close ties with certified Indonesian timber plantations, we safeguard native biodiversity while ensuring future generations inherit thriving forests.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/products" className="btn-outline-dark inline-flex items-center gap-2">
                  <span>Explore Heirloom Pieces</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <div className="lg:col-span-6">
              <ImageReveal className="aspect-4/3 w-full bg-[#f4f4f2]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop"
                    alt="Wood grain inspection and sustainable craft"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-20 bg-[#fafafa] border-y border-[#eeeeee]">
        <div className="container-custom space-y-16">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
              Commitments
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b]">
              Four Pillars of Environmental Stewardship
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5758] font-light">
              Clear, transparent operational benchmarks across our entire supply chain.
            </p>
          </Reveal>

          <StaggerContainer as="div" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="bg-white p-8 border border-[#eeeeee] space-y-4 hover:border-[#1b1b1b] transition-colors h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] text-[#f05c1a]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-[#1b1b1b]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Packaging & Logistics Eco Commitment */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ImageReveal className="aspect-4/3 w-full bg-[#f4f4f2]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
                    alt="Galerya eco-friendly packaging and conscious production"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ImageReveal>
            </div>

            <Reveal direction="right" className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                Plastic-Free Packaging
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b] leading-tight">
                98% Recyclable Transit Materials
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                <p>
                  To minimize our maritime shipping footprint, we have systematically eliminated single-use styrofoam and plastic bubble wraps from our packing lines.
                </p>
                <p>
                  Instead, we protect every finished surface with recycled honeycomb cardboard cushioning, natural cellulose edge guards, and biodegradable cotton dust covers that clients keep for storage.
                </p>
              </div>

              <StaggerContainer as="div" className="pt-2 space-y-2 text-xs text-[#1b1b1b]">
                <StaggerItem>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f05c1a]" />
                    <span>Certified SVLK Legal Indonesian Hardwood</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f05c1a]" />
                    <span>Formaldehyde-Free Wood Adhesives</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f05c1a]" />
                    <span>Fair Trade Ethical Artisan Compensation</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
