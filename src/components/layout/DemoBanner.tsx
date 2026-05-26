export default function DemoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-2 text-center border-b border-white/10"
      style={{ backgroundColor: '#0d1520', minHeight: '36px' }}
    >
      <p className="text-white text-sm leading-snug">
        <span className="sm:hidden">Demo de </span>
        <span className="hidden sm:inline">Esta es una demo de </span>
        <a
          href="https://lucianovillarreal.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline"
          style={{ color: '#00aaee' }}
        >
          LV Web
        </a>
        <span className="hidden sm:inline"> — Así puede quedar la página de tu negocio.</span>
      </p>
    </div>
  )
}
