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
      <section className="pt-32 pb-24 text-center bg-gradient-to-br from-white via-cream-50 to-cream-100">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 hero-gradient-text animate-fade-in-up">
            Swarup Sidhartho Mondol
          </h1>
          <p className="text-xl md:text-2xl text-academic-text-light mb-8 animate-fade-in-up">
            CS Student @ BUET | Full-Stack Developer | Blockchain Engineer
          </p>
          <p className="text-academic-text-light max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Building innovative solutions at the intersection of blockchain, web
            development, and machine learning. Graduating 2026.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            👨‍💻 About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                About
              </h3>
              <p className="text-academic-text-light mb-4">
                CSE student at BUET with experience building full-stack
                applications, blockchain systems, and machine learning projects.
              </p>
              <p className="text-academic-text-light">
                I enjoy solving complex problems through code—from
                blockchain-based platforms to scalable web applications. Always
                learning, always building.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Interests
              </h3>
              <div className="mb-6">
                <span className="skill-tag">Full-Stack Development</span>
                <span className="skill-tag">Blockchain & Web3</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Database Systems</span>
                <span className="skill-tag">API Design</span>
                <span className="skill-tag">DevOps</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Skills
              </h3>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Languages:
                </h4>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">SQL</span>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Technologies:
                </h4>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Ethereum</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            🚀 Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                🤖 Cognitia | Backend & AI Development
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>
                  Student-focused study-helper platform for Software Development
                  Sessional course
                </li>
                <li>
                  Designed scalable REST APIs using ExpressJS and integrated AI
                  services via Flask and OpenRouter
                </li>
                <li>
                  Deployed on Azure Cloud using Docker, NGINX load balancing,
                  and CI/CD with GitHub Actions
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Express.js</span>
                <span className="skill-tag text-xs">Flask</span>
                <span className="skill-tag text-xs">Docker</span>
                <span className="skill-tag text-xs">Azure</span>
                <span className="skill-tag text-xs">NGINX</span>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                ⚖️ Veritas | Backend & Blockchain Development
                <span className="text-xs text-academic-primary ml-2">
                  (Selected for International Blockchain Olympiad 2025)
                </span>
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>
                  Blockchain and AI-powered digital justice platform improving
                  transparency in judicial workflows
                </li>
                <li>Built backend with ExpressJS, IPFS, and MongoDB</li>
                <li>
                  Developed Web3 backend and smart contracts using Hardhat and
                  Solidity
                </li>
                <li>
                  Deployed on Azure Cloud with Docker and automated CI/CD
                  pipelines
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Express.js</span>
                <span className="skill-tag text-xs">MongoDB</span>
                <span className="skill-tag text-xs">Solidity</span>
                <span className="skill-tag text-xs">Hardhat</span>
                <span className="skill-tag text-xs">IPFS</span>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                🧓 Shohochori | Frontend & Microservice Backend
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>Social and wellness platform designed for elderly users</li>
                <li>
                  Built accessible frontend with React, emphasizing
                  senior-friendly navigation and readability
                </li>
                <li>
                  Implemented microservice backend using Spring Boot, MySQL,
                  RabbitMQ, and Redis
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">React</span>
                <span className="skill-tag text-xs">Spring Boot</span>
                <span className="skill-tag text-xs">MySQL</span>
                <span className="skill-tag text-xs">RabbitMQ</span>
                <span className="skill-tag text-xs">Redis</span>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                🚂 Kothin-Trains | Full Stack Development
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>Train ticketing platform modeled after Shohoz services</li>
                <li>Developed backend with Django</li>
                <li>
                  Designed frontend for booking, scheduling, and user management
                  using Jinja
                </li>
                <li>
                  Wrote all SQL queries manually as per project requirements (no
                  ORM used)
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Django</span>
                <span className="skill-tag text-xs">Python</span>
                <span className="skill-tag text-xs">Jinja</span>
                <span className="skill-tag text-xs">SQL</span>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                � ChinhoAI | Full Stack Development
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>
                  AI-powered sign language interpreter featuring real ASL video
                  demonstrations
                </li>
                <li>
                  Built interactive video player with fullscreen support and
                  playback controls using React
                </li>
                <li>
                  Implemented smooth animations and transitions using Framer
                  Motion
                </li>
                <li>
                  Designed responsive UI with drag-and-drop video upload
                  functionality
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Next.js</span>
                <span className="skill-tag text-xs">React</span>
                <span className="skill-tag text-xs">Framer Motion</span>
                <span className="skill-tag text-xs">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                💎 Sticky Studio | Full Stack & AI Development
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>
                  Built opportunity management platform for tracking
                  scholarships, PhD positions, and competitions
                </li>
                <li>
                  Integrated Gemini AI for automated extraction of opportunity
                  details from documents and images
                </li>
                <li>
                  Designed PostgreSQL database schema with advanced indexing for
                  search optimization
                </li>
                <li>
                  Implemented authentication system and responsive UI with
                  modern design patterns
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Next.js</span>
                <span className="skill-tag text-xs">PostgreSQL</span>
                <span className="skill-tag text-xs">Gemini AI</span>
                <span className="skill-tag text-xs">Genkit</span>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-6 card-hover shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                �📹 IEEE Video and ImagProcessing Cup 2025 | Dataset
                Preprocessing
              </h3>
              <ul className="list-disc list-inside text-academic-text-light space-y-1 text-sm mb-4">
                <li>
                  Collaborated in team project for IEEE VIPCup 2025, focusing on
                  drone vs. bird classification using RGB and IR imagery
                </li>
                <li>
                  Designed and implemented advanced dataset preprocessing
                  pipeline for YOLO-based temporal models
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-tag text-xs">Python</span>
                <span className="skill-tag text-xs">PyTorch</span>
                <span className="skill-tag text-xs">YOLO</span>
                <span className="skill-tag text-xs">Computer Vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            🔬 Research
          </h2>
          <div className="space-y-6">
            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-academic-text">
                  DDS-E-Sim: A Transformer-based Probabilistic Generative
                  Framework for Simulating Error-Prone DNA Sequences for DNA
                  Data Storage
                </h3>
                <span className="text-xs text-academic-primary font-medium whitespace-nowrap ml-4">
                  2025
                </span>
              </div>
              <p className="text-sm text-green-700 font-medium mb-2">
                Accepted at NeurIPS 2025 (FPI and SPIGM Tracks)
              </p>
              <p className="text-sm text-academic-text-light mb-3">
                Collaborators: Prof. A.B.M. Alim Al Islam, BUET
              </p>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-academic-text">
                  Machine Learning and Data Imbalance Techniques
                </h3>
                <span className="text-xs text-blue-600 font-medium whitespace-nowrap ml-4">
                  In Progress
                </span>
              </div>
              <p className="text-sm text-academic-text-light mb-3">
                Collaborators: Prof. Sukarna Barua, BUET
              </p>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 card-hover">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-academic-text">
                  Quantum Computing and Quantum Machine Learning
                </h3>
                <span className="text-xs text-blue-600 font-medium whitespace-nowrap ml-4">
                  In Progress
                </span>
              </div>
              <p className="text-sm text-academic-text-light mb-3">
                Collaborators: Prof. Sohel Rahman, BUET
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            🎓 Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-semibold text-academic-text">
                  Bangladesh University of Engineering and Technology (BUET)
                </h3>
                <span className="text-academic-text-light">
                  Jan 2022 - Jan 2026
                </span>
              </div>
              <p className="text-academic-primary font-medium mb-2">
                Bachelor of Science in Computer Science and Engineering
              </p>
              <p className="text-academic-text-light text-sm">
                CGPA: 3.56 (up to Level 3, Term 2)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors Section */}
      <section id="awards" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            🏆 Honors and Awards
          </h2>
          <div className="space-y-3 max-w-4xl mx-auto">
            {/* Champion Achievement - Most Prominent */}
            <div className="bg-gradient-to-r from-yellow-100 via-gold-50 to-yellow-100 border-2 border-yellow-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <h3 className="text-lg font-bold text-yellow-800 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                      Champion, International Blockchain Olympiad
                    </h3>
                    <p className="text-sm text-yellow-700 font-medium mt-1">🥇 First Place Winner (representing Bangladesh)</p>
                  </div>
                </div>
                <span className="text-yellow-800 font-bold text-base bg-yellow-200 px-3 py-1 rounded-full">
                  2025
                </span>
              </div>
            </div>

            {/* Top 3 Highlighted Awards */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Finalist, International Blockchain Olympiad (representing
                      Bangladesh)
                    </h3>
                  </div>
                </div>
                <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">
                  2025
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Honorable Mention, Asia Pacific Mathematical Olympiad
                    </h3>
                  </div>
                </div>
                <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">
                  2019
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      International Mathematical Olympiad (IMO) Camper
                    </h3>
                  </div>
                </div>
                <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">
                  2018-2020
                </span>
              </div>
            </div>

            {/* Other Awards */}
            <div className="bg-cream-50 border-l-4 border-academic-primary p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-academic-text">
                    Finalist, Bangladesh Blockchain Olympiad
                  </h3>
                </div>
                <span className="text-academic-text-light text-sm whitespace-nowrap">
                  2023
                </span>
              </div>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-academic-text">
                    3rd Place (Team), BUET CSE Fest Hackathon — Blockchain
                    Category
                  </h3>
                </div>
                <span className="text-academic-text-light text-sm whitespace-nowrap">
                  2023
                </span>
              </div>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-academic-text">
                    29th Place (Team), Datathon, KUET Bitfest
                  </h3>
                </div>
                <span className="text-academic-text-light text-sm whitespace-nowrap">
                  2025
                </span>
              </div>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-academic-text">
                    Finalist, Therap JavaFest
                  </h3>
                </div>
                <span className="text-academic-text-light text-sm whitespace-nowrap">
                  2023, 2024
                </span>
              </div>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-academic-text">
                    23rd Place (Team), BUET CSE Inter-University Programming
                    Contest (IUPC)
                  </h3>
                </div>
                <span className="text-academic-text-light text-sm whitespace-nowrap">
                  2023
                </span>
              </div>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-academic-text">
                    13th Place (Team), Sylhet Engineering College Inter-Uni
                    Junior Programming Contest
                  </h3>
                </div>
                <span className="text-academic-text-light text-sm whitespace-nowrap">
                  2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            💬 Get In Touch
          </h2>
          <div className="text-center">
            <p className="text-academic-text-light mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, collaborating on
              interesting ideas, or exploring opportunities in software
              development and blockchain technology. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="mailto:swarupsidhartho@gmail.com"
                className="inline-flex items-center gap-2 bg-academic-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-secondary hover:-translate-y-0.5"
              >
                📧 Email Me
              </a>
              <a
                href="https://github.com/chottosid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
              >
                📄 View Portfolio
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/swarup-sidhartho-mondol-032b90257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/chottosid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                💻 GitHub
              </a>
              <a
                href="https://www.facebook.com/fatmathman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                📘 Facebook
              </a>
              <a
                href="mailto:swarupsidhartho@gmail.com"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream-50 border-t border-cream-200 py-12 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-academic-text-light">
            &copy; 2025 Swarup Sidhartho Mondol. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
