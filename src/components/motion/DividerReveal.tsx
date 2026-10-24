"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface DividerRevealProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export function DividerReveal({
  className = "w-full h-px bg-[#eeeeee]",
  delay = 0,
  duration = motionConfig.duration.normal,
}: DividerRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{
        once: true,
        amount: motionConfig.viewport.amount,
        margin: motionConfig.viewport.margin,
      }}
      transition={{
        duration,
        delay,
        ease: motionConfig.ease,
      }}
      style={{ transformOrigin: "left center" }}
      className={className}
    />
  );
}
