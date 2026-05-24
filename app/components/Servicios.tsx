'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, CalendarCheck, BarChart3, Wrench, Check, ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

const servicios = [
  {
    icon: ShoppingCart,
    nombre: 'Tienda Online',
    precio: 'Desde $400',
    desc: 'E-commerce completo para tu negocio. Catálogo, carrito, pedidos y panel de administración incluidos.',
    incluye: [
      'Catálogo de productos',
      'Carrito de compras',
      'Panel de administración',
      'Autenticación segura',
      'Deploy en Vercel',
    ],
    destacado: false,
  },
  {
    icon: CalendarCheck,
    nombre: 'Sistema de Reservas',
    precio: 'Desde $300',
    desc: 'Permite a tus clientes agendar citas o reservar servicios online. Notificaciones automáticas por email.',
    incluye: [
      'Flujo de reserva paso a paso',
      'Panel de administración',
      'Emails automáticos',
      'Gestión de servicios',
      'Deploy en Vercel',
    ],
    destacado: true,
  },
  {
    icon: BarChart3,
    nombre: 'Landing + Dashboard',
    precio: 'Desde $200',
    desc: 'Página de presentación profesional con métricas o datos en tiempo real para tu negocio.',
    incluye: [
      'Diseño responsivo',
      'Animaciones modernas',
      'Gráficos de métricas',
      'Modo oscuro/claro',
      'Deploy en Vercel',
    ],
    destacado: false,
  },
  {
    icon: Wrench,
    nombre: 'Sistema a Medida',
    precio: 'Cotización',
    desc: '¿Necesitás algo específico? Construyo la solución exacta que tu negocio requiere, desde cero.',
    incluye: [
      'Análisis de requerimientos',
      'Diseño personalizado',
      'Base de datos a medida',
      'Integraciones externas',
      'Soporte post-entrega',
    ],
    destacado: false,
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text)] mt-3 mb-4">
            ¿En qué puedo{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              ayudarte?
            </span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Servicios de desarrollo web enfocados en resultados. Entrego proyectos funcionales,
            rápidos y listos para producción.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {servicios.map((s, i) => (
            <motion.div
              key={s.nombre}
              {...fadeUp(0.1 + i * 0.08)}
              className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-300 hover:border-violet-500/40 ${
                s.destacado
                  ? 'bg-violet-600/10 border-violet-500/40'
                  : 'bg-[var(--bg-card)] border-[var(--border)]'
              }`}
            >
              {s.destacado && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Más solicitado
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between gap-4 mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  s.destacado ? 'bg-violet-600/30' : 'bg-violet-600/15'
                }`}>
                  <s.icon className="w-5 h-5 text-violet-400" />
                </div>
                <span className={`text-sm font-black ${s.destacado ? 'text-violet-300' : 'text-violet-400'}`}>
                  {s.precio}
                </span>
              </div>

              <h3 className="text-lg font-black text-[var(--text)] mb-2">{s.nombre}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6 flex-1">{s.desc}</p>

              <ul className="space-y-2">
                {s.incluye.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                    <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          {...fadeUp(0.5)}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-10 text-center"
        >
          <h3 className="text-xl md:text-2xl font-black text-[var(--text)] mb-3">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-[var(--muted)] mb-7 max-w-md mx-auto text-sm leading-relaxed">
            Contame tu idea y te armo una propuesta. Trabajo con negocios de cualquier tamaño
            y adapto los proyectos a cada presupuesto.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/25"
          >
            Hablemos del proyecto
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
