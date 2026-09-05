import { ArrowRight, MessageCircle } from "lucide-react"
import HeroShowcase from "./HeroShowcase"
import { company, fill, whatsappLink } from "../data/site"
import { useLanguage } from "../i18n/context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 pt-32 pb-24 sm:pt-40 lg:pb-32">
      <div className="bp-grid fade-edges absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.14em] text-ink-400 uppercase">
            <span className="h-1 w-1 rounded-full bg-brand-400" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.12] font-semibold text-balance text-white sm:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-300">
            <span className="font-semibold text-white">{company.legalName}</span> {t.hero.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              {t.hero.visit}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappLink(fill(t.whatsapp.heroMessage, { name: company.name }))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4" />
              {t.hero.whatsapp}
            </a>
          </div>

          <ul className="mt-11 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {t.hero.credentials.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-400">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroShowcase />
      </div>
    </section>
  )
}
