import type { ReactNode, SVGProps } from 'react'

/**
 * A small set of thin, single-weight line icons drawn on a 24px grid.
 * No filled shapes, no rounded-cartoon look — used sparingly for the
 * five programme pillars and a handful of interface cues.
 */
type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

/* — Programme pillars — */

export const IconDiscovery = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.8 9.2 11 11l-1.8 3.8L13 13l1.8-3.8Z" />
    <path d="M12 3.5v1.5M12 19v1.5M3.5 12h1.5M19 12h1.5" />
  </Base>
)

export const IconBranding = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20c0-1 .5-2 1.5-3l9.8-9.8 3.3 3.3L8.8 20.3c-1 1-2 1.5-3 1.5H4v-1.8Z" />
    <path d="M14.2 6.1 17 3.3l3.5 3.5-2.8 2.8" />
    <path d="M5 20.5h6" />
  </Base>
)

export const IconSearch = (p: IconProps) => (
  <Base {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.4-4.4" />
    <path d="M8 10.5h5M10.5 8v5" opacity="0.5" />
  </Base>
)

export const IconInterview = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5.5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" transform="translate(1 1)" />
    <path d="M7.5 8.5h6M7.5 11h3.5" transform="translate(1 1)" />
  </Base>
)

export const IconTransition = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v6" />
    <path d="M12 21a6.5 6.5 0 1 0-6.5-6.5" />
    <path d="M5.5 14.5H2M12 21v-3.5" />
    <circle cx="12" cy="14.5" r="2" />
  </Base>
)

/* — Interface — */

export const IconArrow = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Base>
)

export const IconArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Base>
)

export const IconQuote = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 6C6 7 4.5 9.5 4.5 13v5h5v-5.5H7c0-2 .8-3.4 2.7-4L9 6ZM19 6c-3 1-4.5 3.5-4.5 7v5h5v-5.5H17c0-2 .8-3.4 2.7-4L19 6Z" />
  </Base>
)

export const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m4 7 8 6 8-6" />
  </Base>
)

export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </Base>
)

export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
    <circle cx="12" cy="11" r="2.25" />
  </Base>
)

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </Base>
)

export const IconClose = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
)

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m4 12.5 5 5 11-11" />
  </Base>
)
