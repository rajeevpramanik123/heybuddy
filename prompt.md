# 📄 ABTalks 60-Day Challenge — Master Development Prompt & Project Specification

> **Note for Evaluators:** This document serves as the master prompt and technical specification used to design, architect, and build the **ABTalks 60-Day Coding Challenge** application. It captures the core product vision, feature requirements, design aesthetics, user flows, and collaborator contributions.

---

## 🌟 Project Vision & Core Goal

Build a modern, mobile-first web application for **ABTalks 60-Day Coding Challenge** — a high-discipline, project-based engineering platform designed for college students in India.

The primary objective of the platform is to solve student coding consistency by encouraging learners to:
1. Build **60 hands-on engineering projects** over 60 days.
2. Push daily **GitHub commits** and publish **LinkedIn proof of work**.
3. Maintain an active **Streak Flame 🔥** with a built-in **Streak Freeze** revival system.
4. Earn a **Recruiter Readiness Score** and a cryptographically verified SHA-256 completion certificate upon finishing the challenge.

---

## 👥 Collaborators & Engineering Team

This project was built collaboratively by three core contributors (as tracked in the repository's git commit history):

- 👑 **[rajeevpramanik123](https://github.com/rajeevpramanik123)** — *Lead Maintainer & Full-Stack Developer* (28 Commits)  
  *Responsible for core React architecture, state management, dashboard analytics, streak engine, and route optimization.*
- ⭐️ **[Aditi Ansh](https://github.com/aditiansh8183)** — *Frontend & Deployment Pipeline Contributor* (9 Commits)  
  *Responsible for Netlify/Vercel configuration (`vercel.json`, `_redirects`), mobile navigation, and responsive card systems.*
- ⚡️ **[RK29-R](https://github.com/RK29-R)** — *UI & Component Architecture Contributor* (2 Commits)  
  *Responsible for initial prototype setup, UI styling primitives, and layout foundation.*

---

## 📱 Main Application Routes & User Flows

The application supports smooth client-side routing via React Router 7 (`HashRouter`) across three primary routes:

1. **` / ` — Landing Page (Hero & Track Showcase)**
   - High-impact hero section with headline: *"Transform Your Coding Skills in 60 Days."*
   - Explains the 4-step proof-of-work flow: *Choose Track ➔ Build Project ➔ Submit GitHub/LinkedIn Links ➔ Unlock Certificate.*
   - Learning track selection cards (Full-Stack Web Dev, AI Engineering, DevOps & Cloud Systems).
   - Clear CTA buttons to jump straight into the challenge or link accounts.

2. **` /dashboard ` — Student Analytics & Momentum Dashboard**
   - **Streak Engine & Flame Badge**: Real-time display of active streak days (e.g., `11 DAYS 🔥`).
   - **Streak Freeze Revival Action**: 1-click option to revive a broken streak (`Use Freeze (Revive to 11d 🔥)`) or start fresh (`Start Fresh Streak Today`).
   - **60-Day Contribution Heatmap**: Visual contribution grid tracking active daily submissions.
   - **Student Leaderboard**: Peer ranking table featuring top student performers from top colleges.
   - **Unregistered Guest State Handling**: Shows a clear, unranked state (*"Unlinked Student (You) • 🔒 Unranked"*) without displaying fake personal metrics to unauthenticated visitors.

3. **` /day/:dayId? ` — Dynamic Day Challenge Workbench**
   - Dynamic route supporting any challenge day (e.g., `/day/1`, `/day/12`, `/day/30`).
   - **Left Column**: Challenge metadata (Estimated time, difficulty, XP reward), step-by-step requirements checklist, curated learning resources, and an interactive **Live Kanban Sandbox** widget.
   - **Right Column (Sticky Form)**: Streamlined **Proof of Work Submission Form** accepting GitHub Repository URL and LinkedIn Post URL, triggering instant confetti celebration upon submission.

---

## 🎨 Design System & Aesthetics Guidelines

- **Mobile-First Responsive Priority (390px Viewport)**:
  - Designed around a **390px mobile viewport** to ensure mobile phones experience **zero text or card overlapping**.
  - Includes a floating bottom mobile navigation bar (`Home`, `Dashboard`, `Day 12`).
- **Expansive Desktop Workbench Layout (1280px / `max-w-7xl`)**:
  - Automatically expands into a spacious 2-column layout on desktop screens (`lg:grid-cols-12`).
- **Modern Dark Glassmorphism Aesthetics**:
  - HSL-tailored dark background (`#090d16`), frosted glass cards (`backdrop-blur-md`), vibrant fire-orange (`#f97316`) and emerald green (`#10b981`) accents.
  - Micro-animations (flame animations, pulse badges, hover cards).

---

## 🛠️ Technology Stack & Requirements

- **Frontend Framework**: React 19 + Vite 8
- **Routing**: React Router 7 (`HashRouter`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), Custom HSL Design Tokens
- **Icons & Animation**: Lucide React Icons, `canvas-confetti`
- **Linting & Code Quality**: Oxlint (0 errors)
- **Deployment Readiness**: SPA rewrite rules in `vercel.json` and `public/_redirects` for direct page reloads on Vercel/Netlify.

---

## 🔒 Future Security & Anti-Cheat Roadmap (V2 Concept)

While the prototype uses mock data for demonstration, the architecture is pre-designed for production security:
- **GitHub OAuth 2.0 & Commit SHA Signature Checks**: Verifying real commit timestamps and repository ownership.
- **LinkedIn API Social Post Verification**: Validating public post hashtags (#ABTalks60Days).
- **Cryptographic SHA-256 Verification Certificates**: Anti-tamper certificate validation portal for recruiters.

---

## 🏁 Evaluator Checklist & Verification

- ✅ **Build & Lint**: Passes `npm run build` and `oxlint` cleanly with zero errors.
- ✅ **Mobile & Desktop Layouts**: Zero overlapping at 390px mobile width and clean 2-column grid at 1280px desktop width.
- ✅ **Dynamic Routes**: `/day/12` and any `/day/:dayId` render dynamic badges (`Day X of 60`).
- ✅ **Collaborators Tracked**: All 3 contributors (`rajeevpramanik123`, `Aditi Ansh`, `RK29-R`) are documented in git commits, footer, and README.
