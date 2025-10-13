// studio99/src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { i18n } from '../i18n-config'; // ensure this path is correct

const URL = 'https://www.savethumb.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // routes: '' -> /{locale}, '/about' -> /{locale}/about, etc.
  const pages = ['', '/about', '/contact', '/privacy-policy', '/terms-conditions'];

  const routes: MetadataRoute.Sitemap = pages.flatMap((route) =>
    i18n.locales.map((locale) => {
      const path = `${URL}/${locale}${route}`; // ex: https://www.savethumb.com/fr/about
      return {
        url: path,
        lastModified: now,
        changefreq: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      } as unknown as MetadataRoute.SitemapItem;
    })
  );

  return routes;
}
