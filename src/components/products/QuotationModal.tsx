"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { BRAND } from "@/data/brand";
import { X, Send, MessageCircle } from "lucide-react";

interface QuotationModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function QuotationModal({ product, isOpen, onClose }: QuotationModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hello GALERYA, I would like to request a quotation and material specifications for: ${product.name} (Category: ${product.categoryLabel}).`
  );

  if (!isOpen) return null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quotation Request: ${product.name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product.name}\nDimensions: ${product.dimensions}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hello GALERYA! I'm interested in requesting a quotation for:\n*${product.name}*\nDimensions: ${product.dimensions}\n\nMy Details:\nName: ${name || "-"}\nEmail: ${email || "-"}\nPhone: ${phone || "-"}\n\nNotes: ${message}`
    );
    window.open(`https://wa.me/62811112222?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-lg p-6 sm:p-8 relative border border-[#eeeeee] shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5a5758] hover:text-[#1b1b1b] p-1"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#f05c1a] font-semibold block">
            Product Inquiry
          </span>
          <h3 className="text-xl font-light text-[#1b1b1b] mt-1">
            Request Quotation: {product.name}
          </h3>
          <p className="text-xs text-[#5a5758] mt-1 font-light">
            Fill in your details below. We reply directly via email or WhatsApp within 24 hours.
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#1b1b1b] font-medium mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Elena Rostova"
              className="w-full border-b border-[#dddddd] py-2 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#1b1b1b] font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elena@example.com"
                className="w-full border-b border-[#dddddd] py-2 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#1b1b1b] font-medium mb-1">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62 8..."
                className="w-full border-b border-[#dddddd] py-2 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#1b1b1b] font-medium mb-1">
              Project Notes / Quantity
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-b border-[#dddddd] py-2 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors resize-none"
            />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="btn-solid-orange w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send via Email</span>
            </button>
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="btn-outline-dark w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
