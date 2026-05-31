// ============================================================
// data.ts — SINGLE SOURCE OF TRUTH
// Edit ONLY this file to update your entire portfolio.
// Never touch component files for content changes.
// ============================================================

export const meta = {
  name: "Ashwika Bhatnagar",
  title: "Software Development Engineer",
  tagline: "I build systems that think, scale, and ship.",
  taglineSub:
    "CS undergrad turning ideas into production-grade software — from AI pipelines to secure full-stack platforms.",
  email: "ashwikabhatnagar@gmail.com",
  phone: "+91-751-8055-310",
  location: "Jaipur, Rajasthan, India",
  availabilityBadge: "Open to Opportunities",
  // Add your resume PDF to the /public folder and update path
  resumeUrl: "/Ashwika_Bhatnagar_Resume.pdf",
  // Add your photo to /public/photo.jpg and set: avatar: "/photo.jpg"
  avatar: "/photo.jpg",
  gmailUrl: "https://mail.google.com/mail/?view=cm&to=ashwikabhatnagar@gmail.com",
  socials: {
    github: "https://github.com/AshwikaB",
    linkedin: "https://www.linkedin.com/in/ashwika-bhatnagar-1370251b8/",
    leetcode: "https://leetcode.com/u/Ashwika_Bhatnagar/",
    email: "ashwikabhatnagar@gmail.com",
  },
};

// ============================================================
// ABOUT
// ============================================================
export const about = {
  paragraphs: [
    "I'm a Computer Science undergrad at Manipal University Jaipur with a strong interest in building software that is thoughtfully engineered — not just functional. I gravitate toward problems at the intersection of systems design, AI integration, and security.",
    "I care deeply about writing clean, maintainable code and understanding the 'why' behind every architectural decision. My goal is to grow into an engineer who can own systems end-to-end — from design to deployment.",
  ],
};

// ============================================================
// SKILLS
// Add/remove/reorder freely. Categories are fully customizable.
// ============================================================
export const skills: {
  category: string;
  items: string[];
}[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["FastAPI", "React.js", "sentence-transformers", "scikit-learn", "pdfplumber"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "nginx", "Vite", "Linux", "LaTeX", "Arduino", "VS Code"],
  },
  {
    category: "Concepts",
    items: ["Data Structures & Algorithms", "OOP", "REST APIs", "JWT Auth", "Docker Compose", "Semantic Search"],
  },
];

// ============================================================
// PROJECTS
// ============================================================
export const projects: {
  title: string;
  subtitle: string;
  period: string;
  status: "live" | "in-progress" | "archived";
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
  featured: boolean;
}[] = [
  {
    title: "ResuMate",
    subtitle: "Resume Intelligence Platform",
    period: "Mar 2026",
    status: "live",
    description:
      "A full-stack resume analysis platform that scores resumes against job descriptions via a custom multi-factor ATS algorithm, integrated with Claude AI as a real-time streaming chatbot for context-aware resume coaching.",
    highlights: [
      "Built custom multi-factor ATS algorithm: keyword matching, semantic similarity (sentence-transformers), quality scoring, and experience fit",
      "Integrated Anthropic Claude 3.5 Haiku as a real-time streaming chatbot over SSE with persistent conversation memory and offline fallback",
      "Implemented JWT-based authentication with PBKDF2 password hashing and per-user analysis history",
      "Live job matching via SerpAPI — deployed end-to-end using Docker Compose with nginx reverse proxy",
    ],
    stack: ["Python", "FastAPI", "React.js", "SQLite", "sentence-transformers", "Docker", "nginx", "JWT", "SSE", "Claude API"],
    links: [
      { label: "GitHub", url: "#" }, // ← replace with real URL
    ],
    featured: true,
  },
  {
    title: "ORBIT",
    subtitle: "Cybersecurity Learning Platform",
    period: "Nov 2025",
    status: "live",
    description:
      "A gamified Blue Team cybersecurity learning platform covering SOC operations, SIEM, Incident Response, Digital Forensics, and Cryptography — built as a free, offline-ready alternative to expensive training tools.",
    highlights: [
      "Curriculum aligned to NIST NICE Framework competencies and MITRE ATT&CK",
      "Role-based progression system: Novice → Hacker → Wizard with persistent progress tracking",
      "Covers SOC operations, SIEM, Incident Response, Digital Forensics, and Cryptography",
      "Fully offline-ready — no paywalls, no dependencies on external services",
    ],
    stack: ["HTML", "CSS", "JavaScript", "MITRE ATT&CK", "NIST NICE"],
    links: [
      { label: "GitHub", url: "#" }, // ← replace with real URL
    ],
    featured: true,
  },
  // ── Add future projects below ───────────────────────────────
  // {
  //   title: "Project Name",
  //   subtitle: "Short descriptor",
  //   period: "Month Year",
  //   status: "live",
  //   description: "What this project does and why it matters.",
  //   highlights: [
  //     "Key technical decision or result",
  //     "Another notable achievement",
  //   ],
  //   stack: ["Tech1", "Tech2"],
  //   links: [{ label: "GitHub", url: "#" }],
  //   featured: false,
  // },
];

