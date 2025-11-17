import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Timeline from './components/Timeline'
import Process from './components/Process'
import Application from './components/Application'
import Blog from './components/Blog'
import Trainers from './components/Trainers'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Showcase />
        <Timeline />
        <Process />
        <Application />
        <Blog />
        <Trainers />
        <FAQ />
        <CTA />
        <footer className="bg-slate-50 text-slate-600 py-10 border-t">
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
