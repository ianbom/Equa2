"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { motionConfig } from "@/lib/motion";

export function CollectionExperience() {
  const collections = [
    {
      year: "2022-2023 Collection",
      title: "Tactile Organic Living",
      description: "Low-profile cane armchairs, solid oak coffee tables, and earth stoneware.",
      bgImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    },
    {
      year: "2024 Collection",
      title: "Veranda & Horizon",
      description: "Architectural outdoor dining sets and high-resilience synthetic woven lounges.",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      year: "2025 Collection",
      title: "Sculptural Geometry",
      description: "Beveled dining tables, fluted credenzas, and ambient ceramic pendant lightings.",
      bgImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      year: "2026 Collection",
      title: "The Contemporary Sanctuary",
      description: "Our signature contemporary series featuring seamless radius joinery and Belgian linen.",
      bgImage: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const [activeTab, setActiveTab] = useState(3); // default 2026
  const active = collections[activeTab];

  return (
    <section className="relative min-h-[640px] flex items-center justify-center text-center text-white py-24 overflow-hidden bg-black">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={active.bgImage}
            alt={active.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container-custom max-w-4xl relative z-10 space-y-8">
        <Reveal direction="up" className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
            Experience Our Collections in 360°
          </h2>
          <p className="text-xs sm:text-sm text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
            Get a closer look at our latest designs. Navigate through our interactive spaces to see the texture, scale, and finishing details as if you were there.
          </p>
        </Reveal>

        {/* Collection Year Pills */}
        <StaggerContainer as="div" className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {collections.map((col, idx) => {
            const isSelected = activeTab === idx;
            return (
              <StaggerItem key={col.year}>
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`text-xs uppercase tracking-wider px-5 py-3 transition-all duration-300 border ${
                    isSelected
                      ? "bg-white text-[#1b1b1b] border-white font-semibold shadow-lg"
                      : "bg-black/40 text-white/90 border-white/40 hover:border-white hover:bg-black/60 font-normal"
                  }`}
                >
                  {col.year}
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Selected Collection Card Preview */}
        <div className="pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: motionConfig.ease }}
              className="inline-block bg-black/60 backdrop-blur-md border border-white/20 p-6 text-left max-w-md"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-1">
                Active Showcase &bull; {active.year}
              </span>
              <h3 className="text-lg font-light text-white mb-1">
                {active.title}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
