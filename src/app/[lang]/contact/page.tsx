

import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: 'Contact Us - SaveThumb',
    description: 'Get in touch with the SaveThumb team. We are here to help with any questions or feedback.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Contact Us',
        url: `https://www.savethumb.com/${lang}/contact`,
        description: 'Get in touch with the SaveThumb team. We are here to help with any questions or feedback.',
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
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h1>
                <p className="mt-4 text-gray-600">We'd love to hear from you! Whether you have questions, feedback, or need support with our thumbnail downloading service, we're here to help.</p>

                <h2 className="mt-6 text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-gray-600">
                    <strong>Email:</strong> nwork1944@gmail.com <br />
                    <strong>Response Time:</strong> We typically respond within 24-48 hours.
                </p>

                <h2 className="mt-6 text-2xl font-bold">What You Can Contact Us About</h2>
                <h3 className="mt-4 text-xl font-semibold">Technical Support</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>Issues with downloading thumbnails</li>
                    <li>Website functionality problems</li>
                    <li>Error messages or bugs</li>
                    <li>Feature requests and suggestions</li>
                </ul>

                <h3 className="mt-4 text-xl font-semibold">General Inquiries</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>Questions about our service</li>
                    <li>Feedback and suggestions</li>
                    <li>Partnership opportunities</li>
                    <li>Media inquiries</li>
                </ul>

                <h3 className="mt-4 text-xl font-semibold">Legal Matters</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>Copyright concerns (DMCA notices)</li>
                    <li>Privacy policy questions</li>
                    <li>Terms of service clarifications</li>
                    <li>Compliance issues</li>
                </ul>

                <h3 className="mt-4 text-xl font-semibold">Business Inquiries</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>Advertising opportunities</li>
                    <li>Collaboration proposals</li>
                    <li>API access requests</li>
                    <li>Custom solutions</li>
</ul>

                <h2 className="mt-6 text-2xl font-bold">Before You Contact Us</h2>
                <p className="mt-2 text-gray-600">To help us assist you better, please:</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>Provide detailed information about any technical issues</li>
                    <li>Include relevant URLs or error messages</li>
                    <li>Specify your browser and device type for technical problems</li>
                </ul>

                <h2 className="mt-6 text-2xl font-bold">Response Expectations</h2>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>General Inquiries: 24-48 hours</li>
                    <li>Technical Support: 1-3 business days</li>
                    <li>Legal Matters: 3-5 business days</li>
                    <li>Business Inquiries: 3-7 business days</li>
                </ul>

                 <h2 className="mt-6 text-2xl font-bold">Office Hours</h2>
                 <p className="mt-2 text-gray-600">Our support team operates Monday through Friday, 9:00 AM to 6:00 PM (UTC). While we may respond outside these hours, expect faster responses during business hours.</p>

                <h2 className="mt-6 text-2xl font-bold">Feedback and Suggestions</h2>
                <p className="mt-2 text-gray-600">We value your input! If you have ideas for improving our service or new features you'd like to see, please don't hesitate to reach out. Your feedback helps us make our thumbnail downloader better for everyone.</p>
                </CardContent>
            </Card>
            </section>
        </main>
    );
}
