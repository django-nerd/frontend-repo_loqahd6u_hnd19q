export default function FAQ(){
  const items = [
    {q:'Hangi ırklar uygundur?', a:'Genellikle Alman Çoban, Belçika Malinois, Rottweiler gibi çalışmaya yatkın ırklar tercih edilir. Ancak mizaç değerlendirmesi her köpek için yapılır.'},
    {q:'Fiyatlandırma nasıl?', a:'Programın süresi ve kapsamına göre değişir. İlk değerlendirme sonrası net teklif sunuyoruz.'},
    {q:'Eğitim ne kadar sürer?', a:'Seçilen programa göre 6 ile 16 hafta arasında sürer.'},
    {q:'Ailelerle uyum sağlanır mı?', a:'Evet, eğitim boyunca sahiplerle oturumlar ve ev entegrasyonu yapılır.'},
  ]
  return (
    <section id="sss" className="bg-[#0b1020] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Sık Sorulan Sorular</h2>
        <div className="mt-8 grid gap-4">
          {items.map((it,i)=>(
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="font-medium">{it.q}</div>
              <p className="mt-2 text-white/70 text-sm">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
