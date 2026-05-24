import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Juan Noriega — Desarrollador Web Full Stack | Ambato, Ecuador',
  description:
    'Desarrollador Web Full Stack basado en Ambato, Ecuador. Construyo tiendas online, sistemas de reservas y paneles de administración a medida con Next.js, TypeScript y Supabase.',
  keywords: [
    'desarrollador web',
    'full stack',
    'Next.js',
    'TypeScript',
    'Supabase',
    'Ambato',
    'Ecuador',
    'tienda online',
    'sistema de reservas',
  ],
  authors: [{ name: 'Juan Noriega', url: 'https://github.com/Juankarnori' }],
  creator: 'Juan Noriega',
  openGraph: {
    title: 'Juan Noriega — Desarrollador Web Full Stack | Ambato, Ecuador',
    description:
      'Convierto negocios físicos en operaciones digitales completas — tiendas online, paneles de administración y sistemas a medida.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'Juan Noriega · Portafolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Noriega — Desarrollador Web Full Stack',
    description:
      'Convierto negocios físicos en operaciones digitales completas con Next.js y TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
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
