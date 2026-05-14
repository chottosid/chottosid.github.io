# Portfolio Redesign — Academic Minimal

**Date:** 2026-05-14
**Status:** Approved

## Goal

Redesign swarupsidhartho.xyz as a clean, minimal, professional academic portfolio that works equally well for grad school admissions committees and tech recruiters. Replace all placeholder content with real data from the user's CV.

## Design Direction

Academic Minimal — inspired by personal academic homepages, not startup landing pages. Strong typography, generous whitespace, no fancy effects, content-first.

## Tech Stack

- Next.js 14 (existing, static export)
- Tailwind CSS (existing)
- Single-page layout in `app/page.js`
- Styles in `app/globals.css`
- Tailwind config in `tailwind.config.js`

## Page Structure

Single scrolling page with the following sections in order:

### 1. Header
- Portrait photo (small, rounded) — using existing `/portrait.jpg`
- Name as primary heading
- One-liner: "Software Engineer & Researcher — CSE, BUET"
- Inline contact links: Email, GitHub, LinkedIn, Website — separated by `|`
- No hero banner, no gradient background, no CTA buttons

### 2. Professional Summary
- The summary paragraph from CV:
  "Software engineer with hands-on experience building distributed backend systems and AI-integrated pipelines. Proficient in designing async task architectures, RESTful services, and multi-service deployments. Experienced taking systems from development to production across FastAPI, Django, Spring Boot, Node.js, and cloud infrastructure."

### 3. Research
- Papers formatted academically:
  - **Title** in bold
  - Authors (italicized "with Prof. X" or "Independent work")
  - Venue + year
  - Status badge (Accepted / Published / In Progress)
  - [Paper] link where available
