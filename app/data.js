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
    status: "accepted",
    collaborators: "with Prof. A.B.M. Alim Al Islam, BUET",
    venue: "NeurIPS 2025 Workshop (FPI & SPIGM)",
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
    title: "Dimensionality Driven Resampling",
    status: "in-progress",
    collaborators: "with Prof. Sukarna Barua, BUET",
    description: "Novel dimensionality-driven resampling method for class imbalance. Manuscript in preparation.",
  },
  {
    title: "Drug Effects on EEG-based Epilepsy Prediction",
    status: "in-progress",
    description: "Investigating pharmacological interventions on EEG signal patterns for seizure prediction.",
  },
];

export const experience = [
  {
    role: "Software Engineer (Part-Time)",
    company: "PeriScaleAI",
    period: "Oct 2025 – Feb 2026",
    bullets: [
      "Led development of a B2B AI-driven automatic content generation system for marketing and brand promotion",
      "Designed multi-agent pipelines using LangGraph for orchestrating generation, refinement, and validation stages",
      "Built distributed backend services using FastAPI with Celery/Redis-based task queues for scalable async execution",
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
    name: "Cognitia",
    description: "AI-powered study platform for BUET students with LLM-driven content generation pipelines. Backend and AI services deployed on Azure.",
    links: [
      { url: "https://github.com/chottosid/Cognitia-Backend", label: "GitHub (Backend)" },
      { url: "https://github.com/chottosid/Cognitia-AI", label: "GitHub (AI)" },
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
    name: "Shohochori",
    description: "Social and wellness platform for elderly users with accessibility-focused React frontend and Spring Boot microservice backend.",
    links: [
      { url: "https://github.com/chottosid/Shohochori-Frontend", label: "GitHub (Frontend)" },
      { url: "https://github.com/chottosid/Shohochor_Bondhu", label: "GitHub (Backend)" },
    ],
  },
  {
    name: "AxleCar",
    description: "Gesture-controlled robotic vehicle using ATmega32 with gyroscope input and ESP32-CAM for wireless video streaming.",
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
  {
    name: "Network Security Toolkit",
    description: "Packet-level network tools in C++ and Python for packet flooding and ICMP fragmentation attacks using raw sockets and Scapy.",
    links: [
      { url: "https://github.com/chottosid/CSE406-Project", label: "GitHub" },
    ],
  },
  {
    name: "Compiler",
    description: "Early-stage compiler for C-like syntax with separate lexical analyzer, parser, and code generator.",
    links: [
      { url: "https://github.com/chottosid/CSE-310---Compiler-Sessional", label: "GitHub" },
    ],
  },
];

export const education = {
  institution: "Bangladesh University of Engineering and Technology (BUET)",
  period: "Jan 2022 – May 2026",
  degree: "Bachelor of Science in Computer Science and Engineering",
  coursework: "Algorithms, Data Structures, Graph Theory, Machine Learning, Artificial Intelligence, Operating Systems, Compilers",
};

export const awards = [
  { title: "Silver Medalist, International Blockchain Olympiad", year: "2025", highlight: true },
  { title: "Honorable Mention, Asia Pacific Mathematical Olympiad (APMO)", year: "2019", highlight: true },
  { title: "IMO Training Camp", year: "2018–2020", highlight: true },
  { title: "Academic Team Member, Bangladesh Mathematical Olympiad", year: "2022–Present", highlight: true },
  { title: "Finalist, Innovation World Cup", year: "2025" },
  { title: "Global Top 100, Reply AI Agents Challenge (out of 2000+ teams)", year: "2026" },
  { title: "Finalist, GP FutureMakers", year: "2026" },
  { title: "Top 50, Solvio AI Hackathon", year: "2026" },
  { title: "Finalist, Bangladesh Blockchain Olympiad", year: "2023" },
  { title: "3rd Place, BUET CSE Fest Hackathon — Blockchain Category", year: "2023" },
  { title: "Finalist, Therap JavaFest", year: "2023, 2024" },
];

export const skills = [
  { category: "ML & AI", items: "PyTorch, Transformers, Computer Vision, NLP, Generative Modeling" },
  { category: "Agentic & LLM", items: "LangChain, LangGraph" },
  { category: "Programming", items: "Python, C, C++, Java, JavaScript" },
  { category: "Backend", items: "FastAPI, Django, Node.js, Spring Boot" },
  { category: "Frontend", items: "React.js, Next.js" },
  { category: "Blockchain", items: "Solidity, Ethereum, Smart Contracts, Hardhat, Ethers.js" },
];
