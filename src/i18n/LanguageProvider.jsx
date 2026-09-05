import { useCallback, useEffect, useMemo, useState } from "react"
import { LanguageContext, STORAGE_KEY, locales } from "./context"
import * as SITE from "../data/site"

/* English unless the visitor has chosen otherwise before. */
function initialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && locales[saved]) return saved
  } catch {
    // private browsing or blocked storage — fall back to the default
  }
  return "en"
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLanguage)
  const t = locales[lang] ?? locales.en

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
  }, [t.htmlLang])

  const setLang = useCallback((next) => {
    if (!locales[next]) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // the choice simply will not persist; the page still switches
    }
  }, [])

  /* Copy is keyed by id in the locale files and joined to the artwork here. */
  const content = useMemo(() => {
    const services = SITE.services.map((service) => ({
      ...service,
      ...t.services.items[service.id],
    }))

    const developments = SITE.developments.map((project) => {
      const copy = t.developments.items[project.id]
      return {
        ...project,
        ...copy,
        views: project.views.map((view) => ({
          ...view,
          fit: view.fit ?? "cover",
          caption: copy.captions[view.key],
        })),
      }
    })

    const heroSlides = developments.flatMap((project) =>
      project.views.map((view) => ({
        id: `${project.id}-${view.key}`,
        src: view.src,
        fit: view.fit,
        caption: view.caption,
        projectId: project.id,
        name: project.name,
        type: project.type,
        status: project.status,
      })),
    )

    const projects = SITE.projects.map((project) => ({
      ...project,
      ...t.gallery.projects[project.id],
    }))

    const categories = SITE.categoryOrder.map((id) => ({ id, label: t.gallery.categories[id] }))

    return { services, developments, heroSlides, projects, categories }
  }, [t])

  const value = useMemo(() => ({ t, lang, setLang, content }), [t, lang, setLang, content])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
