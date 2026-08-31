import { useState } from "react"
import { Building2, Factory, Layers, Route } from "lucide-react"

/*
 * The photographs are bundled from src/assets/projects/, so they always exist.
 * The panel below is only a safety net if one ever fails to decode.
 */
const CATEGORY = {
  structures: { gradient: "from-ink-600 via-ink-800 to-ink-950", Icon: Factory },
  foundations: { gradient: "from-brand-700/55 via-ink-800 to-ink-950", Icon: Layers },
  roads: { gradient: "from-ink-500/70 via-ink-800 to-ink-950", Icon: Route },
  buildings: { gradient: "from-brand-600/45 via-ink-800 to-ink-950", Icon: Building2 },
}

export default function SitePhoto({
  project,
  className = "",
  caption = true,
  priority = false,
  fit = "cover",
}) {
  const [failed, setFailed] = useState(false)
  const { gradient, Icon } = CATEGORY[project.category] ?? CATEGORY.structures

  // Fall back to the photo's own description until the client confirms where and when.
  const subtitle = [project.location, project.year].filter(Boolean).join(" · ") || project.detail

  return (
    <div
      className={`relative overflow-hidden bg-ink-900 ${
        fit === "contain" ? "flex items-center justify-center" : ""
      } ${className}`}
    >
      {failed ? (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden="true">
          <div className="bp-grid absolute inset-0" />
          <Icon
            className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white/10"
            strokeWidth={1}
          />
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className={
            fit === "contain"
              ? "max-h-[70vh] w-auto max-w-full object-contain"
              : "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        />
      )}

      {caption && (
        <>
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950/90 via-ink-950/45 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-sm font-semibold text-white">{project.title}</p>
            {subtitle && <p className="mt-1 text-xs text-ink-300">{subtitle}</p>}
          </div>
        </>
      )}
    </div>
  )
}
