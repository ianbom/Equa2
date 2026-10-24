import React from "react";
import { Reveal, ScaleReveal } from "@/components/motion";

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
        <ScaleReveal className="relative w-full max-w-4xl mx-auto aspect-16/9 bg-white border border-[#eeeeee] p-8 md:p-12 shadow-xs flex flex-col justify-between">
          {/* Subtle stylized SVG World Map graphic */}
          <div className="relative w-full flex-1 flex items-center justify-center opacity-85">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full text-[#e0e0e0] fill-current"
            >
              {/* Simplified world map outline paths */}
              <path d="M150,120 Q180,90 240,110 T320,130 T280,240 T220,290 T140,220 Z" />
              <path d="M260,300 Q300,320 320,400 T280,480 T230,420 T240,320 Z" />
              <path d="M460,90 Q540,80 580,120 T560,200 T480,190 T450,130 Z" />
              <path d="M470,220 Q540,210 570,290 T540,400 T480,380 T450,260 Z" />
              <path d="M600,80 Q750,70 850,110 T890,220 T780,260 T640,180 Z" />
              <path d="M720,280 Q840,290 880,340 T850,440 T740,410 T700,320 Z" />
              {/* Highlight Dot: Surabaya Origin */}
              <circle cx="760" cy="310" r="8" className="text-[#f05c1a] fill-current animate-pulse" />
              <circle cx="760" cy="310" r="18" className="text-[#f05c1a]/30 fill-current" />
              {/* Global Destination Hubs */}
              <circle cx="210" cy="180" r="5" className="text-[#f05c1a] fill-current" />
              <circle cx="510" cy="140" r="5" className="text-[#f05c1a] fill-current" />
              <circle cx="820" cy="170" r="5" className="text-[#f05c1a] fill-current" />
              <circle cx="830" cy="370" r="5" className="text-[#f05c1a] fill-current" />
            </svg>
          </div>

          {/* Map Legend */}
          <div className="pt-6 border-t border-[#eeeeee] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f05c1a]" />
              <span className="font-semibold text-[#1b1b1b]">Design Studio & Craft Origin: Surabaya, Indonesia</span>
            </div>
            <div className="text-[#5a5758]">
              Exporting to 20+ countries with custom freight packing
            </div>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
