'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, ArrowRight, Clock } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const canales = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    valor: '+593 98 461 3243',
    href: 'https://wa.me/593984613243?text=Hola%20Juan%2C%20me%20interesa%20un%20proyecto',
    color: 'bg-emerald-600/10 border-emerald-500/20 hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    badge: 'Respondo en minutos',
  },
  {
    icon: Mail,
    label: 'Email',
    valor: 'juanknoriega070@gmail.com',
    href: 'mailto:juanknoriega070@gmail.com',
    color: 'bg-violet-600/10 border-violet-500/20 hover:border-violet-500/50',
    iconColor: 'text-violet-400',
    badge: 'Respondo en 24 h',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    valor: 'github.com/Juankarnori',
    href: 'https://github.com/Juankarnori',
    color: 'bg-[var(--bg-card)] border-[var(--border)] hover:border-violet-500/30',
    iconColor: 'text-[var(--muted)]',
    badge: null,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    valor: 'Ambato, Ecuador',
    href: 'https://maps.google.com/?q=Ambato,Ecuador',
    color: 'bg-[var(--bg-card)] border-[var(--border)] hover:border-violet-500/30',
    iconColor: 'text-[var(--muted)]',
    badge: null,
  },
]

export default function Contacto() {
  return (
    <section id="contacto" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Contacto</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text)] mt-3 mb-4">
            Hablemos de tu{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Estoy disponible para nuevos proyectos. Contame tu idea y te respondo con una
            propuesta en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: CTA principal */}
          <motion.div {...fadeUp(0.1)}>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-8 mb-5">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-[var(--muted)]">Disponible para proyectos</span>
              </div>

              <h3 className="text-xl font-black text-[var(--text)] mb-3">
                ¿Listo para empezar?
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-7">
                La forma más rápida es escribirme por WhatsApp. Podemos hablar del proyecto,
                definir el alcance y arrancar cuanto antes.
              </p>

              <a
                href="https://wa.me/593984613243?text=Hola%20Juan%2C%20me%20interesa%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/25 mb-3"
              >
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>

              <a
                href="mailto:juanknoriega070@gmail.com"
                className="flex items-center justify-center gap-2 w-full border border-[var(--border)] hover:border-violet-500/50 text-[var(--muted)] hover:text-[var(--text)] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:bg-[var(--bg-card2)]"
              >
                <Mail className="w-4 h-4" />
                Enviar un email
              </a>
            </div>

            {/* Tiempo respuesta */}
            <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl px-5 py-4">
              <Clock className="w-4 h-4 text-violet-400 shrink-0" />
              <p className="text-xs text-[var(--muted)]">
                Tiempo de respuesta promedio: <span className="text-[var(--text)] font-semibold">menos de 2 horas</span> en horario laboral (GMT-5)
              </p>
            </div>
          </motion.div>

          {/* Right: canales */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-4">
            {canales.map((c, i) => (
              <motion.a
                key={c.label}
                {...fadeUp(0.2 + i * 0.07)}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 border rounded-2xl px-6 py-5 transition-all duration-200 group ${c.color}`}
              >
                <div className={`shrink-0 ${c.iconColor}`}>
                  <c.icon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest">
                      {c.label}
                    </span>
                    {c.badge && (
                      <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-[var(--text)] truncate block">
                    {c.valor}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
