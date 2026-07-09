import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import { PageIntro, Eyebrow, ConsultationCTA } from '../components/Primitives'
import { IconArrowUpRight, IconArrow } from '../components/icons'
import { insights } from '../lib/content'
import { photos, type Photo } from '../lib/images'

// Pair each placeholder article with a considered image.
const articleImages: Photo[] = [
  photos.harbourDusk,
  photos.quietOffice,
  photos.conversation,
  photos.roundtable,
  photos.seminar,
  photos.harbourDay,
]

export default function Insights() {
  const [featured, ...rest] = insights
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title={
          <>
            Perspectives on transition, careers and the road from Defence to civilian{' '}
            <span className="text-gold">life.</span>
          </>
        }
        standfirst="Considered writing from our team — practical guidance and a longer view on the questions members ask us most. Placeholder articles, ready for your own."
      />

      {/* Featured */}
      <section className="bg-paper">
        <div className="shell py-section">
          <Reveal>
            <a className="group grid cursor-pointer gap-y-8 lg:grid-cols-12 lg:gap-x-12">
              <div className="lg:col-span-7">
                <Figure photo={articleImages[0]} ratio="16 / 10" showCaption rounded />
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <span className="eyebrow text-gold">{featured.category}</span>
                <h2 className="mt-5 font-serif text-display-sm leading-tight text-navy transition-colors duration-500 group-hover:text-navy-600">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{featured.excerpt}</p>
                <span className="mt-8 flex items-center gap-3">
                  <span className="link-underline text-navy">Read the article</span>
                  <IconArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="mt-6 text-sm text-ink-faint">{featured.readingTime}</span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="border-t border-line bg-paper-soft">
        <div className="shell py-section">
          <Reveal>
            <Eyebrow>More writing</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.title} delay={i * 70}>
                <a className="group flex h-full cursor-pointer flex-col">
                  <Figure photo={articleImages[(i + 1) % articleImages.length]} ratio="3 / 2" rounded />
                  <span className="mt-6 eyebrow text-gold">{article.category}</span>
                  <h3 className="mt-4 font-serif text-2xl leading-snug text-navy transition-colors duration-500 group-hover:text-navy-600">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-ink-soft">{article.excerpt}</p>
                  <span className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-sm text-ink-faint">{article.readingTime}</span>
                    <IconArrow className="h-4 w-4 text-navy/40 transition-all duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-gold" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="border-t border-line bg-paper">
        <div className="shell py-section">
          <div className="grid gap-y-8 lg:grid-cols-12 lg:items-center lg:gap-x-12">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="font-serif text-display-sm text-navy">
                  Considered thinking, in your inbox.
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-4 max-w-md text-lg text-ink-soft">
                  An occasional note on transition and careers. No noise, no selling — just useful
                  perspective when we have something worth saying.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:justify-self-end">
              <Reveal delay={140}>
                <form
                  className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="subscribe-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="subscribe-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-line bg-paper px-4 py-3 font-sans text-navy placeholder:text-ink-faint focus:border-gold focus:outline-none"
                  />
                  <button type="submit" className="btn-primary shrink-0">
                    Subscribe
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  )
}
