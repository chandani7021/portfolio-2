"use client";

import { motion } from "framer-motion";
import { ABOUT, SECTION_IDS, SECTION_TITLES } from "@/constants";
import { achievements, education } from "@/data/portfolio";
import { fadeUp, slideInLeft, slideInRight, VIEWPORT } from "@/utils/animations";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id={SECTION_IDS.about} className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={SECTION_TITLES.about} subtitle={SECTION_TITLES.aboutSub} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bio */}
          <motion.div
            className="lg:col-span-2"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <MacWindow title="about.md" accentColor="bg-blue-500/5">
              <div className="space-y-4">
                {ABOUT.paragraphs.map((para) => (
                  <p key={para.slice(0, 30)} className="text-white/60 text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </MacWindow>
          </motion.div>

          {/* Stats + Education */}
          <motion.div
            className="flex flex-col gap-6"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {/* Animated stats */}
            <MacWindow title="stats.json" accentColor="bg-purple-500/5">
              <div className="grid grid-cols-2 gap-5">
                {ABOUT.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-white">
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="text-xs text-white/40 mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </MacWindow>

            <MacWindow title="education" accentColor="bg-emerald-500/5">
              <div className="flex gap-3">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon name="graduation" size={16} label="Education" />
                </div>
                <div>
                  {education.map((edu) => (
                    <div key={edu.degree}>
                      <p className="text-xs font-semibold text-white leading-tight">{edu.degree}</p>
                      <p className="text-xs text-white/40 mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-white/30 mt-0.5">
                        {edu.duration} · CGPA {edu.cgpa}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </MacWindow>
          </motion.div>
        </div>

        {/* Achievement */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {achievements.map((a) => (
            <MacWindow key={a.title} title="achievement" className="mt-6" accentColor="bg-amber-500/5">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Icon name="trophy" size={20} label="Achievement" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{a.title}</p>
                  <p className="text-xs text-white/40 mt-0.5">
                    {a.organization} · {a.date} · {a.location}
                  </p>
                  <p className="text-xs text-white/50 mt-2 leading-relaxed">{a.description}</p>
                </div>
              </div>
            </MacWindow>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
