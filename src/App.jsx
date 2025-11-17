import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Application from './components/Application'
import Blog from './components/Blog'
import Trainers from './components/Trainers'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Application />
        <Blog />
        <Trainers />
        <FAQ />
        <footer className="bg-[#0a0f1e] text-white/70 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Koruma Köpeği Eğitim Merkezi</p>
            <div className="text-sm">Gizlilik ve Güvenlik • Tüm hakları saklıdır.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
