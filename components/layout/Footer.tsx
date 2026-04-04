import { socialLinks } from "@/data/portfolio";
import { FOOTER_TEXT } from "@/constants";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30">{FOOTER_TEXT}</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <Tooltip key={link.label} label={link.label} position="top">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/40 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              >
                <Icon name={link.icon} size={14} label={link.label} />
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
