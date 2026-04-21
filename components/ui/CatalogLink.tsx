import { buildWhatsAppUrl } from '@/lib/data'

const CATALOG_MESSAGE = 'Olá, gostaria de ver o catálogo completo de produtos!'

export default function CatalogLink({ className }: { className?: string }) {
  return (
    <a
      href={buildWhatsAppUrl(CATALOG_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Ver todos os produtos
    </a>
  )
}
