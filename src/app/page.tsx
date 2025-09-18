import { VidSyncPortal } from '@/components/vid-sync-portal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Link, Download, ClipboardPaste } from 'lucide-react';

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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-8">
        <div className="flex items-center gap-2">
          <YoutubeIcon />
          <span className="text-xl font-bold">ThumbnailDown</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Privacy Policy</NavLink>
          <NavLink href="#">Terms & Conditions</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </nav>
        <Button variant="outline">Thanks Me</Button>
      </header>

      <main className="flex flex-1 flex-col items-center p-4 text-center md:p-6">
        <section className="w-full max-w-4xl py-12 md:py-20">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            YouTube Thumbnail Downloader
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Paste any YouTube, Vimeo, or Dailymotion URL to instantly download
            hd video thumbnail no signup, no ads, 100% free.
          </p>
          <VidSyncPortal />
        </section>

        <section className="w-full max-w-5xl py-12 md:py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Download YouTube Video Thumbnail in HD (Simple Steps)
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-lg bg-blue-100 p-3">
                  <Copy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Copy the YouTube Video URL</h3>
                <p className="text-sm text-gray-600">
                  Open the YouTube video whose thumbnail you want to download and copy its URL from the browser&apos;s address bar.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-lg bg-blue-100 p-3">
                  <ClipboardPaste className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Paste the URL and Fetch Thumbnails</h3>
                <p className="text-sm text-gray-600">
                  Paste the copied URL into the input box on this page and click &quot;Get Thumbnail&quot; to retrieve all available thumbnail images.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-lg bg-blue-100 p-3">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Preview and Download Your Thumbnail</h3>
                <p className="text-sm text-gray-600">
                  Select the desired resolution, then preview or download the thumbnail instantly with a single click.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20">
          <Card className="border-t-4 border-red-500">
            <CardContent className="p-8 text-left">
              <h2 className="text-2xl font-bold">About ThumbnailDown</h2>
              <p className="mt-4 text-gray-600">
                ThumbnailDown is a free and super easy tool to download YouTube thumbnail in high resolution. No signups, no ads just instant access to the thumbnails you need.
              </p>
              <h3 className="mt-6 text-xl font-bold">Why We Built It</h3>
              <p className="mt-2 text-gray-600">
                We believe that creators and marketers should have easy access to their video assets. ThumbnailDown was built to provide a simple, fast, and free way to grab thumbnails for your projects, presentations, or social media posts.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
