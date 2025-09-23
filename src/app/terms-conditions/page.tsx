import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const YoutubeIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto text-red-600"
      fill="currentColor"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
  
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-sm text-gray-600 hover:text-gray-900">
      {children}
    </a>
  );

export default function TermsConditionsPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-gray-50">
            <header className="flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-8">
                <div className="flex items-center gap-2">
                <YoutubeIcon />
                <span className="text-xl font-bold">ThumbnailDown</span>
                </div>
                <nav className="hidden items-center gap-6 md:flex">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/privacy-policy">Privacy Policy</NavLink>
                    <NavLink href="/terms-conditions">Terms & Conditions</NavLink>
                    <NavLink href="#">Contact Us</NavLink>
                </nav>
                <Button variant="outline">Thanks Me</Button>
            </header>
            <main className="flex flex-1 flex-col items-center p-4 md:p-6">
                <section className="w-full max-w-4xl py-12 md:py-20">
                <Card>
                    <CardContent className="p-8 text-left">
                    <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Terms & Conditions</h1>
                    <p className="mt-4 text-sm text-gray-500">Effective Date: September 20, 2024</p>
                    <p className="mt-1 text-sm text-gray-500">Last Updated: September 20, 2024</p>
                    
                    <h2 className="mt-6 text-2xl font-bold">Acceptance of Terms</h2>
                    <p className="mt-2 text-gray-600">
                        By accessing and using ThumbnailDown, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our service.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold">Description of Service</h2>
                    <p className="mt-2 text-gray-600">
                        Our website provides a thumbnail downloading service that allows users to extract thumbnail images from various online platforms. The service is provided "as is" and for legitimate purposes only.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold">Acceptable Use</h2>
                    <p className="mt-2 text-gray-600"><span className='font-bold'>You May Use Our Service To:</span></p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                        <li>Download thumbnails for research and analysis</li>
                        <li>Access images for legitimate fair use purposes</li>
                        <li>Obtain thumbnails for educational projects</li>
                        <li>Extract images for personal, non-commercial use</li>
                    </ul>
                    <p className="mt-4 text-gray-600"><span className='font-bold'>You May NOT Use Our Service To:</span></p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe on intellectual property rights</li>
                        <li>Download content for commercial redistribution without permission</li>
                        <li>Attempt to harm or compromise our website security</li>
                        <li>Use automated tools to overload our servers</li>
                        <li>Upload malicious content or URLs</li>
                    </ul>

                    <h2 className="mt-6 text-2xl font-bold">Intellectual Property</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                        <li>All content on our website is protected by copyright and other intellectual property laws</li>
                        <li>Downloaded thumbnails remain subject to their original copyright terms</li>
                        <li>Users are responsible for ensuring their use complies with applicable copyright laws</li>
                        <li>We respect intellectual property rights and respond to valid DMCA notices</li>
                    </ul>

                    <h2 className="mt-6 text-2xl font-bold">Disclaimers</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                        <li>Our service is provided "as is" without warranties of any kind</li>
                        <li>We do not guarantee the availability, accuracy, or quality of downloaded content</li>
                        <li>We are not responsible for the content of external websites or platforms</li>
                        <li>We do not endorse or take responsibility for user-generated content</li>
                    </ul>

                    <h2 className="mt-6 text-2xl font-bold">Limitation of Liability</h2>
                    <p className="mt-2 text-gray-600">
                        To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our service.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold">Privacy</h2>
                    <p className="mt-2 text-gray-600">
                        Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
                    </p>
                    
                    <h2 className="mt-6 text-2xl font-bold">Modifications</h2>
                    <p className="mt-2 text-gray-600">
                        We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website.
                    </p>
                    
                    <h2 className="mt-6 text-2xl font-bold">Termination</h2>
                    <p className="mt-2 text-gray-600">
                        We may terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these Terms & Conditions.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold">Governing Law</h2>
                    <p className="mt-2 text-gray-600">
                        These Terms & Conditions are governed by the laws of your local jurisdiction without regard to conflict of law principles.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold">Contact Information</h2>
                    <p className="mt-2 text-gray-600">
                        For questions about these Terms & Conditions, please contact us at nwork1944@gmail.com.
                    </p>
                    </CardContent>
                </Card>
                </section>
            </main>
        </div>
    );
}
