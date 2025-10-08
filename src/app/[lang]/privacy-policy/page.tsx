

import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: 'Privacy Policy - SaveThumb',
    description: 'Read the Privacy Policy for SaveThumb to understand how we handle your data.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicyPage({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    return (
        <main className="flex flex-1 flex-col items-center p-4 md:p-6">
            <section className="w-full max-w-4xl py-12 md:py-20">
            <Card>
                <CardContent className="p-8 text-left">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Privacy Policy</h1>
                <p className="mt-4 text-sm text-gray-500">Effective Date: September 20, 2024</p>
                <p className="mt-1 text-sm text-gray-500">Last Updated: September 20, 2024</p>
                
                <h2 className="mt-6 text-2xl font-bold">Introduction</h2>
                <p className="mt-2 text-gray-600">
                    At SaveThumb, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our thumbnail downloading service.
                </p>

                <h2 className="mt-6 text-2xl font-bold">Information We Collect</h2>
                <h3 className="mt-4 text-xl font-bold">Information You Provide</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>URLs you submit for thumbnail extraction</li>
                    <li>Contact information when you reach out to us</li>
                    <li>Feedback and comments you voluntarily share</li>
                </ul>
                
                <h3 className="mt-4 text-xl font-bold">Automatically Collected Information</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>IP address and general location information</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage patterns and website interaction data</li>
                    <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="mt-6 text-2xl font-bold">How We Use Your Information</h2>
                <p className="mt-2 text-gray-600">We use the collected information to:</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>Provide and improve our thumbnail downloading service</li>
                    <li>Process your download requests</li>
                    <li>Analyze website usage and performance</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Prevent fraud and ensure service security</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2 className="mt-6 text-2xl font-bold">Information Sharing</h2>
                <p className="mt-2 text-gray-600">We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>With service providers who assist in website operations</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                </ul>
                
                <h2 className="mt-6 text-2xl font-bold">Cookies and Tracking</h2>
                <p className="mt-2 text-gray-600">
                    We use cookies and similar technologies to remember your preferences, analyze website traffic and usage, improve user experience, and serve relevant advertisements through Google AdSense. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="mt-6 text-2xl font-bold">Third-Party Services</h2>
                <p className="mt-2 text-gray-600">
                    Our website may contain links to third-party websites or use third-party services (such as Google AdSense). We are not responsible for the privacy practices of these external services.
                </p>

                <h2 className="mt-6 text-2xl font-bold">Data Security</h2>
                <p className="mt-2 text-gray-600">
                    We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
                </p>

                <h2 className="mt-6 text-2xl font-bold">Your Rights</h2>
                <p className="mt-2 text-gray-600">You have the right to:</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of certain communications</li>
                </ul>

                <h2 className="mt-6 text-2xl font-bold">Children's Privacy</h2>
                <p className="mt-2 text-gray-600">
                    Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>

                <h2 className="mt-6 text-2xl font-bold">Changes to This Policy</h2>
                <p className="mt-2 text-gray-600">
                    We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website.
                </p>

                <h2 className="mt-6 text-2xl font-bold">Contact Us</h2>
                <p className="mt-2 text-gray-600">
                    If you have questions about this Privacy Policy, please contact us at nwork1944@gmail.com.
                </p>
                </CardContent>
            </Card>
            </section>
        </main>
    );
}
