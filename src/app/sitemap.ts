import { MetadataRoute } from 'next';
import { i18n } from './i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.savethumb.com';

  const pages = ['', '/about', '/contact', '/privacy-policy', '/terms-conditions'];

  const sitemapEntries: MetadataRoute.Sitemap = i18n.locales.flatMap((locale) => {
    return pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }));
  });

  return sitemapEntries;
}
