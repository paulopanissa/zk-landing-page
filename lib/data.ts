import logoImage from '@/public/images/logo.png'
import zoroKayaImage from '@/public/images/zoro-&-kaya.jpg'
import nossaHistoriaImage from '@/public/images/nossa-história.jpg'
import faleConoscoImage from '@/public/images/fale-conosco.jpg'

import heroZoroFocinhoBovino from '@/public/images/zoro-focinho-bovino.jpg'

import ProdutoZoroKayaNatukaPalitinho from '@/public/images/produtos-zoro-e-kaya-natuka-palitinhos.jpeg'
import ProdutoZoroKayaCascos from '@/public/images/produtos-zoro-e-kaya-cascos.jpeg'
import ProdutoZoroKayaLuvTraquele from '@/public/images/produtos-zoro-e-kaya-luv-traquele.jpeg'

export type Product = {
  id: string
  name: string
  slug: string
  price: number
  description: string
  imageUrl: string
  imageAlt: string
  whatsappMessage: string
}

export type Testimonial = {
  id: string
  authorName: string
  petName: string
  petType: string
  rating: number
  text: string
  avatarInitials: string
  stagger?: boolean
}

export const WHATSAPP_NUMBER = '5567998442934'
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá, vim pelo site e gostaria de conhecer os produtos curados por vocês!'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zorokaya.com.br'

export const LOGO_URL =
  logoImage.src

export const HERO_IMAGE_URL = zoroKayaImage.src

/** Slides do hero: imagens (import estático ou URL) e vídeos em `public/videos/…`. */
export type HeroCarouselItem =
  | { type: 'image'; src: string; alt: string }
  | {
      type: 'video'
      src: string
      alt: string
      /** Frame antes do vídeo tocar (atributo poster do elemento de vídeo) */
      poster?: string
      /** Fallback visual se o vídeo não carregar (formato, rede, etc.) */
      thumbnail?: string
      /** Tooltip do botão de áudio quando o vídeo está mudo */
      audioTooltip?: string
    }

export const heroCarouselItems: HeroCarouselItem[] = [
  {
    type: 'image',
    src: heroZoroFocinhoBovino.src,
    alt:
      'Zoro comendo um focinho de bovino',
  },
  {
    type: 'video',
    src: 'https://cdn.zoroekaya.com.br/IMG_0336.MOV',
    alt:
      'Dois Border Collies felizes em campo de flores, representando o espírito da marca Zoro e Kaya',
    poster: zoroKayaImage.src,
    thumbnail: heroZoroFocinhoBovino.src,
    audioTooltip: 'Ouça o ASMR do Zoro',
  },
  // Ex.: vídeo em public/videos/nome.mp4 e opcionalmente poster em public/images/…
  // {
  //   type: 'video',
  //   src: '/videos/caes-petiscos.mp4',
  //   poster: '/images/poster-petiscos.jpg',
  //   alt: 'Cães roendo mordedores e petiscos naturais',
  // },
]

export const ABOUT_IMAGE_URL = nossaHistoriaImage.src

export const CONTACT_IMAGE_URL = faleConoscoImage.src

export const products: Product[] = [
  {
    id: '1',
    name: 'Palitinho Bovino',
    slug: 'palitinho-bovino',
    price: 28.90,
    description: 'Couro bovino desidratado em sticks',
    imageUrl:
      ProdutoZoroKayaNatukaPalitinho.src,
    imageAlt: 'Couro bovino desidratado em sticks',
    whatsappMessage: `Olá, vim pelo site e gostaria de saber mais sobre o Palitinho Bovino (R$ 28,90)!`,
  },
  {
    id: '2',
    name: 'Casco Bovino G',
    slug: 'casco-bovino-natural',
    price: 30,
    description: 'Kits com 3 unidades de casco de bovino natural',
    imageUrl:
      ProdutoZoroKayaCascos.src,
    imageAlt: 'Kits com 3 unidades de casco de bovino natural',
    whatsappMessage: `Olá, vim pelo site e gostaria de saber mais sobre o Casco Bovino Natural (R$ 30,00)!`,
  },
  {
    id: '3',
    name: 'Traquele',
    slug: 'traquele',
    price: 62.90,
    description: 'Traqueia bovina desidratada enrolada em um tapete de couro bovino ultra resistente',
    imageUrl:
      ProdutoZoroKayaLuvTraquele.src,
    imageAlt: 'Mordedor de algodão orgânico trançado para higiene bucal e diversão do cão',
    whatsappMessage: `Olá, vim pelo site e gostaria de saber mais sobre o Traquele (R$ 62,90!`,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    authorName: 'Paula Menezes',
    petName: 'Zoe & Zahra',
    petType: 'Border Collie',
    rating: 5,
    text: 'Um atendimento sem igual, elas fazem de tudo para minhas doguinhas terem os melhores mordedores!!! Eu amo!!!',
    avatarInitials: 'PM',
    stagger: false,
  },
  {
    id: '2',
    authorName: 'Duda',
    petName: 'Max',
    petType: 'Border Collie',
    rating: 5,
    text: 'Uma lojinha incrível, cheia de variedades e preços ótimos, desde que comprei a primeira vez não parei mais, virei cliente frequente. E a lojinha é comandada pela Jilli e Ana que são pessoas incríveis, simpáticas e muito educadas, impossível não virar uma cliente quando se é bem tratado!',
    avatarInitials: 'DU',
    stagger: true,
  },
  {
    id: '3',
    authorName: 'Rauane Franco',
    petName: 'Ruby',
    petType: 'Border Collie',
    rating: 5,
    text: 'As meninas são maravilhosas, atenciosas e muito responsáveis com o que vendem, minha cadelas são obcecadas em cada mordedor e petisco. É ótimo saber dessa responsabilidade em comercializar produtos pet, buscam sempre o ideal e o natural. Eu sempre compro e recomendo sempre!!',
    avatarInitials: 'RF',
    stagger: false,
  },
]

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Garante que só URLs oficiais wa.me deste negócio são passadas a APIs como `window.open`. */
export function isSafeWhatsAppWaMeUrl(url: string): boolean {
  try {
    const u = new URL(url)
    if (u.protocol !== 'https:' || u.hostname !== 'wa.me') return false
    if (u.pathname.replace(/^\//, '') !== WHATSAPP_NUMBER) return false
    for (const key of u.searchParams.keys()) {
      if (key !== 'text') return false
    }
    return true
  } catch {
    return false
  }
}

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
}
