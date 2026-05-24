'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
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
    screenshot: '/screenshots/copiadora.png',
    gradient: 'from-violet-900/40 to-purple-900/20',
    tag: 'E-commerce',
    tagColor: 'bg-violet-600/10 text-violet-400 border-violet-500/20',
  },
  {
    numero: '02',
    nombre: 'Agendalo',
    descripcion:
      'Sistema de reservas genérico para negocios de servicios. Flujo de reserva en 4 pasos, panel de administración, notificaciones por email y gestión de servicios.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend'],
    demo: 'https://agendalo-eta.vercel.app',
    repo: 'https://github.com/Juankarnori/agendalo',
    screenshot: '/screenshots/agendalo.png',
    gradient: 'from-emerald-900/40 to-teal-900/20',
    tag: 'SaaS',
    tagColor: 'bg-emerald-600/10 text-emerald-400 border-emerald-500/20',
  },
  {
    numero: '03',
    nombre: 'IronPeak Gym',
    descripcion:
      'Landing page moderna para un gimnasio con dashboard de métricas en tiempo real. Incluye gráficos de ingresos, membresías activas y asistencia diaria.',
    stack: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    demo: 'https://gym-landing-sand.vercel.app',
    repo: 'https://github.com/Juankarnori/gym-landing',
    screenshot: '/screenshots/ironpeak.png',
    gradient: 'from-orange-900/40 to-red-900/20',
    tag: 'Landing + Dashboard',
    tagColor: 'bg-orange-600/10 text-orange-400 border-orange-500/20',
  },
]

function ProjectImage({ src, alt, gradient }: { src: string; alt: string; gradient: string }) {
  const [error, setError] = useState(false)

  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}>
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-12 h-1.5 bg-white/40 rounded" />
            <div className="w-20 h-1.5 bg-white/20 rounded" />
            <div className="w-16 h-1.5 bg-white/20 rounded" />
          </div>
        </div>
      )}
    </div>
  )
}

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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {proyectos.map((p, i) => (
            <motion.div
              key={p.nombre}
              {...fadeUp(0.1 + i * 0.1)}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Screenshot */}
              <ProjectImage src={p.screenshot} alt={p.nombre} gradient={p.gradient} />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[var(--muted)]">{p.numero}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[var(--text)] mb-2 group-hover:text-violet-300 transition-colors">
                  {p.nombre}
                </h3>

                <p className="text-xs text-[var(--muted)] leading-relaxed mb-4 flex-1">
                  {p.descripcion}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--muted)] px-2 py-0.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-[var(--border)] hover:border-violet-500/50 text-[var(--muted)] hover:text-[var(--text)] text-xs font-bold px-3 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <GithubIcon />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} className="text-center">
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
