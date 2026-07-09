import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../lib/content'
import { IconMenu, IconClose } from './icons'

function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="TransitionHQ — home"
      className="group inline-flex items-baseline font-serif text-[1.35rem] leading-none tracking-tight"
    >
      <span className={onDark ? 'text-paper' : 'text-navy'}>Transition</span>
      <span className="text-gold">HQ</span>
    </Link>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-500 ease-editorial',
        scrolled
          ? 'border-b border-line bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-paper',
      ].join(' ')}
    >
      <nav className="shell flex h-[4.75rem] items-center justify-between">
        <Wordmark />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'relative font-sans text-[0.9rem] tracking-wide transition-colors duration-300',
                      'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-500 after:ease-editorial',
                      isActive
                        ? 'text-navy after:w-full'
                        : 'text-ink-soft hover:text-navy after:w-0 hover:after:w-full',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary text-[0.85rem]">
            Book a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-navy lg:hidden"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={[
          'fixed inset-0 top-[4.75rem] z-40 origin-top bg-navy transition-all duration-500 ease-editorial lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <div className="shell flex h-full flex-col justify-between py-12">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block border-b border-line-dark py-4 font-serif text-3xl text-paper transition-colors hover:text-gold"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="pb-8">
            <Link to="/contact" className="btn-gold w-full">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
