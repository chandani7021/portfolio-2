"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO, SECTION_IDS, RESUME_PATH } from "@/constants";
import { socialLinks } from "@/data/portfolio";
import { scrollToSection } from "@/utils";
import { heroStagger, fadeUp, slideInRight } from "@/utils/animations";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";

const SKILL_STRIP = ["React", "Next.js", "FastAPI", "Django", "PostgreSQL", "React Native", "D3.js", "Gemini API"];

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24 pb-12"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-175 h-175 rounded-full bg-blue-600/10 blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-125 h-125 rounded-full bg-purple-600/10 blur-[120px]"
        />
      </div>

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/8 text-blue-300 text-sm font-medium w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {HERO.tagline}
              </span>
              {HERO.targetRole && (
                <span className="text-blue-400/80 text-sm font-medium px-1">
                  {HERO.targetRole}
                </span>
              )}
            </motion.div>

            <motion.p variants={fadeUp} className="text-white/40 text-base mb-2 font-light tracking-wide">
              {HERO.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight"
            >
              <span className="text-white">{HERO.name.split(" ")[0]}</span>
              <br />
              <span className="text-white">
                {HERO.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/50 text-base leading-relaxed max-w-md mb-8">
              {HERO.subTagline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap mb-8">
              <Button label={HERO.contactLabel} onClick={() => scrollToSection(SECTION_IDS.contact)} variant="primary" />
              <Button label={HERO.resumeLabel} href={RESUME_PATH} target="_blank" variant="secondary" download />
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
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

            <motion.button
              variants={fadeUp}
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.about)}
              className="mt-12 flex items-center gap-2 text-white/20 hover:text-white/50 transition-colors cursor-pointer w-fit"
            >
              <span className="text-xs tracking-widest uppercase">Scroll down</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6, ease: "easeInOut" }}
              >
                <Icon name="chevronDown" size={14} />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Photo with corner brackets */}
            <div className="relative">
              {/* Corner brackets */}
              {[
                "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
                "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
                "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
                "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
              ].map((cls) => (
                <motion.span
                  key={cls}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                  className={`absolute w-6 h-6 border-blue-400/60 ${cls}`}
                />
              ))}

              {/* Glow behind photo */}
              <div className="absolute inset-8 rounded-2xl bg-blue-500/15 blur-2xl" />

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-56 h-64 sm:w-72 sm:h-88 rounded-2xl overflow-hidden border border-white/8"
              >
                <Image
                  src="/myImage.svg"
                  alt="Chandani Mourya"
                  fill
                  className="object-cover object-top scale-80"
                  priority
                />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#111113] to-transparent" />
              </motion.div>
            </div>

            {/* Skill strip — auto-scrolling marquee */}
            <div className="w-56 sm:w-72 overflow-hidden rounded-xl border border-white/6 bg-white/2 py-2.5">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="flex gap-4 whitespace-nowrap w-max px-4"
              >
                {[...SKILL_STRIP.map((skill) => ({ skill, id: `a-${skill}` })), ...SKILL_STRIP.map((skill) => ({ skill, id: `b-${skill}` }))].map(({ skill, id }) => (
                  <span
                    key={id}
                    className="text-xs text-white/40 font-medium tracking-wide px-2 py-0.5 rounded-md bg-white/4 border border-white/6"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
