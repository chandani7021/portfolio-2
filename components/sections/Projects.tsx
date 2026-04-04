"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES, VISIT_PROJECT_LABEL, LIVE_DEMO_LABEL } from "@/constants";
import { projects } from "@/data/portfolio";
import { staggerContainer, scaleIn, VIEWPORT } from "@/utils/animations";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { fadeUp } from "@/utils/animations";

const ACCENT_COLORS = [
  "bg-blue-500/5",
  "bg-purple-500/5",
  "bg-emerald-500/5",
  "bg-amber-500/5",
  "bg-rose-500/5",
  "bg-cyan-500/5",
];

export default function Projects() {
  return (
    <section id={SECTION_IDS.projects} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionTitle title={SECTION_TITLES.projects} subtitle={SECTION_TITLES.projectsSub} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <MacWindow
                title={`${project.name.toLowerCase().split(" ").slice(0, 2).join("-")}.ts`}
                accentColor={ACCENT_COLORS[i % ACCENT_COLORS.length]}
                className="h-full flex flex-col"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-white mb-3 leading-snug">
                    {project.name}
                  </h3>

                  <ul className="space-y-1.5 mb-4 flex-1">
                    {project.points.map((point) => (
                      <li
                        key={point.slice(0, 40)}
                        className="flex gap-2 text-xs text-white/55 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-500/60" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} label={t} />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/6">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/8"
                      >
                        <Icon name="github" size={13} />
                        {VISIT_PROJECT_LABEL}
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors px-2 py-1 rounded-lg hover:bg-blue-500/10"
                      >
                        <Icon name="externalLink" size={13} />
                        {LIVE_DEMO_LABEL}
                      </motion.a>
                    )}
                  </div>
                </div>
              </MacWindow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
