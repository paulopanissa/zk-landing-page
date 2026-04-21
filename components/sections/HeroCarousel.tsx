'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import HeroCarouselVideo from '@/components/sections/HeroCarouselVideo'
import type { HeroCarouselItem } from '@/lib/data'

const AUTO_ADVANCE_MS = 6500

type HeroCarouselProps = {
  items: HeroCarouselItem[]
}

export default function HeroCarousel({ items }: HeroCarouselProps) {
  const count = items.length
  const canLoop = count > 1

  const plugins = useMemo(
    () =>
      canLoop
        ? [
            Autoplay({
              delay: AUTO_ADVANCE_MS,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]
        : [],
    [canLoop]
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: canLoop, align: 'start' }, plugins)

  const [selectedIndex, setSelectedIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const syncVideoPlayback = useCallback(() => {
    if (!emblaApi) return
    const idx = emblaApi.selectedScrollSnap()
    items.forEach((item, i) => {
      const el = videoRefs.current[i]
      if (item.type !== 'video' || !el) return
      if (i === idx) {
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [emblaApi, items])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      syncVideoPlayback()
    }
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, syncVideoPlayback])

  const scrollTo = useCallback(
    (i: number) => {
      emblaApi?.scrollTo(i)
    },
    [emblaApi]
  )

  if (!count) {
    return null
  }

  return (
    <div
      className="relative z-10 h-full w-full overflow-hidden rounded-[40px] lg:rounded-[60px] shadow-2xl bg-black/5 outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Fotos e vídeos dos pets com petiscos e mordedores"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!canLoop || !emblaApi) return
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          emblaApi.scrollPrev()
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          emblaApi.scrollNext()
        }
      }}
    >
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {items.map((item, i) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-full relative h-full"
              key={`${item.type}-${item.src}-${i}`}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                />
              ) : (
                <HeroCarouselVideo
                  item={item}
                  onVideoRef={(el) => {
                    videoRefs.current[i] = el
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {canLoop && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center gap-2 pb-4">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={`pointer-events-auto h-2.5 rounded-full transition-all ${
                i === selectedIndex ? 'w-8 bg-on-primary' : 'w-2.5 bg-on-primary/40 hover:bg-on-primary/70'
              }`}
              aria-label={`Ir para o slide ${i + 1} de ${count}`}
              aria-current={i === selectedIndex ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}
