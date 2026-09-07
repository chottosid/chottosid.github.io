export const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#skills", label: "Skills" },
];

export const profile = {
  name: "Swarup Sidhartho Mondol",
  title: "Software Engineer & Researcher — CSE, BUET",
  email: "swarupsidhartho@gmail.com",
  github: "https://github.com/chottosid",
  linkedin: "https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/",
  website: "https://swarupsidhartho.xyz",
  summary: [
    "Hi, thanks for stopping by to check out my profile. To your possible disappointment, this is little more than a poorly maintained extension of my CV — apologies 🥹",
    "I am Swarup Sidhartho Mondol. I graduated from Bangladesh University of Engineering and Technology in 2026 with a major in CSE. My current interests lie in Mathematics, Algorithms, Machine Learning, and Multi-Agent Systems. Being trained as an engineer, I also enjoy building things, mostly backends and AI/ML powered pipelines.",
    "I deeply enjoy Classical music, and my bansuri has been a constant companion for the past eight years.",
    "Tea over coffee, any day 😉",
  ],
};

export const research = [
  {
    title: "DDS-E-Sim: A Transformer-based Probabilistic Generative Framework for Simulating Error-Prone DNA Sequences for DNA Data Storage",
    status: "published",
    collaborators: "with Prof. A.B.M. Alim Al Islam, BUET",
    venue: "NeurIPS 2025 Workshops (FPI & SPIGM)",
    link: {
      url: "https://www.biorxiv.org/content/10.1101/2025.02.14.637785v2.full",
      label: "Paper",
    },
  },
  {
    title: "Impact of Stain Normalization and Background Filtering on Deep Learning & Transformer-based Models for Ovarian Cancer Histopathology Classification",
    status: "published",
    venue: "ICCIT 2025",
    link: {
      url: "https://ieeexplore.ieee.org/document/11490333",
      label: "Paper",
    },
  },
  {
    title: "DMOTE: Dimensionality-Driven Minority Oversampling Techniques for Imbalanced Learning",
    status: "under-review",
    collaborators: "with Prof. Sukarna Barua, BUET",
    description: "Novel dimensionality-driven oversampling method leveraging dimensional geometry for minority class synthesis under class imbalance.",
  },
  {
    title: "Drug Effects on EEG-based Epilepsy Prediction",
    status: "in-progress",
    description: "Investigating pharmacological interventions on EEG signal patterns for seizure prediction.",
  },
];

export const experience = [
  {
    role: "Machine Learning Engineering Expert",
    company: "BUET",
    period: "Jul 2026 – Present",
    bullets: [
      "Building an AI-enabled system for evaluating, correcting, and modifying architectural and structural drawings against the Bangladesh National Building Code",
      "Building a document-processing pipeline that transforms the building code into structured, machine-readable data",
      "Developing a compliance-checking system that detects code violations in architectural diagrams and retrieves the relevant regulatory provisions",
    ],
  },
  {
    role: "Software Engineer (Part-Time)",
    company: "PeriScaleAI",
    period: "Oct 2025 – Feb 2026",
    bullets: [
      "Led development of an AI-driven content generation platform that produced brand-specific images, videos, blog posts, and social media content, integrated with a CRM for automated customer engagement across WhatsApp and LinkedIn",
      "Designed multi-agent pipelines using LangGraph to orchestrate content generation, review, and validation stages with stateful execution and failure recovery",
      "Built distributed backend services using FastAPI with Celery/Redis-based task queues for scalable async execution and integration with external APIs and AI services",
    ],
  },
];

