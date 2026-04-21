'use client'

import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/data'

const CATALOG_MESSAGE = 'Olá, gostaria de ver o catálogo completo de produtos!'

export default function CatalogLink({ className }: { className?: string }) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768
    const url = isMobile
      ? `https://wa.me/c/${WHATSAPP_NUMBER}`
      : buildWhatsAppUrl(CATALOG_MESSAGE)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      href={`https://wa.me/c/${WHATSAPP_NUMBER}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Ver todos os produtos
    </a>
  )
}
