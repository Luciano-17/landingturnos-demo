import { useEffect, useRef, useState } from 'react'

const WA_LINK =
  'https://wa.me/5493518636575?text=Hola!%20Vengo%20de%20ver%20tu%20demo%20de%20Landing%20Page%20%2B%20Turnero'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true)
  const footerRef = useRef<Element | null>(null)

  useEffect(() => {
    footerRef.current = document.getElementById('footer')
    if (!footerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ backgroundColor: '#25D366' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-7 h-7"
      >
        <path
          fill="white"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43.1 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
        />
        <path
          fill="#25D366"
          d="M24 7.2C14.8 7.2 7.2 14.8 7.2 24c0 3.3.9 6.4 2.6 9.1l.4.6-1.6 5.8 6-1.6.6.3C17.7 39.8 20.8 40.8 24 40.8c9.3 0 16.8-7.5 16.8-16.8S33.3 7.2 24 7.2z"
        />
        <path
          fill="white"
          fillRule="evenodd"
          d="M19.2 15.6c-.4-.9-.8-.9-1.1-.9-.3 0-.6 0-.9.1-.3.1-.8.3-1.2.8-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.8 4.7c.2.3 3.1 4.9 7.6 6.7 3.8 1.5 4.5 1.2 5.3 1.1.8-.1 2.6-1 3-2.1.4-1.1.4-2 .3-2.1-.1-.1-.4-.3-.8-.5l-2.9-1.4c-.4-.2-.7-.3-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.3-.9.1s-1.8-.7-3.4-2.1c-1.3-1.1-2.1-2.5-2.4-2.9-.3-.4 0-.6.2-.8l.7-.8c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.9l-1.6-3.9z"
        />
      </svg>
    </a>
  )
}
