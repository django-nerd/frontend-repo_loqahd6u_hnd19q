import { useState } from 'react'

const trainers = [
  {
    id: 't1',
    name: 'Mert Yılmaz',
    role: 'Baş Eğitmen',
    bio: '10+ yıl koruma köpeği eğitimi, K9 birimi danışmanı.',
    photo: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 't2',
    name: 'Aylin Demir',
    role: 'İleri Düzey Eğitmen',
    bio: 'Tehdit algılama ve senaryo eğitimlerinde uzman.',
    photo: 'https://images.unsplash.com/photo-1520975922284-9c0adf87c524?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 't3',
    name: 'Kerem Aksoy',
    role: 'İtaat Eğitmeni',
    bio: 'Temel komut ve davranış şekillendirme eğitmeni.',
    photo: 'https://images.unsplash.com/photo-1541976590-713941681a51?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Trainers() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="bg-[#0b1020] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Eğitmenler</h2>
          <p className="mt-2 text-white/70">Profesyonel eğitmen kadromuzu tanıyın.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {trainers.map((t) => (
            <div key={t.id} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={t.photo} alt={t.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-cyan-300/80">{t.role}</p>
                <p className="mt-2 text-white/70 text-sm">{t.bio}</p>
                <button onClick={() => setSelected(t)} className="mt-4 text-sm text-cyan-300 hover:text-cyan-200">Soru Sor →</button>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <ContactTrainer trainer={selected} onClose={() => setSelected(null)} />)
        }
      </div>
    </section>
  )
}

function ContactTrainer({ trainer, onClose }) {
  const [form, setForm] = useState({ ad_soyad: '', email: '', telefon: '', konu: `Merhaba ${trainer.name}`, mesaj: '' })
  const [ok, setOk] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/message`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, egitmen_id: trainer.id }) })
      const data = await res.json()
      if (data.ok) setOk(true)
      else setOk(false)
    } catch (e) {
      setOk(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#101736] text-white w-full max-w-lg rounded-xl border border-white/10 p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">{trainer.name} ile iletişim</h4>
          <button onClick={onClose} className="text-white/70 hover:text-white">Kapat</button>
        </div>
        {ok === true ? (
          <p className="mt-4 text-emerald-400">Mesajınız alındı. En kısa sürede dönüş yapacağız.</p>
        ) : (
          <form onSubmit={submit} className="mt-4 grid gap-3">
            <input required placeholder="Ad Soyad" className="bg-white/10 rounded px-3 py-2" value={form.ad_soyad} onChange={e=>setForm({...form, ad_soyad:e.target.value})} />
            <input required type="email" placeholder="E-posta" className="bg-white/10 rounded px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input placeholder="Telefon" className="bg-white/10 rounded px-3 py-2" value={form.telefon} onChange={e=>setForm({...form, telefon:e.target.value})} />
            <input required placeholder="Konu" className="bg-white/10 rounded px-3 py-2" value={form.konu} onChange={e=>setForm({...form, konu:e.target.value})} />
            <textarea required placeholder="Mesaj" rows={4} className="bg-white/10 rounded px-3 py-2" value={form.mesaj} onChange={e=>setForm({...form, mesaj:e.target.value})} />
            <button className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded px-4 py-2 font-medium">Gönder</button>
          </form>
        )}
      </div>
    </div>
  )
}
