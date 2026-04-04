"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/portfolio";
import { scrollToSection } from "@/utils";
import { SECTION_IDS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(SECTION_IDS.home);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = Object.values(SECTION_IDS);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Mobile header (< sm) ── always fixed, always solid ── */}
      <header
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: 50 }}
        className="sm:hidden flex items-center justify-between px-4 py-3 bg-[#111113] border-b border-white/8"
      >
        <span className="text-sm font-bold text-white/70 tracking-widest select-none">CM</span>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col items-center justify-center gap-1.5 w-8 h-8"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-white/70 rounded-full"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-px bg-white/70 rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-white/70 rounded-full"
          />
        </button>
      </header>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ position: "fixed", top: "3.25rem", left: "1rem", width: "calc(100vw - 2rem)", zIndex: 49 }}
            className="sm:hidden rounded-2xl border border-white/10 bg-[#111113] shadow-2xl overflow-hidden"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = active === sectionId;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNav(sectionId)}
                  className={`w-full text-left px-5 py-3.5 text-sm font-medium border-b border-white/5 last:border-0 transition-colors ${
                    isActive
                      ? "text-blue-400 bg-blue-500/8"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop floating pill (≥ sm) ── */}
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
        className="hidden sm:flex justify-center pt-4 px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center gap-1 px-3 py-1.5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-[#1c1c1e]/95 backdrop-blur-2xl shadow-2xl"
              : "border-white/8 bg-[#1c1c1e]/70 backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNav(sectionId)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-white/50 hover:text-white hover:bg-white/8"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
