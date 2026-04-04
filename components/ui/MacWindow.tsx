import { WINDOW_CONTROLS } from "@/constants";

interface MacWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

export default function MacWindow({
  title,
  children,
  className = "",
  accentColor = "bg-blue-500/10",
}: MacWindowProps) {
  return (
    <div
      className={`rounded-2xl border border-white/8 bg-[#1c1c1e]/80 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {/* Title bar */}
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b border-white/6 rounded-t-2xl ${accentColor}`}
      >
        {/* Traffic lights */}
        <span
          title={WINDOW_CONTROLS.close}
          className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] cursor-default"
        />
        <span
          title={WINDOW_CONTROLS.minimise}
          className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d4a017] cursor-default"
        />
        <span
          title={WINDOW_CONTROLS.maximise}
          className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1dab2f] cursor-default"
        />
        {title && (
          <span className="ml-3 text-xs text-white/40 font-medium tracking-wide select-none">
            {title}
          </span>
        )}
      </div>
      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}
