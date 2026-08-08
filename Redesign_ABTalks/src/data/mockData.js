export const MOCK_STUDENT = {
  name: "Aarav Sharma",
  username: "aarav_dev",
  college: "IIT Bombay '26",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  streak: 11,
  maxStreak: 11,
  completedDays: 11,
  totalDays: 60,
  rank: 143,
  totalStudents: 10420,
  topPercentile: "Top 18%",
  recruiterReadiness: 68,
  xp: 1420,
  githubLink: "https://github.com/aarav-sharma-dev",
  linkedinLink: "https://linkedin.com/in/aarav-sharma-dev",
  track: "Full-Stack Web Development",
  streakFreezeAvailable: true,
  streakFreezeActive: true,
  momentumScore: "🔥 Fire Momentum (100% Consistent)",
  portfolioProjectsCount: 4
};

export const MOCK_ACHIEVEMENTS = [
  {
    id: "first_commit",
    title: "First Commit",
    description: "Submitted your first day challenge code to GitHub.",
    icon: "GitCommit",
    unlocked: true,
    unlockedAt: "Day 1"
  },
  {
    id: "streak_7",
    title: "7 Day Streak",
    description: "Maintained a non-stop 7 day coding momentum.",
    icon: "Flame",
    unlocked: true,
    unlockedAt: "Day 7"
  },
  {
    id: "security_champ",
    title: "Security Shield",
    description: "Verified all submission links with clean GitHub signatures.",
    icon: "ShieldCheck",
    unlocked: true,
    unlockedAt: "Day 10"
  },
  {
    id: "halfway",
    title: "30 Day Warrior",
    description: "Complete 30 consecutive challenge days.",
    icon: "Trophy",
    unlocked: false,
    progress: "11/30 Days"
  },
  {
    id: "portfolio_god",
    title: "Portfolio Ready",
    description: "Build 5 production-grade fullstack projects.",
    icon: "Briefcase",
    unlocked: false,
    progress: "2/5 Projects"
  },
  {
    id: "champ_60",
    title: "60-Day Titan",
    description: "Finish all 60 challenge days & claim your certificate.",
    icon: "Award",
    unlocked: false,
    progress: "11/60 Days"
  }
];

