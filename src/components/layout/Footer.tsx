import config from '../../data/config.json'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Turnos', href: '#turnos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

const legalLinks = [
  { label: 'Términos y condiciones', href: '#' },
  { label: 'Política de privacidad', href: '#' },
  { label: 'Política de reembolsos', href: '#' },
]

export default function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: '#0d1520' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-center sm:text-left">

          <div className="lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4a9b6f' }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="font-serif font-bold text-lg">LV Nutrición</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#9ab0a0' }}>
              {config.descripcionFooter}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#4a9b6f' }}>
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#9ab0a0' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ab0a0')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#4a9b6f' }}>
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-sm" style={{ color: '#9ab0a0' }}>{config.telefono}</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm" style={{ color: '#9ab0a0' }}>{config.email}</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm" style={{ color: '#9ab0a0' }}>{config.direccion}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#4a9b6f' }}>
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#9ab0a0' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ab0a0')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col items-center gap-8 md:gap-2 text-xs text-center sm:flex-row sm:justify-between" style={{ borderColor: '#1e3028', color: '#6b8a78' }}>
          <span>© 2026 {config.negocio}. Todos los derechos reservados.</span>
          <span>
            Desarrollado por{' '}
            <a
              href="https://lucianovillarreal.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors duration-200"
              style={{ color: '#4a9b6f' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4a9b6f')}
            >
              LV WEB
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
