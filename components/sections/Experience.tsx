"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES } from "@/constants";
import { experiences } from "@/data/portfolio";
import { fadeUp, staggerContainer, VIEWPORT } from "@/utils/animations";
import TiltCard from "@/components/ui/TiltCard";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";

export default function Experience() {
  return (
    <section id={SECTION_IDS.experience} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={SECTION_TITLES.experience} subtitle={SECTION_TITLES.experienceSub} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              variants={fadeUp}
              className="flex gap-6"
            >
              {/* ── Left column: dot + connecting line ── */}
              <div className="flex flex-col items-center shrink-0 pt-[1.35rem]">
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  className="relative flex items-center justify-center"
                >
                  {/* Pulse ring */}
                  <motion.span
                    animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2.4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    className="absolute w-4 h-4 rounded-full bg-blue-500/40"
                  />
                  <span className="relative z-10 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#111113] shadow-lg shadow-blue-500/60" />
                </motion.div>

                {/* Connecting line to next item */}
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 mt-3 bg-blue-500/40" />
                )}
              </div>

              {/* ── Right column: card ── */}
              <div className={`flex-1 ${i < experiences.length - 1 ? "pb-8" : ""}`}>
                <TiltCard intensity={5}>
                  <MacWindow
                    title={`${exp.company.toLowerCase().replace(/\s/g, "-")}.ts`}
                    accentColor={i === 0 ? "bg-blue-500/8" : "bg-white/2"}
                    className={i === 0 ? "border-blue-500/20 shadow-xl shadow-blue-500/5" : ""}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Icon name="briefcase" size={18} label="Work experience" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-white">{exp.title}</p>
                          <p className="text-sm text-blue-400 mt-0.5 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-white/50">
                          {exp.duration}
                        </span>
                        <p className="text-xs text-white/30 mt-1.5">{exp.location}</p>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5">
                      {exp.points.map((point) => (
                        <li
                          key={point.slice(0, 40)}
                          className="flex gap-3 text-sm text-white/60 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-blue-500/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </MacWindow>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
