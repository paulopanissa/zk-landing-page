import Image from 'next/image'
import type { Product } from '@/lib/data'
import { buildWhatsAppUrl, formatPrice } from '@/lib/data'
import TrackedLink from '@/components/ui/TrackedLink'

type ProductCardProps = {
  product: Product
  className?: string
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const { name, price, description, imageUrl, imageAlt, whatsappMessage } = product

  return (
    <article
      className={`bg-surface p-6 rounded-[2.5rem] space-y-6 transition-all hover:-translate-y-2 duration-500 shadow-sm border border-outline-variant/10 flex flex-col ${className}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="aspect-square overflow-hidden rounded-[2rem]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={600}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          itemProp="image"
        />
        <meta itemProp="name" content={name} />
      </div>

      <div className="space-y-3 px-2 flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-serif text-2xl text-primary" itemProp="name">
            {name}
          </h3>
          <span
            className="text-primary font-body font-bold text-lg flex-shrink-0"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="BRL" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <span itemProp="price" content={String(price)}>
              {formatPrice(price)}
            </span>
          </span>
        </div>
        <p
          className="text-sm text-on-surface-variant font-light leading-relaxed line-clamp-2"
          itemProp="description"
        >
          {description}
        </p>
      </div>

      <TrackedLink
        href={buildWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        eventName="whatsapp_click"
        eventParams={{ button_location: 'product_card', product_name: name }}
        className="w-full block bg-secondary-container text-on-secondary-container py-4 rounded-full font-label text-xs uppercase tracking-widest font-bold text-center hover:bg-secondary hover:text-on-secondary transition-colors"
        aria-label={`Pedir ${name} no WhatsApp`}
      >
        Pedir no WhatsApp
      </TrackedLink>
    </article>
  )
}
