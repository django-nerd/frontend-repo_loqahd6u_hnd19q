import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Adım 1: Değerlendirme',
    desc: 'Eğitim öncesi fiziksel ve zihinsel durum analizi. Mizaç ve motivasyon ölçümü.',
  },
  {
    title: 'Adım 2: Temel İtaat',
    desc: 'Otur, yat, bekle, gel gibi temel komutlar ve kontrol becerileri. Görsel materyallerle destek.',
  },
  {
    title: 'Adım 3: Tehdit Algılama',
    desc: 'Gerçekçi senaryolarla hedef tespiti, alan ve kişi koruma çalışmaları.',
  },
  {
    title: 'Adım 4: Değerlendirme ve Sertifikasyon',
    desc: 'Test aşamaları, performans raporları ve başarılı köpekler için sertifika.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#0b1020] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Eğitim Süreci</h2>
          <p className="mt-2 text-white/70">Aşamaları adım adım şeffaf biçimde paylaşıyoruz.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-cyan-300/80 text-sm">{`0${i+1}`}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="mt-4 aspect-video rounded-lg bg-black/30 grid place-items-center text-white/50 text-sm">
                Eğitim videoları burada yer alacak
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
