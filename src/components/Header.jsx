import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import Logo from "./Logo"
import LanguageSwitcher from "./LanguageSwitcher"
import { company } from "../data/site"
import { useLanguage } from "../i18n/context"

export default function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // The bar is transparent over the dark hero and turns solid once you scroll.
  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-ink-100 bg-white/90 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${company.name} — home`}>
          {/* White over the dark hero; full colour once the bar turns solid */}
          <Logo tone={solid ? "light" : "dark"} />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-ink-600 hover:text-brand-600" : "text-ink-200 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher tone={solid ? "light" : "dark"} />
          <a
            href={company.phoneHref}
            className={`hidden items-center gap-2 text-sm font-semibold transition-colors xl:flex ${
              solid ? "text-ink-800 hover:text-brand-600" : "text-white hover:text-brand-300"
            }`}
          >
            <Phone className="h-4 w-4" strokeWidth={2.2} />
            {company.phoneDisplay}
          </a>
          <a
            href="#contact"
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition ${
              solid
                ? "bg-ink-900 text-white hover:bg-ink-800"
                : "bg-white text-ink-950 hover:bg-ink-100"
            }`}
          >
            {t.header.quote}
          </a>
        </div>

        {/* The dropdown carries full language names, so on phones it lives in
            the menu panel rather than crowding the bar. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.gallery.close : t.header.languageLabel}
          className={`rounded-lg p-2 transition lg:hidden ${
            solid ? "text-ink-800 hover:bg-ink-50" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-50 py-3.5 text-base font-medium text-ink-700 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <LanguageSwitcher tone="light" />
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-ink-200 py-3 text-sm font-semibold text-ink-800"
              >
                <Phone className="h-4 w-4" />
                {company.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-ink-900 py-3 text-center text-sm font-semibold text-white"
              >
                {t.header.quote}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
