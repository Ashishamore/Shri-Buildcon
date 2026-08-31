import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { testimonials } from "../data/site"

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client feedback"
          title="Assessed on delivery."
          tone="dark"
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name + item.role}
              delay={i * 100}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <span className="font-display text-3xl leading-none text-brand-500" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className="mt-4 grow leading-relaxed text-pretty text-ink-200">
                “{item.quote}”
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-0.5 text-sm text-ink-400">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
