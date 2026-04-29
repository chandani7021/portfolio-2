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
    href: "https://mail.google.com/mail/?view=cm&to=chandanimaurya56@gmail.com",
    icon: "mail",
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Redux", "Tailwind CSS", "D3.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "Node.js", "Express.js", "REST APIs", "JWT", "RBAC", "Microservices"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "CI/CD", "AWS", "Vercel", "Render", "Agile"],
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
    name: "District Clone",
    tech: ["React Native", "Expo", "React Navigation"],
    featured: true,
    points: [
      "Created for mobile users seeking a high-performance discovery experience. Implements complex UI patterns including smooth scroll animations, bottom-sheet interactions, and gesture-based navigation.",
      "Pixel-perfect React Native clone featuring guest screens, event discovery, booking flows, and profile management — optimized for production-grade smoothness and redirection logic.",
    ],
    github: "https://github.com/chandani7021/district-event-clone",
  },
  {
    name: "AI Training System",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini API"],
    featured: true,
    points: [
      "Built for L&D teams who were spending hours manually creating training content. The pipeline takes any document and produces ready-to-use modules in minutes.",
      "Built a document-to-training pipeline using Gemini API that auto-generates structured modules, quizzes, and final evaluations — reducing manual content creation effort by ~70%.",
    ],
    github: "https://github.com/chandani7021/ai-training",
    live: "https://ai-training-opal.vercel.app/login",
  },
  {
    name: "AI Interview Preparation Platform",
    tech: ["Next.js", "Firebase", "Vapi", "Gemini API"],
    featured: true,
    points: [
      "Developed for job seekers to practice high-pressure interviews with realistic voice AI. Provides instant, actionable feedback on communication and technical accuracy.",
      "Developed a voice-based AI interview simulator with real-time conversation, automated feedback, and scoring using Vapi and Gemini API.",
    ],
    github: "https://github.com/chandani7021/ai-prep",
    // live: "https://ai-interview-prep.vercel.app",
  },
  {
    name: "Emotion-Based Music Recommendation",
    tech: ["Python", "Flask", "React.js", "MongoDB"],
    featured: true,
    points: [
      "Designed for music lovers who want a soundtrack that matches their mood. Uses facial recognition and audio analysis to eliminate the need for manual playlist searching.",
      "Built an ML-powered recommendation engine using facial and audio emotion detection, achieving 74% facial and 85% audio emotion recognition accuracy.",
    ],
    github: "https://github.com/chandani7021/Music-Emotion",
  },
  {
    name: "Stock Price Prediction",
    tech: ["Python", "LSTM", "Machine Learning"],
    featured: true,
    points: [
      "Created for retail investors to identify market patterns using historical data. Leverages LSTM models to forecast price movements and visualize sector-specific trends.",
      "Uses LSTM algorithms to predict opening stock prices by analysing live datasets, uncovering sector-specific trends and aiding market analysis.",
    ],
    github: "https://github.com/chandani7021/Stock-Price-Prediction",
  },
/*
  {
    name: "Stack Overflow Clone",
    tech: ["React.js", "Redux", "Node.js", "Express.js"],
    featured: false,
    points: [
      "A collaborative hub for developers to share knowledge and solve problems. Features a robust gamification and reputation system to encourage high-quality contributions.",
      "Full-stack Q&A platform with user authentication, question/answer capabilities, and profile management — closely replicating core StackOverflow features.",
    ],
    github: "https://github.com/chandani7021/stackoverflow_Clone",
    // live: "https://stack-overflow-clone-by-chandani.netlify.app/",
  },
*/
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
    href: "https://mail.google.com/mail/?view=cm&to=chandanimaurya56@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+91 7021405056",
    href: "copy:+917021405056",
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
