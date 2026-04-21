import { buildWhatsAppUrl } from '@/lib/data'
import TrackedLink from '@/components/ui/TrackedLink'

const CATALOG_MESSAGE = 'Olá, gostaria de ver o catálogo completo de produtos!'

export default function CatalogLink({ className }: { className?: string }) {
  return (
    <TrackedLink
      href={buildWhatsAppUrl(CATALOG_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      eventName="whatsapp_click"
      eventParams={{ button_location: 'catalog_link' }}
      className={className}
    >
      Ver todos os produtos
    </TrackedLink>
  )
}
