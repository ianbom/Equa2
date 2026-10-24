"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface ScaleRevealProps {
  children: ReactNode;
  scaleFrom?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function ScaleReveal({
  children,
  scaleFrom = 0.96,
  duration = motionConfig.duration.normal,
  delay = 0,
  threshold = motionConfig.viewport.amount,
  className = "",
}: ScaleRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ scale: scaleFrom, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
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
      className={className}
    >
      {children}
    </motion.div>
  );
}
