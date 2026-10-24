import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { BRAND } from "@/data/brand";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { Briefcase, Mail, MapPin, Sparkles, Users } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ScaleReveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Careers | GALERYA",
  description:
    "Join the GALERYA team in Surabaya, Indonesia. Explore opportunities across industrial design, woodworking craft, and export operations.",
};

const CULTURE_HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "Respect for Craftsmanship",
    desc: "We cultivate a collaborative environment where designers learn hands-on from master woodworkers and vice-versa.",
  },
  {
    icon: Users,
    title: "Inclusive & Fair Workplace",
    desc: "Fair compensation, transparent growth paths, comprehensive health benefits, and safe modern production facilities.",
  },
  {
    icon: MapPin,
    title: "Rooted in Surabaya",
    desc: "Proudly based in East Java with active international export connections spanning five continents.",
  },
];

export default function CareersPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <PageHero
        eyebrow="Work With Us"
        title="Careers"
        subtitle="Build your craft alongside passionate designers, wood artisans, and export specialists in Surabaya, Indonesia."
        imageSrc="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1600&auto=format&fit=crop"
        imageAlt="GALERYA Woodcraft Workshop & Studio"
      />

      {/* Culture Section */}
      <section className="py-20 md:py-28 bg-white text-[#1b1b1b]">
        <div className="container-custom space-y-16">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
              Life at GALERYA
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1b1b1b]">
              A Culture of Dedication & Learning
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5758] font-light">
              We bring together diverse disciplines — from industrial 3D CAD modeling to artisanal timber joinery.
            </p>
          </Reveal>

          <StaggerContainer as="div" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE_HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="bg-[#fafafa] p-8 border border-[#eeeeee] space-y-4 hover:border-[#1b1b1b] transition-colors h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-white text-[#f05c1a] border border-[#eeeeee]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-medium text-[#1b1b1b]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5a5758] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Opportunities & Speculative Application */}
      <section className="py-20 bg-[#fafafa] border-t border-[#eeeeee]">
        <div className="container-custom">
          <ScaleReveal className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-white border border-[#eeeeee] flex items-center justify-center mx-auto text-[#f05c1a]">
              <Briefcase className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
              Open Inquiries
            </span>

            <h2 className="text-3xl font-light tracking-tight text-[#1b1b1b]">
              General Inquiries & Apprenticeships
            </h2>

            <p className="text-xs sm:text-sm text-[#5a5758] font-light leading-relaxed">
              While we may not have specific openings posted at this moment, we are always excited to connect with talented industrial designers, interior architects, timber production engineers, and master wood craftsmen.
            </p>

            <div className="pt-4">
              <a
                href={`mailto:${BRAND.email}?subject=Career%20Inquiry%20-%20GALERYA`}
                className="btn-solid-orange inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Submit CV & Portfolio to {BRAND.email}</span>
              </a>
            </div>
          </ScaleReveal>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
