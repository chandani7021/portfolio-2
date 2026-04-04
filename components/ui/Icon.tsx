"use client";

import { ICON_PATHS } from "@/utils";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  /** Accessible label — omit for decorative icons (aria-hidden will be set) */
  label?: string;
}

export default function Icon({ name, className = "", size = 20, label }: IconProps) {
  const path = ICON_PATHS[name];
  if (!path) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {label && <title>{label}</title>}
      <path d={path} />
    </svg>
  );
}
