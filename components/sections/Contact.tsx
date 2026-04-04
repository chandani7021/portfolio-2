"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTION_IDS, SECTION_TITLES } from "@/constants";
import { contactLinks } from "@/data/portfolio";
import { fadeUp, staggerContainer, scaleIn, VIEWPORT } from "@/utils/animations";
import type { ContactLink } from "@/interfaces";
import MacWindow from "@/components/ui/MacWindow";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";

function ContactCard({ link }: { link: ContactLink }) {
  const [copied, setCopied] = useState(false);
  const isCopy = link.href.startsWith("copy:");

  const handleClick = () => {
    if (!isCopy) return;
    const text = link.href.replace("copy:", "");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inner = (
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
          <Icon name={isCopy && copied ? "check" : link.icon} size={18} label={link.label} />
        </motion.div>
        <div>
          <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
            {link.label}
          </p>
          <AnimatePresence mode="wait">
            {isCopy && copied ? (
              <motion.p
                key="copied"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-emerald-400 mt-1 font-medium"
              >
                Copied!
              </motion.p>
            ) : (
              <motion.p
                key="value"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-white/70 mt-1 break-all leading-relaxed"
              >
                {link.value}
              </motion.p>
            )}
          </AnimatePresence>
          {isCopy && (
            <p className="text-[10px] text-white/25 mt-1">click to copy</p>
          )}
        </div>
      </div>
    </MacWindow>
  );

  if (isCopy) {
    return (
      <motion.button
        type="button"
        onClick={handleClick}
        variants={scaleIn}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group block w-full text-left cursor-pointer"
      >
        {inner}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={scaleIn}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group block"
    >
      {inner}
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id={SECTION_IDS.contact} className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
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
            <ContactCard key={link.label} link={link} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
