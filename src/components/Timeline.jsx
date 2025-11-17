import { motion } from 'framer-motion'

const timeline = [
  { t: 'Hafta 1-2', d: 'Değerlendirme, temel itaat ve güven ilişkisi.' },
  { t: 'Hafta 3-4', d: 'İleri itaat ve uyaran kontrolü.' },
  { t: 'Hafta 5-8', d: 'Tehdit algılama, alan ve kişi koruma senaryoları.' },
  { t: 'Hafta 9+', d: 'Performans testi, raporlama ve sertifikasyon.' },
]

export default function Timeline(){
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Zaman Çizelgesi</h2>
        <div className="mt-8 relative">
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-slate-200" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {timeline.map((it, i) => (
              <motion.div key={it.t} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="text-center">
                <div className="mx-auto w-3 h-3 rounded-full bg-slate-900" />
                <div className="mt-3 font-semibold text-slate-900">{it.t}</div>
                <div className="mt-1 text-sm text-slate-600">{it.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
