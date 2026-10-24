"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
  scaleFrom?: number;
}

export function ImageReveal({
  children,
  className = "",
  duration = motionConfig.duration.slow,
  delay = 0,
  threshold = motionConfig.viewport.amount,
  scaleFrom = 1.06,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: "inset(0% 0% 8% 0%)",
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={{
        once: true,
        amount: threshold,
        margin: motionConfig.viewport.margin,
      }}
      transition={{
        duration,
        delay,
        ease: motionConfig.ease,
      }}
      className={`overflow-hidden relative ${className}`}
    >
      <motion.div
        initial={{ scale: scaleFrom }}
        whileInView={{ scale: 1 }}
        viewport={{
          once: true,
          amount: threshold,
          margin: motionConfig.viewport.margin,
        }}
        transition={{
          duration: duration * 1.1,
          delay,
          ease: motionConfig.ease,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
