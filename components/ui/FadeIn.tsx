"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 18
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
