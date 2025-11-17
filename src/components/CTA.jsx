import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ücretsiz Değerlendirme Çağrısı Planlayın</motion.h3>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Köpeğinizin mizacı, motivasyonu ve hedeflerinize uygun en doğru programı birlikte belirleyelim.</p>
        <a href="#apply" className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold shadow hover:opacity-90">Hemen Başvur</a>
      </div>
    </section>
  )
}
