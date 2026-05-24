import { Mail, MapPin, Code2 } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-black text-[var(--text)]">Juan<span className="text-violet-500">.</span></span>
            </div>
            <p className="text-xs text-[var(--muted)]">Desarrollador Full Stack · Ambato, Ecuador</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/Juankarnori" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-violet-400 transition">
              <GithubIcon /> GitHub
            </a>
            <a href="mailto:juanknoriega070@gmail.com"
              className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-violet-400 transition">
              <Mail className="w-4 h-4" /> Email
            </a>
            <span className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
              <MapPin className="w-4 h-4" /> Ambato, EC
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Juan Noriega. Construido con Next.js + TypeScript + Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
