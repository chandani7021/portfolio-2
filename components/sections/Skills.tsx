"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES } from "@/constants";
import { skills } from "@/data/portfolio";
import { accentClass } from "@/utils";
import { fadeUp, staggerContainer, staggerFast, scaleIn, VIEWPORT } from "@/utils/animations";
import TiltCard from "@/components/ui/TiltCard";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  return (
    <section id={SECTION_IDS.skills} className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionTitle title={SECTION_TITLES.skills} subtitle={SECTION_TITLES.skillsSub} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill, i) => (
            <motion.div key={skill.category} variants={scaleIn}>
              <TiltCard intensity={5} className="h-full">
                <MacWindow title={skill.category.toLowerCase().replace(/\s/g, "-")} className="h-full">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${accentClass(i).split(" ")[0]}`}>
                      {skill.category}
                    </p>
                    <motion.div
                      variants={staggerFast}
                      initial="hidden"
                      whileInView="visible"
                      viewport={VIEWPORT}
                      className="flex flex-wrap gap-2"
                    >
                      {skill.items.map((item) => (
                        <motion.span
                          key={item}
                          variants={fadeUp}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border cursor-default ${accentClass(i)}`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </MacWindow>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
