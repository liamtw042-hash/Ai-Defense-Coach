import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import { PageIntro, SectionHeading, Eyebrow, ConsultationCTA } from '../components/Primitives'
import { photos } from '../lib/images'

/** Placeholder — replace with the founder's name once confirmed. */
const founderName = '[ Founder Name ]'

const team = [
  {
    photo: photos.teamManGlasses,
    role: 'Defence Transition Advisor',
    line: 'A former senior non-commissioned officer who has made the move himself.',
  },
  {
    photo: photos.teamWomanShort,
    role: 'Recruitment Specialist',
    line: 'Years spent on the hiring side of the desk, across corporate and government.',
  },
  {
    photo: photos.teamSuitMan,
    role: 'Executive Career Coach',
    line: 'Guiding senior leaders into board, executive and consulting roles.',
  },
  {
    photo: photos.teamWoman2,
    role: 'Wellbeing & Family Lead',
    line: 'Supporting members and their families through the human side of change.',
  },
]

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About TransitionHQ"
        title={
          <>
            Founded on service. Built for the careers that come{' '}
            <span className="text-gold">after it.</span>
          </>
        }
        standfirst="TransitionHQ was born from a simple conviction: that the people who serve Australia deserve expert, personal guidance when the time comes to serve themselves."
      />

      {/* Founder */}
      <section className="bg-paper">
        <div className="shell py-section">
          <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <Figure photo={photos.founder} ratio="4 / 5" showCaption />
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-gold/60" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <Eyebrow>The founder</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-serif text-display-md text-navy">{founderName}</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-2 font-sans text-sm uppercase tracking-label text-gold">
                  Founder &amp; Principal Consultant
                </p>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-8 text-lg leading-relaxed text-ink">
                  Our founder served for twenty-two years in the Royal Australian Navy, rising
                  through operational and executive leadership. Over that career she led teams
                  through demanding environments, held senior governance responsibilities, and spent
                  years on the recruitment and workforce side of Defence — the very machinery that
                  decides how people are selected, developed and retained.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  She has also lived the transition herself. She knows the quiet uncertainty of
                  translating a service record into a civilian language, and the difference that
                  informed, personal guidance makes. TransitionHQ is the firm she wished had existed
                  when it was her turn to leave.
                </p>
              </Reveal>
              <Reveal delay={270}>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  That combination — genuine Defence experience, executive leadership, governance and
                  recruitment insight — is the foundation everything here is built on.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="grain bg-navy text-paper">
        <div className="shell py-section">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-3">
              <Reveal>
                <Eyebrow light>Our vision</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <Reveal delay={90}>
                <p className="font-serif text-display-sm leading-tight text-paper">
                  To build the most trusted career-transition consultancy in Australia for Defence
                  members — a team that brings together former ADF personnel alongside seasoned HR
                  and recruitment professionals, so that every client is guided by people who
                  understand both worlds.
                </p>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
                  We are growing deliberately, choosing people for their expertise and their
                  character. What follows is the shape of the team we are building — the disciplines
                  we believe every transitioning member deserves access to.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line bg-paper">
        <div className="shell py-section">
          <SectionHeading
            eyebrow="The team we’re building"
            title="Expertise from both sides of the transition"
            intro="Illustrative roles and placeholder portraits, shown to convey the multidisciplinary team taking shape. To be replaced as members join."
          />
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.role} delay={i * 80}>
                <div>
                  <Figure photo={m.photo} ratio="4 / 5" />
                  <h3 className="mt-5 font-serif text-xl text-navy">{m.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Independence note */}
      <section className="border-t border-line bg-paper-soft">
        <div className="shell py-16">
          <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-3">
              <Reveal>
                <Eyebrow>Independent by design</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <Reveal delay={90}>
                <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">
                  TransitionHQ is an independent, privately owned consultancy. We are not affiliated
                  with, nor endorsed by, the Australian Defence Force, the Department of Veterans’
                  Affairs or the Australian Government. Our independence is intentional — it means our
                  advice answers to one party only: the member in front of us.
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
