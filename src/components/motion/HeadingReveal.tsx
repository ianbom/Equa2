"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface HeadingRevealProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "div";
  className?: string;
  delay?: number;
  duration?: number;
}

export function HeadingReveal({
  children,
  as = "h2",
  className = "",
  delay = 0,
  duration = motionConfig.duration.normal,
}: HeadingRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  if (shouldReduceMotion) {
    const StaticComp = as;
    return <StaticComp className={className}>{children}</StaticComp>;
  }

  return (
    <div className="overflow-hidden">
      <Component
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
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
        className={className}
      >
        {children}
      </Component>
    </div>
  );
}
