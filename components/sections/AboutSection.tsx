import Image from 'next/image'
import { HERO_IMAGE_URL } from '@/lib/data'

export default function AboutSection() {
  return (
    <section
      id="nossa-historia"
      aria-labelledby="about-heading"
      className="py-32 px-6 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src={HERO_IMAGE_URL}
              alt="Zoro e Kaya — os Border Collies fundadores da marca, curadores chefes de todos os produtos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <blockquote className="absolute -bottom-10 -right-4 lg:-right-10 bg-tertiary text-on-tertiary p-8 lg:p-10 rounded-[2.5rem] max-w-[280px] lg:max-w-xs shadow-2xl">
            <p className="font-serif italic text-lg lg:text-xl leading-relaxed">
              &ldquo;Os verdadeiros responsáveis por tudo isso&rdquo;
            </p>
            <footer className="mt-4 font-label uppercase text-[10px] tracking-[0.2em] font-bold opacity-60">
              — os CEOs Zoro &amp; Kaya
            </footer>
          </blockquote>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-xs font-bold">
            Nossa História
          </span>
          <h2
            id="about-heading"
            className="font-serif text-5xl lg:text-7xl text-primary leading-tight"
          >
            Inspirado por Zoro &amp; Kaya
          </h2>
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-xs font-bold">
            Como tudo começou
          </span>


          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-lg">
            <p>
            A Zoro & Kaya nasceu do amor pelos nossos pets — Zoro, Kaya, Sebastian e nossos quatro gatos.
            </p>
            <p>
              Tudo começou depois de um episódio desagradável (e até perigoso) com um mordedor industrializado. Aquilo acendeu um alerta: começamos a pesquisar, buscar e testar alternativas realmente seguras, naturais e confiáveis para o dia a dia deles.
            </p>
            <p>
              Com o tempo, percebemos que outros tutores tinham as mesmas dúvidas e dificuldades. Foi assim que a Zoro & Kaya deixou de ser só “a nossa busca” e virou um espaço de curadoria.
            </p>
            <p>
              Hoje trabalhamos com petiscos e mordedores 100% naturais, sempre selecionados com muito cuidado e testados aqui em casa pelos nossos verdadeiros CEOs de quatro patas.
            </p>
            <p>Nosso objetivo é simples: ajudar outros tutores a fazer escolhas mais seguras e conscientes, promovendo bem-estar, diversão e longevidade para seus companheiros.</p>
            <p>Aqui, cada pet é único e por isso orientamos cada cliente a escolher o produto ideal de acordo com o porte, idade e necessidades do seu amigo.</p>
          </div>

          {/* <div className="pt-6">
            <a
              href="#contato"
              className="inline-flex items-center gap-6 text-primary font-serif italic text-2xl group"
            >
              Fale conosco
              <span
                className="w-12 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-24"
                aria-hidden="true"
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
