import config from '../../data/config.json'

const WA_LINK =
  'https://wa.me/5493518636575?text=Hola!%20Vengo%20de%20ver%20tu%20demo%20de%20Landing%20Page%20%2B%20Turnero'

export default function Hero() {
  const { hero, nombreProfesional, especialidad, matricula } = config

  return (
    <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#ffffff' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #4a9b6f 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2d7a52 0%, transparent 40%)'
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#f0f7f3', color: '#2d7a52' }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: '#4a9b6f' }}></span>
              {especialidad}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
              {hero.titulo}
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#4a6654' }}>
              {hero.subtitulo}
            </p>

            <p className="text-sm font-medium mb-8" style={{ color: '#2d7a52' }}>
              {nombreProfesional} · {matricula}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#turnos"
                className="inline-block text-center px-8 py-3.5 rounded-full font-semibold text-white text-base transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#4a9b6f' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d7a52')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4a9b6f')}
              >
                Reservar turno
              </a>
              <a
                href="#servicios"
                className="inline-block text-center px-8 py-3.5 rounded-full font-semibold text-base border-2 transition-all duration-200"
                style={{ color: '#4a9b6f', borderColor: '#4a9b6f', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4a9b6f'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#4a9b6f'
                }}
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-12 pt-8 border-t grid grid-cols-3 gap-4" style={{ borderColor: '#e8f0eb' }}>
              {hero.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-bold font-serif" style={{ color: '#4a9b6f' }}>{stat.valor}</p>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: '#4a6654' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl flex flex-col items-center justify-center shadow-2xl"
                style={{ backgroundColor: '#e8f5ee' }}
              >
                <svg className="w-24 h-24 mb-4" fill="none" viewBox="0 0 100 100" style={{ color: '#4a9b6f' }}>
                  <circle cx="50" cy="30" r="18" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="72" rx="26" ry="20" fill="currentColor" opacity="0.3" />
                  <circle cx="50" cy="30" r="13" fill="currentColor" opacity="0.6" />
                  <path d="M30 58 Q50 45 70 58 Q75 72 50 82 Q25 72 30 58Z" fill="currentColor" opacity="0.6" />
                  <path d="M42 68 L48 74 L60 60" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <p className="text-sm font-semibold" style={{ color: '#2d7a52' }}>FOTO PROFESIONAL</p>
                <p className="text-xs mt-1" style={{ color: '#4a9b6f' }}>{nombreProfesional}</p>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f0f7f3' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#1a2e1f' }}>4.9 / 5</p>
                  <p className="text-xs" style={{ color: '#4a6654' }}>Pacientes</p>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f0f7f3' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#1a2e1f' }}>Turno online</p>
                    <p className="text-xs" style={{ color: '#4a9b6f' }}>Disponible ahora</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-2 right-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-medium transition-shadow hover:shadow-xl"
                  style={{ color: '#25D366' }}
                >
                  <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 32 32">
                    <path d="M16.003 3C9.374 3 3.997 8.373 3.997 15c0 2.385.664 4.61 1.817 6.51L3 29l7.697-2.775A12.94 12.94 0 0016.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm0 2c5.514 0 9.997 4.48 9.997 10s-4.483 10-9.997 10a9.96 9.96 0 01-5.098-1.398l-.364-.22-3.77 1.36 1.282-3.665-.245-.378A9.946 9.946 0 016.003 15C6.003 9.48 10.49 5 16.003 5zm-3.3 5.031c-.21 0-.554.079-.844.395-.29.316-1.107 1.08-1.107 2.634s1.133 3.056 1.29 3.267c.159.21 2.192 3.505 5.413 4.774 2.674 1.055 3.216.846 3.796.793.58-.053 1.871-.764 2.136-1.502.263-.737.263-1.369.184-1.502-.079-.132-.29-.21-.606-.369-.316-.158-1.871-.924-2.16-1.029-.29-.105-.5-.158-.712.158-.21.316-.818 1.029-.999 1.239-.184.21-.368.237-.685.079-.316-.158-1.334-.491-2.54-1.569-.938-.838-1.572-1.876-1.756-2.192-.184-.316-.02-.487.138-.644.142-.14.316-.368.474-.553.16-.184.21-.316.316-.526.105-.21.053-.395-.027-.554-.079-.158-.695-1.713-.968-2.344-.253-.594-.514-.515-.712-.524l-.606-.01z" />
                  </svg>
                  Escribinos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
