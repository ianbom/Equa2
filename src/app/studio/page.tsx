import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { ArrowUpRight, Box, Layers, PenTool, Sliders } from "lucide-react";
import { Reveal, ImageReveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Design Studio | GALERYA",
  description:
    "Explore the GALERYA Design Studio — where material engineering, rigorous prototyping, and contemporary aesthetics converge.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    icon: PenTool,
    title: "Concept & Ergonomic Modeling",
    desc: "Every design starts with hand-sketched proportions and 1:1 scale ergonomic wireframes to ensure natural human posture.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Material Curation & Seasoning",
    desc: "Timbers are kiln-dried to strict international moisture levels (8% - 12%) to prevent warping across extreme global climate variations.",
  },
  {
    step: "03",
    icon: Sliders,
    title: "Artisanal Joinery & Assembly",
    desc: "Employing traditional mortise-and-tenon joints reinforced with precision CNC milling for lifelong structural rigidity.",
  },
  {
    step: "04",
    icon: Box,
    title: "Rigorous Transit Testing",
    desc: "Drop tested, corner-reinforced, and moisture-sealed packaging built for long-haul ocean freight to worldwide destinations.",
  },
];

export default function StudioPage() {
  return (
    <div className="w-full">
      {/* Studio Hero */}
      <section className="relative h-80 md:h-[450px] flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
          alt="GALERYA Design Studio Workspace"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pt-16 px-4">
          <Reveal direction="up">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-2">
              Research & Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Design Studio
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-light mt-3 max-w-xl mx-auto leading-relaxed">
              Where natural Indonesian materials meet architectural discipline, material science, and modern manufacturing rigor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b] leading-tight">
                Where Art Meets Technical Precision
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                <p>
                  At GALERYA, design is not an afterthought of styling — it is the thoughtful resolution of form, tactile comfort, and structural longevity.
                </p>
                <p>
                  Our Surabaya design team collaborates closely with master craftsmen on the workshop floor. We test the subtle grain direction of teak, examine how shadow falls beneath a chamfered tabletop, and evaluate the flex of hand-woven cane weave before committing to production.
                </p>
                <p>
                  This intimate dialogue between the drafting table and the workbench guarantees that every piece is not only visually striking, but built to become a cherished heirloom.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/catalog" className="btn-outline-dark inline-flex items-center gap-2">
                  <span>Browse Our Lookbooks</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <div className="lg:col-span-6">
              <ImageReveal className="aspect-4/3 w-full bg-[#f4f4f2]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
                    alt="Architectural furniture design prototyping"
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

      {/* Development Lifecycle Process */}
      <section className="py-20 bg-[#fafafa] border-y border-[#eeeeee]">
        <div className="container-custom space-y-16">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b]">
              From Concept to Finished Living Piece
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5758] font-light">
              A methodical standard applied to standard catalog items and bespoke contract commissions.
            </p>
          </Reveal>

          <StaggerContainer as="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <div className="bg-white p-8 border border-[#eeeeee] space-y-4 relative group hover:border-[#1b1b1b] transition-colors h-full">
                    <span className="text-3xl font-light text-[#f05c1a] block">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center text-[#1b1b1b]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-medium text-[#1b1b1b]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5a5758] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Engineered for the Journey (Packaging & Logistics) */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ImageReveal className="aspect-4/3 w-full bg-[#f4f4f2]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                    alt="Global export packing and inspection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ImageReveal>
            </div>

            <Reveal direction="right" className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                Export Engineering
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b] leading-tight">
                Engineered for the Global Journey
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                <p>
                  Exporting furniture across oceans requires rigorous packaging engineering. Over decades of international freight shipments from Port of Tanjung Perak, Surabaya, we have perfected protective packaging systems.
                </p>
                <p>
                  Every piece undergoes ISTA-standard drop and vibration protocols. We utilize 5-ply double-wall heavy cartons, custom high-density edge guards, and desiccant silica systems to prevent condensation in container transit.
                </p>
                <p>
                  Whether delivered directly to a luxury boutique hotel in Miami or an architectural residence in Sydney, your furniture arrives in pristine condition.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="btn-solid-orange text-xs">
                  Request Trade & Export Catalog
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
