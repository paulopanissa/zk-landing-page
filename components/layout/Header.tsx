'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buildWhatsAppUrl, LOGO_URL, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/data'
import { trackEvent } from '@/lib/analytics'

const navLinks = [
  { label: 'Os mais vendidos',      href: '#colecoes' },
  { label: 'Nossa História', href: '#nossa-historia' },
  { label: 'Curadoria',     href: '#curadoria' },
  { label: 'Contato',        href: '#contato' },
]

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff8ef]/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="bg-secondary text-on-secondary text-center py-1.5 px-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-label flex items-center justify-center gap-2">
          <span aria-hidden="true">📦</span>
          Entrega local: Segunda a Sábado
        </p>
      </div>
      <div className="flex justify-between items-center px-6 lg:px-12 py-5 max-w-full mx-auto">
        <div className="flex items-center gap-10">
          <Link href="/" aria-label="Zoro e Kaya — Página inicial">
            <Image
              src={LOGO_URL}
              alt="Zoro e Kaya Logo"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={
                  active === link.label
                    ? 'text-primary border-b border-primary pb-0.5 font-serif tracking-tight text-lg font-medium transition-colors'
                    : 'text-on-surface-variant hover:text-primary font-serif tracking-tight text-lg font-medium transition-colors'
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <a
              href="https://www.instagram.com/lojinhazoroekaya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={() => trackEvent('social_click', { platform: 'instagram', button_location: 'header' })}
              className="text-primary hover:opacity-70 transition-all"
            >
              <InstagramIcon />
            </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { button_location: 'header' })}
            className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-all active:scale-95 shadow-sm"
          >
            Comprar pelo WhatsApp
          </a>
        </div>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden bg-[#fff8ef] border-t border-outline-variant/10 px-6 py-6 flex flex-col gap-5"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-serif text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { button_location: 'header_mobile' })}
            className="mt-2 bg-primary text-on-primary px-6 py-4 rounded-full font-label text-xs uppercase tracking-widest font-bold text-center hover:opacity-90 transition-all"
          >
            Comprar Agora
          </a>
        </nav>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
    </svg>
  )
}
