import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import SitePhoto from "./SitePhoto"
import { useLanguage } from "../i18n/context"

export default function Gallery() {
  const { t, content } = useLanguage()
  const [filter, setFilter] = useState("all")
  const [active, setActive] = useState(null)

  const visible = useMemo(
    () =>
      filter === "all"
        ? content.projects
        : content.projects.filter((p) => p.category === filter),
    [filter, content.projects],
  )

  const open = active !== null
  const step = (delta) => setActive((i) => (i + delta + visible.length) % visible.length)

  // Lock the page behind the lightbox and wire up keyboard navigation.
  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKey = (event) => {
      if (event.key === "Escape") setActive(null)
      if (event.key === "ArrowRight") step(1)
      if (event.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, visible.length])

  function changeFilter(id) {
    setFilter(id)
    setActive(null)
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          description={t.gallery.description}
          tone="dark"
          align="center"
        />

        <Reveal delay={80} className="mt-12 flex flex-wrap justify-center gap-2.5">
          {content.categories.map((category) => {
            const selected = filter === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => changeFilter(category.id)}
                aria-pressed={selected}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  selected
                    ? "border-white bg-white text-ink-950"
                    : "border-white/15 text-ink-300 hover:border-white/35 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 text-left transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <SitePhoto project={project} className="aspect-4/3" />
                <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                  <span className="sr-only">{t.gallery.viewLarger}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={visible[active].title}
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label={t.gallery.close}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <SitePhoto
              project={visible[active]}
              caption={false}
              priority
              fit="contain"
              className="min-h-[16rem] w-full rounded-2xl border border-white/10 bg-ink-950"
            />

            <div className="mt-5 flex items-center justify-between gap-6">
              <div>
                <p className="text-lg font-semibold text-white">{visible[active].title}</p>
                <p className="mt-1 text-sm text-ink-400">
                  {[visible[active].location, visible[active].year].filter(Boolean).join(" · ") ||
                    visible[active].detail}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="text-sm text-ink-400 tabular-nums">
                  {active + 1} / {visible.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={t.gallery.previous}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={t.gallery.next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
