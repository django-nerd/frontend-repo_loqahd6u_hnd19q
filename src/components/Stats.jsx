import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { label: 'Eğitilen Köpek', value: 850, suffix: '+' },
  { label: 'Başarı Oranı', value: 95, suffix: '%' },
  { label: 'Deneyim (Yıl)', value: 12, suffix: '+' },
  { label: 'Kurumsal Referans', value: 40, suffix: '+' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-3xl sm:text-4xl font-extrabold text-slate-900"
    >
      {isInView ? value : 0}{suffix}
    </motion.span>
  )
}

export default function Stats(){
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
