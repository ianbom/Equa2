import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { GalleryViewer } from "@/components/gallery/GalleryViewer";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Gallery | GALERYA",
  description:
    "Explore our spatial gallery showcasing architectural indoor and outdoor living environments handcrafted in Indonesia.",
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      {/* Gallery Hero */}
      <section className="relative h-80 md:h-[450px] flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt="GALERYA Architectural Living Spaces"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pt-16 px-4">
          <Reveal direction="up">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-2">
              Spatial Showcase
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Gallery
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-light mt-3 max-w-xl mx-auto leading-relaxed">
              A visual documentation of GALERYA furniture inhabiting refined residences, private retreats, and architectural projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Main Container */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <GalleryViewer />
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
