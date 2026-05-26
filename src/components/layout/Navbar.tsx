import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Turnos', href: '#turnos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
      style={{ top: '36px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4a9b6f' }}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="font-serif font-bold text-lg" style={{ color: '#1a2e1f' }}>
            LV Nutrición
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#4a6654' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4a9b6f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4a6654')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#turnos"
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-white transition-colors duration-200"
            style={{ backgroundColor: '#4a9b6f' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d7a52')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4a9b6f')}
          >
            Reservar turno
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-md"
          style={{ color: '#1a2e1f' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium border-b border-gray-50 last:border-0"
              style={{ color: '#4a6654' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#turnos"
            className="mt-4 block text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: '#4a9b6f' }}
            onClick={() => setMenuOpen(false)}
          >
            Reservar turno
          </a>
        </div>
      )}
    </nav>
  )
}
