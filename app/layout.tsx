import type { Metadata, Viewport } from 'next'
import { Newsreader, Manrope } from 'next/font/google'
import Script from 'next/script'
import { SITE_URL } from '@/lib/data'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#322214',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Zoro e Kaya | Curadoria Pet Natural em Campo Grande/MS',
    template: '%s | Zoro e Kaya',
  },
  description:
    'Curadoria de produtos naturais para pets em Campo Grande/MS. Petiscos, mordedores e shampoos 100% naturais, testados pelos nossos Border Collies. Entrega local de segunda a sábado. Peça pelo WhatsApp.',
  keywords: [
    'petisco natural para cão Campo Grande',
    'mordedor natural cachorro Campo Grande MS',
    'mordedor bovino natural',
    'curadoria pet natural Campo Grande',
    'produtos pet naturais Mato Grosso do Sul',
    'pet shop natural Campo Grande MS',
    'entrega pet Campo Grande',
    'loja pet natural MS',
    'bem-estar animal Campo Grande',
    'Border Collie petisco mordedor',
  ],
  authors: [{ name: 'Zoro e Kaya' }],
  creator: 'Zoro e Kaya',
  publisher: 'Zoro e Kaya',
  category: 'Pet Products',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Zoro e Kaya',
    title: 'Zoro e Kaya | Curadoria Pet Natural em Campo Grande/MS',
    description:
      'Curadoria de produtos naturais para pets. Entrega local em Campo Grande/MS de segunda a sábado.',
    images: [
      {
        url: '/images/fale-conosco.jpg',
        width: 1200,
        height: 630,
        alt: 'Zoro e Kaya — Curadoria Pet Natural em Campo Grande/MS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoro e Kaya | Curadoria Pet Natural em Campo Grande/MS',
    description: 'Produtos naturais para pets com entrega em Campo Grande/MS.',
    images: ['/images/fale-conosco.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    apple: '/images/favicon.png',
    shortcut: '/images/favicon.png',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: 'Zoro e Kaya',
  description:
    'Curadoria de produtos naturais para pets em Campo Grande/MS — petiscos, mordedores e shampoos 100% naturais.',
  url: SITE_URL,
  telephone: '+5567998442934',
  priceRange: 'R$28 - R$63',
  image: `${SITE_URL}/images/fale-conosco.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Campo Grande',
    addressRegion: 'MS',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -20.4697,
    longitude: -54.6201,
  },
  areaServed: [
    { '@type': 'City', name: 'Campo Grande' },
    { '@type': 'AdministrativeArea', name: 'Mato Grosso do Sul' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5567998442934',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: ['https://www.instagram.com/lojinhazoroekaya'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zoro e Kaya',
  url: SITE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.zoroekaya.com.br" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-J7MV35JK79"
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J7MV35JK79');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
