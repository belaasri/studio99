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

export default function ContactPage() {
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
                    <NavLink href="/contact">Contact Us</NavLink>
                </nav>
            </header>
            <main className="flex flex-1 flex-col items-center p-4 md:p-6">
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
        </div>
    );
}
