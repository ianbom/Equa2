import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { GalleryViewer } from "@/components/gallery/GalleryViewer";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
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
      <PageHero
        eyebrow="Spatial Showcase"
        title="Gallery"
        subtitle="A visual documentation of GALERYA furniture inhabiting refined residences, private retreats, and architectural projects."
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="GALERYA Architectural Living Spaces"
      />

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
