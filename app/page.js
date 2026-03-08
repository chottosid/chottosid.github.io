"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const copyEmail = () => {
    navigator.clipboard.writeText("swarupsidhartho@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#research", label: "Research" },
    { href: "#education", label: "Education" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-cream-300 dark:border-gray-700 z-50 py-4">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="text-xl font-semibold text-academic-text dark:text-white">
            Swarup Sidhartho Mondol
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-academic-text-light dark:text-gray-300 font-medium hover:text-academic-primary dark:hover:text-academic-primary transition-colors relative"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-cream-100 dark:bg-gray-800 text-academic-text dark:text-white hover:bg-cream-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-cream-100 dark:bg-gray-800 text-academic-text dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-white dark:bg-gray-900 z-40 animate-slide-in">
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-medium text-academic-text dark:text-white hover:text-academic-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center hero-animated-bg dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <img
            src="/portrait.jpg"
            alt="Swarup Sidhartho Mondol"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mx-auto mb-6 ring-2 ring-cream-200 dark:ring-gray-600 shadow-sm scale-in"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-3 hero-gradient-text dark:text-white text-reveal">
            Swarup Sidhartho Mondol
          </h1>
          <p className="text-xl md:text-2xl text-academic-text-light dark:text-gray-300 mb-3 fade-in-up fade-in-up-delay-2">
            Final-year CS student at BUET
          </p>
          <p className="text-academic-text-light dark:text-gray-400 max-w-2xl mx-auto mb-8 fade-in-up fade-in-up-delay-3">
            If it involves code and a problem worth solving, count me in.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 fade-in-up fade-in-up-delay-4">
            <a
              href="mailto:swarupsidhartho@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-academic-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-secondary hover:-translate-y-0.5"
            >
              Say hello
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-academic-primary dark:text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
            >
              See my work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-academic-text dark:text-white">What I Do</h3>
              <p className="text-academic-text-light dark:text-gray-300 mb-3">
                I&apos;m finishing up my CSE degree at BUET. Most of my time goes into
                writing code (okay, mostly prompt engineering these days), playing flute, or procrastinating productively.
              </p>
              <p className="text-academic-text-light dark:text-gray-300">
                I write clean, well structured codes. Ones that someone else can read six
                months later without needing help from a LLM. I am currently into multiple research projects alongside an internship
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-academic-text dark:text-white">Outside of Serious Stuff</h3>
              <div className="bg-cream-50 dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl p-6">
                <ul className="text-academic-text-light dark:text-gray-300 space-y-3 text-base">
                  <li className="stagger-item">🎶 I play the bansuri (Indian bamboo flute). Been at it for about 8 years now.</li>
                  <li className="stagger-item">📐 Had a one-sided love affair with mathematics in high school. It never wrote back.</li>
                  <li className="stagger-item">☕ Tea over coffee, always. Preferably while listening to something classical. Personal record: 9 cups in a single day.</li>
                  <li className="stagger-item">🌌 Stargazing is my favorite pastime.</li>
                  <li className="stagger-item">🏛️ Every new city I visit, I make a pilgrimage to its library and museum. Yes, I&apos;m that kind of nerd.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 bg-cream-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm card-hover">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-academic-text dark:text-white">Junior Software Engineer <span className="text-academic-text-light dark:text-gray-400 font-normal">(Part-time)</span></h3>
                  <p className="text-academic-primary font-medium">PeriScaleAI</p>
                </div>
                <span className="text-academic-text-light dark:text-gray-400 text-sm">Oct 2025 - Present</span>
              </div>
              <p className="text-academic-text-light dark:text-gray-300 text-sm mb-3">
                Building AI agents and agentic systems to automate complex workflows. Working on LangGraph-based multi-agent architectures, tool integrations, and production-grade AI pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">LangGraph</span>
                <span className="skill-tag text-xs">LangChain</span>
                <span className="skill-tag text-xs">FastAPI</span>
                <span className="skill-tag text-xs">Python</span>
                <span className="skill-tag text-xs">AI Agents</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border-l-4 border-academic-secondary p-6 rounded-r-lg shadow-sm card-hover">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-academic-text dark:text-white">Backend Developer</h3>
                  <p className="text-academic-primary font-medium">Binary Bits</p>
                </div>
                <span className="text-academic-text-light dark:text-gray-400 text-sm">2023</span>
              </div>
              <p className="text-academic-text-light dark:text-gray-300 text-sm mb-3">
                Developed and maintained backend services and APIs. Worked on database design, server-side logic, and integration with frontend applications.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Node.js</span>
                <span className="skill-tag text-xs">Express.js</span>
                <span className="skill-tag text-xs">MongoDB</span>
                <span className="skill-tag text-xs">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">Things I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cognitia */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/cognitia.png" alt="Cognitia - Study helper platform" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">
                  🤖 Cognitia <span className="ml-2 bg-academic-primary/10 text-academic-primary text-xs px-2 py-0.5 rounded-full">Featured</span>
                </h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  A study helper cum social media platform for BUETians. Made for my final year project. Built the backend, handled the CI/CD pipeline, and deployed it on Azure.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  Used express.js for the backend, AI services exposed with fastapi, Docker for containerization, and GitHub Actions for CI/CD.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">Express.js</span>
                  <span className="skill-tag text-xs">Flask</span>
                  <span className="skill-tag text-xs">Docker</span>
                  <span className="skill-tag text-xs">GitHub Actions</span>
                  <span className="skill-tag text-xs">Azure</span>
                  <span className="skill-tag text-xs">NGINX</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Veritas */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/veritas.png" alt="Veritas - Blockchain justice platform" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">
                  ⚖️ Veritas <span className="ml-2 bg-academic-primary/10 text-academic-primary text-xs px-2 py-0.5 rounded-full">Featured</span>
                </h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  Digital justice platform using public blockchain for transparency. Won us a spot at IBCOL 2025.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  Hybrid Architecture of Web2 and Web3. Smart contracts with solidity, IPFS for evidence storage. Backend with express.js and ethers.js.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">Express.js</span>
                  <span className="skill-tag text-xs">MongoDB</span>
                  <span className="skill-tag text-xs">Solidity</span>
                  <span className="skill-tag text-xs">Hardhat</span>
                  <span className="skill-tag text-xs">IPFS</span>
                  <span className="skill-tag text-xs">Ethers.js</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Shohochori */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/shohochori.png" alt="Shohochori - Health tracking app" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">🧓 Shohochori</h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  Health, wellness, personal tracking app built with elderly users in mind.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  Finalist at Therap Javafest. Microservices architecture with Spring Boot, Redis, Celery etc.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">React</span>
                  <span className="skill-tag text-xs">Spring Boot</span>
                  <span className="skill-tag text-xs">MySQL</span>
                  <span className="skill-tag text-xs">RabbitMQ</span>
                  <span className="skill-tag text-xs">Redis</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Kothin-Trains */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/kothin-trains.png" alt="Kothin-Trains - Ticket booking" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">🚂 Kothin-Trains</h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  Train ticket booking, inspired by Shohoz. For an academic course.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  Backend with Django, frontend with HTML, CSS, JS.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">Django</span>
                  <span className="skill-tag text-xs">Python</span>
                  <span className="skill-tag text-xs">Jinja</span>
                  <span className="skill-tag text-xs">SQL</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* ChinhoAI */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/chinhoai.png" alt="ChinhoAI - Sign language translation" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">🤝 ChinhoAI</h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  An ambitious attempt on real time Bangla to Bangla Sign Language Dual Translation. Finalist at GP Futuremakers, Runner up at Solvio AI Hackathon, and recognized at many more events.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  OpenCV, MediaPipe, Bangla ASR, Bangla TTS, Realtime Translation
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">Next.js</span>
                  <span className="skill-tag text-xs">React</span>
                  <span className="skill-tag text-xs">Framer Motion</span>
                  <span className="skill-tag text-xs">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Sticky Studio */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/sticky-studio.png" alt="Sticky Studio - Opportunity tracker" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">💎 Sticky Studio</h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  Built this because I kept losing track of scholarship deadlines. Now it does it for me.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  Nothing fancy, just LangGraph and Next.js getting the job done.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">Next.js</span>
                  <span className="skill-tag text-xs">PostgreSQL</span>
                  <span className="skill-tag text-xs">Gemini AI</span>
                  <span className="skill-tag text-xs">Genkit</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* IEEE VIP Cup */}
            <div className="bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-xl overflow-hidden card-hover shadow-sm">
              <div className="overflow-hidden">
                <img src="/vip-cup.png" alt="IEEE VIP Cup - Computer vision project" className="project-thumbnail hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text dark:text-white">📹 IEEE VIP Cup 2025</h3>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-1">
                  Drone vs. bird classification using RGB and infrared footage. Competition project.
                </p>
                <p className="text-academic-text-light dark:text-gray-300 text-sm mb-4">
                  Built a robust dataset preprocessing pipeline with SAM and YOLO.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="skill-tag text-xs">Python</span>
                  <span className="skill-tag text-xs">PyTorch</span>
                  <span className="skill-tag text-xs">YOLO</span>
                  <span className="skill-tag text-xs">Computer Vision</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="project-link text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400 dark:text-gray-600">•</span>
                  <a href="#" className="project-link text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 bg-cream-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">Research</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border border-cream-200 dark:border-gray-700 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text dark:text-white">
                  DDS-E-Sim: Simulating errors in DNA data storage
                </h3>
                <span className="status-badge accepted">Accepted • 2025</span>
              </div>
              <p className="text-sm text-academic-text-light dark:text-gray-400 mb-2">
                Worked with Prof. A.B.M. Alim Al Islam at BUET.
              </p>
              <p className="text-xs text-academic-text-light dark:text-gray-500 mb-2">NeurIPS 2025 (FPI & SPIGM workshops)</p>
              <a href="https://www.biorxiv.org/content/10.1101/2025.02.14.637785v2.full" className="text-sm text-academic-primary hover:underline">View paper</a>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-cream-200 dark:border-gray-700 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text dark:text-white">
                  Impact of Stain Normalization and Background Filtering on Deep Learning & Transformer based Models for Ovarian Cancer Histopathology Classification
                </h3>
                <span className="status-badge published">Published • 2025</span>
              </div>
              <p className="text-sm text-academic-text-light dark:text-gray-400 mb-2">
                Independent research work.
              </p>
              <p className="text-xs text-academic-text-light dark:text-gray-500 mb-2">ICCIT 2025</p>
              <a href="#" className="text-sm text-academic-primary hover:underline">View paper</a>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-cream-200 dark:border-gray-700 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text dark:text-white">Learning from imbalanced data</h3>
                <span className="status-badge in-progress">In Progress</span>
              </div>
              <p className="text-sm text-academic-text-light dark:text-gray-400">
                Ongoing thesis work with Prof. Sukarna Barua.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-cream-200 dark:border-gray-700 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text dark:text-white">Quantum ML explorations</h3>
                <span className="status-badge in-progress">In Progress</span>
              </div>
              <p className="text-sm text-academic-text-light dark:text-gray-400">
                Guided by Prof. Sohel Rahman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">Education</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-semibold text-academic-text dark:text-white">
                  Bangladesh University of Engineering and Technology (BUET)
                </h3>
                <span className="text-academic-text-light dark:text-gray-400">
                  Jan 2022 - Present
                </span>
              </div>
              <p className="text-academic-primary font-medium mb-2">
                BSc in Computer Science and Engineering
              </p>
              <p className="text-academic-text-light dark:text-gray-400 text-sm">
                CGPA: 3.59 (as of Level 4, Term 1)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 bg-cream-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">Achievements</h2>
          <div className="space-y-6 max-w-4xl mx-auto">

            {/* Tier 1: International Highlights */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* IBCOL Silver Medal */}
              <div className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 border-2 border-slate-300 dark:border-gray-600 p-5 rounded-xl shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🥈</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 dark:text-white">Silver Medal, International Blockchain Olympiad</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">Represented Bangladesh • Hong Kong</p>
                    <span className="inline-block mt-2 text-slate-600 dark:text-gray-300 font-semibold text-xs bg-slate-200 dark:bg-gray-600 px-2.5 py-1 rounded-full">2025</span>
                  </div>
                </div>
              </div>

              {/* APMO Honorable Mention */}
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-amber-900/30 border-2 border-amber-300 dark:border-amber-700 p-5 rounded-xl shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🏅</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-amber-800 dark:text-amber-300">Honorable Mention, APMO</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">Asian Pacific Mathematical Olympiad</p>
                    <span className="inline-block mt-2 text-amber-700 dark:text-amber-400 font-semibold text-xs bg-amber-200 dark:bg-amber-800 px-2.5 py-1 rounded-full">2019</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 2: National Excellence */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* IMO Training Camp */}
              <div className="bg-white dark:bg-gray-900 border border-cream-300 dark:border-gray-700 p-4 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📐</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-academic-text dark:text-white">IMO Training Camp</h3>
                    <p className="text-xs text-academic-text-light dark:text-gray-400 mt-1">Selected for 3 consecutive years</p>
                    <span className="inline-block mt-2 text-academic-text-light dark:text-gray-400 font-medium text-xs bg-cream-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">2018–2020</span>
                  </div>
                </div>
              </div>

              {/* Bangladesh Blockchain Olympiad */}
              <div className="bg-white dark:bg-gray-900 border border-cream-300 dark:border-gray-700 p-4 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔗</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-academic-text dark:text-white">Finalist, Bangladesh Blockchain Olympiad</h3>
                    <p className="text-xs text-academic-text-light dark:text-gray-400 mt-1">National level competition</p>
                    <span className="inline-block mt-2 text-academic-text-light dark:text-gray-400 font-medium text-xs bg-cream-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 3: Other Notable */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/50 dark:bg-gray-900/50 border border-cream-200 dark:border-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-academic-text dark:text-white">3rd Place</p>
                <p className="text-xs text-academic-text-light dark:text-gray-400 mt-0.5">BUET CSE Fest Hackathon</p>
                <p className="text-xs text-academic-text-light dark:text-gray-500">2023</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 border border-cream-200 dark:border-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-academic-text dark:text-white">Finalist (2x)</p>
                <p className="text-xs text-academic-text-light dark:text-gray-400 mt-0.5">Therap JavaFest</p>
                <p className="text-xs text-academic-text-light dark:text-gray-500">2023, 2024</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 border border-cream-200 dark:border-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-academic-text dark:text-white">13th Place</p>
                <p className="text-xs text-academic-text-light dark:text-gray-400 mt-0.5">SEC Inter-Uni Junior PC</p>
                <p className="text-xs text-academic-text-light dark:text-gray-500">2023</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text dark:text-white">Let&apos;s Talk</h2>
          <div className="text-center">
            <p className="text-academic-text-light dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Got a project in mind? Or just want to chat about code, blockchain, or classical music? Drop me a line.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="mailto:swarupsidhartho@gmail.com"
                className="inline-flex items-center gap-2 bg-academic-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-secondary hover:-translate-y-0.5"
              >
                📧 Email me
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 bg-transparent text-academic-primary dark:text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
              >
                {copied ? "✓ Copied!" : "📋 Copy email"}
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-academic-primary dark:text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
              >
                📄 Resume
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light dark:text-gray-400 font-medium hover:text-academic-primary dark:hover:text-academic-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/chottosid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light dark:text-gray-400 font-medium hover:text-academic-primary dark:hover:text-academic-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.facebook.com/fatmathman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light dark:text-gray-400 font-medium hover:text-academic-primary dark:hover:text-academic-primary transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream-50 dark:bg-gray-800 border-t border-cream-200 dark:border-gray-700 py-8 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-academic-text-light dark:text-gray-400 text-sm">
            © 2025 Swarup Sidhartho Mondol
          </p>
        </div>
      </footer>
    </main>
  );
}
