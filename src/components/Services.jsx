import { ArrowUpRight, Building2, Factory, Landmark, SunMedium } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { services } from "../data/site"

const ICONS = {
  building: Building2,
  factory: Factory,
  solar: SunMedium,
  landmark: Landmark,
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="Four divisions, one execution team."
          description="Land, structural work and site infrastructure are handled by the same engineers, which removes the handover gaps between separate contractors."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <Reveal
                key={service.id}
                delay={(i % 2) * 100}
                className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-8 transition duration-300 hover:border-ink-200 hover:shadow-lg sm:p-10"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-sand-100 p-3.5 text-ink-700 transition group-hover:bg-ink-900 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </span>

                <h3 className="mt-6 text-xl font-semibold text-ink-900">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{service.summary}</p>

                <ul className="mt-7 space-y-3 border-t border-ink-100 pt-7">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-ink-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors hover:text-brand-600"
                >
                  Enquire about this service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
