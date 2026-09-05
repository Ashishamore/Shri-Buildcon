import { GraduationCap, Handshake, MessageSquare, Scale } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { useLanguage } from "../i18n/context"

const ICONS = {
  handshake: Handshake,
  message: MessageSquare,
  scale: Scale,
  graduation: GraduationCap,
}

export default function Approach() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="bg-sand-50">
      {/* How we work */}
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow={t.approach.eyebrow}
          title={t.approach.title}
          description={t.approach.description}
          align="center"
        />

        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {t.approach.steps.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 90} className="relative lg:pr-6">
              <span
                className="absolute -top-4 left-0 font-display text-6xl font-bold text-ink-900/[0.05]"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <div className="relative">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 font-display text-xs font-bold text-brand-400">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Vision & mission */}
      <div className="relative overflow-hidden bg-ink-950">
        <div className="bp-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -bottom-48 -left-24 h-[30rem] w-[30rem] rounded-full bg-brand-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-400 uppercase">
              {t.approach.visionLabel}
            </p>
            <p className="mt-6 font-display text-2xl leading-snug font-medium text-balance text-white sm:text-3xl">
              {t.approach.vision}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:border-l lg:border-white/10 lg:pl-20">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-400 uppercase">
              {t.approach.missionLabel}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-300">
              {t.approach.mission}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow={t.approach.valuesEyebrow}
          title={t.approach.valuesTitle}
          description={t.approach.valuesDescription}
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.approach.values.map((value, i) => {
            const Icon = ICONS[value.icon]
            return (
              <Reveal
                key={value.title}
                delay={i * 90}
                className="rounded-2xl border border-sand-200 bg-white p-7 transition duration-300 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{value.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
