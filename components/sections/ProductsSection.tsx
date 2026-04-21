import { products, SITE_URL } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'
import CatalogLink from '@/components/ui/CatalogLink'


const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Essenciais da Natureza — Zoro e Kaya',
  url: `${SITE_URL}/#colecoes`,
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.description,
      url: `${SITE_URL}/#colecoes`,
      offers: {
        '@type': 'Offer',
        price: p.price.toFixed(2),
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
      },
    },
  })),
}

export default function ProductsSection() {
  return (
    <section
      id="colecoes"
      aria-labelledby="products-heading"
      className="py-32 px-6 lg:px-24 bg-surface-container-low rounded-t-[4rem] lg:rounded-t-[6rem]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="space-y-4">

            <h2
              id="products-heading"
              className="font-serif text-5xl lg:text-6xl text-primary italic"
            >
              Favoritos da matilha
            </h2>
            <span className="text-on-surface-variant font-label uppercase tracking-[0.2em] text-xs font-bold">
              Os mais amados pelos clientes
            </span>
          </div>
          <CatalogLink className="text-primary font-label text-sm border-b border-primary/20 pb-1 hover:border-primary transition-all font-bold" />
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start"
          aria-label="Produtos em destaque"
        >
          {products.map((product, index) => {
            const staggerClass =
              index === 1 ? 'md:mt-12 lg:mt-16' :
              index === 2 ? 'md:mt-24 lg:mt-32' : ''
            return (
              <li key={product.id} className={staggerClass}>
                <ProductCard product={product} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
