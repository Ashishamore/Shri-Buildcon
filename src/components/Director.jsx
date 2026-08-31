import Reveal from "./Reveal"
import { director } from "../data/site"

export default function Director() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,21rem)_1fr] lg:gap-20">
          <Reveal>
            {/* Shown at its full frame — the photograph is not cropped. */}
            <img
              src={director.photo}
              alt={`${director.name}, ${director.role}`}
              width="900"
              height="1616"
              className="mx-auto w-full max-w-[21rem] rounded-2xl border border-white/10 shadow-2xl"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand-400 uppercase">
              <span className="h-px w-6 bg-current opacity-40" />
              Leadership
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-balance text-white sm:text-4xl">
              {director.name}
            </h2>
            <p className="mt-3 text-ink-400">
              {director.role} · {director.qualification}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-ink-300">
              {director.bio}
            </p>

            <blockquote className="mt-8 max-w-2xl border-l-2 border-brand-500 pl-6 text-lg leading-relaxed text-pretty text-white">
              {director.quote}
            </blockquote>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {director.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-semibold text-brand-400">
                      {fact.value}
                    </span>
                    <span className="mt-1.5 block text-sm text-ink-400">{fact.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
