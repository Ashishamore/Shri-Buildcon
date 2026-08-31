import Reveal from "./Reveal"

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className = "",
}) {
  const onDark = tone === "dark"

  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase ${
            align === "center" ? "justify-center" : ""
          } ${onDark ? "text-brand-400" : "text-brand-600"}`}
        >
          <span className="h-px w-6 bg-current opacity-40" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-semibold text-balance sm:text-4xl ${
          onDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            onDark ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
