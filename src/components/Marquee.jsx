import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-sample-01.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-sample-02.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-sample-03.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-sample-04.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-sample-05.svg',
]

export default function Marquee(){
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos].map((src, i) => (
            <img key={i} src={src} alt="referans" className="h-10 opacity-70 hover:opacity-100 transition" />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
