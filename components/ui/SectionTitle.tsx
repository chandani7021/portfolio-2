"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/utils/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`mb-10 ${className}`}
    >
      <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-white/40 tracking-wide">{subtitle}</p>
      )}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mt-3 w-12 h-0.5 rounded-full bg-blue-500"
      />
    </motion.div>
  );
}
