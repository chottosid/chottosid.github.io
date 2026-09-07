import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
  navLinks,
  profile,
  research,
  experience,
  projects,
  education,
  awards,
  skills,
} from "./data";

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-link dark:text-blue-400 hover:underline">
      {children}
    </a>
  );
}

const STATUS_LABELS = {
  accepted: "Accepted",
  published: "Published",
  "in-progress": "In Progress",
  "under-review": "Under Review",
};

export default function Home() {
  return (
    <main className="bg-white dark:bg-ink-900 min-h-screen">
      <Navigation navLinks={navLinks} />

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-5">
            <img
              src="/portrait.jpg"
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 transition-transform duration-300 ease-out hover:scale-150 hover:shadow-lg cursor-pointer"
            />
            <div>
              <h1 className="text-2xl font-bold text-ink-900 dark:text-white">{profile.name}</h1>
              <p className="text-ink-500 dark:text-ink-400 mt-0.5">{profile.title}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-sm">
                <a href={`mailto:${profile.email}`} className="text-link dark:text-blue-400 hover:underline">Email</a>
                <span className="text-ink-300 dark:text-ink-600">|</span>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <span className="text-ink-300 dark:text-ink-600">|</span>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                <span className="text-ink-300 dark:text-ink-600">|</span>
                <a href={profile.website} className="text-link dark:text-blue-400 hover:underline">Website</a>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-10 space-y-3">
          {profile.summary.map((p, i) => (
            <p key={i} className="text-ink-600 dark:text-ink-300 leading-relaxed">{p}</p>
          ))}
        </section>

        {/* Research */}
        <section id="research" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Research</h2>
          <div className="space-y-5">
            {research.map((item) => (
              <div key={item.title}>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-semibold text-ink-800 dark:text-ink-100">{item.title}</h3>
                  <span className={`status-badge ${item.status}`}>
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>
                {item.collaborators && (
                  <p className="text-sm text-ink-500 dark:text-ink-400 mt-0.5">{item.collaborators}</p>
                )}
                {item.venue && (
                  <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">{item.venue}</p>
                )}
                {item.description && (
                  <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">{item.description}</p>
                )}
                {item.link && (
                  <ExternalLink href={item.link.url}>
                    <span className="text-sm mt-1 inline-block">{item.link.label} &rarr;</span>
                  </ExternalLink>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Experience</h2>
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={job.role}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-semibold text-ink-800 dark:text-ink-100">{job.role}</h3>
                    <p className="text-sm text-ink-500 dark:text-ink-400">{job.company}</p>
                  </div>
                  <span className="text-sm text-ink-400 dark:text-ink-500 whitespace-nowrap">{job.period}</span>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-ink-600 dark:text-ink-300 list-disc list-outside ml-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} dangerouslySetInnerHTML={{
                      __html: bullet.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Selected Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-semibold text-ink-800 dark:text-ink-100">{project.name}</h3>
                  {project.badge && (
                    <span className="text-xs bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 px-2 py-0.5 rounded">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink-500 dark:text-ink-400">{project.description}</p>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    className="mt-2 rounded-md border border-ink-100 dark:border-ink-700 w-full"
                  />
                )}
                {project.links && (
                  <div className="flex gap-3 mt-1 text-sm">
                    {project.links.map((link) => (
                      <ExternalLink key={link.label} href={link.url}>{link.label}</ExternalLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Education</h2>
          <div>
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold text-ink-800 dark:text-ink-100">{education.institution}</h3>
              <span className="text-sm text-ink-400 dark:text-ink-500 whitespace-nowrap">{education.period}</span>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">{education.degree}</p>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Awards</h2>
          <ul className="space-y-1.5 text-sm text-ink-600 dark:text-ink-300">
            {awards.map((award) => (
              <li key={award.title} className="flex justify-between gap-4">
                <span className={award.highlight ? "font-medium text-ink-800 dark:text-ink-100" : ""}>{award.title}</span>
                <span className="text-ink-400 dark:text-ink-500 whitespace-nowrap">{award.year}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-10">
          <h2 className="text-lg font-bold section-rule">Skills</h2>
          <dl className="space-y-2 text-sm">
            {skills.map((skill) => (
              <div key={skill.category} className="flex gap-2">
                <dt className="font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap">{skill.category}:</dt>
                <dd className="text-ink-500 dark:text-ink-400">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Footer email={profile.email} github={profile.github} linkedin={profile.linkedin} />
      </div>
    </main>
  );
}
