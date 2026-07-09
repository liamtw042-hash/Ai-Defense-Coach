import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { IconArrow } from './icons'

export function Eyebrow({
  children,
  light = false,
  className = '',
}: {
  children: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <span className={['inline-flex items-center gap-3', className].join(' ')}>
      <span className={light ? 'h-px w-6 bg-gold-soft' : 'h-px w-6 bg-gold'} />
      <span className={light ? 'eyebrow-light' : 'eyebrow'}>{children}</span>
    </span>
  )
}

/**
 * Interior-page masthead. Deliberately asymmetric — the title sits in the
 * left/centre columns while a standfirst holds the right, echoing an editorial
 * feature opener rather than a centred hero.
 */
export function PageIntro({
  eyebrow,
  title,
  standfirst,
}: {
  eyebrow: string
  title: ReactNode
  standfirst?: ReactNode
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="shell grid gap-y-8 pb-16 pt-16 sm:pt-20 lg:grid-cols-12 lg:gap-x-12 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-8">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-display-lg">{title}</h1>
          </Reveal>
        </div>
        {standfirst && (
          <div className="lg:col-span-4 lg:pt-2">
            <Reveal delay={160}>
              <p className="max-w-prose font-sans text-lead text-ink-soft lg:border-l lg:border-line lg:pl-6">
                {standfirst}
              </p>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}

/** Section header with a marginal number/label and a serif heading. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  light = false,
}: {
  index?: string
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  light?: boolean
}) {
  return (
    <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
        {eyebrow && (
          <Reveal>
            <Eyebrow light={light}>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h2
            className={[
              'mt-6 text-display-md',
              light ? 'text-paper' : 'text-navy',
              index ? 'flex items-baseline gap-4' : '',
            ].join(' ')}
          >
            {index && (
              <span
                className={[
                  'font-serif text-xl',
                  light ? 'text-gold-soft' : 'text-gold',
                ].join(' ')}
              >
                {index}
              </span>
            )}
            <span>{title}</span>
          </h2>
        </Reveal>
      </div>
      {intro && (
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal delay={140}>
            <p
              className={[
                'max-w-prose text-lg leading-relaxed',
                light ? 'text-paper/75' : 'text-ink-soft',
              ].join(' ')}
            >
              {intro}
            </p>
          </Reveal>
        </div>
      )}
    </div>
  )
}

/** The recurring "Begin Your Transition" invitation. */
export function ConsultationCTA() {
  return (
    <section className="bg-paper">
      <div className="shell pb-section">
        <div className="grain relative overflow-hidden bg-navy px-8 py-16 sm:px-14 sm:py-20 lg:px-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-line-dark/60" />
          <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full border border-line-dark/40" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow light>Begin your transition</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 max-w-2xl text-display-md text-paper">
                  Your service prepared you for more than you may realise. Let’s find where it
                  leads next.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-xl text-lg text-paper/75">
                  Every transition begins with a conversation. Book a confidential discovery call
                  and we’ll talk through where you are and where you’d like to be.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Reveal delay={200}>
                <Link to="/contact" className="btn-gold group w-full sm:w-auto">
                  Book a consultation
                  <IconArrow className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
