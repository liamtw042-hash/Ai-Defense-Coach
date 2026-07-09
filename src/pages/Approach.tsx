import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import { PageIntro, SectionHeading, Eyebrow, ConsultationCTA } from '../components/Primitives'
import { photos } from '../lib/images'

const principles = [
  {
    no: '01',
    title: 'Personal',
    body: 'You work with a named advisor who takes the time to understand your circumstances, your family and your ambitions. Never a queue, never a template.',
  },
  {
    no: '02',
    title: 'Tailored',
    body: 'We shape our comprehensive program around you. Your background, your timeline and the career you actually want set the direction — not a fixed process.',
  },
  {
    no: '03',
    title: 'A true partnership',
    body: 'We stand alongside you, not in front of you. The decisions remain yours; our role is to bring clarity, expertise and steady support to each of them.',
  },
  {
    no: '04',
    title: 'Continuous',
    body: 'From well before your discharge date through to ninety days into your new role, it is one continuous relationship — not a series of transactions.',
  },
]

export default function Approach() {
  return (
    <>
      <PageIntro
        eyebrow="Our approach"
        title={
          <>
            A partnership, from your first thoughts of transition to your first months in the{' '}
            <span className="text-gold">role.</span>
          </>
        }
        standfirst="Transition is one of the most significant shifts of a person’s working life. It deserves more than a document and a checklist. It deserves a partner."
      />

      {/* Philosophy + image */}
      <section className="bg-paper">
        <div className="shell py-section">
          <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>How we work</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-display-md text-navy">
                  We begin by listening, and we don’t stop until you’re established.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                  Every engagement starts with a genuine conversation — not a sales pitch, but an
                  honest discussion about where you are, what you’ve done, and what you hope the next
                  chapter might hold. From there, we build a plan that is unmistakably yours.
                </p>
              </Reveal>
              <Reveal delay={210}>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  Throughout, our people do the thinking that matters while technology quietly
                  handles the routine. That balance is deliberate: it means more of our attention
                  stays on you.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:pl-8">
              <Reveal delay={120}>
                <Figure photo={photos.mentoring} ratio="5 / 4" showCaption tint="soft" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line bg-paper-soft">
        <div className="shell py-section">
          <SectionHeading
            eyebrow="What guides us"
            title="Four principles behind every engagement"
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 80}>
                <div className="flex h-full flex-col bg-paper-soft px-8 py-10 lg:px-10 lg:py-12">
                  <span className="font-serif text-2xl text-gold">{p.no}</span>
                  <h3 className="mt-4 font-serif text-2xl text-navy">{p.title}</h3>
                  <p className="mt-4 text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The 90-day promise */}
      <section className="grain bg-navy text-paper">
        <div className="shell py-section">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow light>The first ninety days</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 text-display-md text-paper">
                  Our support doesn’t end at the offer.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <p className="text-lg leading-relaxed text-paper/80">
                  Many services consider their work done the moment a contract is signed. We take a
                  different view. The transition into civilian working life is genuinely completed in
                  the first ninety days of a new role — in the unfamiliar culture, the different
                  pace, the quiet recalibration of identity.
                </p>
              </Reveal>
              <Reveal delay={210}>
                <p className="mt-5 text-lg leading-relaxed text-paper/70">
                  So we stay. Regular check-ins, a steady point of contact, and practical guidance as
                  you settle — because a role secured is not the same as a transition complete.
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
