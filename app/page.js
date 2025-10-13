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
                href="#research"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Achievements
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
            Bioinformatics | Machine Learning | Full-Stack Developer |
            Blockchain Engineer
          </p>
          <p className="text-academic-text-light max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Final year Computer Science and Engineering student @BUET with a passion for
            bioinformatics, theoretical CS, and mathematics. Experienced in
            full-stack development, ML/DL, blockchain technologies, and
            computational biology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Background
              </h3>
              <p className="text-academic-text-light mb-4">
                I am a Computer Science and Engineering student at BUET with a
                strong foundation in bioinformatics, machine learning, and
                blockchain technologies. Passionate about exploring the
                intersection of computational biology and AI.
              </p>
              <p className="text-academic-text-light">
                My journey focuses on applying computational and statistical
                approaches to biological data, building efficient algorithms,
                and developing intelligent systems that connect science and
                technology. I enjoy creating solutions that combine solid
                engineering principles with innovative research approaches.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Areas of Interest
              </h3>
              <div className="mb-6">
                <span className="skill-tag">Bioinformatics</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Full-Stack Development</span>
                <span className="skill-tag">Blockchain Development</span>
                <span className="skill-tag">Database Systems</span>
                <span className="skill-tag">Theoretical CS</span>
                <span className="skill-tag">Computational Biology</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Technical Skills
              </h3>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Programming Languages:
                </h4>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">SQL</span>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Frameworks & Libraries:
                </h4>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Scikit-learn</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Databases & Tools:
                </h4>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Oracle</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Ethereum</span>
                <span className="skill-tag">Hardhat</span>
                <span className="skill-tag">Selenium</span>
                <span className="skill-tag">Scrapy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                ChinhoAI - Sign Language Avatar
              </h3>
              <p className="text-academic-text-light mb-6">
                An innovative prototype featuring an animated sign language
                avatar that displays ASL videos synchronized with content
                playback. Built with Next.js 15, TypeScript, and Framer Motion
                for smooth animations. Features interactive video upload,
                multiple gesture patterns, and fullscreen-aware positioning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Framer Motion</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                Kothin-Trains Database System
              </h3>
              <p className="text-academic-text-light mb-6">
                CSE216 Database Sessional Project - A comprehensive train
                management system built with Python Django framework and Oracle
                21c DBMS. Features HTML, CSS, JS frontend with Ajax for dynamic
                interactions. Includes train scheduling, booking management, and
                user authentication systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Oracle 21c</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Ajax</span>
              </div>
            </div>
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                Woodland Escapade Game
              </h3>
              <p className="text-academic-text-light mb-6">
                A FPS game written completely in C using IGraphics library, a
                minimalistic wrapper over OpenGL. Features immersive gameplay
                mechanics, custom graphics rendering, character movement, and
                interactive game environments. Academic project showcasing
                graphics programming and game development skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">OpenGL</span>
                <span className="skill-tag">IGraphics</span>
                <span className="skill-tag">Game Development</span>
              </div>
            </div>
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                Machine Learning & Bioinformatics Projects
              </h3>
              <p className="text-academic-text-light mb-6">
                Collection of bioinformatics and machine learning projects
                exploring computational biology, deep learning for biological
                data analysis, and theoretical computer science applications.
                Includes data preprocessing, model training, evaluation, and
                visualization components with focus on biological data
                interpretation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">Bioinformatics</span>
                <span className="skill-tag">Data Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            Academic Achievements & Recognition
          </h2>
          <div className="space-y-8 mb-12">
            <div className="bg-cream-50 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                Bachelor of Science in Computer Science and Engineering
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>
                  Bangladesh University of Engineering and Technology (BUET)
                </strong>{" "}
                | Expected Graduation: 2026
              </p>
              <p className="text-academic-primary font-medium">
                Focus on Bioinformatics, Machine Learning, and Theoretical
                Computer Science
              </p>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                Research Interests & Projects
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>Bioinformatics & Computational Biology</strong> | Active
                Research
              </p>
              <p className="text-academic-primary font-medium">
                Exploring intersection of bioinformatics, machine learning, and
                theoretical CS. Focus on computational approaches to biological
                data and algorithm development.
              </p>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                Current Focus Areas
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>Multi-disciplinary Research</strong> | 2024-2025
              </p>
              <p className="text-academic-primary font-medium">
                Bioinformatics algorithms, Deep learning for computational
                biology, Blockchain and Web3 applications, Data visualization
                and analytics
              </p>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                Technical Excellence
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>Academic Projects</strong> | CSE Coursework
              </p>
              <p className="text-academic-primary font-medium">
                Strong performance in database systems (CSE216), data structures
                (CSE204), algorithms (CSE208), and advanced programming projects
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://github.com/chottosid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
            >
              View GitHub Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold text-academic-text">
                CSE Student at BUET
              </h3>
              <p className="text-academic-primary font-medium mb-3">
                Bangladesh University of Engineering and Technology | 2022 -
                Present
              </p>
              <p className="text-academic-text-light">
                Pursuing Computer Science and Engineering with focus on
                bioinformatics, machine learning, and theoretical computer
                science. Actively engaged in research projects exploring
                computational biology and algorithm development. Expected
                graduation: 2026.
              </p>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold text-academic-text">
                Research & Development Projects
              </h3>
              <p className="text-academic-primary font-medium mb-3">
                Academic & Personal Projects | 2023 - Present
              </p>
              <p className="text-academic-text-light">
                Developed innovative applications including ChinhoAI sign
                language avatar, database management systems, and game
                development projects. Gained expertise in Django, Next.js,
                TypeScript, Oracle databases, and OpenGL graphics programming.
                Focus on creating accessible technology solutions.
              </p>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold text-academic-text">
                Bioinformatics & ML Research
              </h3>
              <p className="text-academic-primary font-medium mb-3">
                Research Focus | 2024 - Present
              </p>
              <p className="text-academic-text-light">
                Exploring bioinformatics algorithms and deep learning for
                computational biology. Working with PyTorch, scikit-learn, and
                specialized bioinformatics tools. Developing intelligent systems
                that connect biological data analysis with machine learning
                applications and theoretical computer science principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-academic-text">
            Get In Touch
          </h2>
          <div className="text-center">
            <p className="text-academic-text-light mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss bioinformatics research, collaborate
              on ML/AI projects, or explore new opportunities in computational
              biology and blockchain development. Let's connect and build
              innovative solutions together!
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
            &copy; 2024 Swarup Sidhartho Mondol. All rights reserved.
          </p>
          <p className="text-academic-text-light mt-2">
            Built with Next.js and Tailwind CSS, hosted on GitHub Pages
          </p>
        </div>
      </footer>
    </main>
  );
}
