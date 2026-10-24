"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, NAV_LINKS, PRODUCT_CATEGORIES } from "@/data/brand";
import { PRODUCTS } from "@/data/products";
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Determine header appearance: transparent on top of homepage, solid white otherwise
  const isTransparent = isHome && !isScrolled && !isMegaMenuOpen;

  const featuredPreview = PRODUCTS.slice(0, 3);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isTransparent
            ? "bg-transparent text-white"
            : "bg-white text-[#1b1b1b] shadow-xs border-b border-[#eeeeee]"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          {/* Brand Wordmark Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          >
            <span className="font-serif tracking-widest text-2xl font-light uppercase">
              GALERYA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium uppercase tracking-[0.08em]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative py-7 cursor-pointer"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 transition-colors ${
                        isActive
                          ? "text-[#f05c1a]"
                          : isTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-[#1b1b1b] hover:text-[#f05c1a]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMegaMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Products Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] bg-white text-[#1b1b1b] border border-[#eeeeee] shadow-xl p-8 cursor-default"
                        >
                          <div className="grid grid-cols-12 gap-8">
                          {/* Col 1: Overview */}
                          <div className="col-span-3 border-r border-[#eeeeee] pr-6">
                            <span className="text-[10px] uppercase tracking-widest text-[#f05c1a] font-semibold">
                              Collection Overview
                            </span>
                            <h4 className="text-lg font-medium text-[#1b1b1b] mt-1 mb-2">
                              Our Products
                            </h4>
                            <p className="text-xs text-[#5a5758] leading-relaxed mb-5 normal-case font-normal">
                              Architectural contemporary pieces handcrafted from sustainably sourced Indonesian teak, oak, and woven natural cane.
                            </p>
                            <Link
                              href="/products"
                              className="btn-outline-dark text-[11px] py-2 px-4 w-full text-center"
                            >
                              View All Products
                            </Link>
                          </div>

                          {/* Col 2: Category Tree */}
                          <div className="col-span-5 grid grid-cols-2 gap-4">
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <div key={cat.slug} className="space-y-2">
                                <Link
                                  href={`/product-category/${cat.slug}`}
                                  className="text-[12px] font-semibold text-[#1b1b1b] hover:text-[#f05c1a] transition-colors block border-b border-[#eeeeee] pb-1.5"
                                >
                                  {cat.title}
                                </Link>
                                <ul className="space-y-1.5 text-[11px] font-normal normal-case text-[#5a5758]">
                                  {cat.subcategories.map((sub) => (
                                    <li key={sub.slug}>
                                      <Link
                                        href={`/product-category/${cat.slug}?sub=${sub.slug}`}
                                        className="hover:text-[#f05c1a] hover:translate-x-1 inline-block transition-all"
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Col 3: Product Highlights */}
                          <div className="col-span-4 pl-4 border-l border-[#eeeeee]">
                            <span className="text-[10px] uppercase tracking-widest text-[#5a5758] font-semibold block mb-3">
                              Signature Pieces
                            </span>
                            <div className="space-y-3">
                              {featuredPreview.map((item) => (
                                <Link
                                  key={item.id}
                                  href={`/product/${item.slug}`}
                                  className="flex items-center gap-3 group p-1.5 hover:bg-[#f5f5f5] transition-colors"
                                >
                                  <div className="w-12 h-12 relative bg-[#f0f0ee] shrink-0 overflow-hidden">
                                    <Image
                                      src={item.images[0]}
                                      alt={item.name}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform"
                                      sizes="48px"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <h5 className="text-[11px] font-medium text-[#1b1b1b] truncate group-hover:text-[#f05c1a] transition-colors">
                                      {item.name}
                                    </h5>
                                    <p className="text-[10px] text-[#5a5758] truncate normal-case">
                                      {item.subcategoryLabel}
                                    </p>
                                  </div>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5a5758] group-hover:text-[#f05c1a] shrink-0 ml-auto" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors py-2 ${
                    isActive
                      ? "text-[#f05c1a]"
                      : isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-[#1b1b1b] hover:text-[#f05c1a]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher + Contact CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div
              className={`text-xs font-semibold tracking-wider flex items-center gap-1 ${
                isTransparent ? "text-white/80" : "text-[#5a5758]"
              }`}
            >
              <span className="text-[#f05c1a] cursor-pointer">EN</span>
              <span>|</span>
              <span className="hover:text-[#f05c1a] cursor-pointer transition-colors">
                ID
              </span>
            </div>

            <Link
              href="/contact"
              className={isTransparent ? "btn-outline-white" : "btn-outline-dark"}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link
              href="/contact"
              className={`text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 border ${
                isTransparent
                  ? "border-white/60 text-white"
                  : "border-[#1b1b1b] text-[#1b1b1b]"
              }`}
            >
              Contact
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white text-[#1b1b1b] pt-24 px-6 pb-8 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
          <nav className="space-y-4">
            {NAV_LINKS.map((link) => {
              if (link.hasMegaMenu) {
                return (
                  <div key={link.label} className="border-b border-[#eeeeee] pb-3">
                    <button
                      onClick={() =>
                        setMobileExpandedCat(
                          mobileExpandedCat === "products" ? null : "products"
                        )
                      }
                      className="flex items-center justify-between w-full text-left text-sm uppercase tracking-wider font-medium text-[#1b1b1b]"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpandedCat === "products" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileExpandedCat === "products" && (
                      <div className="mt-3 pl-3 space-y-4 pt-2">
                        <Link
                          href="/products"
                          className="text-xs uppercase font-semibold text-[#f05c1a] block"
                        >
                          View All Products &rarr;
                        </Link>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <div key={cat.slug} className="space-y-1.5">
                            <Link
                              href={`/product-category/${cat.slug}`}
                              className="text-xs font-semibold text-[#1b1b1b] block"
                            >
                              {cat.title}
                            </Link>
                            <div className="pl-3 space-y-1">
                              {cat.subcategories.map((sub) => (
                                <Link
                                  key={sub.slug}
                                  href={`/product-category/${cat.slug}?sub=${sub.slug}`}
                                  className="text-xs text-[#5a5758] block py-0.5"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm uppercase tracking-wider font-medium text-[#1b1b1b] border-b border-[#eeeeee] pb-3"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#eeeeee] space-y-4">
            <div className="flex items-center justify-between text-xs text-[#5a5758]">
              <span>Location: {BRAND.location}</span>
              <div className="flex gap-2">
                <span className="font-bold text-[#f05c1a]">EN</span>
                <span>/</span>
                <span>ID</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-solid-orange w-full text-center block text-xs"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
