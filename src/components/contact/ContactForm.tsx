"use client";

import React, { useState } from "react";
import { BRAND } from "@/data/brand";
import { Send, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website Inquiry: ${formData.interest} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hello GALERYA!\n\nName: ${formData.name || "-"}\nEmail: ${formData.email || "-"}\nPhone: ${formData.phone || "-"}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message || "I would like to inquire about your furniture collections."}`
    );
    window.open(`https://wa.me/62811112222?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white p-8 md:p-12 border border-[#eeeeee]">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-widest text-[#f05c1a] font-semibold block mb-2">
          Get In Touch
        </span>
        <h2 className="text-2xl md:text-3xl font-light text-[#1b1b1b]">
          Send Us a Message
        </h2>
        <p className="text-xs text-[#5a5758] font-light mt-1">
          Whether you are an architect designing a hotel or a homeowner seeking a signature piece.
        </p>
      </div>

      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-[#1b1b1b] mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Johnathan Doe"
              className="w-full border-b border-[#dddddd] py-2.5 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1b1b1b] mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="johnathan@studio.com"
              className="w-full border-b border-[#dddddd] py-2.5 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-[#1b1b1b] mb-1">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62 8..."
              className="w-full border-b border-[#dddddd] py-2.5 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1b1b1b] mb-1">
              Project Interest
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border-b border-[#dddddd] py-2.5 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors bg-white cursor-pointer"
            >
              <option value="Residential Furniture">Residential Furniture</option>
              <option value="Hospitality & Commercial Contract">
                Hospitality & Commercial Contract
              </option>
              <option value="Custom Design Commission">Custom Design Commission</option>
              <option value="Catalog & Material Samples Request">
                Catalog & Material Samples Request
              </option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1b1b1b] mb-1">
            Your Message / Project Details *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your space, dimensions, or specific piece requirements..."
            className="w-full border-b border-[#dddddd] py-2.5 px-1 text-xs focus:border-[#f05c1a] focus:outline-hidden transition-colors resize-none"
          />
        </div>

        {submitted && (
          <div className="p-3 bg-[#f5f5f5] text-xs text-center text-[#1b1b1b] font-medium">
            Thank you! Your default email client was opened. We look forward to connecting.
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
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
            <span>Chat via WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}
