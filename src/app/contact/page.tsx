import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { BRAND } from "@/data/brand";
import { ContactForm } from "@/components/contact/ContactForm";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Reveal, ImageReveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact Us | GALERYA",
  description:
    "Contact GALERYA in Surabaya, Indonesia. Reach out for residential orders, custom contract design, and global export shipping.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Contact Hero */}
      <section className="relative h-80 md:h-[450px] flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop"
          alt="Contact GALERYA"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pt-16 px-4">
          <Reveal direction="up">
            <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-2">
              Connect
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Contact Us
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-light mt-3 max-w-xl mx-auto leading-relaxed">
              We welcome inquiries from interior designers, architectural studios, boutique hoteliers, and design enthusiasts worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Information Cards (5 cols) */}
            <Reveal direction="left" className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                  Studio & Workshop
                </span>
                <h2 className="text-3xl font-light tracking-tight text-[#1b1b1b]">
                  Surabaya, Indonesia
                </h2>
                <p className="text-xs sm:text-sm text-[#5a5758] font-light leading-relaxed">
                  Our main studio, workshop, and global shipping dispatch hub are located in East Java, Indonesia.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-6 pt-4 border-t border-[#eeeeee]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#eeeeee] flex items-center justify-center text-[#f05c1a]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-[#5a5758] block mb-0.5">Location</span>
                    <p className="font-medium text-[#1b1b1b]">
                      {BRAND.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#eeeeee] flex items-center justify-center text-[#f05c1a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-[#5a5758] block mb-0.5">Direct Email</span>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="font-medium text-[#1b1b1b] hover:text-[#f05c1a] transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#eeeeee] flex items-center justify-center text-[#f05c1a]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-[#5a5758] block mb-0.5">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:+62${BRAND.phone.slice(1)}`}
                      className="font-medium text-[#1b1b1b] hover:text-[#f05c1a] transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#eeeeee] flex items-center justify-center text-[#f05c1a]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-[#5a5758] block mb-0.5">
                      Working Hours
                    </span>
                    <p className="font-medium text-[#1b1b1b]">
                      Monday – Saturday: 08:00 – 17:00 (WIB / GMT+7)
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <ImageReveal className="aspect-16/9 w-full bg-[#f4f4f2] border border-[#eeeeee]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                    alt="GALERYA Showroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </ImageReveal>
            </Reveal>

            {/* Right Column: Contact Form (7 cols) */}
            <Reveal direction="right" delay={0.15} className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
