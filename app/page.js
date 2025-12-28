export default function Home() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-cream-300 z-50 py-4">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="text-xl font-semibold text-academic-text">
            Swarup Sidhartho Mondol
          </div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#research"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#awards"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center hero-animated-bg">
        <div className="max-w-6xl mx-auto px-8">
          <img
            src="/portrait.jpg"
            alt="Swarup Sidhartho Mondol"
            className="w-28 h-28 rounded-full object-cover mx-auto mb-6 ring-2 ring-cream-200 shadow-sm scale-in"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-3 hero-gradient-text text-reveal">
            Swarup Sidhartho Mondol
          </h1>
          <p className="text-xl md:text-2xl text-academic-text-light mb-3 fade-in-up fade-in-up-delay-2">
            Final-year CS student at BUET
          </p>
          <p className="text-academic-text-light max-w-2xl mx-auto mb-8 fade-in-up fade-in-up-delay-3">
            If it involves code and a problem worth solving, I'm int.
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
              className="inline-flex items-center justify-center gap-2 bg-transparent text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
            >
              See my work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-academic-text">What I Do</h3>
              <p className="text-academic-text-light mb-3">
                I'm finishing up my CSE degree at BUET. Most of my time goes into
                writing code(actually prompt engineering these days), playing flute, or procrastinating with life.
              </p>
              <p className="text-academic-text-light">
                I write clean, well structured codes. Ones that someone else can read six
                months later without needing help from a LLM. I am currently into multiple research projects alongside an internship
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-academic-text">Outside of Serious Stuff</h3>
              <div className="bg-cream-50 border border-cream-200 rounded-xl p-6">
                <ul className="text-academic-text-light space-y-3 text-base">
                  <li>🎶 I play the bansuri (Indian bamboo flute), been into it for about 8 years now.</li>
                  <li>📐 Had a one-sided love affair with mathematics back in high school.</li>
                  <li>☕ Tea over coffee, always—preferably while listening to something classical. Current record: 9 cups in a single day.</li>
                  <li>🌌 Stargazing is my favorite pastime.</li>
                  <li>🏛️ Everytime I visit a new place, I make sure to visit its library and museum. Can call me a nerd for that.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm card-hover">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-academic-text">Junior Software Engineer</h3>
                  <p className="text-academic-primary font-medium">PeriScaleAI</p>
                </div>
                <span className="text-academic-text-light text-sm">Oct 2024 - Present</span>
              </div>
              <p className="text-academic-text-light text-sm mb-3">
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

            <div className="bg-white border-l-4 border-academic-secondary p-6 rounded-r-lg shadow-sm card-hover">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-academic-text">Backend Developer</h3>
                  <p className="text-academic-primary font-medium">Binary Bits</p>
                </div>
                <span className="text-academic-text-light text-sm">2023</span>
              </div>
              <p className="text-academic-text-light text-sm mb-3">
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
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">Things I've Built</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cognitia */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/cognitia.png" alt="Cognitia - Study helper platform" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">
                  🤖 Cognitia <span className="ml-2 bg-academic-primary/10 text-academic-primary text-xs px-2 py-0.5 rounded-full">Featured</span>
                </h3>
                <p className="text-academic-text-light text-sm mb-1">
                  A study helper cum social media platform for BUETians. Made for my final year project. Built the backend, handled the CI/CD pipeline, and deployed it on Azure.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  Used express.js for the backend, AI services exposed with fastapi, Docker for containerization, and GitHub Actions for CI/CD.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">Express.js</span>
                  <span className="skill-tag text-xs">Flask</span>
                  <span className="skill-tag text-xs">Docker</span>
                  <span className="skill-tag text-xs">GitHub Actions</span>
                  <span className="skill-tag text-xs">Azure</span>
                  <span className="skill-tag text-xs">NGINX</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Veritas */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/veritas.png" alt="Veritas - Blockchain justice platform" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">
                  ⚖️ Veritas <span className="ml-2 bg-academic-primary/10 text-academic-primary text-xs px-2 py-0.5 rounded-full">Featured</span>
                </h3>
                <p className="text-academic-text-light text-sm mb-1">
                  Digital justice platform using public blockchain for transparency. Won us a spot at IBCOL 2025.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  Hybrid Architecture of Web2 and Web3. Smart contracts with solidity, IPFS for evidence storage. Backend with express.js and ethers.js.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">Express.js</span>
                  <span className="skill-tag text-xs">MongoDB</span>
                  <span className="skill-tag text-xs">Solidity</span>
                  <span className="skill-tag text-xs">Hardhat</span>
                  <span className="skill-tag text-xs">IPFS</span>
                  <span className="skill-tag text-xs">Ethers.js</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Shohochori */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/shohochori.png" alt="Shohochori - Health tracking app" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">🧓 Shohochori</h3>
                <p className="text-academic-text-light text-sm mb-1">
                  Health, wellness, personal tracking app built with elderly users in mind.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  Finalist at Therap Javafest. Microservices architecture with Spring Boot, Redis, Celery etc.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">React</span>
                  <span className="skill-tag text-xs">Spring Boot</span>
                  <span className="skill-tag text-xs">MySQL</span>
                  <span className="skill-tag text-xs">RabbitMQ</span>
                  <span className="skill-tag text-xs">Redis</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Kothin-Trains */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/kothin-trains.png" alt="Kothin-Trains - Ticket booking" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">🚂 Kothin-Trains</h3>
                <p className="text-academic-text-light text-sm mb-1">
                  Train ticket booking, inspired by Shohoz. For an academic course.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  Backend with Django, frontend with HTML, CSS, JS.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">Django</span>
                  <span className="skill-tag text-xs">Python</span>
                  <span className="skill-tag text-xs">Jinja</span>
                  <span className="skill-tag text-xs">SQL</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* ChinhoAI */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/chinhoai.png" alt="ChinhoAI - Sign language translation" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">🤝 ChinhoAI</h3>
                <p className="text-academic-text-light text-sm mb-1">
                  An ambitious attempt on real time Bangla to Bangla Sign Language Dual Translation. Finalist at GP Futuremakers, Runner up at Solvio AI Hackathon, and recognized at many more events.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  OpenCV, MediaPipe, Bangla ASR, Bangla TTS, Realtime Translation
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">Next.js</span>
                  <span className="skill-tag text-xs">React</span>
                  <span className="skill-tag text-xs">Framer Motion</span>
                  <span className="skill-tag text-xs">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* Sticky Studio */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/sticky-studio.png" alt="Sticky Studio - Opportunity tracker" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">💎 Sticky Studio</h3>
                <p className="text-academic-text-light text-sm mb-1">
                  My personal buddy to track scholarships, internships, and competitions in one place.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  Nothing fancy, LangGraph and Next.js.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">Next.js</span>
                  <span className="skill-tag text-xs">PostgreSQL</span>
                  <span className="skill-tag text-xs">Gemini AI</span>
                  <span className="skill-tag text-xs">Genkit</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>

            {/* IEEE VIP Cup */}
            <div className="bg-white border border-cream-200 rounded-xl overflow-hidden card-hover shadow-sm">
              <img src="/vip-cup.png" alt="IEEE VIP Cup - Computer vision project" className="project-thumbnail" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-academic-text">📹 IEEE VIP Cup 2025</h3>
                <p className="text-academic-text-light text-sm mb-1">
                  Drone vs. bird classification using RGB and infrared footage. Competition project.
                </p>
                <p className="text-academic-text-light text-sm mb-4">
                  Built a robust dataset preprocessing pipeline with SAM and YOLO.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="skill-tag text-xs">Python</span>
                  <span className="skill-tag text-xs">PyTorch</span>
                  <span className="skill-tag text-xs">YOLO</span>
                  <span className="skill-tag text-xs">Computer Vision</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href="https://github.com/chottosid" target="_blank" rel="noopener noreferrer" className="text-academic-primary hover:underline">Code</a>
                  <span className="text-cream-400">•</span>
                  <a href="#" className="text-academic-primary hover:underline">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">Research</h2>
          <div className="space-y-6">
            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text">
                  DDS-E-Sim: Simulating errors in DNA data storage
                </h3>
                <span className="text-xs text-academic-primary font-medium whitespace-nowrap ml-4">Accepted • 2025</span>
              </div>
              <p className="text-sm text-academic-text-light mb-2">
                Worked with Prof. A.B.M. Alim Al Islam at BUET.
              </p>
              <p className="text-xs text-academic-text-light mb-2">NeurIPS 2025 (FPI & SPIGM workshops)</p>
              <a href="https://www.biorxiv.org/content/10.1101/2025.02.14.637785v2.full" className="text-sm text-academic-primary hover:underline">View paper</a>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text">
                  Impact of Stain Normalization and Background Filtering on Deep Learning & Transformer based Models for Ovarian Cancer Histopathology Classification
                </h3>
                <span className="text-xs text-academic-primary font-medium whitespace-nowrap ml-4">Published • 2025</span>
              </div>
              <p className="text-sm text-academic-text-light mb-2">
                Independet research work.
              </p>
              <p className="text-xs text-academic-text-light mb-2">ICCIT 2025</p>
              <a href="#" className="text-sm text-academic-primary hover:underline">View paper</a>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text">Learning from imbalanced data</h3>
                <span className="text-xs text-blue-600 font-medium whitespace-nowrap ml-4">In Progress</span>
              </div>
              <p className="text-sm text-academic-text-light">
                Ongoint thesis work with Prof. Sukarna Barua.
              </p>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-academic-text">Quantum ML explorations</h3>
                <span className="text-xs text-blue-600 font-medium whitespace-nowrap ml-4">In Progress</span>
              </div>
              <p className="text-sm text-academic-text-light">
                Guided by Prof. Sohel Rahman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">Education</h2>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-semibold text-academic-text">
                  Bangladesh University of Engineering and Technology (BUET)
                </h3>
                <span className="text-academic-text-light">
                  Jan 2022 - Present
                </span>
              </div>
              <p className="text-academic-primary font-medium mb-2">
                BSc in Computer Science and Engineering
              </p>
              <p className="text-academic-text-light text-sm">
                CGPA: 3.60 (as of Level 4, Term 1)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">Achievements</h2>
          <div className="space-y-6 max-w-4xl mx-auto">

            {/* Tier 1: International Highlights */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* IBCOL Silver Medal */}
              <div className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100 border-2 border-slate-300 p-5 rounded-xl shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🥈</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700">Silver Medal, International Blockchain Olympiad</h3>
                    <p className="text-sm text-slate-600 mt-1">Represented Bangladesh • Hong Kong</p>
                    <span className="inline-block mt-2 text-slate-600 font-semibold text-xs bg-slate-200 px-2.5 py-1 rounded-full">2025</span>
                  </div>
                </div>
              </div>

              {/* APMO Honorable Mention */}
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300 p-5 rounded-xl shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🏅</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-amber-800">Honorable Mention, APMO</h3>
                    <p className="text-sm text-amber-700 mt-1">Asian Pacific Mathematical Olympiad</p>
                    <span className="inline-block mt-2 text-amber-700 font-semibold text-xs bg-amber-200 px-2.5 py-1 rounded-full">2019</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 2: National Excellence */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* IMO Training Camp */}
              <div className="bg-cream-50 border border-cream-300 p-4 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📐</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-academic-text">IMO Training Camp</h3>
                    <p className="text-xs text-academic-text-light mt-1">Selected for 3 consecutive years</p>
                    <span className="inline-block mt-2 text-academic-text-light font-medium text-xs bg-cream-200 px-2 py-0.5 rounded-full">2018–2020</span>
                  </div>
                </div>
              </div>

              {/* Bangladesh Blockchain Olympiad */}
              <div className="bg-cream-50 border border-cream-300 p-4 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔗</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-academic-text">Finalist, Bangladesh Blockchain Olympiad</h3>
                    <p className="text-xs text-academic-text-light mt-1">National level competition</p>
                    <span className="inline-block mt-2 text-academic-text-light font-medium text-xs bg-cream-200 px-2 py-0.5 rounded-full">2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 3: Other Notable */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-cream-50/50 border border-cream-200 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-academic-text">3rd Place</p>
                <p className="text-xs text-academic-text-light mt-0.5">BUET CSE Fest Hackathon</p>
                <p className="text-xs text-academic-text-light">2023</p>
              </div>
              <div className="bg-cream-50/50 border border-cream-200 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-academic-text">Finalist (2x)</p>
                <p className="text-xs text-academic-text-light mt-0.5">Therap JavaFest</p>
                <p className="text-xs text-academic-text-light">2023, 2024</p>
              </div>
              <div className="bg-cream-50/50 border border-cream-200 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-academic-text">13th Place</p>
                <p className="text-xs text-academic-text-light mt-0.5">SEC Inter-Uni Junior PC</p>
                <p className="text-xs text-academic-text-light">2023</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">Let's Talk</h2>
          <div className="text-center">
            <p className="text-academic-text-light mb-8 max-w-2xl mx-auto">
              Got a project in mind? Or just want to chat about code, blockchain, or classical music? Drop me a line.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="mailto:swarupsidhartho@gmail.com"
                className="inline-flex items-center gap-2 bg-academic-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-secondary hover:-translate-y-0.5"
              >
                📧 Email me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
              >
                📄 Resume
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/chottosid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.facebook.com/fatmathman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream-50 border-t border-cream-200 py-8 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-academic-text-light text-sm">
            © 2025 Swarup Sidhartho Mondol
          </p>
        </div>
      </footer>
    </main>
  );
}

