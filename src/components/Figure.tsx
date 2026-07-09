import { useState } from 'react'
import type { Photo } from '../lib/images'

type FigureProps = {
  photo: Photo
  /** Aspect ratio, CSS style e.g. '4 / 5', '16 / 10'. */
  ratio?: string
  className?: string
  /** Show the small caption plate in a bottom corner. */
  showCaption?: boolean
  /** A restrained navy wash for text-over-image use. */
  tint?: 'none' | 'soft' | 'deep'
  priority?: boolean
  rounded?: boolean
}

/**
 * A photographic figure with a built-in, art-directed fallback. The duotone
 * placeholder always renders underneath; the photograph layers over it and is
 * hidden if it fails to load — so the composition is never "broken", only ever
 * a considered navy plate.
 */
export default function Figure({
  photo,
  ratio = '4 / 5',
  className = '',
  showCaption = false,
  tint = 'none',
  priority = false,
  rounded = false,
}: FigureProps) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={[
        'relative overflow-hidden bg-navy',
        rounded ? 'rounded-[2px]' : '',
        className,
      ].join(' ')}
      style={{ aspectRatio: ratio }}
    >
      {/* Fallback plate — a quiet navy duotone with a hairline horizon. */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy-deep" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#A9C5E0"
          strokeWidth="0.3"
        >
          <path d="M0 68 Q 30 60 55 66 T 100 62" />
          <path d="M0 76 Q 35 70 60 74 T 100 72" opacity="0.6" />
          <path d="M0 84 Q 25 80 55 82 T 100 80" opacity="0.35" />
        </svg>
      </div>

      {!failed && (
        <img
          src={photo.url}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {tint !== 'none' && (
        <div
          aria-hidden="true"
          className={[
            'absolute inset-0',
            tint === 'deep'
              ? 'bg-gradient-to-t from-navy-deep/85 via-navy/45 to-navy/25'
              : 'bg-gradient-to-t from-navy-deep/55 via-navy/15 to-transparent',
          ].join(' ')}
        />
      )}

      {showCaption && photo.caption && (
        <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 bg-navy-deep/70 px-3 py-1.5 font-sans text-[0.68rem] uppercase tracking-label text-paper/80 backdrop-blur-sm">
          <span className="h-px w-4 bg-gold" />
          {photo.caption}
        </figcaption>
      )}
    </figure>
  )
}
