import SectionLabel from '../ui/SectionLabel'
import TurnosWidget from './TurnosWidget'

const WA_LINK =
  'https://wa.me/5493518636575?text=Hola!%20Vengo%20de%20ver%20tu%20demo%20de%20Landing%20Page%20%2B%20Turnero'

export default function Turnos() {
  return (
    <section id="turnos" className="py-20 lg:py-28" style={{ backgroundColor: '#f7f9f7' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionLabel>Sistema de turnos</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
            Reservá tu turno online
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#4a6654' }}>
            Seleccioná el día y horario que mejor te quede. Te confirmamos en minutos.
          </p>
        </div>

        <TurnosWidget />

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: '#4a6654' }}>
            ¿Preferís por WhatsApp?{' '}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline transition-colors duration-200"
              style={{ color: '#2d7a52' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a5c3a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2d7a52')}
            >
              Escribinos →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
