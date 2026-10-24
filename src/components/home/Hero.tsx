"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

export function Hero() {
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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="GALERYA Curated Furniture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-20 pb-16 flex flex-col items-center max-w-4xl space-y-6">
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: motionConfig.ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1]"
        >
          Thoughtfully Crafted <br className="hidden sm:inline" />
          for Modern Living
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: motionConfig.ease }}
          className="text-sm md:text-base text-white/90 font-light max-w-2xl leading-relaxed"
        >
          Discover timeless furniture shaped by natural materials, thoughtful design, and contemporary Indonesian craftsmanship.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: motionConfig.ease }}
          className="pt-4"
        >
          <Link href="/products" className="btn-solid-white">
            EXPLORE COLLECTIONS
          </Link>
        </motion.div>
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
