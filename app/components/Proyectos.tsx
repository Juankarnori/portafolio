'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const proyectos = [
  {
    numero: '01',
    nombre: 'Copiadora El Estudiante',
    descripcion:
      'Tienda online completa para una copiadora física. Incluye catálogo de productos, carrito de compras, gestión de pedidos y panel de administración con autenticación.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    demo: 'https://copiadora-el-estudiante.vercel.app',
    repo: 'https://github.com/Juankarnori/copiadora-el-estudiante',
    color: 'from-violet-600/20 to-purple-600/5',
    accent: 'bg-violet-600/10 text-violet-400 border-violet-500/20',
    tag: 'E-commerce',
  },
  {
    numero: '02',
    nombre: 'Agendalo',
    descripcion:
      'Sistema de reservas genérico para negocios de servicios. Flujo de reserva en 4 pasos, panel de administración, notificaciones por email y gestión de servicios.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend'],
    demo: 'https://agendalo.vercel.app',
    repo: 'https://github.com/Juankarnori/agendalo',
    color: 'from-emerald-600/20 to-teal-600/5',
    accent: 'bg-emerald-600/10 text-emerald-400 border-emerald-500/20',
    tag: 'SaaS',
  },
  {
    numero: '03',
    nombre: 'IronPeak Gym',
    descripcion:
      'Landing page moderna para un gimnasio con dashboard de métricas en tiempo real. Incluye gráficos de ingresos, membresías activas y asistencia diaria.',
    stack: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    demo: 'https://ironpeak.vercel.app',
    repo: 'https://github.com/Juankarnori/gym-landing',
    color: 'from-orange-600/20 to-red-600/5',
    accent: 'bg-orange-600/10 text-orange-400 border-orange-500/20',
    tag: 'Landing + Dashboard',
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Proyectos</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text)] mt-3 mb-4">
            Trabajo{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              en producción
            </span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Proyectos reales construidos para negocios reales. Cada uno resuelve un problema concreto
            y está desplegado y funcionando.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {proyectos.map((p, i) => (
            <motion.div
              key={p.nombre}
              {...fadeUp(0.1 + i * 0.1)}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.color.replace('/20', '').replace('/5', '/40')}`} />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left: info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-[var(--muted)]">{p.numero}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${p.accent}`}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-[var(--text)] mb-3 group-hover:text-violet-300 transition-colors">
                      {p.nombre}
                    </h3>

                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-6 max-w-lg">
                      {p.descripcion}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--muted)] px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: links */}
                  <div className="flex md:flex-col gap-3 shrink-0">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/25"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver demo
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-[var(--border)] hover:border-violet-500/50 text-[var(--muted)] hover:text-[var(--text)] text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-[var(--bg-card2)]"
                    >
                      <GithubIcon />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} className="text-center mt-12">
          <a
            href="https://github.com/Juankarnori"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-violet-400 transition-colors"
          >
            Ver más en GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
