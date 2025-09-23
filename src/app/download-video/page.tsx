
import { VideoDownloader } from '@/components/video-downloader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import type { Metadata } from 'next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const metadata: Metadata = {
  title: 'YouTube Video Downloader - Download Videos Free',
  description: 'Download YouTube videos in various formats and resolutions. Free and easy-to-use video downloader.',
};

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

export default function DownloadVideoPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-8">
        <a href="/" className="flex items-center gap-2">
          <YoutubeIcon />
          <span className="text-xl font-bold">ThumbnailDown</span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/download-video">Download Video</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/privacy-policy">Privacy Policy</NavLink>
            <NavLink href="/terms-conditions">Terms & Conditions</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Italian</DropdownMenuItem>
              <DropdownMenuItem>Portuguese</DropdownMenuItem>
              <DropdownMenuItem>Russian</DropdownMenuItem>
              <DropdownMenuItem>Arabic</DropdownMenuItem>
              <DropdownMenuItem>Chinese (Simplified)</DropdownMenuItem>
              <DropdownMenuItem>Japanese</DropdownMenuItem>
              <DropdownMenuItem>Korean</DropdownMenuItem>
              <DropdownMenuItem>Hindi</DropdownMenuItem>
              <DropdownMenuItem>Turkish</DropdownMenuItem>
              <DropdownMenuItem>Polish</DropdownMenuItem>
              <DropdownMenuItem>Dutch</DropdownMenuItem>
              <DropdownMenuItem>Swedish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center p-4 text-center md:p-6">
        <section className="w-full max-w-4xl pt-12 pb-6 md:pt-20">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            YouTube Video Downloader
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Download your favorite YouTube videos in various formats and resolutions. Fast, free, and easy to use.
          </p>
          <VideoDownloader />
        </section>
      </main>
      <footer className="w-full border-t bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/download-video">Download Video</NavLink>
                <NavLink href="/about">About Us</NavLink>
                <NavLink href="/privacy-policy">Privacy Policy</NavLink>
                <NavLink href="/terms-conditions">Terms & Conditions</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
            </nav>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} ThumbnailDown. All rights reserved.
              </p>
               <p className="mt-2 text-xs text-gray-500">
                This YouTube Thumbnail Downloader tool is provided for educational and research purposes. Users are responsible for ensuring their use of downloaded content complies with applicable copyright laws and platform terms of service.
              </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
