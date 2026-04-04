"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/portfolio";
import { scrollToSection } from "@/utils";
import { SECTION_IDS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(SECTION_IDS.home);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300`}
    >
      <nav
        className={`flex items-center gap-1 px-3 py-1.5 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#1c1c1e]/90 backdrop-blur-2xl shadow-2xl"
            : "border-transparent bg-white/5 backdrop-blur-md"
        }`}
      >
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = active === sectionId;
          return (
            <button
              key={item.label}
              onClick={() => scrollToSection(sectionId)}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
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
    </header>
  );
}
