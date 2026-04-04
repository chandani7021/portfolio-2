"use client";

import { motion } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES } from "@/constants";
import { contactLinks } from "@/data/portfolio";
import { fadeUp, staggerContainer, scaleIn, VIEWPORT } from "@/utils/animations";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";

export default function Contact() {
  return (
    <section id={SECTION_IDS.contact} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionTitle title={SECTION_TITLES.contact} subtitle={SECTION_TITLES.contactSub} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group block"
            >
              <MacWindow
                title={link.label.toLowerCase()}
                accentColor="bg-white/2"
                className="h-full hover:border-blue-500/30 transition-colors duration-200"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors"
                  >
                    <Icon name={link.icon} size={18} />
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-xs text-white/70 mt-1 break-all leading-relaxed">
                      {link.value}
                    </p>
                  </div>
                </div>
              </MacWindow>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
