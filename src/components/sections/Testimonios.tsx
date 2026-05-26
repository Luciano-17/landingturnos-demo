import testimonios from '../../data/testimonios.json'
import SectionLabel from '../ui/SectionLabel'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i <= count ? '#f59e0b' : '#e5e7eb'}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ nombre }: { nombre: string }) {
  const inicial = nombre.charAt(0).toUpperCase()
  const colors = [
    { bg: '#e8f5ee', text: '#2d7a52' },
    { bg: '#fef3c7', text: '#92400e' },
    { bg: '#ede9fe', text: '#5b21b6' },
    { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#dbeafe', text: '#1e40af' },
    { bg: '#f0fdf4', text: '#166534' },
  ]
  const color = colors[inicial.charCodeAt(0) % colors.length]
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {inicial}
    </div>
  )
}

export default function Testimonios() {
  const totalEstrellas = testimonios.reduce((acc, t) => acc + t.estrellas, 0)
  const promedio = (totalEstrellas / testimonios.length).toFixed(1)

  return (
    <section id="testimonios" className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel>Testimonios</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
            Lo que dicen mis pacientes
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#4a6654' }}>
            Resultados reales de personas reales. Cada historia es diferente, pero el compromiso es siempre el mismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonios.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-sm border flex flex-col"
              style={{ borderColor: '#e8f0eb' }}
            >
              <Stars count={t.estrellas} />
              <p className="text-sm leading-relaxed mt-4 flex-1" style={{ color: '#4a6654' }}>
                "{t.texto}"
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t" style={{ borderColor: '#f3f4f6' }}>
                <Avatar nombre={t.nombre} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1a2e1f' }}>{t.nombre}</p>
                  <p className="text-xs" style={{ color: '#4a6654' }}>{t.ocupacion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-full" style={{ backgroundColor: '#f7f9f7' }}>
            <div className="flex gap-0.5 flex-shrink-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="#f59e0b" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-base sm:text-lg whitespace-nowrap" style={{ color: '#1a2e1f' }}>{promedio} / 5</span>
            <span className="text-xs sm:text-sm whitespace-nowrap" style={{ color: '#4a6654' }}>· {testimonios.length} reseñas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
