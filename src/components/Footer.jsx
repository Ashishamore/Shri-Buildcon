import { MapPin, Phone, Mail } from "lucide-react"
import Logo from "./Logo"
import { company, developments, director, navLinks, services } from "../data/site"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-400">
              Civil contractors, builders and developers at Pisadevi, Chhatrapati
              Sambhajinagar, Maharashtra.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={company.brochureUrl}
                  className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                >
                  Company profile
                </a>
              </li>
              {developments.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.brochure}
                    download
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {project.name} brochure
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="leading-relaxed">{company.address.lines.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a href={company.phoneHref} className="transition-colors hover:text-brand-400">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="text-sm text-ink-500">
            {director.role}: {director.name}, {director.qualification}
          </p>
        </div>
      </div>
    </footer>
  )
}
