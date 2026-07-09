import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'
import { PageIntro, Eyebrow } from '../components/Primitives'
import { IconMail, IconPhone, IconCheck, IconArrow } from '../components/icons'

const statusOptions = [
  'Still serving',
  'Preparing to transition',
  'Recently discharged',
  'Supporting a partner or family member',
  'Prefer not to say',
]

const expectations = [
  {
    t: 'A confidential conversation',
    d: 'A relaxed, private discovery call — no obligation, no pressure, and nothing on the record.',
  },
  {
    t: 'A genuine understanding',
    d: 'We listen first: where you are, what you’ve done, and what you’d like the next chapter to hold.',
  },
  {
    t: 'A clear next step',
    d: 'You’ll leave with a considered sense of how we could help — and whether we’re the right fit.',
  },
]

const inputClass =
  'w-full border border-line bg-paper px-4 py-3 font-sans text-navy placeholder:text-ink-faint transition-colors focus:border-gold focus:outline-none'
const labelClass = 'block font-sans text-sm font-medium text-navy'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // NOTE: This is a front-end demonstration. To make enquiries live, wire this
    // handler to your form backend — e.g. a Formspree endpoint, Netlify Forms,
    // or your own API — then submit the collected FormData there.
    setSubmitted(true)
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Every transition begins with a{' '}
            <span className="text-gold">conversation.</span>
          </>
        }
        standfirst="Tell us a little about where you are. We’ll be in touch to arrange a confidential discovery call — at a time that suits you."
      />

      <section className="bg-paper">
        <div className="shell py-section">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <Reveal>
                  <div className="border border-line bg-paper-soft px-8 py-16 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                      <IconCheck className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-serif text-display-sm text-navy">Thank you.</h2>
                    <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
                      Your enquiry has been received. A member of our team will be in touch shortly to
                      arrange your confidential discovery call.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="link-underline mt-8 text-navy"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <form onSubmit={handleSubmit} noValidate className="space-y-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className={labelClass}>
                          Full name <span className="text-gold">*</span>
                        </label>
                        <input id="name" name="name" type="text" required className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className={labelClass}>
                          Email <span className="text-gold">*</span>
                        </label>
                        <input id="email" name="email" type="email" required className={inputClass} />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className={labelClass}>
                          Phone <span className="text-ink-faint">(optional)</span>
                        </label>
                        <input id="phone" name="phone" type="tel" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="rank" className={labelClass}>
                          Service / rank <span className="text-ink-faint">(optional)</span>
                        </label>
                        <input
                          id="rank"
                          name="rank"
                          type="text"
                          placeholder="e.g. Petty Officer, RAN"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="status" className={labelClass}>
                        Your current situation
                      </label>
                      <select id="status" name="status" defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          Please choose…
                        </option>
                        {statusOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className={labelClass}>
                        What are you looking for? <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="A sentence or two about where you are and how we might help."
                        className={[inputClass, 'resize-y'].join(' ')}
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-ink-soft">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-[#0A1F3C]"
                      />
                      <span>
                        I’m happy for TransitionHQ to contact me about my enquiry. My details will be
                        kept confidential and never shared.
                      </span>
                    </label>

                    <button type="submit" className="btn-primary group">
                      Request your consultation
                      <IconArrow className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
                    </button>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Aside */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={120}>
                <Eyebrow>What to expect</Eyebrow>
                <ol className="mt-8 space-y-8">
                  {expectations.map((item, i) => (
                    <li key={item.t} className="flex gap-5">
                      <span className="font-serif text-lg text-gold">{`0${i + 1}`}</span>
                      <div>
                        <h3 className="font-serif text-lg text-navy">{item.t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-12 border-t border-line pt-8">
                  <h3 className="eyebrow text-ink-faint">Prefer to reach us directly</h3>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a
                        href="mailto:hello@transitionhq.com.au"
                        className="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold"
                      >
                        <IconMail className="h-5 w-5 text-gold" />
                        hello@transitionhq.com.au
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+611300000000"
                        className="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold"
                      >
                        <IconPhone className="h-5 w-5 text-gold" />
                        1300 000 000
                      </a>
                    </li>
                  </ul>
                  <p className="mt-6 text-sm leading-relaxed text-ink-faint">
                    Consultations are available by appointment, nationwide across Australia — in
                    person where practical, and by phone or video anywhere.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
