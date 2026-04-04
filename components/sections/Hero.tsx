"use client";

import { motion } from "framer-motion";
import { HERO, SECTION_IDS, RESUME_PATH } from "@/constants";
import { socialLinks } from "@/data/portfolio";
import { scrollToSection } from "@/utils";
import { heroStagger, fadeUp, scaleIn, VIEWPORT } from "@/utils/animations";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-28"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-blue-600/12 blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
          className="absolute top-2/3 right-1/4 w-125 h-125 rounded-full bg-purple-600/10 blur-[120px]"
        />
      </div>

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Avatar */}
        <motion.div variants={scaleIn} className="mx-auto mb-10 relative w-fit">
          {/* Outer glow ring */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-xl -z-10"
          />
          <div className="w-24 h-24 rounded-3xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-blue-500/40 select-none">
            CM
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="text-white/50 text-base mb-2 font-light tracking-wide">
          {HERO.greeting}
        </motion.p>

        {/* Name with gradient */}
        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="text-white">{HERO.name.split(" ")[0]} </span>
          <span className="bg-linear-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            {HERO.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Tagline pill */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/8 text-blue-300 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {HERO.tagline}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          {HERO.subTagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 flex-wrap mb-10"
        >
          <Button
            label={HERO.contactLabel}
            onClick={() => scrollToSection(SECTION_IDS.contact)}
            variant="primary"
          />
          <Button
            label={HERO.resumeLabel}
            href={RESUME_PATH}
            target="_blank"
            variant="secondary"
            download
          />
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Tooltip key={link.label} label={link.label}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors duration-200"
              >
                <Icon name={link.icon} size={16} label={link.label} />
              </motion.a>
            </Tooltip>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={fadeUp}
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.about)}
          className="mt-16 flex flex-col items-center gap-1 mx-auto text-white/20 hover:text-white/50 transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6, ease: "easeInOut" }}
          >
            <Icon name="chevronDown" size={16} aria-hidden="true" />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}