- Papers:
  1. DDS-E-Sim — NeurIPS 2025 Workshop (FPI & SPIGM) — Accepted — [bioRxiv link]
  2. Stain Normalization — ICCIT 2025 — Published — [IEEE link: https://ieeexplore.ieee.org/document/11490333]
  3. Dimensionality Driven Resampling — Ongoing, manuscript in preparation — with Prof. Sukarna Barua
  4. Drug Effects on EEG-based Epilepsy Prediction — Ongoing

### 4. Experience
- Clean entries with: Role, Company, Date range, Bullet points
- PeriScaleAI: Software Engineer (Part-Time), Oct 2025 – Feb 2026
  - 3 bullet points from CV about AI content generation, LangGraph pipelines, FastAPI/Celery
- Binary Bits removed (not in CV)

### 5. Selected Projects
- Text list format — NOT card grid, NOT image thumbnails
- Each project: **Name** — one-line description — inline links (GitHub, Demo, Video)
- Projects (ordered by significance, top projects first):
  1. Veritas — Blockchain justice platform — IBCOL 2025 Silver Medal — [GitHub](https://github.com/chottosid/Veritas) [Demo](https://www.youtube.com/watch?v=7kOzdRZQUZQ)
  2. Cognitia — AI study platform for BUET — [GitHub Backend](https://github.com/chottosid/Cognitia-Backend) [GitHub AI](https://github.com/chottosid/Cognitia-AI)
  3. ChinhoAI — Bangla sign language translation — [GitHub](https://github.com/chottosid) [Video](https://www.youtube.com/watch?v=HVnktPIUuyc&t=209s)
  4. Intelligent Content Monitoring System — Agent-based NLP — [GitHub](https://github.com/chottosid/ScrappyBuddy)
  5. Shohochori — Elderly wellness platform — [GitHub Frontend](https://github.com/chottosid/Shohochori-Frontend) [GitHub Backend](https://github.com/chottosid/Shohochor_Bondhu)
  6. AxleCar — Gesture-controlled robot — (no link)
  7. Woodland Escapade — OpenGL FPS game — [GitHub](https://github.com/chottosid/Woodland-Escapade)
  8. Kothin-Trains — Train ticketing platform — [GitHub](https://github.com/chottosid/Kothin-Trains)
  9. Network Security Toolkit — Packet tools — [GitHub](https://github.com/chottosid/CSE406-Project)
  10. Compiler — C-like syntax compiler — [GitHub](https://github.com/chottosid/CSE-310---Compiler-Sessional)

### 6. Education
- BUET, BSc CSE, Jan 2022 – May 2026 (expected)
- CGPA: 3.59/4.00
- Relevant coursework: Algorithms, Data Structures, Graph Theory, ML, AI, OS, Compilers

### 7. Awards
- Clean bulleted list, strongest first:
  - Silver Medalist, International Blockchain Olympiad (2025)
  - Honorable Mention, APMO (2019)
  - IMO Training Camp (2018–2020)
  - Finalist, Innovation World Cup (2025)
  - Global Top 100, Reply AI Agents Challenge (2026)
  - Finalist, GP FutureMakers (2026)
  - Top 50, Solvio AI Hackathon (2026)
  - Finalist, Bangladesh Blockchain Olympiad (2023)
  - 3rd Place, BUET CSE Fest Hackathon (2023)
  - Finalist, Therap JavaFest (2023, 2024)

### 8. Skills
- Categorized as in CV:
  - Machine Learning & AI: PyTorch, Transformers, CV, NLP, Generative Modeling
  - Agentic & LLM Frameworks: LangChain, LangGraph
  - Programming: Python, C, C++, Java, JavaScript
  - Backend & Systems: FastAPI, Django, Node.js, Spring Boot
  - Frontend: React.js, Next.js
  - Blockchain & Web3: Solidity, Ethereum, Smart Contracts, Hardhat, Ethers.js

### 9. Footer
- Copyright line
- Inline links: Email, GitHub, LinkedIn

## Design Specifications

### Typography
- Body: Inter (sans-serif), 16px base
- Headings: Inter, bold, larger sizes
- Paper titles: serif font (Georgia or similar) for academic feel
- Monospace: for technical terms/skills if needed

### Colors
- Background: white (#ffffff)
- Text: near-black (#1a1a1a)
- Secondary text: gray (#6b7280)
- Links: dark blue (#1a5276) or similar muted academic blue
- Section dividers: light gray lines
- Dark mode: preserved with toggle, dark gray (#111827) background

### Spacing & Layout
- Max width: 720px (narrower than current 6xl — more readable, more document-like)
- Generous vertical padding between sections (py-12 to py-16)
- Section headings with underline rule
- Left-aligned content throughout (not centered)

### Interactions
- Smooth scroll for nav links
- Dark/light mode toggle
- No other animations (remove fade-in, scale-in, text-reveal, floating)
- No hover scale effects on project cards

### Navigation
- Fixed top nav with section links
- Name on left, nav links + dark mode toggle on right
- Mobile: hamburger menu

### Mobile
- Fully responsive
- Single column throughout
- Nav collapses to hamburger
- Photo stacks above name on mobile

## Content Rules
- No placeholder "#" links — if a link doesn't exist, don't include it
- No emoji in section headings or project names
- No dummy images — remove all project thumbnail images
- Keep portrait photo only
- Use real descriptions from CV, not casual tone

## Files to Modify
- `app/page.js` — complete rewrite of content and layout
- `app/globals.css` — strip custom animations, simplify styles
- `tailwind.config.js` — update color palette, remove academic cream/olive theme, switch to minimal palette

## Files to Remove
- `public/cognitia.png`, `public/veritas.png`, `public/shohochori.png`, `public/kothin-trains.png`, `public/chinhoai.png`, `public/sticky-studio.png`, `public/vip-cup.png` — project thumbnails no longer used

## Files to Keep
- `public/portrait.jpg` — used in header
- `public/resume.pdf` — linked from contact section (if it exists)
- `public/CNAME` — custom domain
- All deployment config (`.github/workflows/deploy.yml`, `next.config.js`)
