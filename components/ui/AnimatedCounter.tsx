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
  const { number, prefix, suffix } = parseValue(value);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - (1 - progress) ** 3;
      const current = eased * number;
      
      const formatted = Number.isInteger(number) 
        ? String(Math.round(current)) 
        : current.toFixed(1);
        
      setDisplay(formatted);
      
      if (step >= steps) {
        setDisplay(Number.isInteger(number) ? String(number) : number.toFixed(1));
        clearInterval(timer);
      }
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
