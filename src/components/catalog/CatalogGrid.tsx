"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CATALOGS } from "@/data/catalogs";
import { CatalogItem } from "@/types";
import { BRAND } from "@/data/brand";
import { ArrowUpRight, BookOpen, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function CatalogGrid() {
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogItem | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleDownloadRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCatalog) return;

    const subject = encodeURIComponent(`Digital Catalog Request: ${selectedCatalog.title}`);
    const body = encodeURIComponent(
      `Hello GALERYA,\n\nPlease send the high-resolution PDF catalog for "${selectedCatalog.title} (${selectedCatalog.year})".\n\nRecipient Email: ${email}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSelectedCatalog(null);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <>
      <StaggerContainer as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATALOGS.map((cat) => (
          <StaggerItem key={cat.id}>
            <div
              onClick={() => setSelectedCatalog(cat)}
              className="group cursor-pointer bg-white border border-[#eeeeee] hover:border-[#1b1b1b] transition-all duration-300 h-full flex flex-col"
            >
              {/* Catalog Cover */}
              <div className="relative aspect-3/4 w-full bg-[#f4f4f2] overflow-hidden">
                <Image
                  src={cat.coverImage}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

                {/* Year badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#1b1b1b] text-[10px] uppercase font-semibold px-2.5 py-1 tracking-wider">
                  {cat.year} Edition
                </div>

                {/* Quick Preview Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="btn-solid-white text-xs py-2 px-4 shadow-lg flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Preview Catalog</span>
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 space-y-2 grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5a5758]">
                    <span>{cat.pages} Pages</span>
                    <ArrowUpRight className="w-4 h-4 text-[#5a5758] group-hover:text-[#f05c1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-light text-[#1b1b1b] group-hover:text-[#f05c1a] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#5a5758] font-light line-clamp-2 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Catalog Preview Modal */}
      <AnimatePresence>
        {selectedCatalog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white w-full max-w-xl p-6 sm:p-8 relative border border-[#eeeeee] shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedCatalog(null)}
                className="absolute top-4 right-4 text-[#5a5758] hover:text-[#1b1b1b] p-1"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative aspect-3/4 w-36 shrink-0 bg-[#f4f4f2] overflow-hidden border border-[#eeeeee]">
                  <Image
                    src={selectedCatalog.coverImage}
                    alt={selectedCatalog.title}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
                    {selectedCatalog.year} Catalog Publication
                  </span>
                  <h3 className="text-2xl font-light text-[#1b1b1b]">
                    {selectedCatalog.title}
                  </h3>
                  <p className="text-xs text-[#5a5758] font-light leading-relaxed">
                    {selectedCatalog.subtitle}
                  </p>
                  <div className="pt-2 text-xs text-[#1b1b1b]">
                    <strong>Volume:</strong> {selectedCatalog.pages} pages &bull; High Resolution Architectural PDF
                  </div>
                </div>
              </div>

              {/* Email form to receive PDF */}
              <form onSubmit={handleDownloadRequest} className="space-y-4 pt-4 border-t border-[#eeeeee]">
                <div>
                  <label className="block text-xs font-medium text-[#1b1b1b] mb-1">
                    Enter your email to receive this lookbook
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@studio.com"
                    className="w-full border-b border-[#dddddd] py-2 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
                  />
                </div>

                {submitted ? (
                  <div className="p-3 bg-[#f5f5f5] text-xs text-center text-[#1b1b1b] font-medium">
                    Catalog request initiated! Check your email client.
                  </div>
                ) : (
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="btn-solid-orange w-full text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Lookbook PDF</span>
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
