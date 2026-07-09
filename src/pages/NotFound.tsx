import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/Primitives'
import { IconArrow } from '../components/icons'

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="shell flex min-h-[60vh] flex-col justify-center py-section">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-display-lg text-navy">
          This page has moved on to a new posting.
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink-soft">
          The page you were looking for can’t be found. Let’s get you back on course.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-primary group">
            Return home
            <IconArrow className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
