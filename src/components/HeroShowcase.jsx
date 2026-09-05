import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../i18n/context"

const INTERVAL = 3000

/** Auto-advancing showcase of the current developments, beside the hero copy. */
export default function HeroShowcase() {
  const { t, content } = useLanguage()
  const slides = content.heroSlides
  const last = slides.length

  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  // Someone who has asked for less motion gets a static first slide.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener("change", sync)
    return () => query.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    if (paused || reduced || slides.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i >= last ? 0 : i + 1)), INTERVAL)
    return () => clearInterval(timer)
  }, [paused, reduced, slides.length, last])

  // Re-arm the transition only once the un-animated snap has painted.
  useEffect(() => {
    if (animate) return
    let inner
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true))
    })
    return () => {
      cancelAnimationFrame(outer)
      if (inner) cancelAnimationFrame(inner)
    }
  }, [animate])

  function handleTransitionEnd(event) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return
    if (index === last) {
      setAnimate(false)
      setIndex(0)
    }
  }

  /*
   * The first slide is repeated at the end of the track. Passing the real last
   * slide, we keep moving forward onto that copy, then silently snap back with
   * the transition off — so the loop never rewinds through every slide.
   */
  const track = [...slides, slides[0]]
  const current = index % slides.length
  const slide = slides[current]

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-ink-900">
        <div
          className={`flex h-full ${
            animate
              ? "transition-transform duration-700 ease-out motion-reduce:transition-none"
              : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((item, i) => (
            <div key={`${item.id}-${i}`} className="h-full w-full shrink-0">
              <img
                src={item.src}
                alt={i === last ? "" : `${item.name} — ${item.caption}`}
                aria-hidden={i === last}
                loading={i === 0 ? "eager" : "lazy"}
                className={`h-full w-full ${
                  item.fit === "contain" ? "object-contain p-3" : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>

        <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink-950/85 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {slide.status}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div aria-live="polite" aria-atomic="true">
          <h2 className="font-display text-xl font-semibold text-white">{slide.name}</h2>
          <p className="mt-1 text-sm text-brand-400">{slide.type}</p>
          <p className="mt-2 text-sm text-ink-400">{slide.caption}</p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <a
            href={`#${slide.projectId}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {t.showcase.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="flex shrink-0 items-center gap-2">
            {slides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${item.name} — ${item.caption}`}
                aria-current={i === current}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-brand-400" : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