// ============================================================
// EXPERIENCE
// Empty now — ready for your first internship.
// ============================================================
export const experience: {
  company: string;
  role: string;
  type: "Internship" | "Full-Time" | "Part-Time" | "Contract" | "Freelance";
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack: string[];
}[] = [
  // ── Add internships and jobs here ──────────────────────────
  // {
  //   company: "Company Name",
  //   role: "Software Engineer Intern",
  //   type: "Internship",
  //   period: "Jun 2026 – Aug 2026",
  //   location: "Remote",
  //   description: "One-line summary of the role.",
  //   highlights: [
  //     "Built X that improved Y by Z%",
  //     "Designed and shipped feature A using B",
  //   ],
  //   stack: ["Tech1", "Tech2"],
  // },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================
export const achievements: {
  title: string;
  org: string;
  period: string;
  badge: string;
  description: string;
  highlights: string[];
}[] = [
  {
    title: "Women Engineers Scholar '24",
    org: "TalentSprint & Google",
    period: "Feb 2024 – Mar 2026",
    badge: "🏆",
    description:
      "Competitively selected among the top 200 scholars from a national pool of 30,000+ first-year B.Tech female engineers across India.",
    highlights: [
      "Top 200 of 30,000+ applicants nationwide",
      "100% full scholarship awarded",
      "2-year intensive program with Google Engineers",
      "Structured bootcamps, technical assignments & 1:1 mentorship",
    ],
  },
  {
    title: "Technical Mentee",
    org: "Codess Cafe",
    period: "2024",
    badge: "⚡",
    description:
      "Selected for Codess Cafe's structured technical mentorship program focused on software development and industry best practices.",
    highlights: [
      "Hands-on guidance in software development & project building",
      "Collaborated on real-world projects with experienced engineers",
      "Peer learning sessions and exposure to modern dev workflows",
    ],
  },
  {
    title: "ICSE Class X — School Topper",
    org: "ICSE Board",
    period: "Mar 2021",
    badge: "🥇",
    description:
      "Achieved 97.8% in ICSE Class X Board Examinations — highest marks in school.",
    highlights: [
      "97.8% aggregate — School Topper",
      "Subject Topper in Physics & Mathematics",
      "Highest marks in school across all streams",
      "Strong foundation in Science & Mathematics from an early stage",
    ],
  },
  // ── Add new achievements here ───────────────────────────────
];

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications: {
  name: string;
  issuer: string;
  period: string;
  score?: string;
  link?: string;
  certificateFile?: string;
}[] = [
  {
    name: "Women Engineers Program",
    issuer: "TalentSprint & Google",
    period: "Feb 2024 – Mar 2026",
    certificateFile: "/certificates/google-we-program.pdf",
  },
  {
    name: "Data Structure and Algorithms using Java",
    issuer: "NPTEL",
    period: "Jul – Oct 2024",
    score: "64.35 / 100",
    certificateFile: "/certificates/dsa-java-nptel.pdf",
  },
  {
    name: "Design and Analysis of Algorithms",
    issuer: "NPTEL",
    period: "Jan – Mar 2025",
    score: "53.63 / 100",
    certificateFile: "/certificates/daa-nptel.pdf",
  },
  // ── Add more certifications here ───────────────────────────
];

// ============================================================
// EDUCATION
// ============================================================
export const education: {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  cgpa?: string;
  cgpaMax?: string;
  percentage?: string;
  coursework: string[];
  note?: string;
}[] = [
  {
    institution: "Manipal University Jaipur",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "Jul 2023 – May 2027",
    location: "Jaipur, Rajasthan, India",
    cgpa: "8.33",
    cgpaMax: "10.0",
    coursework: [
      "C Language",
      "Data Structures and Algorithms",
      "Design and Analysis of Algorithms",
      "Object-Oriented Programming (Java)",
      "Computer Networks",
      "Operating Systems",
      "RDBMS",
      "Machine Learning",
      "Cybersecurity",
      "Ethical Hacking",
      "Secure Programming",
    ],
  },
  {
    institution: "Methodist High School, Kanpur",
    degree: "Class XII — ISC Board",
    field: "Science (PCM)",
    period: "2023",
    location: "Kanpur, Uttar Pradesh, India",
    percentage: "85%",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
  },
  {
    institution: "Methodist High School, Kanpur",
    degree: "Class X — ICSE Board",
    field: "",
    period: "2021",
    location: "Kanpur, Uttar Pradesh, India",
    percentage: "97.8%",
    note: "School Topper · Subject Topper in Physics & Mathematics",
    coursework: [
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer Science",
      "History",
      "Geography",
      "Civics",
    ],
  },
];
