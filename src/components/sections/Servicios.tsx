import servicios from '../../data/servicios.json'
import SectionLabel from '../ui/SectionLabel'
import ServiceIcon from '../ui/ServiceIcon'

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 lg:py-28" style={{ backgroundColor: '#f7f9f7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel>Lo que ofrezco</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
            Servicios diseñados para vos
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#4a6654' }}>
            Cada consulta es un punto de partida. Trabajo con enfoque personalizado y evidencia científica para ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="group bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ borderColor: '#e8f0eb' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-brand-green"
                style={{ backgroundColor: '#f0f7f3' }}
                onMouseEnter={() => {}}
              >
                <div className="transition-colors duration-300" style={{ color: '#4a9b6f' }}>
                  <ServiceIcon icon={servicio.icono} className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
                {servicio.nombre}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4a6654' }}>
                {servicio.descripcion}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium" style={{ color: '#2d7a52' }}>
                <span>Saber más</span>
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
