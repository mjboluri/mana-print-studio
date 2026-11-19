import { useEffect } from 'react'

const REVEAL_SELECTORS = [
  '.hero-copy',
  '.hero-art',
  '.highlights-inner',
  '.portfolio-layout',
  '.services-layout',
  '.applications > .container',
]

export default function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const elements = document.querySelectorAll(REVEAL_SELECTORS.join(', '))
    elements.forEach((element) => element.classList.add('scroll-reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-inview', entry.isIntersecting)
        })
      },
      {
        threshold: 0.05,
        rootMargin: '-20% 0px -20% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
