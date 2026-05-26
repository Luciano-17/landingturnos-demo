import config from '../../data/config.json'
import SectionLabel from '../ui/SectionLabel'

export default function ComoTrabajo() {
  const { comoTrabajo } = config

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#0d1a0f' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel light>Cómo trabajo</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            {comoTrabajo.titulo}
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#9ab0a0' }}>
            {comoTrabajo.subtitulo}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5" style={{ backgroundColor: '#1e3028' }} />

          {comoTrabajo.pasos.map((paso, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 font-bold text-xl border-2"
                style={{ backgroundColor: '#0d1a0f', borderColor: '#4a9b6f', color: '#4a9b6f', fontFamily: 'Playfair Display, serif' }}
              >
                {paso.numero}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                {paso.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9ab0a0' }}>
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#turnos"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 shadow-md"
            style={{ backgroundColor: '#4a9b6f' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d7a52')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4a9b6f')}
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  )
}
