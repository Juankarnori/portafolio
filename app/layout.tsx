import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Juan Noriega — Desarrollador Full Stack',
  description: 'Desarrollador Full Stack basado en Ambato, Ecuador. Especializado en Next.js, TypeScript y Supabase. Construyo tiendas online, paneles de administración y sistemas a medida.',
  keywords: 'desarrollador web, full stack, Next.js, TypeScript, Supabase, Ambato, Ecuador',
  authors: [{ name: 'Juan Noriega' }],
  openGraph: {
    title: 'Juan Noriega — Desarrollador Full Stack',
    description: 'Convierto negocios físicos en operaciones digitales completas.',
    type: 'website',
    locale: 'es_EC',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
