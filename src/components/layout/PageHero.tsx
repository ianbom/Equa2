"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Hero Image with Subtle Scale Settle */}
      <motion.div
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: motionConfig.ease }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-20 pb-16 flex flex-col items-center max-w-4xl space-y-6 px-4">
        {eyebrow && (
          <motion.span
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: motionConfig.ease }}
            className="text-[11px] sm:text-xs uppercase tracking-widest text-[#f05c1a] font-semibold block"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: motionConfig.ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: motionConfig.ease }}
            className="text-sm md:text-base text-white/90 font-light max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && ctaLink && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42, ease: motionConfig.ease }}
            className="pt-2"
          >
            <Link href={ctaLink} className="btn-solid-white">
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>

      {/* Vertical Scroll Line Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0.7 } : { scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.7 }}
          transition={{ duration: 0.9, delay: 0.65, ease: motionConfig.ease }}
          style={{ transformOrigin: "top" }}
          className="w-px h-16 bg-white/60"
        />
      </div>
    </section>
  );
}
