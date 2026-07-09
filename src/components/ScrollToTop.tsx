import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reset scroll position on route change — expected behaviour for a multi-page site. */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}
