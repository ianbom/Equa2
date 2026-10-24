import React from "react";
import Link from "next/link";
import { BRAND, PRODUCT_CATEGORIES } from "@/data/brand";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/motion";

export function Footer() {
  return (
    <footer className="bg-[#fafafa] text-[#1b1b1b] border-t border-[#eeeeee] pt-16 pb-8 text-xs font-normal">
      <div className="container-custom">
        <StaggerContainer as="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#eeeeee]">
          {/* Col 1: Brand & Bio (3 cols) */}
          <StaggerItem className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif tracking-widest text-2xl font-light uppercase block">
                GALERYA
              </span>
            </Link>

            <p className="text-[#5a5758] leading-relaxed text-xs font-normal">
              GALERYA is dedicated to delivering quality furniture that stands the test of time. Our skilled artisans transform the finest natural materials into functional pieces of art with passion and precision.
            </p>

            <p className="text-xs font-medium text-[#1b1b1b]">
              From Indonesia to the world!
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#eeeeee] flex items-center justify-center text-[#5a5758] hover:text-[#f05c1a] hover:border-[#f05c1a] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#eeeeee] flex items-center justify-center text-[#5a5758] hover:text-[#f05c1a] hover:border-[#f05c1a] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#eeeeee] flex items-center justify-center text-[#5a5758] hover:text-[#f05c1a] hover:border-[#f05c1a] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0-.02-3.3 1.65 1.65 0 0 0 .02 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>
            </div>
          </StaggerItem>

          {/* Col 2: Quick Links (2 cols) */}
          <StaggerItem className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1b1b1b]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#5a5758]">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Studio", href: "/studio" },
                { label: "Products", href: "/products" },
                { label: "Catalog", href: "/catalog" },
                { label: "Gallery", href: "/gallery" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-[#f05c1a] transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#f05c1a] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Col 3: Categories & Information (2 cols) */}
          <StaggerItem className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1b1b1b] mb-3">
                Collections
              </h4>
              <ul className="space-y-2 text-[#5a5758]">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/product-category/${cat.slug}`}
                      className="flex items-center gap-1.5 hover:text-[#f05c1a] transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#f05c1a] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span>{cat.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1b1b1b] mb-2">
                Information
              </h4>
              <ul className="space-y-1.5 text-[#5a5758]">
                <li>
                  <Link href="/about-us" className="hover:text-[#f05c1a] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#f05c1a] transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Col 4: Contact Us (2 cols) */}
          <StaggerItem className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1b1b1b]">
              Contact Us
            </h4>
            <div className="space-y-3 text-[#5a5758]">
              <div>
                <div className="flex items-center gap-1.5 text-[#f05c1a] font-medium mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone Number</span>
                </div>
                <a
                  href={BRAND.phoneLink}
                  className="hover:text-[#f05c1a] transition-colors block pl-5 text-[#1b1b1b] font-medium"
                >
                  {BRAND.phone}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#f05c1a] font-medium mb-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </div>
                <a
                  href={BRAND.emailLink}
                  className="hover:text-[#f05c1a] transition-colors block pl-5"
                >
                  {BRAND.email}
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Col 5: Location (3 cols) */}
          <StaggerItem className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1b1b1b]">
              Location
            </h4>
            <div className="space-y-3 text-[#5a5758]">
              <div>
                <div className="flex items-center gap-1.5 text-[#f05c1a] font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-semibold text-[#1b1b1b]">Studio & Headquarters</span>
                </div>
                <p className="pl-5 leading-relaxed">
                  Surabaya, Jawa Timur, Indonesia
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-dark text-[11px] py-2 px-4 w-full text-center"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <Reveal direction="up" delay={0.1} className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[#888888] text-[11px] gap-2">
          <p>Copyright &copy; 2026 GALERYA | All Rights Reserved</p>
          <div className="flex items-center space-x-4">
            <span>Contemporary Living</span>
            <span>&bull;</span>
            <span>Indonesian Craftsmanship</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
