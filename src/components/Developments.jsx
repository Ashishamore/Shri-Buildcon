import { Download, MapPin, MessageCircle } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { fill, whatsappLink } from "../data/site"
import { useLanguage } from "../i18n/context"

export default function Developments() {
  const { t, content } = useLanguage()

  return (
    <section id="developments" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.developments.eyebrow}
          title={t.developments.title}
          description={t.developments.description}
          align="center"
        />

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {content.developments.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Large artwork — alternates side on wide screens */}
              <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.type}`}
                  loading="lazy"
                  className="w-full rounded-2xl border border-sand-200 bg-white shadow-lg"
                />
                {project.strip && (
                  <img
                    src={project.strip}
                    alt={`${project.name} — ${project.type}`}
                    loading="lazy"
                    className="mt-4 w-full rounded-xl border border-sand-200 bg-white"
                  />
                )}
              </Reveal>

              <Reveal delay={120}>
                <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {project.status}
                </span>

                <h3 className="mt-5 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-lg text-brand-700">{project.type}</p>

                <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-ink-500">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" strokeWidth={2} />
                  {project.location}
                </p>

                <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-600">
                  {project.summary}
                </p>

                <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-sand-200 pt-8 sm:grid-cols-2">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 font-medium text-ink-800">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-8 grid gap-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {project.credits && <p className="mt-6 text-sm text-ink-400">{project.credits}</p>}
                {project.note && <p className="mt-2 text-sm text-ink-400">{project.note}</p>}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.brochure}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
                  >
                    <Download className="h-4 w-4" />
                    {t.developments.download}
                  </a>
                  <a
                    href={whatsappLink(
                      fill(t.whatsapp.projectMessage, { project: project.name }),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 px-6 py-3.5 text-sm font-semibold text-ink-800 transition hover:border-ink-400 hover:bg-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.developments.enquire}
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
