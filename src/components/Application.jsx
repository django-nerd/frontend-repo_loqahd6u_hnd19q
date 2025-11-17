import { useState } from 'react'

export default function Application() {
  const [form, setForm] = useState({
    ad_soyad: '',
    email: '',
    telefon: '',
    kopek_adi: '',
    kopek_yasi: '',
    kopek_cinsi: '',
    egitim_gecmisi: '',
    program: 'temel',
    mesaj: ''
  })
  const [ok, setOk] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = { ...form, kopek_yasi: form.kopek_yasi ? Number(form.kopek_yasi) : undefined }
      const res = await fetch(`${base}/api/apply`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (data.ok) setOk(true)
      else setOk(false)
    } catch (e) {
      setOk(false)
    }
  }

  return (
    <section id="apply" className="bg-[#0e1530] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Programa Başvuru</h2>
          <p className="mt-2 text-white/70">Köpeğiniz için uygun eğitimi seçin ve başvurunuzu iletin.</p>
        </div>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4">
          <input required placeholder="Ad Soyad" className="bg-white/10 rounded px-3 py-2" value={form.ad_soyad} onChange={e=>setForm({...form, ad_soyad:e.target.value})} />
          <input required type="email" placeholder="E-posta" className="bg-white/10 rounded px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input required placeholder="Telefon" className="bg-white/10 rounded px-3 py-2" value={form.telefon} onChange={e=>setForm({...form, telefon:e.target.value})} />
          <input placeholder="Köpeğin Adı" className="bg-white/10 rounded px-3 py-2" value={form.kopek_adi} onChange={e=>setForm({...form, kopek_adi:e.target.value})} />
          <input placeholder="Köpeğin Yaşı" className="bg-white/10 rounded px-3 py-2" value={form.kopek_yasi} onChange={e=>setForm({...form, kopek_yasi:e.target.value})} />
          <input placeholder="Köpeğin Cinsi" className="bg-white/10 rounded px-3 py-2" value={form.kopek_cinsi} onChange={e=>setForm({...form, kopek_cinsi:e.target.value})} />
          <select className="bg-white/10 rounded px-3 py-2" value={form.program} onChange={e=>setForm({...form, program:e.target.value})}>
            <option value="temel">Temel Koruma</option>
            <option value="ileri">İleri Düzey</option>
            <option value="vip">VIP Güvenlik</option>
          </select>
          <input placeholder="Önceki Eğitim Geçmişi" className="bg-white/10 rounded px-3 py-2" value={form.egitim_gecmisi} onChange={e=>setForm({...form, egitim_gecmisi:e.target.value})} />
          <textarea placeholder="Mesaj / Not" rows={4} className="md:col-span-2 bg-white/10 rounded px-3 py-2" value={form.mesaj} onChange={e=>setForm({...form, mesaj:e.target.value})} />
          <div className="md:col-span-2">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded px-6 py-2 font-semibold">Başvuruyu Gönder</button>
          </div>
        </form>

        {ok === true && <p className="mt-4 text-emerald-400">Başvurunuz başarıyla alındı. Teşekkürler!</p>}
        {ok === false && <p className="mt-4 text-rose-400">Bir hata oluştu. Lütfen tekrar deneyin.</p>}
      </div>
    </section>
  )
}
