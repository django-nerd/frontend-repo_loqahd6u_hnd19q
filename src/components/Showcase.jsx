import { motion } from 'framer-motion'

const items = [
  {
    title: 'Tehdit Simülasyonları',
    desc: 'Koruma senaryoları, alan hakimiyeti ve kişi koruma üzerine gerçekçi çalışmalar.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'İleri İtaat',
    desc: 'Yüksek dikkat ve komutlar arası hızlı geçiş ile stabil kontrol.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Sosyalizasyon',
    desc: 'Şehir içi uyaranlara uyum, çocuklar ve diğer hayvanlarla güvenli iletişim.',
    image: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Showcase(){
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Programdan Kareler</h2>
          <p className="mt-2 text-slate-600">Eğitimden sahneler ve başarı hikayelerinden kısa kesitler.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-50 shadow hover:shadow-xl transition"
            >
              <img src={it.image} alt={it.title} className="h-56 w-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
