"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(raw: string): { number: number; prefix: string; suffix: string } {
  const match = raw.match(/^([~]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: 0, prefix: "", suffix: raw };
  return { number: Number.parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });
  const [display, setDisplay] = useState("0");
  const { number, prefix, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) {
      setDisplay("0");
      return;
    }

    const duration = 1400;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - (1 - progress) ** 3;
      const current = eased * number;
      setDisplay(Number.isInteger(number) ? String(Math.round(current)) : current.toFixed(1));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
