"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WATCH_DEMO_LABEL } from "@/constants";
import Icon from "@/components/ui/Icon";

interface DemoVideoProps {
  src: string;
  poster: string;
  title: string;
}

/**
 * "Watch Demo" link that opens the project recording in a lightbox, keeping the card compact.
 * Download, picture-in-picture and the right-click "Save video as…" menu are hidden. This deters
 * casual saving only — anything a browser can play can still be captured by a determined visitor.
 */
export default function DemoVideo({ src, poster, title }: DemoVideoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05, x: 2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
      >
        <Icon name="play" size={14} label="Play" />
        {WATCH_DEMO_LABEL}
      </motion.button>

      {/* Portal: the card's tilt transform would otherwise trap position:fixed inside it */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${title} demo`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  onContextMenu={(e) => e.preventDefault()}
                  className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1e] shadow-2xl"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
                    <span className="text-sm font-medium text-white/80">{title}</span>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close demo"
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <Icon name="close" size={16} />
                    </button>
                  </div>
                  <video
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    playsInline
                    controls
                    controlsList="nodownload noremoteplayback noplaybackrate"
                    disablePictureInPicture
                    disableRemotePlayback
                    draggable={false}
                    className="block w-full max-h-[80vh] bg-black"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
