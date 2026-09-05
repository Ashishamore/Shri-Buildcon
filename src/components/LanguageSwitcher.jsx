import { ChevronDown, Globe } from "lucide-react"
import { localeList, useLanguage } from "../i18n/context"

/** Language dropdown; shows each language written in itself. */
export default function LanguageSwitcher({ tone = "light", className = "" }) {
  const { lang, setLang, t } = useLanguage()
  const onDark = tone === "dark"

  return (
    <div className={`relative ${className}`}>
      <Globe
        className={`pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 ${
          onDark ? "text-ink-300" : "text-ink-400"
        }`}
        strokeWidth={2}
        aria-hidden="true"
      />

      <select
        value={lang}
        onChange={(event) => setLang(event.target.value)}
        aria-label={t.header.languageLabel}
        className={`w-full cursor-pointer appearance-none rounded-lg border py-2.5 pr-9 pl-9 text-sm font-medium transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none ${
          onDark
            ? "border-white/20 bg-white/5 text-white hover:border-white/40"
            : "border-ink-200 bg-white text-ink-800 hover:border-ink-300"
        }`}
      >
        {localeList.map((locale) => (
          <option key={locale.code} value={locale.code} lang={locale.htmlLang} className="text-ink-900">
            {locale.label}
          </option>
        ))}
      </select>

      <ChevronDown
        className={`pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 ${
          onDark ? "text-ink-300" : "text-ink-400"
        }`}
        strokeWidth={2}
        aria-hidden="true"
      />
    </div>
  )
}
