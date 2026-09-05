import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { company } from "../data/site"
import { useLanguage } from "../i18n/context"

export default function About() {
  const { t } = useLanguage()
  const [first, ...rest] = t.about.paragraphs

  return (
    <section id="about" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink-500">
            <p>
              <span className="font-semibold text-ink-800">{company.legalName}</span> {first}
            </p>
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
