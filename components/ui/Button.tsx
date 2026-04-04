"use client";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  download?: boolean;
}

export default function Button({
  label,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  target,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer active:scale-95";

  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-400/30 hover:-translate-y-0.5",
    secondary:
      "bg-white/8 hover:bg-white/12 text-white border border-white/10 hover:border-white/20 hover:-translate-y-0.5",
    ghost: "text-white/60 hover:text-white hover:bg-white/8",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={classes}
        download={download}
      >
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {icon}
      {label}
    </button>
  );
}
