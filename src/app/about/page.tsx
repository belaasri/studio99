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

export default function AboutPage() {
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
                <NavLink href="#">Privacy Policy</NavLink>
                <NavLink href="#">Terms & Conditions</NavLink>
                <NavLink href="#">Contact Us</NavLink>
            </nav>
            <Button variant="outline">Thanks Me</Button>
        </header>
        <main className="flex flex-1 flex-col items-center p-4 md:p-6">
            <section className="w-full max-w-4xl py-12 md:py-20">
            <Card>
                <CardContent className="p-8 text-left">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h1>
                <p className="mt-4 text-gray-600">Welcome to ThumbnailDown</p>
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
        </div>
    );
}
