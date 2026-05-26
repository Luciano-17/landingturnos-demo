import { InlineWidget } from 'react-calendly'

export default function TurnosWidget() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: '#e8f0eb' }}>
      <InlineWidget
        url="https://calendly.com/lvillarrealweb/30min"
        styles={{
          height: '630px',
          minWidth: '320px',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          primaryColor: '4a9b6f',
          textColor: '1a2e1f',
        }}
      />
    </div>
  )
}
