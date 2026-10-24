import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles } from "lucide-react";
import { Reveal, ImageReveal, DividerReveal } from "@/components/motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-white text-[#1b1b1b]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="left" delay={0.05}>
              <span className="section-eyebrow block">
                About GALERYA
              </span>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1b1b1b] leading-[1.2]">
                More Than Just Furniture
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="text-sm md:text-base text-[#5a5758] leading-relaxed font-light">
                Rooted in the rich artisanal heritage of East Java, GALERYA was founded on the belief that everyday objects should elevate human wellbeing. Driven by our commitment to natural materials, architectural simplicity, and thoughtful ergonomics, we create living pieces that quietly anchor modern homes.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <p className="text-sm text-[#5a5758] leading-relaxed font-light">
                We collaborate with skilled local woodworkers and master weavers in Surabaya, blending time-honored joinery techniques with contemporary proportions to produce furniture that transcends fleeting seasonal trends.
              </p>
            </Reveal>

            {/* Qualitative Pillars */}
            <DividerReveal delay={0.3} />

            <Reveal direction="up" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#f05c1a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1b1b1b]">
                      Mindful Materials
                    </h4>
                    <p className="text-xs text-[#5a5758] mt-0.5">
                      Kiln-dried solid teak, American oak, and ethically harvested natural rattan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#f05c1a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1b1b1b]">
                      Enduring Form
                    </h4>
                    <p className="text-xs text-[#5a5758] mt-0.5">
                      Minimalist silhouettes engineered for structural longevity and ease of care.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.45}>
              <div className="pt-2">
                <Link href="/about-us" className="btn-outline-dark text-xs">
                  Read Our Story
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Lifestyle Imagery (6 cols) */}
          <div className="lg:col-span-6">
            <ImageReveal className="aspect-4/5 w-full bg-[#f5f5f5]">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop"
                  alt="GALERYA Handcrafted Furniture"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
