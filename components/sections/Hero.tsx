"use client";

import { motion } from "framer-motion";
import { HERO, SECTION_IDS, RESUME_PATH } from "@/constants";
import { socialLinks } from "@/data/portfolio";
import { scrollToSection } from "@/utils";
import { heroStagger, fadeUp, scaleIn, VIEWPORT } from "@/utils/animations";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-175 rounded-full bg-blue-600/10 blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full bg-purple-600/8 blur-[120px]"
        />
      </div>

      {/* Dot grid */}
      <div
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
        viewport={VIEWPORT}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Avatar monogram */}
        <motion.div
          variants={scaleIn}
          className="mx-auto mb-8 w-24 h-24 rounded-3xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-blue-500/30 select-none"
        >
          CM
        </motion.div>

        <motion.p variants={fadeUp} className="text-white/50 text-lg mb-2 font-light">
          {HERO.greeting}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight"
        >
          {HERO.name}
        </motion.h1>

        <motion.p variants={fadeUp} className="text-xl text-blue-400 font-medium mb-4">
          {HERO.tagline}
        </motion.p>

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
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors duration-200"
            >
              <Icon name={link.icon} size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={fadeUp}
          onClick={() => scrollToSection(SECTION_IDS.about)}
          className="mt-16 flex flex-col items-center gap-1 mx-auto text-white/20 hover:text-white/50 transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <Icon name="chevronDown" size={16} />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}
