import { useState } from 'react'
import config from '../../data/config.json'
import horarios from '../../data/horarios.json'
import SectionLabel from '../ui/SectionLabel'

const MOTIVOS = [
  'Consulta inicial',
  'Plan alimentario',
  'Seguimiento',
  'Nutrición deportiva',
  'Control de peso',
  'Nutrición clínica',
  'Otro',
]

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    setForm({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
            ¿Tenés dudas? Escribinos
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#4a6654' }}>
            Respondemos todas las consultas a la brevedad. También podés llamar o escribir por WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f7f3' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1a2e1f' }}>Teléfono</p>
                  <p className="text-sm" style={{ color: '#4a6654' }}>{config.telefono}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f7f3' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1a2e1f' }}>Email</p>
                  <p className="text-sm" style={{ color: '#4a6654' }}>{config.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f7f3' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1a2e1f' }}>Dirección</p>
                  <p className="text-sm" style={{ color: '#4a6654' }}>{config.direccion}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f7f3' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#1a2e1f' }}>Horarios de atención</p>
                  <div className="space-y-0.5">
                    {horarios.map((h, i) => (
                      <p key={i} className="text-sm" style={{ color: '#4a6654' }}>
                        <span className="font-medium" style={{ color: '#1a2e1f' }}>{h.dia}:</span> {h.horario}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl flex items-center justify-center"
              style={{ height: '180px', backgroundColor: '#f3f4f6', color: '#9ca3af' }}
            >
              <div className="text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#d1d5db' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-sm font-semibold tracking-wider uppercase">Ubicación</p>
                <p className="text-xs mt-1">Mapa interactivo</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8" style={{ borderColor: '#e8f0eb' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: '#f0f7f3' }}>
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#4a9b6f' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm mb-2" style={{ color: '#4a6654' }}>
                  En breve nos ponemos en contacto con vos.
                </p>
                <p className="text-xs px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#f0f7f3', color: '#4a9b6f' }}>
                  Esta es una página de demo — en producción el formulario enviaría el mensaje real.
                </p>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200"
                  style={{ color: '#4a9b6f', borderColor: '#4a9b6f' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4a9b6f'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#4a9b6f'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#1a2e1f', fontFamily: 'Playfair Display, serif' }}>
                  Enviar consulta
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1a2e1f' }}>
                    Nombre completo <span style={{ color: '#4a9b6f' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors duration-200"
                    style={{ borderColor: '#d1d5db', color: '#1a2e1f' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#4a9b6f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1a2e1f' }}>
                    Email <span style={{ color: '#4a9b6f' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors duration-200"
                    style={{ borderColor: '#d1d5db', color: '#1a2e1f' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#4a9b6f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1a2e1f' }}>Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+54 351 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors duration-200"
                    style={{ borderColor: '#d1d5db', color: '#1a2e1f' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#4a9b6f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1a2e1f' }}>Motivo de consulta</label>
                  <select
                    name="motivo"
                    value={form.motivo}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors duration-200 bg-white"
                    style={{ borderColor: '#d1d5db', color: form.motivo ? '#1a2e1f' : '#9ca3af' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#4a9b6f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
                  >
                    <option value="">Seleccioná un motivo</option>
                    {MOTIVOS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1a2e1f' }}>Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Contanos brevemente tu situación o consulta..."
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors duration-200 resize-none"
                    style={{ borderColor: '#d1d5db', color: '#1a2e1f' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#4a9b6f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white transition-colors duration-200 mt-2"
                  style={{ backgroundColor: '#4a9b6f' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d7a52')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4a9b6f')}
                >
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
