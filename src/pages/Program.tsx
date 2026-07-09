import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import { PageIntro, SectionHeading, Eyebrow, ConsultationCTA } from '../components/Primitives'
import { IconCheck } from '../components/icons'
import { pillars, journey } from '../lib/content'
import { photos } from '../lib/images'

function Pillar({ pillar, flip }: { pillar: (typeof pillars)[number]; flip: boolean }) {
  const Icon = pillar.icon
  return (
    <article className="border-t border-line py-14 lg:py-20">
      <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-12">
        <div className={['lg:col-span-5', flip ? 'lg:order-2 lg:col-start-8' : ''].join(' ')}>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-gold">{pillar.no}</span>
              <span className="h-px w-10 bg-line" />
              <Icon className="h-8 w-8 text-navy/70" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-display-sm text-navy">{pillar.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{pillar.summary}</p>
          </Reveal>
        </div>

        <div className={['lg:col-span-6', flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'].join(' ')}>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-ink">{pillar.detail}</p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-8 grid gap-y-3.5 sm:grid-cols-2 sm:gap-x-8">
              {pillar.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-ink-soft">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </article>
  )
}

export default function Program() {
  return (
    <>
      <PageIntro
        eyebrow="The program"
        title={
          <>
            One program, five pillars — a complete path from Defence to civilian
            <span className="text-gold"> success.</span>
          </>
        }
        standfirst="The Career Transition Success Program is deliberately comprehensive. Rather than a list of one-off services, it is a single, connected journey — each pillar building on the last."
      />

      {/* Pillars in detail */}
      <section className="bg-paper">
        <div className="shell pb-6 pt-4 lg:pt-10">
          {pillars.map((p, i) => (
            <Pillar key={p.key} pillar={p} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Full-bleed working image */}
      <section className="bg-paper">
        <div className="shell">
          <Reveal>
            <Figure photo={photos.planningDesk} ratio="21 / 8" showCaption tint="soft" rounded />
          </Reveal>
        </div>
      </section>

      {/* The journey */}
      <section className="border-t border-line bg-paper-soft">
        <div className="shell py-section">
          <SectionHeading
            eyebrow="The journey"
            title="What transition looks like, from first thought to firmly established"
            intro="Most members come to us somewhere along this path. Wherever you are, we meet you there — and stay with you to the end of it."
          />

          <ol className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
            {journey.map((step, i) => (
              <Reveal key={step.phase} delay={i * 70} as="li" className="h-full">
                <div className="flex h-full flex-col bg-paper-soft px-7 py-8">
                  <span className="font-serif text-3xl text-gold/80">{`0${i + 1}`}</span>
                  <span className="mt-4 eyebrow text-ink-faint">{step.phase}</span>
                  <h3 className="mt-3 font-serif text-xl text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-ink-soft">
              <span className="font-serif text-navy">A single, continuous relationship.</span>{' '}
              You are not handed between departments or reduced to a case number. One team stays with
              you, start to finish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="shell py-section">
          <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-3">
              <Reveal>
                <Eyebrow>Every path is personal</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <Reveal delay={90}>
                <p className="font-serif text-display-sm leading-tight text-navy">
                  No two transitions are the same. The program is comprehensive by design, but never
                  rigid — we shape it around your circumstances, your family, and the career you
                  actually want.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  )
}
