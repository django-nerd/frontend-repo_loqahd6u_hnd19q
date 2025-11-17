import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/30 via-[#0b1020]/70 to-[#0b1020] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-cyan-300/80 mb-3">Professional Protection Dog Training</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Protection Dog Training
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Evinizi, işinizi ve ailenizi koruyan güvenilir dostlar yetiştiriyoruz.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow hover:opacity-90">
              Programa Başvur
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20">
              Hizmetleri Gör
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
