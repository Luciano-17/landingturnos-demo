import Hero from '../components/sections/Hero'
import Servicios from '../components/sections/Servicios'
import ComoTrabajo from '../components/sections/ComoTrabajo'
import Turnos from '../components/sections/Turnos'
import Testimonios from '../components/sections/Testimonios'
import Contacto from '../components/sections/Contacto'

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <ComoTrabajo />
      <Turnos />
      <Testimonios />
      <Contacto />
    </main>
  )
}
