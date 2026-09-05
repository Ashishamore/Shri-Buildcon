import { createContext, useContext } from "react"
import en from "./en"
import mr from "./mr"
import hi from "./hi"

export const locales = { en, mr, hi }
export const localeList = [en, mr, hi]
export const STORAGE_KEY = "shreebuildcon-lang"

export const LanguageContext = createContext(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside a LanguageProvider")
  return context
}
