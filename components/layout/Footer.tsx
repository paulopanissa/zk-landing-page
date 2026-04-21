import Image from 'next/image'
import { buildWhatsAppUrl, LOGO_URL, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/data'
import TrackedLink from '@/components/ui/TrackedLink'

// const footerLinks = [
//   [
//     { label: 'Sustentabilidade', href: '#' },
//     { label: 'Envios', href: '#' },
//   ],
//   [
//     { label: 'Trocas', href: '#' },
//     { label: 'Privacidade', href: '#' },
//   ],
//   [
//     { label: 'Revendedores', href: '#' },
//   ],
// ]

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <footer className="w-full rounded-t-[4rem] mt-24 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-6">
          <Image
            src={LOGO_URL}
            alt="Zoro e Kaya Logo"
            width={112}
            height={56}
            className="h-14 w-auto grayscale"
          />
          <p className="text-on-surface-variant text-[10px] font-bold tracking-[0.2em] uppercase text-center md:text-left max-w-[240px] leading-relaxed">
            Entregas em Campo Grande/MS com carinho, orientação e segurança.
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-x-12 gap-y-6" aria-label="Links do rodapé">
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-on-surface-variant/50 hover:text-primary transition-all font-sans uppercase tracking-[0.2em] text-[10px] font-bold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div> */}

        <div className="flex flex-col items-center md:items-end gap-8">
          <div className="flex gap-6 items-center">
            <TrackedLink
              href="https://www.instagram.com/lojinhazoroekaya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              eventName="social_click"
              eventParams={{ platform: 'instagram', button_location: 'footer' }}
              className="text-primary hover:opacity-70 transition-all"
            >
              <InstagramIcon />
            </TrackedLink>
            <TrackedLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              eventName="whatsapp_click"
              eventParams={{ button_location: 'footer' }}
              className="text-primary hover:opacity-70 transition-all"
            >
              <WhatsAppIcon />
            </TrackedLink>
          </div>
          <span className="text-on-surface-variant text-[10px] font-bold tracking-[0.2em] uppercase text-center">
            &copy; 2026 Zoro e Kaya. Criado para pets felizes.
          </span>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.853L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 01-5.032-1.374l-.36-.214-3.732.975.998-3.648-.235-.374A9.867 9.867 0 012.106 12C2.106 6.57 6.57 2.106 12 2.106S21.894 6.57 21.894 12 17.43 21.894 12 21.894z"/>
    </svg>
  )
}
