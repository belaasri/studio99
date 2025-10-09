
import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
  ko: () => import('./dictionaries/ko.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
  cs: () => import('./dictionaries/cs.json').then((module) => module.default),
  el: () => import('./dictionaries/el.json').then((module) => module.default),
  fa: () => import('./dictionaries/fa.json').then((module) => module.default),
  hi: () => import('./dictionaries/hi.json').then((module) => module.default),
  hu: () => import('./dictionaries/hu.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
  ms: () => import('./dictionaries/ms.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
  ro: () => import('./dictionaries/ro.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  sr: () => import('./dictionaries/sr.json').then((module) => module.default),
  sv: () => import('./dictionaries/sv.json').then((module) => module.default),
  th: () => import('./dictionaries/th.json').then((module) => module.default),
  tr: () => import('./dictionaries/tr.json').then((module) => module.default),
  vi: () => import('./dictionaries/vi.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
