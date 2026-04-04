"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 35%, transparent 65%)",
        transition: "left 0.08s ease-out, top 0.08s ease-out",
      }}
    />
  );
}
