import React from "react";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem, ImageReveal } from "@/components/motion";

export function ServicesSection() {
  const services = [
    {
      number: "0 1",
      title: "Custom Furniture Design",
      description:
        "Develop bespoke pieces from your own concept sketches or customize our existing collection silhouettes to match exact interior dimensions and hospitality requirements.",
    },
    {
      number: "0 2",
      title: "Material & Finish Selection",
      description:
        "Carefully choose kiln-dried Javanese teak, mindi wood, all-weather synthetic weaves, and tactile upholstery grades with custom protective finishes.",
    },
    {
      number: "0 3",
      title: "Design Consultation",
      description:
        "Collaborate closely with our Surabaya studio team and master woodcrafters to achieve the perfect balance of visual lightness, ergonomic comfort, and durability.",
    },
  ];

  return (
    <section className="py-24 bg-white text-[#1b1b1b]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Numbered Services (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="left">
              <span className="section-eyebrow block">Services</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1b1b1b] leading-[1.2]">
                Tailored Craftsmanship Solutions
              </h2>
            </Reveal>

            <StaggerContainer as="div" className="space-y-4">
              {services.map((srv) => (
                <StaggerItem key={srv.number}>
                  <div className="bg-[#f5f5f5] p-6 sm:p-8 flex items-start gap-6 border-l-2 border-transparent hover:border-[#f05c1a] transition-all">
                    <span className="font-mono text-base font-medium tracking-widest text-[#f05c1a] shrink-0 pt-0.5">
                      {srv.number}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-medium text-[#1b1b1b]">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                        {srv.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column: Lifestyle Image (5 cols) */}
          <div className="lg:col-span-5">
            <ImageReveal className="aspect-4/5 w-full bg-[#f0f0ee]">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop"
                  alt="GALERYA Material Finishing"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
