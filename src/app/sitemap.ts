import { MetadataRoute } from 'next';
import { i18n } from './i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.savethumb.com';

  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' },
  ] as const;

  const sitemapEntries: MetadataRoute.Sitemap = i18n.locales.flatMap((locale) => {
    return pages.map((page) => ({
      url: `${baseUrl}/${locale}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
  });

  return sitemapEntries;
}
