import { ArrowRight, MessageCircle } from "lucide-react"
import PhotoStrip from "./PhotoStrip"
import { company, credentials, whatsappLink, yearsOfExperience } from "../data/site"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 pt-32 pb-16 sm:pt-40">
      <div className="bp-grid fade-edges absolute inset-0" aria-hidden="true" />

      <div className="relative">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.14em] text-ink-400 uppercase">
            <span className="h-1 w-1 rounded-full bg-brand-400" />
            Chhatrapati Sambhajinagar · Maharashtra
          </span>

          <h1 className="mt-6 text-4xl leading-[1.12] font-semibold text-balance text-white sm:text-5xl">
            Civil construction and land development.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-300">
            {company.legalName} executes industrial civil works, solar plant infrastructure and
            government contracts, and develops land for residential and commercial use. The firm
            is led by a civil engineer with {yearsOfExperience} years on site, and every project is
            supervised by our own engineers.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              Request a site visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappLink(
                `I would like to discuss a project with ${company.name}. (Sent from your website)`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-2.5">
            {credentials.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink-400">
                <span className="h-1 w-1 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <PhotoStrip />
      </div>
    </section>
  )
}
