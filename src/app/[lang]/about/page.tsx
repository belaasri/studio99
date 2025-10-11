

import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: 'About Us - SaveThumb',
    description: 'Learn more about SaveThumb, our mission, and the team behind the best YouTube thumbnail downloader.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'About Us',
        url: `https://www.savethumb.com/${lang}/about`,
        description: 'Learn more about SaveThumb, our mission, and the team behind the best YouTube thumbnail downloader.',
      };

    return (
        <main className="flex flex-1 flex-col items-center p-4 md:p-6">
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <section className="w-full max-w-4xl py-12 md:py-20">
            <Card>
                <CardContent className="p-8 text-left">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h1>
                <p className="mt-4 text-gray-600">Welcome to SaveThumb</p>
                <p className="mt-4 text-gray-600">
                    We are a dedicated team passionate about providing users with easy-to-use tools for downloading thumbnails from various online platforms. Our mission is to offer a simple, fast, and reliable service that helps content creators, designers, and digital marketers access high-quality thumbnail images for their projects.
                </p>
                <h2 className="mt-6 text-2xl font-bold">Our Story</h2>
                <p className="mt-2 text-gray-600">
                    Founded in 2024, our website was created to address the growing need for quick and efficient thumbnail downloading solutions. We understand the challenges faced by content creators who need access to thumbnail images for analysis, inspiration, or legitimate use cases.
                </p>
                <h2 className="mt-6 text-2xl font-bold">What We Offer</h2>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>Fast Thumbnail Downloads: Quick and efficient thumbnail extraction from supported platforms</li>
                    <li>User-Friendly Interface: Simple, intuitive design that anyone can use</li>
                    <li>High-Quality Results: Preservation of original image quality whenever possible</li>
                    <li>Free Service: Access to our core features at no cost</li>
                    <li>Safe & Secure: No malware, no harmful downloads, just clean thumbnail files</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold">Our Commitment</h2>
                <p className="mt-2 text-gray-600">We are committed to:</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>Respecting intellectual property rights</li>
                    <li>Providing accurate and helpful service</li>
                    <li>Maintaining user privacy and data security</li>
                    <li>Continuously improving our platform based on user feedback</li>
                    <li>Operating within legal boundaries and platform terms of service</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold">Important Note</h2>
                <p className="mt-2 text-gray-600">
                    Our service is intended for legitimate purposes such as research, analysis, and fair use cases. Users are responsible for ensuring their use of downloaded content complies with applicable copyright laws and platform terms of service.
                </p>
                </CardContent>
            </Card>
            </section>
        </main>
    );
}
