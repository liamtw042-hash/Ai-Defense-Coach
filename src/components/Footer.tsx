import { Link } from 'react-router-dom'
import { nav } from '../lib/content'
import { IconMail, IconPhone, IconArrowUpRight } from './icons'

const year = 2025

export default function Footer() {
  return (
    <footer className="grain bg-navy-deep text-paper/80">
      <div className="shell py-section">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand + statement */}
          <div className="lg:col-span-5">
            <span className="font-serif text-3xl leading-none tracking-tight">
              <span className="text-paper">Transition</span>
              <span className="text-gold">HQ</span>
            </span>
            <p className="mt-6 max-w-sm font-serif text-xl leading-snug text-paper/90">
              Helping Australian Defence Force members transition, with confidence, into rewarding
              civilian careers.
            </p>
            <Link
              to="/contact"
              className="link-underline mt-8 text-gold-soft"
            >
              Book a consultation
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Spacer */}
          <div className="hidden lg:col-span-1 lg:block" />

          {/* Navigate */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow-light">Explore</h2>
            <ul className="mt-6 space-y-3.5">
              <li>
                <Link to="/" className="text-paper/75 transition-colors hover:text-paper">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow-light">Get in touch</h2>
            <ul className="mt-6 space-y-3.5">
              <li>
                <a
                  href="mailto:hello@transitionhq.com.au"
                  className="inline-flex items-center gap-3 text-paper/75 transition-colors hover:text-paper"
                >
                  <IconMail className="h-4 w-4 text-gold-soft" />
                  hello@transitionhq.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+611300000000"
                  className="inline-flex items-center gap-3 text-paper/75 transition-colors hover:text-paper"
                >
                  <IconPhone className="h-4 w-4 text-gold-soft" />
                  1300 000 000
                </a>
              </li>
              <li className="pt-2 text-sm text-paper/60">
                By appointment
                <br />
                Nationwide, across Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-line-dark" />

        <div className="mt-8 flex flex-col gap-6 text-sm text-paper/55 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            TransitionHQ is an independent private consultancy. We are not affiliated with, nor
            endorsed by, the Australian Defence Force, the Department of Veterans’ Affairs or the
            Australian Government. “TransitionHQ” is a working name.
          </p>
          <p className="shrink-0">© {year} TransitionHQ</p>
        </div>
      </div>
    </footer>
  )
}
