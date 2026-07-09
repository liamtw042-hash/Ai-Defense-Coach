import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  /** Stagger, in ms, applied as a transition-delay. */
  delay?: number
  className?: string
}

/**
 * Gentle fade-and-rise on scroll. Deliberately subtle — a single, slow
 * movement, never bouncy. Honours prefers-reduced-motion by rendering static.
 */
export default function Reveal({ children, as, delay = 0, className = '' }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  // Loose ref type so a single component can wrap any element (div, li, section…).
  const ref = useRef<any>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transition-all duration-[900ms] ease-editorial motion-reduce:transition-none',
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  )
}
