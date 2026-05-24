'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Zap, Globe, User } from 'lucide-react'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

const stack = [
  { cat: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { cat: 'Backend', items: ['Node.js', 'Supabase', 'PostgreSQL', 'Resend', 'REST APIs'] },
  { cat: 'Herramientas', items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma'] },
]

const focos = [
  {
    icon: Globe,
    title: 'Tiendas Online',
    desc: 'E-commerce completo con catálogo, carrito y pasarela de pagos.',
  },
  {
    icon: Database,
    title: 'Sistemas a Medida',
    desc: 'Paneles de administración, reservas, inventarios y más.',
  },
  {
    icon: Zap,
    title: 'Rendimiento Web',
    desc: 'Sitios rápidos, optimizados para SEO y accesibles desde cualquier dispositivo.',
  },
]

const stats = [
  { value: '3+', label: 'Proyectos en producción' },
  { value: '2+', label: 'Años de experiencia' },
  { value: '100%', label: 'Proyectos entregados' },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header label */}
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Sobre mí</span>
        </motion.div>

        {/* Foto + bio */}
        <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Foto */}
          <div className="shrink-0">
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              {/* Anillo violeta */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-violet-800 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-card)]">
                  <Image
                    src="/foto.jpg"
                    alt="Juan Noriega"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Badge disponible */}
              <div className="absolute -bottom-2 -right-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-[var(--text)] whitespace-nowrap">Disponible</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text)] mb-4 leading-tight">
              Desarrollador con foco en{' '}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                resultados reales
              </span>
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Soy Juan Noriega, desarrollador full stack basado en Ambato, Ecuador. Me especializo en
              convertir negocios físicos en operaciones digitales completas, construyendo desde el
              diseño hasta el despliegue en producción.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Trabajo con Next.js, TypeScript y Supabase para entregar proyectos rápidos, escalables
              y listos para crecer.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-black text-violet-400 mb-1">{s.value}</div>
              <div className="text-xs text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Focos */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {focos.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(0.15 + i * 0.08)}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-violet-500/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-violet-600/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-600/25 transition-colors">
                <f.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-bold text-[var(--text)] mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stack */}
        <motion.div {...fadeUp(0.2)}>
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-5 h-5 text-violet-400" />
            <h3 className="font-bold text-[var(--text)]">Stack tecnológico</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {stack.map((grupo, i) => (
              <motion.div
                key={grupo.cat}
                {...fadeUp(0.2 + i * 0.07)}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5"
              >
                <p className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-3">
                  {grupo.cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {grupo.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--muted)] px-2.5 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
