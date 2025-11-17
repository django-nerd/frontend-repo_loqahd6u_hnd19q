import { Menu, Shield, Phone, Instagram, Facebook, Youtube } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-white/80 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0b1020]/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm text-white/70">Koruma Köpeği</div>
              <div className="text-base font-semibold">Eğitim Merkezi</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLink('/', 'Ana Sayfa')}
            {navLink('/hizmetler', 'Hizmetler')}
            {navLink('/surec', 'Eğitim Süreci')}
            {navLink('/blog', 'Blog & Rehber')}
            {navLink('/egitmenler', 'Eğitmenler')}
            {navLink('/sss', 'SSS')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+905555555555" className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 rounded-md shadow hover:opacity-90">
              <Phone className="w-4 h-4" /> Hemen Ara
            </a>
            <div className="flex items-center gap-3 text-white/70">
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-5 h-5"/></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navLink('/', 'Ana Sayfa')}
              {navLink('/hizmetler', 'Hizmetler')}
              {navLink('/surec', 'Eğitim Süreci')}
              {navLink('/blog', 'Blog & Rehber')}
              {navLink('/egitmenler', 'Eğitmenler')}
              {navLink('/sss', 'SSS')}
              <a href="tel:+905555555555" className="mt-2 inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 rounded-md w-max">
                <Phone className="w-4 h-4" /> Hemen Ara
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
