import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.savethumb.com';
  const locales = ['en', 'fr', 'ar']; // Add your actual locales here
  const pages = ['', '/about', '/contact', '/privacy-policy', '/terms-conditions'];
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  for (const locale of locales) {
    for (const page of pages) {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }
  
  return sitemap;
}
