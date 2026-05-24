'use client'

import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const badges = ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Available badge */}
        <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-[var(--muted)]">Disponible para proyectos</span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fade(0.1)} className="text-5xl md:text-7xl font-black tracking-tight text-[var(--text)] mb-4 leading-none">
          Juan{' '}
          <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
            Noriega
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p {...fade(0.2)} className="text-lg md:text-xl font-semibold text-[var(--muted)] mb-6 tracking-wide uppercase">
          Desarrollador Full Stack
        </motion.p>

        {/* Phrase */}
        <motion.p {...fade(0.3)} className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-10">
          Convierto negocios físicos en operaciones digitales completas —{' '}
          <span className="text-[var(--text)]">tiendas online, paneles de administración y sistemas a medida</span>,
          construidos desde cero con Next.js y TypeScript.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fade(0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#proyectos"
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/25 w-full sm:w-auto text-center"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="flex items-center justify-center gap-2 border border-[var(--border)] hover:border-violet-500/50 text-[var(--text)] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-[var(--bg-card)] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            Contacto
          </a>
        </motion.div>

        {/* Tech badges */}
        <motion.div {...fade(0.5)} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--muted)] px-3 py-1 rounded-full"
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div {...fade(0.6)} className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Juankarnori"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-violet-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="mailto:juanknoriega070@gmail.com"
            className="text-xs text-[var(--muted)] hover:text-violet-400 transition-colors font-mono"
          >
            juanknoriega070@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--muted)]"
      >
        <span className="text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
