import Reveal from "./Reveal"
import { useLanguage } from "../i18n/context"

/*
 * There is no portrait, so the statement carries the left side and the factual
 * detail sits in a panel on the right — a two-column composition that stands on
 * its own rather than reading as a layout with an image missing.
 */
export default function Director() {
  const { t } = useLanguage()
  const lead = t.leadership

  return (
    <section id="leadership" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand-400 uppercase">
            <span className="h-px w-6 bg-current opacity-40" />
            {lead.eyebrow}
          </p>

          <blockquote className="mt-7 font-display text-3xl leading-[1.2] font-medium text-balance text-white sm:text-4xl">
            &ldquo;{lead.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-10 w-px shrink-0 bg-brand-500" aria-hidden="true" />
            <span>
              <span className="block font-display font-semibold text-white">{lead.name}</span>
              <span className="mt-1 block text-sm text-ink-400">
                {lead.role} · {lead.qualification}
              </span>
            </span>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
        >
          <p className="leading-relaxed text-pretty text-ink-300">{lead.bio}</p>

          <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {lead.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-ink-400">{fact.label}</dt>
                <dd className="font-display text-xl font-semibold text-brand-400">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
