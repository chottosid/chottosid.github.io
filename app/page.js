"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  const navLinks = [
    { href: "#research", label: "Research" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#awards", label: "Awards" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <main className="bg-white dark:bg-ink-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-ink-900/95 backdrop-blur-sm border-b border-ink-200 dark:border-ink-700 z-50">
        <div className="max-w-3xl mx-auto px-6 h-14 flex justify-between items-center">
          <a href="#" className="text-sm font-semibold text-ink-800 dark:text-ink-100">
            Swarup S. Mondol
          </a>

          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-500 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-100 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded text-ink-500 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded text-ink-500 dark:text-ink-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-2.5 text-sm text-ink-600 dark:text-ink-300 hover:text-ink-800 dark:hover:text-ink-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-5">
            <img
              src="/portrait.jpg"
              alt="Swarup Sidhartho Mondol"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 transition-transform duration-300 ease-out hover:scale-150 hover:shadow-lg cursor-pointer"
            />
            <div>
              <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Swarup Sidhartho Mondol</h1>
              <p className="text-ink-500 dark:text-ink-400 mt-0.5">Software Engineer &amp; Researcher &mdash; CSE, BUET</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-sm">
                <a href="mailto:swarupsidhartho@gmail.com" className="text-link dark:text-blue-400 hover:underline">Email</a>
                <span className="text-ink-300 dark:text-ink-600">|</span>
                <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
                <span className="text-ink-300 dark:text-ink-600">|</span>
                <a href="https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">LinkedIn</a>
                <span className="text-ink-300 dark:text-ink-600">|</span>
                <a href="https://swarupsidhartho.xyz" className="text-link dark:text-blue-400 hover:underline">Website</a>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-10">
          <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
            Software engineer with hands-on experience building distributed backend systems and AI-integrated pipelines. Proficient in designing async task architectures, RESTful services, and multi-service deployments. Experienced taking systems from development to production across FastAPI, Django, Spring Boot, Node.js, and cloud infrastructure.
          </p>
        </section>

        {/* Research */}
        <section id="research" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Research</h2>
          <div className="space-y-5">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif font-semibold text-ink-800 dark:text-ink-100">
                  DDS-E-Sim: A Transformer-based Probabilistic Generative Framework for Simulating Error-Prone DNA Sequences for DNA Data Storage
                </h3>
                <span className="status-badge accepted">Accepted</span>
              </div>
              <p className="text-sm text-ink-500 dark:text-ink-400 mt-0.5">
                with Prof. A.B.M. Alim Al Islam, BUET
              </p>
              <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">
                NeurIPS 2025 Workshop (FPI &amp; SPIGM)
              </p>
              <a href="https://www.biorxiv.org/content/10.1101/2025.02.14.637785v2.full" target="_blank" rel="noopener noreferrer" className="text-sm text-link dark:text-blue-400 hover:underline mt-1 inline-block">
                Paper &rarr;
              </a>
            </div>

            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif font-semibold text-ink-800 dark:text-ink-100">
                  Impact of Stain Normalization and Background Filtering on Deep Learning &amp; Transformer-based Models for Ovarian Cancer Histopathology Classification
                </h3>
                <span className="status-badge published">Published</span>
              </div>
              <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">
                ICCIT 2025
              </p>
              <a href="https://ieeexplore.ieee.org/document/11490333" target="_blank" rel="noopener noreferrer" className="text-sm text-link dark:text-blue-400 hover:underline mt-1 inline-block">
                Paper &rarr;
              </a>
            </div>

            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif font-semibold text-ink-800 dark:text-ink-100">
                  Dimensionality Driven Resampling
                </h3>
                <span className="status-badge in-progress">In Progress</span>
              </div>
              <p className="text-sm text-ink-500 dark:text-ink-400 mt-0.5">
                with Prof. Sukarna Barua, BUET
              </p>
              <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">
                Novel dimensionality-driven resampling method for class imbalance. Manuscript in preparation.
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif font-semibold text-ink-800 dark:text-ink-100">
                  Drug Effects on EEG-based Epilepsy Prediction
                </h3>
                <span className="status-badge in-progress">In Progress</span>
              </div>
              <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">
                Investigating pharmacological interventions on EEG signal patterns for seizure prediction.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Experience</h2>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-semibold text-ink-800 dark:text-ink-100">Software Engineer (Part-Time)</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400">PeriScaleAI</p>
                </div>
                <span className="text-sm text-ink-400 dark:text-ink-500 whitespace-nowrap">Oct 2025 &ndash; Feb 2026</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-ink-600 dark:text-ink-300 list-disc list-outside ml-4">
                <li>Led development of a B2B AI-driven automatic content generation system for marketing and brand promotion</li>
                <li>Designed multi-agent pipelines using <strong>LangGraph</strong> for orchestrating generation, refinement, and validation stages</li>
                <li>Built distributed backend services using <strong>FastAPI</strong> with <strong>Celery/Redis-based</strong> task queues for scalable async execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Selected Projects</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-ink-800 dark:text-ink-100">Veritas</h3>
                <span className="text-xs bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 px-2 py-0.5 rounded">IBCOL 2025 Silver Medal</span>
              </div>
              <p className="text-sm text-ink-500 dark:text-ink-400">Blockchain and AI-powered digital justice platform with public blockchain audit trails, IPFS evidence storage, and Solidity smart contracts.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/Veritas" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
                <a href="https://www.youtube.com/watch?v=7kOzdRZQUZQ" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">Demo</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Cognitia</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">AI-powered study platform for BUET students with LLM-driven content generation pipelines. Backend and AI services deployed on Azure.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/Cognitia-Backend" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub (Backend)</a>
                <a href="https://github.com/chottosid/Cognitia-AI" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub (AI)</a>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-ink-800 dark:text-ink-100">ChinhoAI</h3>
                <span className="text-xs bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 px-2 py-0.5 rounded">GP FutureMakers Finalist</span>
              </div>
              <p className="text-sm text-ink-500 dark:text-ink-400">Real-time Bangla to Bangla Sign Language dual translation using OpenCV, MediaPipe, and keypoint-based gesture representations.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
                <a href="https://www.youtube.com/watch?v=HVnktPIUuyc&t=209s" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">Video</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">ScrappyBuddy</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">LangGraph-orchestrated agent extracting semantic content signals from unstructured sources with NLP-based change detection. Built with FastAPI, Celery/Redis, and Google Gemini.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/ScrappyBuddy" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Shohochori</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">Social and wellness platform for elderly users with accessibility-focused React frontend and Spring Boot microservice backend.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/Shohochori-Frontend" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub (Frontend)</a>
                <a href="https://github.com/chottosid/Shohochor_Bondhu" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub (Backend)</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">AxleCar</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">Gesture-controlled robotic vehicle using ATmega32 with gyroscope input and ESP32-CAM for wireless video streaming.</p>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Woodland Escapade</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">Multi-stage first-person shooter game built with raw OpenGL in C, featuring enemy interaction, physics, and stage progression.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/Woodland-Escapade" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Kothin Trains</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">Train ticketing platform with seat selection, scheduling, and booking. Django backend with raw SQL query layer.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/Kothin-Trains" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Network Security Toolkit</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">Packet-level network tools in C++ and Python for packet flooding and ICMP fragmentation attacks using raw sockets and Scapy.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/CSE406-Project" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Compiler</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">Early-stage compiler for C-like syntax with separate lexical analyzer, parser, and code generator.</p>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/chottosid/CSE-310---Compiler-Sessional" target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Education</h2>
          <div>
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">Bangladesh University of Engineering and Technology (BUET)</h3>
              <span className="text-sm text-ink-400 dark:text-ink-500 whitespace-nowrap">Jan 2022 &ndash; May 2026</span>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">Bachelor of Science in Computer Science and Engineering</p>
            <p className="text-sm text-ink-500 dark:text-ink-400">CGPA: 3.59 / 4.00</p>
            <p className="text-sm text-ink-400 dark:text-ink-500 mt-1">
              Relevant Coursework: Algorithms, Data Structures, Graph Theory, Machine Learning, Artificial Intelligence, Operating Systems, Compilers
            </p>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Awards</h2>
          <ul className="space-y-1.5 text-sm text-ink-600 dark:text-ink-300">
            <li className="flex justify-between gap-4"><span className="font-medium text-ink-800 dark:text-ink-100">Silver Medalist, International Blockchain Olympiad</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2025</span></li>
            <li className="flex justify-between gap-4"><span className="font-medium text-ink-800 dark:text-ink-100">Honorable Mention, Asia Pacific Mathematical Olympiad (APMO)</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2019</span></li>
            <li className="flex justify-between gap-4"><span className="font-medium text-ink-800 dark:text-ink-100">IMO Training Camp</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2018&ndash;2020</span></li>
            <li className="flex justify-between gap-4"><span>Finalist, Innovation World Cup</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2025</span></li>
            <li className="flex justify-between gap-4"><span>Global Top 100, Reply AI Agents Challenge (out of 2000+ teams)</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2026</span></li>
            <li className="flex justify-between gap-4"><span>Finalist, GP FutureMakers</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2026</span></li>
            <li className="flex justify-between gap-4"><span>Top 50, Solvio AI Hackathon</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2026</span></li>
            <li className="flex justify-between gap-4"><span>Finalist, Bangladesh Blockchain Olympiad</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2023</span></li>
            <li className="flex justify-between gap-4"><span>3rd Place, BUET CSE Fest Hackathon &mdash; Blockchain Category</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2023</span></li>
            <li className="flex justify-between gap-4"><span>Finalist, Therap JavaFest</span> <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">2023, 2024</span></li>
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Skills</h2>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">ML &amp; AI:</dt>
              <dd className="text-ink-500 dark:text-ink-400">PyTorch, Transformers, Computer Vision, NLP, Generative Modeling</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">Agentic &amp; LLM:</dt>
              <dd className="text-ink-500 dark:text-ink-400">LangChain, LangGraph</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">Programming:</dt>
              <dd className="text-ink-500 dark:text-ink-400">Python, C, C++, Java, JavaScript</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">Backend:</dt>
              <dd className="text-ink-500 dark:text-ink-400">FastAPI, Django, Node.js, Spring Boot</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">Frontend:</dt>
              <dd className="text-ink-500 dark:text-ink-400">React.js, Next.js</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">Blockchain:</dt>
              <dd className="text-ink-500 dark:text-ink-400">Solidity, Ethereum, Smart Contracts, Hardhat, Ethers.js</dd>
            </div>
          </dl>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-ink-200 dark:border-ink-700 text-sm text-ink-400 dark:text-ink-500">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p>&copy; 2025 Swarup Sidhartho Mondol</p>
            <div className="flex gap-4">
              <a href="mailto:swarupsidhartho@gmail.com" className="hover:text-ink-600 dark:hover:text-ink-300 transition-colors">Email</a>
              <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600 dark:hover:text-ink-300 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600 dark:hover:text-ink-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
