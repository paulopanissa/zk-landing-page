import { buildWhatsAppUrl, testimonials, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/data'
import TestimonialCard from '@/components/ui/TestimonialCard'
import TrackedLink from '@/components/ui/TrackedLink'

export default function TestimonialsSection() {
  return (
    <section
      id="curadoria"
      aria-labelledby="testimonials-heading"
      className="py-40 pb-0 bg-surface overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center mb-28">
        {/* <span className="text-primary/40 font-label uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
          Comunidade
        </span> */}
        <h2
          id="testimonials-heading"
          className="font-serif text-5xl lg:text-6xl text-primary italic mb-4"
        >
          O que estão falando da Zoro & Kaya
        </h2>
        <p className="text-on-surface-variant font-light tracking-wide text-lg">
          Avaliações reais de tutores que já testaram nossa curadoria.
        </p>
      </div>

      <ul
        className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-14 px-6 max-w-full mx-auto items-stretch"
        aria-label="Depoimentos de clientes"
      >
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.id}
            className={testimonial.stagger ? 'lg:translate-y-12' : ''}
          >
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
      <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center mt-40">
        <TrackedLink
          href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          eventName="whatsapp_click"
          eventParams={{ button_location: 'testimonials' }}
          className="text-on-surface-variant font-light tracking-wide text-lg border-primary/20 pt-1 hover:border-primary transition-all font-bold"
        >
          Quer viver essa experiência também? Fale com a gente 💚
        </TrackedLink>
      </div>
    </section>
  )
}
