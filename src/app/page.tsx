import React from "react";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { CollectionExperience } from "@/components/home/CollectionExperience";
import { ClosingCta } from "@/components/layout/ClosingCta";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <CollectionsGrid />
      <FeaturedProducts />
      <ServicesSection />
      <PhilosophySection />
      <CollectionExperience />
      <ClosingCta />
    </div>
  );
}
