"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES } from "@/constants";
import { skills } from "@/data/portfolio";
import { accentClass } from "@/utils";
import { fadeUp, staggerContainer, staggerFast, scaleIn, VIEWPORT } from "@/utils/animations";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  return (
    <section id={SECTION_IDS.skills} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
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
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MacWindow title={skill.category.toLowerCase().replace(/\s/g, "-")}>
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-4 ${accentClass(i).split(" ")[0]}`}
                    >
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
                          whileHover={{ scale: 1.08, y: -1 }}
                          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border cursor-default ${accentClass(i)}`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </MacWindow>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
