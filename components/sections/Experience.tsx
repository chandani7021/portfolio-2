"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES } from "@/constants";
import { experiences } from "@/data/portfolio";
import { fadeUp, staggerContainer, VIEWPORT } from "@/utils/animations";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";

export default function Experience() {
  return (
    <section id={SECTION_IDS.experience} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionTitle title={SECTION_TITLES.experience} subtitle={SECTION_TITLES.experienceSub} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative pl-8 border-l border-white/8 space-y-6"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              variants={fadeUp}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={VIEWPORT}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                className="absolute -left-[2.35rem] top-5 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#111113] flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </motion.div>

              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                <MacWindow
                  title={`${exp.company.toLowerCase().replace(/\s/g, "-")}.ts`}
                  accentColor={i === 0 ? "bg-blue-500/5" : "bg-white/[0.02]"}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon name="briefcase" size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{exp.title}</p>
                        <p className="text-xs text-blue-400 mt-0.5">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-white/40">{exp.duration}</p>
                      <p className="text-xs text-white/30 mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 pl-2">
                    {exp.points.map((point) => (
                      <li key={point.slice(0, 40)} className="flex gap-2 text-xs text-white/55 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-500/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </MacWindow>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
