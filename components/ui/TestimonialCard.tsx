import type { Testimonial } from '@/lib/data'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { authorName, petName, petType, rating, text, avatarInitials } = testimonial

  return (
    <blockquote
      className="w-full lg:w-[400px] bg-surface-container-highest p-10 rounded-[3rem] shadow-sm transition-all duration-700 hover:scale-[1.02] flex flex-col"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="flex text-tertiary-container mb-8 gap-1" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
        <meta itemProp="reviewRating" content={String(rating)} />
      </div>

      <p
        className="text-primary text-xl font-serif italic leading-relaxed mb-10 flex-1"
        itemProp="reviewBody"
      >
        &ldquo;{text}&rdquo;
      </p>

      <footer className="flex items-center gap-4 border-t border-primary/5 pt-8">
        <div
          className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container text-sm flex-shrink-0"
          aria-hidden="true"
        >
          {avatarInitials}
        </div>
        <div>
          <cite
            className="not-italic font-bold text-sm text-primary font-label uppercase tracking-wider block"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{authorName}</span>
          </cite>
          <span className="text-xs text-on-surface-variant font-light">
            {petName ? `Tutora de ${petName}, ${petType}` : `Tutora de ${petType}`}
          </span>
        </div>
      </footer>
    </blockquote>
  )
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="#56321d"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}
