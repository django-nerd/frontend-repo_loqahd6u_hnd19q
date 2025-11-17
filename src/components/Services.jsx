import { ShieldCheck, Target, Crown } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: ShieldCheck,
    title: 'Temel Koruma Eğitimi',
    desc: 'Ev güvenliği için itaat, saldırganlık kontrolü ve tehdit algılama temelleri.',
    details: 'Süre: 6-8 hafta • Uygun ırklar: Çoban ırkları ve benzeri • Başarı oranı: %92',
    tag: 'temel'
  },
  {
    icon: Target,
    title: 'İleri Düzey Koruma',
    desc: 'Ev ve iş yerleri için karmaşık komutlar, alan ve kişi koruma, senaryo çalışmaları.',
    details: 'Süre: 8-12 hafta • Ön koşul: Temel başarı • Başarı oranı: %88',
    tag: 'ileri'
  },
  {
    icon: Crown,
    title: 'VIP Güvenlik Köpeği',
    desc: 'Yüksek riskli ortamlarda çalışan profesyoneller için üst düzey tehdit yönetimi.',
    details: 'Süre: 12-16 hafta • Seçici süreç • Başarı oranı: %85',
    tag: 'vip'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0e1530] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,94,117,0.2),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Hizmetler</h2>
          <p className="mt-2 text-white/70">İhtiyacınıza uygun eğitim programını seçin.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
              <p className="mt-3 text-sm text-cyan-300/80">{it.details}</p>
              <a href="#apply" className="mt-5 inline-block text-sm text-cyan-300 hover:text-cyan-200">Programa Başvur →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
