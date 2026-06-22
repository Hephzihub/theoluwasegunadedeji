// Portfolio content — copied verbatim from the design source
// (shared-work-items/project/Portfolio.dc.html, <script> block lines 158–250).

export interface Project {
  num: string;
  name: string;
  categories: string[];
  description: string;
  tech: string[];
  github: string;
  live: string;
  showLive: boolean;
  showGithub?: boolean; // Optional field to control GitHub button visibility (default true)
}

export interface Contact {
  label: string;
  value: string;
  href: string;
  target: "_self" | "_blank";
}

// Tech-stack chips shown in the About section.
export const stack: string[] = [
  "Node.js",
  "Express.js",
  "TypeScript",
  "Prisma",
  "MySQL",
  "MongoDB",
  // "Redis",
  // "Socket.IO",
  // "Zod",
  "PHP",
  "Laravel",
  "Docker",
  "Git",
  "Vitest",
];

// Project filter buttons (first entry "All" shows everything).
export const filterNames: string[] = [
  "All",
  "REST API",
  "Socket",
  "Cron Jobs",
  "Full Stack",
  "Authentication",
  "Testing",
];

// TODO: Replace the '#' placeholders in `github` / `live` with the real
// repository and live-demo URLs once provided.
export const projects: Project[] = [
  {
    num: "01",
    name: "Cedrus API — Trust Application Backend",
    categories: ["REST API", "Authentication", "Full Stack", "Testing"],
    description:
      "A production REST API processing multi-step trust applications through a 5-stage pipeline with UUID correlation logging for traceability. Models a normalized Prisma/MySQL schema, validates with Zod, hardens with Helmet, CORS and rate limiting, and is covered by Vitest and Supertest.",
    tech: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "Zod",
      "Nodemailer",
      "Vitest",
    ],
    github: "",
    live: "",
    showLive: false,
    showGithub: false,
  },
  {
    num: "02",
    name: "Blog API — RESTful Blogging Platform",
    categories: ["REST API", "Authentication", "Testing"],
    description:
      "A production-minded REST API for a blogging platform built with Express.js and MongoDB. Features JWT authentication, a draft-and-publish workflow, reading-time and read-count tracking, Cloudinary uploads, Redis-backed token blacklisting, rate limiting, and Sentry monitoring.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Redis",
      "Sentry",
      "Vitest",
    ],
    github: "https://github.com/Hephzihub/Blog_api/tree/master",
    live: "https://altschool-backend-engineer-journey.onrender.com/",
    showLive: true,
    showGithub: true,
  },
  {
    num: "03",
    name: "Task Management App — Full-Stack To-Do",
    categories: ["Full Stack", "Authentication", "Testing"],
    description:
      "A full-stack task manager with server-rendered EJS pages and JWT authentication. Users register, log in, create and manage tasks, track completion status, and view task statistics, all built on a modular architecture with bcrypt hashing and automated testing.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "JWT", "bcrypt"],
    github: "https://github.com/Hephzihub/Todo-App/tree/master",
    live: "https://altschool-todo-app-10ka.onrender.com/",
    showLive: true,
    showGithub: true,
  },
  {
    num: "04",
    name: "Real-Time Multiplayer Guessing Game",
    categories: ["Socket"],
    description:
      "A multiplayer number guessing game powered by Socket.IO with real-time, event-driven gameplay. Players create sessions, join with shareable codes, receive instant updates, chat live, and compete on a continuously updating scoreboard backed by Express.",
    tech: ["Node.js", "Express", "Socket.IO"],
    github: "https://github.com/Hephzihub/Guessing_Game/tree/master",
    live: "https://altschool-backend-engineer-journey-dbw4.onrender.com",
    showLive: true,
    showGithub: true,
  },
  {
    num: "05",
    name: "Birthday Reminder — Automated Email Service",
    categories: ["Cron Jobs", "Automation"],
    description:
      "An automated birthday email service that runs scheduled node-cron jobs daily to send personalized greetings. Imports contacts in bulk from CSV and Excel files, queues and dispatches mail via Nodemailer, and keeps detailed delivery logs in MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "node-cron", "Nodemailer"],
    github: "https://github.com/Hephzihub/birthday_reminder/tree/master",
    live: "https://birthday-reminder-2n3l.onrender.com",
    showLive: true,
    showGithub: true,
  },
  {
    num: "06",
    name: "Lagos State Wastewater Office",
    categories: ["REST API", "Authentication", "Full Stack"],
    description:
      "A large-scale Laravel REST API powering Lagos State wastewater permits across multiple service types, each with deep multi-stage approval pipelines. Features dual Passport/Sanctum auth guards with IP whitelisting, payment flows, PDF certificate rendering, CSV/Excel exports, and Brevo transactional email.",
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "Passport",
      "Sanctum",
      "Brevo",
      "Paystack",
    ],
    github: "#",
    live: "https://app.lswmo.lg.gov.ng/",
    showLive: false,
    showGithub: false,
  },
];

export const contacts: Contact[] = [
  {
    label: "EMAIL",
    value: "oluwasheges@gmail.com",
    href: "mailto:oluwasheges@gmail.com",
    target: "_self",
  },
  {
    label: "GITHUB",
    value: "github.com/hephzihub",
    href: "https://github.com/hephzihub",
    target: "_blank",
  },
  {
    label: "LINKEDIN",
    value: "in/oluwasegunadedeji",
    href: "https://www.linkedin.com/in/oluwasegunadedeji",
    target: "_blank",
  },
  {
    label: "X (TWITTER)",
    value: "@hephzihub",
    href: "https://x.com/hephzihub",
    target: "_blank",
  },
];
