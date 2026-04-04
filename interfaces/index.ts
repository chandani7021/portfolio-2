export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
  type: "work" | "internship";
}

export interface Project {
  name: string;
  tech: string[];
  points: string[];
  github?: string;
  live?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  cgpa: string;
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
}

export interface ContactLink {
  label: string;
  value: string;
  /** Use "copy:<text>" to copy text to clipboard instead of navigating */
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface DockItem {
  label: string;
  icon: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
