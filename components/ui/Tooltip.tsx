"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
  position?: "top" | "bottom";
}

export default function Tooltip({ label, children, position = "top" }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const isTop = position === "top";

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{ opacity: 0, y: isTop ? 4 : -4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isTop ? 4 : -4, scale: 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 px-2 py-1 rounded-md text-xs font-medium text-white bg-[#2a2a2e] border border-white/10 whitespace-nowrap shadow-xl ${
              isTop ? "bottom-full mb-2" : "top-full mt-2"
            }`}
          >
            {label}
            {/* Arrow */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent ${
                isTop
                  ? "top-full border-t-4 border-t-[#2a2a2e]"
                  : "bottom-full border-b-4 border-b-[#2a2a2e]"
              }`}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
