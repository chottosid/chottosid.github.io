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
            Full-Stack Developer | Machine Learning Engineer | Blockchain Engineer
          </p>
          <p className="text-academic-text-light max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Final Year Computer Science student @BUET with a passion for mathematics, theoretical CS, and music.
            Experienced in full-stack development, ML/DL, Blockchain technologies and
            automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <a
              href="#research"
              className="inline-flex items-center gap-2 bg-academic-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-secondary hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#publications"
              className="inline-flex items-center gap-2 bg-transparent text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
            >
              Achievements
            </a>
          </div>
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
                I am a Senior year Computer Science student with a strong
                foundation in software development, machine learning technologies and Blockchain.
              </p>
              <p className="text-academic-text-light">
                My journey includes building comprehensive web applications like
                student management systems, job portals, and exploring ML
                projects. I enjoy creating solutions that combine solid
                engineering principles with user-friendly interfaces and
                efficient backend systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Areas of Interest
              </h3>
              <div className="mb-6">
                <span className="skill-tag">Full-Stack Development</span>
                <span className="skill-tag">Web Applications</span>
                <span className="skill-tag">Database Systems</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Software Engineering</span>
                <span className="skill-tag">System Design</span>
                <span className="skill-tag">Problem Solving</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-academic-text">
                Technical Skills
              </h3>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Programming Languages:
                </h4>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">SQL</span>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Frameworks & Libraries:
                </h4>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-academic-text mb-2">
                  Databases & Tools:
                </h4>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Postman</span>
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
                Student Result Management System
              </h3>
              <p className="text-academic-text-light mb-6">
                A comprehensive web-based application for managing student
                academic records and results. Features include student
                registration, grade management, report generation, and
                administrative controls with secure authentication and
                role-based access.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Web Development</span>
              </div>
            </div>
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                Job Portal Application
              </h3>
              <p className="text-academic-text-light mb-6">
                A full-stack job portal platform connecting job seekers with
                employers. Features include job posting, application management,
                candidate profiles, search functionality, and real-time
                notifications with a responsive user interface.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express.js</span>
              </div>
            </div>
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                Machine Learning Projects
              </h3>
              <p className="text-academic-text-light mb-6">
                Collection of machine learning projects exploring various
                algorithms and applications. Includes data preprocessing, model
                training, evaluation, and visualization components covering
                supervised and unsupervised learning techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">Machine Learning</span>
              </div>
            </div>
            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-academic-text">
                Web Development Projects
              </h3>
              <p className="text-academic-text-light mb-6">
                Various web applications demonstrating modern development
                practices, responsive design, and clean code architecture.
                Projects showcase proficiency in both frontend and backend
                technologies with focus on user experience and performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">REST APIs</span>
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
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>KIIT University</strong> | Currently Pursuing
              </p>
              <p className="text-academic-primary font-medium">
                Specialization in Artificial Intelligence and Machine Learning
              </p>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                Technical Research Projects
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>Multiple AI/ML Projects</strong> | GitHub Portfolio
              </p>
              <p className="text-academic-primary font-medium">
                Computer Vision, NLP, and Deep Learning implementations with
                real-world applications
              </p>
            </div>

            <div className="bg-cream-50 border-l-4 border-academic-primary p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-academic-text">
                Professional Development
              </h3>
              <p className="text-academic-text-light mb-1">
                <strong>Continuous Learning</strong> | Industry-Relevant Skills
              </p>
              <p className="text-academic-primary font-medium">
                Advanced certifications and hands-on experience in cutting-edge
                AI technologies
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
                Computer Science Student
              </h3>
              <p className="text-academic-primary font-medium mb-3">
                Academic Journey | Present
              </p>
              <p className="text-academic-text-light">
                Currently pursuing Computer Science studies with focus on
                software development, web technologies, and emerging fields like
                machine learning. Actively working on practical projects to
                apply theoretical knowledge and build real-world solutions.
              </p>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold text-academic-text">
                Full-Stack Development Projects
              </h3>
              <p className="text-academic-primary font-medium mb-3">
                Personal Projects | 2023 - Present
              </p>
              <p className="text-academic-text-light">
                Developed comprehensive web applications including student
                management systems and job portals. Gained hands-on experience
                with Java Spring Boot, React, Node.js, and database management.
                Focus on creating user-friendly interfaces and efficient backend
                systems.
              </p>
            </div>

            <div className="bg-white border border-cream-200 rounded-xl p-8 card-hover shadow-sm">
              <h3 className="text-xl font-semibold text-academic-text">
                Machine Learning Exploration
              </h3>
              <p className="text-academic-primary font-medium mb-3">
                Learning & Implementation | 2024
              </p>
              <p className="text-academic-text-light">
                Exploring machine learning concepts through practical projects
                and implementations. Working with Python libraries for data
                analysis and building foundational understanding of ML
                algorithms and their applications in real-world scenarios.
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
              I'm always excited to discuss AI/ML projects, collaborate on
              innovative solutions, or explore new opportunities in artificial
              intelligence and software development. Let's connect and build
              something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="mailto:swarup.chakraborty@example.com"
                className="inline-flex items-center gap-2 bg-academic-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-secondary hover:-translate-y-0.5"
              >
                📧 Email Me
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 bg-transparent text-academic-primary border border-academic-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-academic-primary hover:text-white"
              >
                📄 Download CV
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/swarup-chakraborty"
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
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-text-light font-medium hover:text-academic-primary transition-colors"
              >
                Google Scholar
              </a>
              <a
                href="mailto:swarup.chakraborty@example.com"
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
            &copy; 2024 Swarup Chakraborty. All rights reserved.
          </p>
          <p className="text-academic-text-light mt-2">
            Built with Next.js and Tailwind CSS, hosted on GitHub Pages
          </p>
        </div>
      </footer>
    </main>
  );
}
