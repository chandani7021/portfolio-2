interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border border-white/10 bg-white/5 text-white/70 ${className}`}
    >
      {label}
    </span>
  );
}
