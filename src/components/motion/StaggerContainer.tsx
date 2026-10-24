"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}

export function StaggerContainer({
  children,
  staggerDelay = motionConfig.stagger.normal,
  delayChildren = 0,
  threshold = motionConfig.viewport.amount,
  className = "",
  as = "div",
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: threshold,
        margin: motionConfig.viewport.margin,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  distance = motionConfig.distance.normal,
  duration = motionConfig.duration.normal,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: motionConfig.ease,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
