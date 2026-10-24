"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

export function GalleryViewer() {
  const [activeTab, setActiveTab] = useState<"all" | "indoor" | "outdoor">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! - 1 < 0 ? filteredItems.length - 1 : prev! - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! + 1 >= filteredItems.length ? 0 : prev! + 1
    );
  };

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <Reveal direction="up" delay={0.1}>
        <div className="flex items-center justify-center gap-3">
          {(["all", "indoor", "outdoor"] as const).map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-wider px-5 py-2.5 border transition-all ${
                  isSelected
                    ? "border-[#1b1b1b] bg-[#1b1b1b] text-white font-semibold"
                    : "border-[#eeeeee] text-[#5a5758] hover:border-black hover:text-black"
                }`}
              >
                {tab === "all" ? "All Spaces" : `${tab} Spaces`}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Masonry / Responsive Grid */}
      <StaggerContainer
        key={activeTab}
        as="div"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => {
          const aspectClass =
            item.aspect === "portrait"
              ? "aspect-3/4 sm:row-span-2"
              : item.aspect === "square"
              ? "aspect-square"
              : "aspect-4/3";

          return (
            <StaggerItem key={item.id}>
              <div
                onClick={() => handleOpenLightbox(item)}
                className={`relative group cursor-pointer bg-[#f4f4f2] overflow-hidden ${aspectClass} w-full h-full`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay with Title */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-light text-white">
                    {item.title}
                  </h3>
                  <span className="absolute top-4 right-4 text-white/80">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-50"
              aria-label="Close lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#f05c1a] transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#f05c1a] transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption Stage */}
            <motion.div
              key={filteredItems[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-[75vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="pt-4 text-center text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                  {filteredItems[lightboxIndex].category} Living
                </span>
                <h3 className="text-lg font-light">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-white/50 mt-1">
                  {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
