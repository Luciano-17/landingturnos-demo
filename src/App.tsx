import DemoBanner from './components/layout/DemoBanner'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import Home from './pages/Home'

function App() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <div style={{ paddingTop: '88px' }}>
        <Home />
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  )
}

export default App
