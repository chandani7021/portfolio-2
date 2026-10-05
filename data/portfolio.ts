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
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Zustand", "Tailwind CSS", "ShadCN", "Electron"],
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
    items: ["LLM Integration", "Prompt Engineering", "Gemini API", "Ollama", "Qwen 2.5", "Whisper", "Vapi", "Claude Code"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Copods",
    duration: "Mar 2024 – Present",
    location: "Pune, India",
    type: "work",
    points: [
      "Built an M&A due-diligence platform (Next.js, Node.js, PostgreSQL, Firebase, AWS) as one of 10 engineers across two partner orgs; advisors upload data-room documents and answer buyer diligence questions via AI-generated responses or manual input, cutting review time by 20% for early users.",
      "Architected a full-stack cybersecurity platform (FastAPI, PostgreSQL, React) as sole engineer working directly with the client, with JWT/RBAC access control; improved API performance by 40% via query optimization, indexing, and caching.",
      "Shipped an AI meeting-to-pitch-deck generator (Electron, Express.js, Whisper, Qwen 2.5 via Ollama) that transcribes live meetings and auto-drafts client-ready decks, saving 2 hrs of manual deck preparation per meeting.",
      "Built a Google Chat leave-management bot (Apps Script, Google Cloud) that replaced HR's manual spreadsheet process for requests, approvals, and tracking.",
      "Own the end-to-end product lifecycle on solo builds — architecture, development, unit and integration testing (Jest, Pytest), CI/CD deployment, and client communication — working in two-week Agile cycles with peer code review.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "NullClass",
    duration: "Aug 2023 – Oct 2023",
    location: "Remote",
    type: "internship",
    points: [
      "Built a Q&A platform with subscription tiers, multilingual support, and analytics (Node.js, JWT, REST APIs), lifting user engagement by 35%.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Meeting-to-Pitch-Deck Generator",
    tech: ["Electron", "Express.js", "Whisper", "Ollama"],
    featured: true,
    points: [
      "Desktop app that turns live client meetings into ready-to-present pitch decks — saving ~2 hrs of manual deck preparation per meeting.",
      "Transcribes meetings with Whisper and generates a structured pitch from the transcript using Qwen 2.5 running locally via Ollama, keeping client conversations off third-party servers.",
      "Added context management so users can refine the generated pitch with follow-up prompts — the model keeps the meeting transcript and prior edits in context to apply targeted changes.",
    ],
    github: "https://github.com/chandani7021/meeting-to-pitch-deck-generator",
    demo: { video: "/demos/pitch-deck.mp4", poster: "/demos/pitch-deck-poster.webp" },
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
    name: "TicketFlow",
    tech: ["React Native", "Expo", "TypeScript", "Seats.io"],
    featured: true,
    points: [
      "Event discovery and booking app for mobile users, built with smooth scroll animations, bottom-sheet interactions, and gesture-based navigation — tuned for smooth performance on low-end devices.",
      "Built an end-to-end booking flow with interactive live seat selection (Seats.io), OTP authentication, event search, and dark mode.",
    ],
    github: "https://github.com/chandani7021/ticket-flow",
  },
/*
  {
    name: "Emotion-Based Music Recommendation",
    tech: ["Python", "Flask", "React.js", "MongoDB"],
    featured: false,
    points: [
      "Designed for music lovers who want a soundtrack that matches their mood. Uses facial recognition and audio analysis to eliminate the need for manual playlist searching.",
      "Built an ML-powered recommendation engine using facial and audio emotion detection, achieving 74% facial and 85% audio emotion recognition accuracy.",
    ],
    github: "https://github.com/chandani7021/Music-Emotion",
  },
  {
    name: "Stock Price Prediction",
    tech: ["Python", "LSTM", "Machine Learning"],
    featured: false,
    points: [
      "Created for retail investors to identify market patterns using historical data. Leverages LSTM models to forecast price movements and visualize sector-specific trends.",
      "Uses LSTM algorithms to predict opening stock prices by analysing live datasets, uncovering sector-specific trends and aiding market analysis.",
    ],
    github: "https://github.com/chandani7021/Stock-Price-Prediction",
  },
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
    href: "mailto:chandanimaurya56@gmail.com",
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
