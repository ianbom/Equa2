import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { ArrowUpRight, Award, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal, ImageReveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us | GALERYA",
  description:
    "Discover GALERYA — rooted in Indonesian craftsmanship and contemporary design for modern architectural living.",
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Masterful Craftsmanship",
    desc: "Every joint, curve, and texture is shaped by generational artisans in East Java using time-honored joinery techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Material Integrity",
    desc: "We exclusively source SVLK-certified legal teak, sustainably harvested mindi, and genuine woven rattan.",
  },
  {
    icon: Compass,
    title: "Contemporary Vision",
    desc: "Translating architectural balance and functional minimalism into heirloom pieces that outlive fleeting trends.",
  },
  {
    icon: Award,
    title: "Global Standard",
    desc: "Engineered to withstand diverse climates and rigorous commercial hospitality standards across 20+ countries.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-[450px] flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
          alt="GALERYA Workshop"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pt-16 px-4">
          <Reveal direction="up">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-2">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              About Us
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-light mt-3 max-w-xl mx-auto leading-relaxed">
              Crafting architectural furniture that bridges Indonesian natural heritage with contemporary global lifestyles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Column */}
            <Reveal direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                Heritage & Modernity
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b] leading-tight">
                Shaping Organic Matter Into Timeless Living Forms
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                <p>
                  Founded in Surabaya, Indonesia, GALERYA was born from an unyielding appreciation for slow craftsmanship and architectural clarity. We view furniture not merely as utility, but as the quiet anchor of human rituals.
                </p>
                <p>
                  Indonesia holds one of the richest legacies of woodworking and woven botanical fibers in the world. By pairing ancestral carving disciplines with understated contemporary silhouettes, our studio creates designs that feel grounded, tactile, and enduring.
                </p>
                <p>
                  From private coastal villas in Bali to minimalist residences across Europe and the Americas, each piece carries the distinct warmth of natural teak, refined mindi wood, and honest craftsmanship.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/products" className="btn-outline-dark inline-flex items-center gap-2">
                  <span>Explore Our Collections</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <ImageReveal className="aspect-4/5 w-full bg-[#f4f4f2]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop"
                    alt="Woodcraft artisan shaping teak"
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

      {/* Philosophy & Pillars */}
      <section className="py-20 bg-[#fafafa] border-y border-[#eeeeee]">
        <div className="container-custom space-y-16">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b]">
              The Tenets of GALERYA Design
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5758] font-light">
              Guiding every cut, join, and polish in our Surabaya workshop.
            </p>
          </Reveal>

          <StaggerContainer as="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="bg-white p-8 border border-[#eeeeee] space-y-4 hover:border-[#1b1b1b] transition-colors h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] text-[#f05c1a]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-medium text-[#1b1b1b]">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#5a5758] leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Workshop & Artisans Spotlight */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ImageReveal className="aspect-4/3 w-full bg-[#f4f4f2]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
                    alt="GALERYA Studio environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ImageReveal>
            </div>

            <Reveal direction="right" className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                The Workshop
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b] leading-tight">
                Generations of Mastery in East Java
              </h2>
              <p className="text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                Our workshop brings together master wood turners, joiners, and weavers whose families have practiced woodworking for generations. We honor their craft with safe, dignified working environments, fair trade compensation, and continuous learning.
              </p>
              <p className="text-xs sm:text-sm text-[#5a5758] leading-relaxed font-light">
                By maintaining direct oversight from initial raw timber seasoning to precision kiln drying (MC 8-12%) and final hand-rubbed oil finish, we ensure zero compromise on quality.
              </p>
              <div className="pt-2">
                <Link href="/studio" className="btn-outline-dark text-xs">
                  Discover Our Studio Process
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
