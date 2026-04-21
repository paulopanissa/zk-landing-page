import { buildWhatsAppUrl, heroCarouselItems, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/data'
import HeroCarousel from '@/components/sections/HeroCarousel'
import TrackedLink from '@/components/ui/TrackedLink'

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center px-6 lg:px-24 py-12 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12 items-center max-w-full">
        <div className="lg:col-span-6 z-10 space-y-8">
          <div className="inline-flex items-center bg-tertiary-container/10 px-4 py-1.5 rounded-full border border-tertiary-container/20">
            <span className="w-2 h-2 rounded-full bg-tertiary mr-2 flex-shrink-0" aria-hidden="true" />
            <span className="text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest font-label">
              Curadoria natural para pets
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-6xl lg:text-8xl text-primary leading-[1.05] tracking-tighter"
          >
            Produtos Naturais para Cães e Gatos
          </h1>

          <p className="text-xl text-on-surface-variant max-w-lg font-body font-light leading-relaxed">
            Descubra nossa curadoria de petiscos e mordedores 100% naturais, escolhidos com cuidado e testados pelos nossos pets aqui em casa.
          </p>

          <div className="pt-6">
            <TrackedLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventParams={{ button_location: 'hero' }}
              className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-primary/10"
              aria-label="Comprar via WhatsApp"
            >
              Comprar pelo WhatsApp
              <ArrowIcon />
            </TrackedLink>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[500px] lg:h-[800px] w-full">
          <div
            className="absolute inset-0 bg-secondary-container/20 rounded-[40px] lg:rounded-[60px] -rotate-3 scale-[1.02]"
            aria-hidden="true"
          />
          <HeroCarousel items={heroCarouselItems} />
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="group-hover:translate-x-1 transition-transform"
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}
