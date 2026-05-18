import { useEffect, useCallback } from 'react'

export function useScrollReveal() {
  const setupObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered after route change
    const timer = setTimeout(setupObserver, 100)
    return () => clearTimeout(timer)
  }, [setupObserver])
}
