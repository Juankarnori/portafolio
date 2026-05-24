import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreMi />
      <Proyectos />
      <Servicios />
      <Contacto />
    </main>
  )
}