export const MOCK_LEADERBOARD = [
  { rank: 1, name: "Ananya Iyer", college: "IIT Madras", streak: 58, xp: 7250, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
  { rank: 2, name: "Vikram Malhotra", college: "IIT Delhi", streak: 57, xp: 7120, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" },
  { rank: 3, name: "Sneha Reddy", college: "NIT Trichy", streak: 55, xp: 6890, avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" },
  { rank: 143, name: "Aarav Sharma (You)", college: "IIT Bombay", streak: 11, xp: 1420, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80", isUser: true }
];

export const MOCK_RECENT_SUBMISSIONS = [
  {
    id: "sub_1",
    student: "Devansh Mehta",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    day: 12,
    taskTitle: "Real-Time Kanban Task Board",
    timeAgo: "10 mins ago",
    githubCommit: "https://github.com",
    linkedinPost: "https://linkedin.com"
  },
  {
    id: "sub_2",
    student: "Kavya Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    day: 12,
    taskTitle: "Real-Time Kanban Task Board",
    timeAgo: "24 mins ago",
    githubCommit: "https://github.com",
    linkedinPost: "https://linkedin.com"
  },
  {
    id: "sub_3",
    student: "Rohan Kapoor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    day: 11,
    taskTitle: "REST API Rate Limiter Middleware",
    timeAgo: "1 hour ago",
    githubCommit: "https://github.com",
    linkedinPost: "https://linkedin.com"
  }
];

export const MOCK_MOTIVATIONAL_QUOTES = [
  { quote: "Consistency is not about perfection. It's about showing up every single day after college.", author: "ABTalks Engineering Team" },
  { quote: "Small daily commits add up to a career-defining GitHub profile.", author: "Senior Tech Recruiter @ Google" },
  { quote: "Don't break the chain. Protect your daily flame 🔥 at all costs.", author: "ABTalks 60-Day Graduate" }
];

export const TRACKS_DATA = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    projects: "60 Projects",
    students: "6,400+ Enrolled",
    popular: true
  },
  {
    id: "aiml",
    title: "AI Engineering & LLM Apps",
    projects: "60 Projects",
    students: "2,800+ Enrolled",
    popular: false
  },
  {
    id: "devops",
    title: "DevOps & Cloud Systems",
    projects: "60 Projects",
    students: "1,220+ Enrolled",
    popular: false
  }
];

export const MOCK_DAY_12_CHALLENGE = {
  dayNumber: 12,
  title: "Real-Time Kanban Task Board",
  estTime: "45 mins",
  difficulty: "Intermediate",
  track: "Full-Stack React Track",
  badgeUnlock: "Kanban Master",
  xpReward: 150,
  description: "Build a sleek, interactive Drag-and-Drop Kanban board allowing students to organize tasks into To-Do, In Progress, and Completed columns. The board should persist task data locally and support column reordering.",
  learningObjectives: [
    "Master state management for multi-column task categorizations.",
    "Implement Drag and Drop (HTML5 DnD API or touch movement handlers).",
    "Persist task data locally via localStorage for continuous sessions.",
    "Design mobile-responsive glassmorphism cards with priority indicators."
  ],
  requirements: [
    "At least 3 columns: To-Do, In Progress, Done.",
    "Ability to create new tasks with title, tag, and priority level.",
    "Drag-and-drop or one-tap movement between columns.",
    "Data persistence across browser reloads."
  ],
  deliverables: [
    "GitHub Public Repository URL containing source code & documentation.",
    "GitHub Specific Commit SHA URL representing today's work.",
    "LinkedIn Post URL showcasing a short video demo with #ABTalks60Days."
  ],
  checklist: [
    { id: 1, text: "Fork/Clone starter workspace repository", completed: true },
    { id: 2, text: "Build glassmorphic layout for 3 columns", completed: true },
    { id: 3, text: "Write state hook for adding & moving tasks", completed: false },
    { id: 4, text: "Add localStorage persistence & auto-sync", completed: false },
    { id: 5, text: "Push commit to GitHub & copy commit URL", completed: false },
    { id: 6, text: "Post short screen recording on LinkedIn", completed: false }
  ],
  resources: [
    { title: "React State & Drag-and-Drop Guide", type: "Tutorial", url: "https://react.dev", time: "8 min read" },
    { title: "MDN HTML Drag and Drop API Specs", type: "Documentation", url: "https://developer.mozilla.org", time: "5 min read" },
    { title: "ABTalks Sample Kanban Architecture", type: "Reference Repo", url: "https://github.com", time: "Code Spec" }
  ]
};

// Full 60 Days Curriculum List
export const FULL_60_DAYS_CURRICULUM = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1;
  const titles = [
    "HTML5 Semantic Portfolio Shell",
    "CSS Flexbox & Glassmorphism Card System",
    "JavaScript Async Fetch & Weather Widget",
    "Interactive Student Quiz App",
    "Tailwind CSS Landing Page Shell",
    "React Component Architecture",
    "React Hooks State Management",
    "GitHub API Profile Analyzer",
    "Markdown Blog Engine in React",
    "REST API Rate Limiter Middleware",
    "JWT Authentication Mock UI",
    "Real-Time Kanban Task Board",
    "WebSocket Live Chat App",
    "Node.js Express CRUD REST Server",
    "MongoDB Mongoose Data Schemas",
    "Full-Stack E-Commerce Product Catalog",
    "Stripe Payments Sandbox UI",
    "Redis Caching Layer Prototype",
    "Docker Containerized Node App",
    "CI/CD GitHub Actions Pipeline",
    "Next.js Server Side Rendering Shell",
    "GraphQL API Resolver Query Engine",
    "Prisma ORM Database Migrations",
    "Tailwind Dark Mode OLED Switcher",
    "Zustand Global State Manager App",
    "React Query Server State Cache",
    "OpenAI API Prompt Engineering Tool",
    "Vector Embeddings Semantic Search",
    "RAG Knowledge Base Document Q&A",
    "LangChain AI Agent Runner",
    "System Design Microservices Architecture",
    "Kafka Event Driven Message Queue",
    "PostgreSQL Relational Joins & Indexing",
    "Kubernetes Pod Deployment Sandbox",
    "Terraform Cloud Infrastructure as Code",
    "AWS Lambda Serverless Functions",
    "WebRTC P2P Video Calling Prototype",
    "OAuth 2.0 Security Access Control",
    "Cryptographic SHA-256 Signature App",
    "ABTalks 60-Day Challenge Final Portfolio App"
  ];

  const title = titles[(day - 1) % titles.length] || `Project Day ${day}: SDE Engineering Module`;
  const phase = day <= 15 ? 'Foundation' : day <= 35 ? 'Intermediate' : 'Advanced';
  const difficulty = day <= 15 ? 'Beginner' : day <= 35 ? 'Intermediate' : 'Advanced';
  const status = day <= 11 ? 'completed' : day === 12 ? 'today' : 'locked';

  return {
    day,
    title,
    phase,
    difficulty,
    status,
    estTime: `${30 + (day % 4) * 15} mins`,
    desc: `Build production-grade ${title.toLowerCase()} for your developer portfolio.`
  };
});
