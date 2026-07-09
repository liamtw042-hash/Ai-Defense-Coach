import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import { Eyebrow, SectionHeading, ConsultationCTA } from '../components/Primitives'
import { IconArrow, IconQuote } from '../components/icons'
import { photos } from '../lib/images'
import { pillars, testimonials } from '../lib/content'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="shell grid items-center gap-y-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-x-12 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Defence career transition · Australia</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-8 text-display-xl text-navy">
              You spent your career serving Australia.
              <span className="block text-ink-soft">
                Let’s build{' '}
                <em className="font-serif italic text-gold">what comes next.</em>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-lead text-ink-soft">
              TransitionHQ is a boutique consultancy guiding Australian Defence Force members
              through every step of the move into rewarding civilian careers — expert-led,
              personal, and alongside you the whole way.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to="/contact" className="btn-primary group">
                Book a consultation
                <IconArrow className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
              </Link>
              <Link to="/program" className="link-underline">
                Explore the program
              </Link>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <dl className="mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {[
                ['Defence-experienced', 'Led by those who have served'],
                ['Executive insight', 'Leadership and governance depth'],
                ['Recruitment-informed', 'How civilian hiring truly works'],
              ].map(([term, desc]) => (
                <div key={term}>
                  <dt className="font-sans text-sm font-medium text-navy">{term}</dt>
                  <dd className="mt-1 text-sm text-ink-faint">{desc}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200} className="lg:pl-6">
            <div className="relative">
              <Figure
                photo={photos.coastRoad}
                ratio="4 / 5"
                priority
                showCaption
                tint="soft"
              />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-gold/60" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="shell py-section">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>Our purpose</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={90}>
              <p className="text-display-sm font-serif leading-tight text-navy">
                A career of service leaves you with more than most employers can imagine —
                judgement forged under pressure, leadership that others depend on, and a
                discipline the civilian world quietly prizes.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Our purpose is to help you carry that value across the threshold — to translate a
                life in Defence into a civilian career with meaning, standing and security. We
                don’t simply write résumés. We partner with you through the entire journey, from
                the first thought of transition to the day you feel settled in your new role.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Program() {
  return (
    <section className="border-t border-line bg-paper-soft">
      <div className="shell py-section">
        <SectionHeading
          eyebrow="The program"
          title="The Career Transition Success Program"
          intro="Not a menu of services, but one comprehensive program — five connected pillars that carry you from first considering transition through to establishment in a civilian role."
        />

        <div className="mt-16 border-t border-line">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.key} delay={i * 60}>
                <Link
                  to="/program"
                  className="group grid items-baseline gap-y-4 border-b border-line py-8 transition-colors duration-500 hover:bg-paper lg:grid-cols-12 lg:gap-x-12 lg:py-9"
                >
                  <div className="flex items-center gap-5 lg:col-span-4">
                    <span className="font-serif text-lg text-gold">{p.no}</span>
                    <Icon className="h-7 w-7 shrink-0 text-navy/70 transition-colors duration-500 group-hover:text-gold" />
                    <h3 className="font-serif text-2xl text-navy">{p.title}</h3>
                  </div>
                  <p className="text-ink-soft lg:col-span-7">{p.summary}</p>
                  <span className="hidden justify-self-end text-navy/40 transition-all duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-gold lg:col-span-1 lg:block">
                    <IconArrow className="h-5 w-5" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-12">
            <Link to="/program" className="btn-ghost group">
              See the full program
              <IconArrow className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Difference() {
  return (
    <section className="grain bg-navy text-paper">
      <div className="shell py-section">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow light>Why we’re different</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 text-display-md text-paper">
                Led by people, not a platform.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 text-lg leading-relaxed text-paper/80">
                Our team combines Defence experience, executive leadership, recruitment insight and
                proven career-transition expertise to deliver guidance that is genuinely personal.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-lg leading-relaxed text-paper/70">
                Behind the scenes, we use modern technology to streamline the process — so we can
                spend more time on what matters most: understanding each client, and providing
                practical, personalised advice. The technology stays in the background. The
                relationship does not.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-px overflow-hidden border border-line-dark bg-line-dark sm:grid-cols-1">
              {[
                {
                  t: 'Human-led guidance',
                  d: 'A named advisor who knows your situation — not a queue, a chatbot or a template.',
                },
                {
                  t: 'Defence-informed',
                  d: 'We understand service because we have lived it. Nothing is lost in translation.',
                },
                {
                  t: 'Results-focused',
                  d: 'Every step is measured against one outcome: a civilian career you value and keep.',
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 80}>
                  <div className="bg-navy px-8 py-8">
                    <h3 className="font-serif text-xl text-paper">{item.t}</h3>
                    <p className="mt-3 text-paper/70">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="shell py-section">
        <SectionHeading
          eyebrow="In their words"
          title="Trusted by those who have served"
          intro="Placeholder reflections, representative of the members we work with. Every attribution here is illustrative and ready to be replaced with real voices."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.initials} delay={i * 90}>
              <figure className="flex h-full flex-col bg-paper px-8 py-10">
                <IconQuote className="h-8 w-8 text-gold" />
                <blockquote className="mt-6 flex-1 font-serif text-xl leading-snug text-navy">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-sm text-gold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-medium text-navy">
                      {t.attribution}
                    </span>
                    <span className="block text-sm text-ink-faint">{t.context}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Program />
      <Difference />
      <Testimonials />
      <ConsultationCTA />
    </>
  )
}
