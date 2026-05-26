interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
        light
          ? 'bg-white/10 text-white'
          : 'text-white'
      }`}
      style={light ? {} : { backgroundColor: '#4a9b6f' }}
    >
      {children}
    </span>
  )
}
