"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
}

export function FadeIn({ children, variants, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
