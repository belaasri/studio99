
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'es', 'fr', 'ja', 'ko', 'ar', 'cs', 'el', 'fa', 'hi', 'hu', 'id', 'it', 'ms', 'nl', 'pl', 'pt', 'ro', 'ru', 'sr', 'sv', 'th', 'tr', 'vi', 'zh'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
