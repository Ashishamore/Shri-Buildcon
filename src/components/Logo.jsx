import { company } from "../data/site"

/**
 * Monogram + wordmark lockup.
 * `tone` describes the surface it sits on, not the mark itself.
 *
 * The mark is a drawn "S" — if the firm name changes, redraw this path and the
 * matching one in public/logo-mark.svg (used as the favicon).
 */
export default function Logo({ tone = "light", showTagline = true, className = "" }) {
  const onDark = tone === "dark"

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label={`${company.name} logo`}
      >
        <rect width="48" height="48" rx="11" fill={onDark ? "#E08C10" : "#111A22"} />
        <path
          d="M30 13A7.5 7.5 0 1 0 24 24.5 7.5 7.5 0 1 1 18 36"
          transform="translate(24 24) scale(0.88) translate(-24 -24)"
          fill="none"
          stroke={onDark ? "#111A22" : "#E08C10"}
          strokeWidth="5.4"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
            onDark ? "text-white" : "text-ink-900"
          }`}
        >
          {company.name}
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[10px] font-semibold tracking-[0.16em] uppercase ${
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
