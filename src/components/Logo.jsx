import logoColour from "../assets/logo.png"
import logoOnDark from "../assets/logo-on-dark.png"
import { company } from "../data/site"
import { useLanguage } from "../i18n/context"

/**
 * Logo lockup, set to the supplied artwork: SHREE bold in orange, BUILDCON
 * light in blue, a rule beneath, then the descriptor line spaced out to match.
 *
 * `tone` describes the surface it sits on. On a dark ground the mark's blue and
 * the blue half of the wordmark both read as white; on a light one they show in
 * full colour. The two marks are stacked and cross-faded, so the colour comes
 * up as the header turns solid on scroll.
 */
export default function Logo({ tone = "light", showTagline = true, className = "" }) {
  const { t } = useLanguage()
  const onDark = tone === "dark"

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="relative block aspect-393/512 h-11 shrink-0">
        <img
          src={logoColour}
          alt={`${company.name} logo`}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
            onDark ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={logoOnDark}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
            onDark ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>

      <span className="flex flex-col items-stretch leading-none">
        <span className="text-xl tracking-tight uppercase sm:text-2xl">
          <span className="font-wordmark font-bold text-logo-orange">{company.wordmark.bold}</span>
          <span
            className={`font-wordmark-light font-light transition-colors duration-500 ${
              onDark ? "text-white" : "text-logo-blue"
            }`}
          >
            {company.wordmark.light}
          </span>
        </span>

        {showTagline && (
          <>
            <span
              aria-hidden="true"
              className={`mt-1.5 block h-px w-full transition-colors duration-500 ${
                onDark ? "bg-white/35" : "bg-ink-400"
              }`}
            />
            <span
              className={`mt-1.5 block text-center text-[9px] font-medium tracking-[0.3em] uppercase transition-colors duration-500 ${
                onDark ? "text-ink-300" : "text-ink-700"
              }`}
            >
              {t.tagline}
            </span>
          </>
        )}
      </span>
    </span>
  )
}
