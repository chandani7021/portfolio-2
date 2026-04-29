"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES, VISIT_PROJECT_LABEL, LIVE_DEMO_LABEL } from "@/constants";
import { projects } from "@/data/portfolio";
import { staggerContainer, scaleIn, fadeUp, VIEWPORT } from "@/utils/animations";
import TiltCard from "@/components/ui/TiltCard";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

const ACCENT_COLORS = [
  { card: "bg-blue-500/5", border: "border-blue-500/20", dot: "bg-blue-500/70", num: "text-blue-500/20" },
  { card: "bg-purple-500/5", border: "border-purple-500/20", dot: "bg-purple-500/70", num: "text-purple-500/20" },
  { card: "bg-emerald-500/5", border: "border-emerald-500/20", dot: "bg-emerald-500/70", num: "text-emerald-500/20" },
  { card: "bg-amber-500/5", border: "border-amber-500/20", dot: "bg-amber-500/70", num: "text-amber-500/20" },
  { card: "bg-rose-500/5", border: "border-rose-500/20", dot: "bg-rose-500/70", num: "text-rose-500/20" },
  { card: "bg-cyan-500/5", border: "border-cyan-500/20", dot: "bg-cyan-500/70", num: "text-cyan-500/20" },
  { card: "bg-indigo-500/5", border: "border-indigo-500/20", dot: "bg-indigo-500/70", num: "text-indigo-500/20" },
];

export default function Projects() {
  return (
    <section id={SECTION_IDS.projects} className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={SECTION_TITLES.projects} subtitle={SECTION_TITLES.projectsSub} />

        <div className="space-y-16">
          {/* Featured Projects */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {projects.filter(p => p.featured).map((project, i) => {
              const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
              return (
                <motion.div key={project.name} variants={scaleIn}>
                  <TiltCard className="h-full" intensity={6}>
                    <MacWindow
                      title={`${project.name.toLowerCase().split(" ").slice(0, 2).join("-")}.ts`}
                      accentColor={accent.card}
                      className={`h-full ${accent.border}`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-bold text-white leading-snug flex-1">
                            {project.name}
                          </h3>
                          <span className={`text-5xl font-black ${accent.num} leading-none ml-2 select-none`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <ul className="space-y-3 mb-6 flex-1">
                          {project.points.map((point, idx) => (
                            <li
                              key={point.slice(0, 40)}
                              className={`flex gap-3 text-sm leading-relaxed ${idx === 0 ? "text-blue-300/90 font-medium" : "text-white/55"}`}
                            >
                              <span className={`mt-2 w-1.5 h-1.5 shrink-0 rounded-full ${accent.dot}`} />
                              {point}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t) => (
                            <Badge key={t} label={t} />
                          ))}
                        </div>

                        {(project.github || project.live) && (
                          <div className="flex items-center gap-4 pt-4 border-t border-white/6">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, x: 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                              >
                                <Icon name="github" size={14} label="GitHub" />
                                {VISIT_PROJECT_LABEL}
                              </motion.a>
                            )}
                            {project.live && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, x: 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <Icon name="externalLink" size={14} label="Live demo" />
                                {LIVE_DEMO_LABEL}
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>
                    </MacWindow>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Other Projects */}
          {projects.some(p => !p.featured) && (
            <div className="pt-8">
              <h4 className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <span className="h-px bg-white/10 flex-1" />
                Other Projects
                <span className="h-px bg-white/10 flex-1" />
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.filter(p => !p.featured).map((project) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                        {project.name}
                      </h5>
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors">
                            <Icon name="github" size={14} label="GitHub" />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-blue-400 transition-colors">
                            <Icon name="externalLink" size={14} label="Live" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed mb-4 line-clamp-2">
                      {project.points[0]}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] text-white/20 font-medium px-1.5 py-0.5 rounded-md border border-white/5">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] text-white/10 font-medium px-1.5 py-0.5">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
