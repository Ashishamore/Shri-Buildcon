import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { EXPERIENCE_SINCE, company } from "../data/site"

export default function About() {
  return (
    <section id="about" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <SectionHeading eyebrow="About the firm" title="One firm, from land to finished structure." />

          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink-500">
            <p>
              {company.legalName} is a civil contracting, building and land development firm based
              at Pisadevi, Chhatrapati Sambhajinagar. It is led by Pradip Kale, a civil engineer who
              has worked on construction sites since {EXPERIENCE_SINCE}.
            </p>
            <p>
              The firm operates across four areas: land acquisition and plotted development,
              industrial civil works, civil infrastructure for solar power plants as an approved
              vendor to Megh Engineering Ltd., Hyderabad, and government contracting as a
              registered contractor.
            </p>
            <p>
              Land, statutory approvals, structural work and site infrastructure are handled by the
              same team, so a single firm stays accountable from the first site assessment through
              to handover. We mobilise our own engineers and supervisors to site, wherever the
              project is located.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
