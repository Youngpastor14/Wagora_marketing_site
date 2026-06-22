import { useState, useEffect } from 'react'

/**
 * StickyCTA
 * Appears at the bottom of the screen after the user scrolls past 40% of the page.
 * Disappears when the user is near the bottom (within 300px of the footer).
 * Stays hidden on the auth page.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const pageH = document.documentElement.scrollHeight
        const winH = window.innerHeight
        const scrolledPct = scrollY / (pageH - winH)
        const nearBottom = pageH - winH - scrollY < 320

        setVisible(scrolledPct > 0.35 && !nearBottom)
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="sticky-cta-enter fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <a
        href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`}
        className="pointer-events-auto inline-flex items-center gap-2.5 bg-primary text-on-primary px-6 py-3 rounded-full font-satoshi font-bold text-sm shadow-lg shadow-primary/25 hover:opacity-90 active:scale-[0.97] transition-all border border-primary/20 backdrop-blur-sm"
        aria-label="Start Wagora for free"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-on-primary/70 animate-pulse" />
        Start Free — No Card Required
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </a>
    </div>
  )
}
