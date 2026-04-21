'use client'

import { useState } from 'react'
import Image from 'next/image'
import { buildWhatsAppUrl, CONTACT_IMAGE_URL, isSafeWhatsAppWaMeUrl } from '@/lib/data'
import { trackEvent } from '@/lib/analytics'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const phonePart = phone ? ` Meu WhatsApp: ${phone}.` : ''
    const composed = name
      ? `Olá, me chamo ${name}.${phonePart} ${message || 'Vim pelo site e gostaria de conhecer os produtos curados por vocês!'}`
      : `Olá, vim pelo site e gostaria de conhecer os produtos curados por vocês!`
    const waUrl = buildWhatsAppUrl(composed)
    if (!isSafeWhatsAppWaMeUrl(waUrl)) return
    trackEvent('whatsapp_click', { button_location: 'contact_form' })
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="py-32 px-6 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-high rounded-[4rem] lg:rounded-[5rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-outline-variant/10">
          <div className="lg:w-1/2 p-10 lg:p-24 space-y-12">
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="font-serif text-5xl lg:text-6xl text-primary"
              >
                Quer ajuda para escolher? A gente te orienta
              </h2>
              <p className="text-on-surface-variant font-light text-lg">
                Conte como é seu pet — porte, idade e tipo de mordida — que a gente indica as melhores opções.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit} aria-label="Formulário de contato">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant font-label ml-4 mb-2 block"
                >
                  Seu Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-low border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-6 py-5 rounded-2xl transition-all outline-none text-primary font-body placeholder:text-on-surface-variant/60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant font-label ml-4 mb-2 block"
                >
                  WhatsApp
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(67) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-surface-container-low border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-6 py-5 rounded-2xl transition-all outline-none text-primary font-body placeholder:text-on-surface-variant/60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant font-label ml-4 mb-2 block"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Conte-nos o que você busca para seu pet..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-surface-container-low border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-6 py-5 rounded-2xl transition-all outline-none text-primary font-body resize-none placeholder:text-on-surface-variant/60"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-6 rounded-full font-label text-sm uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all shadow-lg active:scale-[0.98]"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 min-h-[500px] relative">
            <Image
              src={CONTACT_IMAGE_URL}
              alt="Atendimento local em Campo Grande/MS — Zoro e Kaya entrega de segunda a sábado"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ filter: 'grayscale(20%)' }}
            />

            <div className="absolute bottom-10 left-10 right-10 bg-surface/95 backdrop-blur-xl p-10 rounded-[3rem] z-20 shadow-2xl border border-white/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <LocationIcon />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-2">Atendimento Local em Campo Grande/MS</h3>
                  <p className="text-base text-on-surface-variant font-light leading-relaxed">
                    Entregas diárias a partir das 16h.
                  </p>
                  {/* <a
                    href="#contato"
                    className="inline-block mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                  >
                    Pode perguntar tudo! A gente ama falar sobre isso!
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}
