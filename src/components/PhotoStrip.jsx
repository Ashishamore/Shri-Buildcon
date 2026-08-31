import SitePhoto from "./SitePhoto"
import { heroPhotos } from "../data/site"

/** Auto-scrolling strip of site photographs across the foot of the hero. */
export default function PhotoStrip() {
  // The list is rendered twice; the CSS loop translates exactly one copy.
  const slides = [...heroPhotos, ...heroPhotos]

  return (
    <div className="marquee relative mt-20 overflow-hidden lg:mt-24">
      <div className="marquee-track flex w-max">
        {slides.map((project, i) => (
          <figure
            key={`${project.id}-${i}`}
            aria-hidden={i >= heroPhotos.length}
            className="group mr-5 w-[16rem] shrink-0 overflow-hidden rounded-xl border border-white/10 sm:w-[20rem] lg:w-[23rem]"
          >
            <SitePhoto project={project} className="aspect-4/3" priority={i < 3} />
          </figure>
        ))}
      </div>

      {/* Fade the strip into the section edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-950 to-transparent sm:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-950 to-transparent sm:w-28"
        aria-hidden="true"
      />
    </div>
  )
}
