import { ArrowRight, Building2, Factory, Landmark, SunMedium } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { useLanguage } from "../i18n/context"

const ICONS = {
  building: Building2,
  factory: Factory,
  solar: SunMedium,
  landmark: Landmark,
}

export default function Services() {
  const { t, content } = useLanguage()

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-20">
        {/* The heading holds its place while the divisions scroll past it */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            {t.services.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="border-t border-ink-100">
          {content.services.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <Reveal
                key={service.id}
                delay={i * 70}
                className="group border-b border-ink-100 py-7 lg:py-8"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 shrink-0 text-ink-300 transition-colors duration-300 group-hover:text-brand-600"
                    strokeWidth={1.9}
                  />
                  <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">{service.title}</h3>
                </div>

                <p className="mt-3 leading-relaxed text-pretty text-ink-500">{service.summary}</p>

                <ul className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink-400">
                  {service.points.map((point, index) => (
                    <li key={point} className="flex items-center gap-3">
                      {index > 0 && (
                        <span className="h-1 w-1 rounded-full bg-ink-200" aria-hidden="true" />
                      )}
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
