import { MapPin, Phone, Mail } from "lucide-react"
import Logo from "./Logo"
import { company } from "../data/site"
import { useLanguage } from "../i18n/context"

export default function Footer() {
  const { t, content } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-400">{t.footer.blurb}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.servicesHeading}</h3>
            <ul className="mt-5 space-y-3">
              {content.services.map((service) => (
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
            <h3 className="text-sm font-semibold text-white">{t.footer.companyHeading}</h3>
            <ul className="mt-5 space-y-3">
              {t.nav.map((link) => (
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
                  download={company.brochureFileName}
                  className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                >
                  {t.footer.profileLink}
                </a>
              </li>
              {content.developments.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.brochure}
                    download
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {project.name} {t.footer.brochureSuffix}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.contactHeading}</h3>
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
            &copy; {new Date().getFullYear()} {company.legalName}. {t.footer.rights}
          </p>
          <p className="text-sm text-ink-500">
            {t.leadership.role}: {t.leadership.name}, {t.leadership.qualification}
          </p>
        </div>
      </div>
    </footer>
  )
}
