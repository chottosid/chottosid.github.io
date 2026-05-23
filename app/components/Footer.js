export default function Footer({ email, github, linkedin }) {
  return (
    <footer className="pt-8 border-t border-ink-200 dark:border-ink-700 text-sm text-ink-400 dark:text-ink-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p>&copy; 2026 Swarup Sidhartho Mondol</p>
        <div className="flex gap-4">
          <a href={`mailto:${email}`} className="hover:text-ink-600 dark:hover:text-ink-300 transition-colors">Email</a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-ink-600 dark:hover:text-ink-300 transition-colors">GitHub</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink-600 dark:hover:text-ink-300 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
