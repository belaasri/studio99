
import {-createWriteStream } from 'fs';
import {-Readable } from 'stream';
import {-pipeline } from 'stream/promises';
import {-SitemapStream } from 'sitemap';

// Locales
const locales = ['en', 'es', 'fr', 'ja', 'ko', 'ar', 'cs', 'el', 'fa', 'hi', 'hu', 'id', 'it', 'ms', 'nl', 'pl', 'pt', 'ro', 'ru', 'sr', 'sv', 'th', 'tr', 'vi', 'zh'];

// Base URL
const baseUrl = 'https://www.savethumb.com';

// Pages to include
const pages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact', priority: 0.5, changefreq: 'yearly' },
  { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms-conditions', priority: 0.3, changefreq: 'yearly' },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream('./public/sitemap.xml');

  const sitemapLinks = [];

  locales.forEach(locale => {
    pages.forEach(page => {
      sitemapLinks.push({
        url: `/${locale}${page.url === '/' ? '' : page.url}`,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    });
  });

  console.log('Generating sitemap with the following links:');
  console.log(sitemapLinks);

  await pipeline(
    Readable.from(sitemapLinks),
    stream,
    writeStream
  );

  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
