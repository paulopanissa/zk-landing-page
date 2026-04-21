'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import type { HeroCarouselItem } from '@/lib/data'

export type HeroCarouselVideoItem = Extract<HeroCarouselItem, { type: 'video' }>

type HeroCarouselVideoProps = {
  item: HeroCarouselVideoItem
  onVideoRef: (el: HTMLVideoElement | null) => void
}

const DEFAULT_AUDIO_TOOLTIP = 'Ativar o áudio'

export default function HeroCarouselVideo({ item, onVideoRef }: HeroCarouselVideoProps) {
  const [muted, setMuted] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const fallbackSrc = item.thumbnail ?? item.poster

  const toggleMute = useCallback(() => {
    setMuted((m) => !m)
  }, [])

  useEffect(() => {
    setLoadError(false)
  }, [item.src])

  const tooltipMuted = item.audioTooltip?.trim() || DEFAULT_AUDIO_TOOLTIP
  const tooltipLabel = muted ? tooltipMuted : 'Silenciar'

  if (loadError && fallbackSrc) {
    return (
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={fallbackSrc}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </div>
    )
  }

  if (loadError && !fallbackSrc) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center bg-surface-container-high p-6 text-center text-sm text-on-surface-variant"
        role="img"
        aria-label={item.alt}
      >
        Vídeo indisponível
      </div>
    )
  }

  return (
    <div className="absolute inset-0 h-full w-full">
      <video
        ref={onVideoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={item.src}
        poster={item.poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={item.alt}
        onError={() => setLoadError(true)}
      />

      {/* Mobile: topo direito | Desktop (md+): base direita, acima dos dots do carrossel */}
      <div className="pointer-events-none absolute inset-0 z-[30] md:flex md:items-end md:justify-end md:p-4">
        <div className="pointer-events-auto absolute right-3 top-3 md:right-4 md:top-auto md:bottom-[4.25rem] lg:bottom-[4.5rem]">
          <button
            type="button"
            onClick={toggleMute}
            title={tooltipLabel}
            aria-label={tooltipLabel}
            aria-pressed={!muted}
            className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-primary/45 text-on-primary shadow-lg backdrop-blur-md transition hover:bg-primary/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
          >
            {muted ? <VolumeMuteIcon className="h-5 w-5" /> : <VolumeIcon className="h-5 w-5" />}
          </button>
          {muted && (
            <span
              role="tooltip"
              className="pointer-events-none absolute right-0 z-[2] w-max min-w-[min(160px,calc(100vw-2rem))] max-w-[min(320px,calc(100vw-2rem))] rounded-lg border border-white/15 bg-primary/95 px-2.5 py-1.5 text-center text-[11px] font-medium leading-snug text-on-primary shadow-md backdrop-blur-sm sm:text-xs top-full mt-2 md:top-auto md:bottom-full md:mb-2 md:mt-0"
            >
              {tooltipMuted}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function VolumeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.54 8.46a5 5 0 010 7.07" strokeLinecap="round" />
      <path d="M19.07 4.93a9 9 0 010 14.14" strokeLinecap="round" />
    </svg>
  )
}

function VolumeMuteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 9l-6 6M17 9l6 6" strokeLinecap="round" />
    </svg>
  )
}
