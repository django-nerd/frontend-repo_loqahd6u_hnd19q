import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/blogs`)
        const data = await res.json()
        if (data.ok) setPosts(data.posts)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section className="bg-[#0e1530] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Blog & Eğitim Rehberi</h2>
          <p className="mt-2 text-white/70">Eğitmenlerimizden ipuçları, yöntemler ve güncel içerikler.</p>
        </div>

        {loading ? (
          <p className="mt-10 text-white/70">İçerikler yükleniyor…</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <img src={p.cover} alt={p.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
