import React from "react";
import { Reveal, ScaleReveal } from "@/components/motion";
import { WorldMap } from "@/components/home/WorldMap";

export function PhilosophySection() {
  return (
    <section className="py-24 bg-[#fafafa] text-[#1b1b1b] border-t border-[#eeeeee]">
      <div className="container-custom">
        {/* Header */}
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow block">Global Reach</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1b1b1b]">
            Trusted by Discerning Spaces Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-[#5a5758] mt-3 font-light leading-relaxed">
            GALERYA supplies thoughtfully designed furniture to residential sanctuaries, boutique hotels, and refined design spaces across Asia, Europe, North America, and Australia.
          </p>
        </Reveal>

        {/* Global Distribution Graphic / Map Visual */}
        <ScaleReveal className="w-full max-w-5xl mx-auto">
          <WorldMap />
        </ScaleReveal>
      </div>
    </section>
  );
}