export const projects = [
  {
    name: "Veritas",
    badge: "IBCOL 2025 Silver Medal",
    description: "Blockchain and AI-powered digital justice platform with public blockchain audit trails, IPFS evidence storage, and Solidity smart contracts.",
    links: [
      { url: "https://github.com/chottosid/Veritas", label: "GitHub" },
      { url: "https://www.youtube.com/watch?v=7kOzdRZQUZQ", label: "Demo" },
    ],
  },
  {
    name: "ChinhoAI",
    badge: "GP FutureMakers Finalist",
    description: "Real-time Bangla to Bangla Sign Language dual translation using OpenCV, MediaPipe, and keypoint-based gesture representations.",
    links: [
      { url: "https://github.com/chottosid", label: "GitHub" },
      { url: "https://www.youtube.com/watch?v=HVnktPIUuyc&t=209s", label: "Video" },
    ],
  },
  {
    name: "ScrappyBuddy",
    description: "LangGraph-orchestrated agent extracting semantic content signals from unstructured sources with NLP-based change detection. Built with FastAPI, Celery/Redis, and Google Gemini.",
    links: [
      { url: "https://github.com/chottosid/ScrappyBuddy", label: "GitHub" },
    ],
  },
  {
    name: "Cognitia",
    description: "AI-powered study platform for BUET students with LLM-driven content generation pipelines. Backend and AI services deployed on Azure.",
    links: [
      { url: "https://github.com/chottosid/Cognitia-Backend", label: "GitHub (Backend)" },
      { url: "https://github.com/chottosid/Cognitia-AI", label: "GitHub (AI)" },
    ],
  },
  {
    name: "Woodland Escapade",
    description: "Multi-stage first-person shooter game built with raw OpenGL in C, featuring enemy interaction, physics, and stage progression.",
    links: [
      { url: "https://github.com/chottosid/Woodland-Escapade", label: "GitHub" },
    ],
  },
  {
    name: "Kothin Trains",
    description: "Train ticketing platform with seat selection, scheduling, and booking. Django backend with raw SQL query layer.",
    links: [
      { url: "https://github.com/chottosid/Kothin-Trains", label: "GitHub" },
    ],
  },
];

export const education = {
  institution: "Bangladesh University of Engineering and Technology (BUET)",
  period: "Graduated Jun 2026",
  degree: "Bachelor of Science in Computer Science and Engineering",
};

export const awards = [
  { title: "Silver Medalist, International Blockchain Olympiad", year: "2025", highlight: true },
  { title: "Honorable Mention, Asia Pacific Mathematical Olympiad (APMO)", year: "2019", highlight: true },
  { title: "International Mathematical Olympiad (IMO) Extended Camp and National Camp", year: "2016–2020", highlight: true },
  { title: "Sir Fazle Hasan Abed Scholar, BRAC University", year: "2020" },
  { title: "Academic Team Member, Bangladesh Mathematical Olympiad", year: "2022–Present", highlight: true },
  { title: "Global Top 100, Reply AI Agents Challenge (out of 2000+ teams)", year: "2026" },
  { title: "Finalist, Innovation World Cup", year: "2025" },
  { title: "Finalist, GP FutureMakers", year: "2025" },
  { title: "Top 50, Solvio AI Hackathon", year: "2025" },
  { title: "Finalist, Bangladesh Blockchain Olympiad", year: "2023" },
  { title: "3rd Place, BUET CSE Fest Hackathon — Blockchain Category", year: "2023" },
  { title: "Finalist, Therap JavaFest", year: "2023, 2024" },
];

export const skills = [
  { category: "ML & AI", items: "PyTorch, Transformers, Computer Vision, NLP, Generative Modeling, Pandas, SciPy" },
  { category: "Agentic, LLM & Automation", items: "LangChain, LangGraph, Selenium, Playwright, BeautifulSoup" },
  { category: "Programming & Frontend", items: "Python, C, C++, Java, JavaScript, React.js, Next.js" },
  { category: "Backend & Infra", items: "FastAPI, Django, Node.js, Spring Boot, PostgreSQL, MongoDB, Redis, Docker, NGINX" },
  { category: "Blockchain & Web3", items: "Solidity, Ethereum, Smart Contracts, Hardhat, Ethers.js" },
];
