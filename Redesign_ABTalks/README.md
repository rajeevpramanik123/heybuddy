# 🔥 ABTalks 60-Day Coding Challenge

> **Transform Your Coding Skills in 60 Days.**  
> Build 60 real projects. Push daily GitHub commits. Publish LinkedIn proof. Become recruiter-ready before graduation.

---

## 🌟 Overview

**ABTalks 60-Day Coding Challenge** is a modern, career-focused web platform designed to solve student consistency in college engineering. It combines daily hands-on project building, streak momentum tracking, interactive proof submission, and recruiter readiness metrics in a high-impact, glassmorphic UI.

---

## 🎥 Video Presentation & Walkthrough

Watch our project demo and feature walkthrough:  
▶️ **[Watch Project Demo on YouTube](https://youtu.be/byoT89AzpVU)**

---

## 👥 Project Collaborators & Contributors

This project is actively maintained and contributed to by 3 core collaborators tracked in git history:

- 👑 **[rajeevpramanik123](https://github.com/rajeevpramanik123)** — Lead Maintainer & Full-Stack Developer (28 Commits)
- ⭐️ **[Aditi Ansh](https://github.com/aditiansh8183)** — Frontend & Netlify/Vercel Deployment Contributor (9 Commits)
- ⚡️ **[RK29-R](https://github.com/RK29-R)** — UI & Architecture Contributor (2 Commits)

---

## ✨ Key Features

- **📱 Mobile-First & Responsive Desktop Layout**: Custom-crafted for mobile screens (390px) and expansive desktop workbenches (1280px / `max-w-7xl`).
- **🔥 Dynamic Streak & Streak Freeze Engine**: Interactive momentum system with 1-click **Streak Freeze** revival to protect student progress when life happens.
- **🏆 Student Leaderboard & Achievements**: Real-time peer ranking and badge showcase with graceful state handling for guest/unlinked sessions.
- **🛠️ Interactive Day Challenge Workbench**: 
  - **Left Column**: Est. completion time, XP reward, live interactive Kanban sandbox, step-by-step checklist, and curated resources.
  - **Right Column**: Sticky **Proof of Work Submission Form** for GitHub & LinkedIn proof.
- **📋 Streamlined Submission**: Clean submission flow for GitHub Repository URLs and LinkedIn Post proof with instant celebration feedback.
- **🌙 Night Mode Variant**: High-contrast dark aesthetic tailored for late-night college coding sessions.
- **🔒 Security & Verification (Upcoming V2 Roadmap)**: Built-in architectural roadmap for OAuth GitHub commit signature verification and certificate authentication.

---

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/) (`HashRouter`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`), Custom CSS Design Tokens, Glassmorphism, HSL Color Palettes
- **Icons & Effects**: [Lucide React](https://lucide.dev/), `canvas-confetti`
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```
Redesign_ABTalks/
├── src/
│   ├── components/            # Reusable UI Components
│   │   ├── Navbar.jsx         # Global Header with Mobile Nav & Night Mode
│   │   ├── Footer.jsx         # Footer with Roadmap Badges, Collaborators & Links
│   │   ├── DemoSidebar.jsx    # Evaluator State Toggle Controls
│   │   ├── LiveKanbanSandbox.jsx # Interactive Kanban Sandbox Widget
│   │   ├── AccountLinkModal.jsx # GitHub & LinkedIn Account Linking Modal
│   │   └── ...
│   ├── pages/                 # Main Route Views
│   │   ├── LandingPage.jsx    # Hero section & track preview
│   │   ├── DashboardPage.jsx  # Student Dashboard & Streak Analytics
│   │   └── DayChallengePage.jsx # Dynamic Day Challenge Workbench (`/day/:dayId?`)
│   ├── data/
│   │   └── mockData.js        # Mock student state, curriculum, achievements, and leaderboard
│   ├── styles/
│   │   └── design-system.css  # Global CSS tokens, glassmorphism, and animations
│   ├── App.jsx                # App Router & State Provider
│   └── main.jsx               # React Entry Point
├── vercel.json                # Vercel SPA Routing Configuration
├── vite.config.js             # Vite Configuration with Tailwind v4 Plugin
└── package.json               # Project Dependencies and Build Scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajeevpramanik123/heybuddy.git
   cd Redesign_ABTalks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm run dev -- --host
   ```
   - Open **`http://localhost:5173/`** in your desktop browser.
   - Access **`http://<your-local-ip>:5173/`** on your mobile phone connected to the same Wi-Fi.

---

## 📦 Build & Deployment

### Production Build
To create an optimized production build:
```bash
npm run build
```
The compiled static assets will be output in the `dist/` directory.

### Deploying to Vercel
The project includes a pre-configured `vercel.json` for client-side route rewrites.

1. Push your repository to **GitHub**.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel will auto-detect Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

---

## 📄 License

Developed for the **ABTalks Engineering Challenge**. All rights reserved.