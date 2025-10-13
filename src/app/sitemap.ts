// studio99/src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { i18n } from '../i18n-config';

const URL = 'https://www.savethumb.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const pages = ['', '/about', '/contact', '/privacy-policy', '/terms-conditions'];
  
  const routes: MetadataRoute.Sitemap = pages.flatMap((route) =>
    i18n.locales.map((locale) => {
      const path = `${URL}/${locale}${route}`;
      return {
        url: path,
        lastModified: now,
        changeFrequency: (route === '' ? 'daily' : 'monthly') as 'daily' | 'monthly',
        priority: route === '' ? 1 : 0.8,
      };
    })
  );
  
  return routes;
}
