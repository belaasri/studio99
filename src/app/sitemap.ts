import { MetadataRoute } from 'next';
import { i18n } from '../i18n-config';

const URL = 'https://www.savethumb.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/privacy-policy', '/terms-conditions'].flatMap((route) =>
    i18n.locales.map((locale) => ({
      url: `${URL}/${locale}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as 'monthly',
      priority: route === '' ? 1 : 0.8,
    }))
  );

  return routes;
}
