import logoColour from "../assets/logo.png"
import logoOnDark from "../assets/logo-on-dark.png"
import { company } from "../data/site"

/**
 * Logo lockup: the firm's mark beside the wordmark.
 *
 * `tone` describes the surface it sits on. On a dark surface the mark's blue
 * reads as white; on a light one it shows in full colour. Both are stacked and
 * cross-faded, so the colour comes up as the header turns solid on scroll.
 */
export default function Logo({ tone = "light", showTagline = true, className = "" }) {
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

      <span className="flex flex-col leading-none">
        <span
          className={`text-xl tracking-wide uppercase sm:text-2xl ${
            onDark ? "text-white" : "text-ink-900"
          }`}
        >
          <span className="font-wordmark font-bold">{company.wordmark.bold}</span>
          <span className="font-wordmark-light font-light">{company.wordmark.light}</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase ${
              onDark ? "text-brand-300" : "text-ink-400"
            }`}
          >
            {company.tagline}
          </span>
        )}
      </span>
    </span>
  )
}
