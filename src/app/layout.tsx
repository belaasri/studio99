
import type { Metadata, ResolvingMetadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { i18n, type Locale } from '../i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://savethumb.com'),
  title: 'YouTube Thumbnail Downloader - HD, 4K & HQ Image Download',
  description: 'Download YouTube thumbnails instantly in HD, 4K, 1080p and all sizes. Free online tool - no signup, no ads. Just paste video URL and get high-quality thumbnail images in seconds.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full">{children}<Toaster /></body>
    </html>
  );
}
