import type {
  Experience,
  Project,
  Skill,
  Education,
  Achievement,
  ContactLink,
  NavItem,
  SocialLink,
} from "@/interfaces";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chandani-mourya",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/chandani7021",
    icon: "github",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/chandani7021",
    icon: "code",
  },
  {
    label: "Email",
    href: "mailto:chandanimaurya56@gmail.com",
    icon: "mail",
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "D3.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "Vercel", "Render"],
  },
  {
    category: "AI / ML",
    items: ["Gemini API", "Vapi", "Prompt Engineering", "LLM Integration"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Copods",
    duration: "Mar 2024 – Present",
    location: "Mumbai, India",
    type: "work",
    points: [
      "Architected and delivered a full-stack Cybersecurity Platform (NIST-based) using FastAPI, PostgreSQL, and React; reduced API response time by ~40% through backend and query optimisation.",
      "Built a Data Visualisation Showcase Platform with reusable D3.js components (Sankey, Network Graphs, Bubble Charts), cutting client demo preparation time by ~50%.",
      "Developed a cross-platform Leave Management System using React, React Native, and Django with role-based approval workflows, improving approval efficiency by ~30%.",
      "Built a scalable Booking Platform UI for iOS & Android using React Native, optimising performance for ~25% faster load times.",
      "Owned end-to-end product delivery and client communication across all projects as the sole developer for 6+ months.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "NullClass",
    duration: "Aug 2023 – Oct 2023",
    location: "Remote",
    type: "internship",
    points: [
      "Built a Q&A platform with subscription management, gamified rewards, multilingual support, and device-level analytics; increased user engagement by ~35%.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "AI Training System",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini API"],
    points: [
      "Built a document-to-training pipeline using Gemini API that auto-generates structured modules, quizzes, and final evaluations — reducing manual content creation effort by ~70%.",
    ],
    github: "https://github.com/chandani7021/ai-training",
     live: "https://ai-training-opal.vercel.app/login",
  },
  {
    name: "AI Interview Preparation Platform",
    tech: ["Next.js", "Firebase", "Vapi", "Gemini API"],
    points: [
      "Developed a voice-based AI interview simulator with real-time conversation, automated feedback, and scoring using Vapi and Gemini API.",
    ],
    github: "https://github.com/chandani7021/ai-prep",
    // live: "https://ai-interview-prep.vercel.app",
  },
  {
    name: "Emotion-Based Music Recommendation",
    tech: ["Python", "Flask", "React.js", "MongoDB"],
    points: [
      "Built an ML-powered recommendation engine using facial and audio emotion detection, achieving 74% facial and 85% audio emotion recognition accuracy.",
    ],
    github: "https://github.com/chandani7021/emotion-music-recommendation",
  },
  {
    name: "Stack Overflow Clone",
    tech: ["React.js", "Redux", "Node.js", "Express.js"],
    points: [
      "Full-stack Q&A platform with user authentication, question/answer capabilities, and profile management — closely replicating core StackOverflow features.",
    ],
    github: "https://github.com/chandani7021/stackoverflow_Clone",
    // live: "https://stack-overflow-clone-by-chandani.netlify.app/",
  },
  {
    name: "Sentiment Analysis Website",
    tech: ["Python", "React", "Twitter API"],
    points: [
      "Analyses tweet sentiments and emotions with user-defined tweet counts, presenting results visually through pie charts for easy comprehension.",
    ],
    github: "https://github.com/chandani7021/Twitter-Sentiment-Analysis",
  },
  {
    name: "Movie Recommendation",
    tech: ["React"],
    points: [
      "Search-driven movie recommendation frontend — surfaces title, type, release year, and poster for any movie using a clean, intuitive interface.",
    ],
    github: "https://github.com/chandani7021/Movie-Recommendation",
  },
  {
    name: "Stock Price Prediction",
    tech: ["Python", "LSTM", "Machine Learning"],
    points: [
      "Uses LSTM algorithms to predict opening stock prices by analysing live datasets, uncovering sector-specific trends and aiding market analysis.",
    ],
    github: "https://github.com/chandani7021/Stock-Price-Prediction",
  },
];

export const education: Education[] = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "University of Mumbai",
    duration: "2019 – 2023",
    location: "Navi Mumbai, Maharashtra",
    cgpa: "9.4 / 10",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon 2022 – Finalist",
    organization: "Ministry of Education",
    date: "Aug 2022",
    location: "Gujarat",
    description:
      "Designed and presented a blockchain-based disaster response coordination platform for the National Disaster Response Force (NDRF) at the national level.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "chandanimaurya56@gmail.com",
    href: "mailto:chandanimaurya56@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+91 7021405056",
    href: "tel:+917021405056",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "chandani-mourya",
    href: "https://linkedin.com/in/chandani-mourya",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "chandani7021",
    href: "https://github.com/chandani7021",
    icon: "github",
  },
];
