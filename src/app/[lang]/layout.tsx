
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n-config';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';


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
    <Link href={href} className="text-sm text-gray-600 hover:text-gray-900">
      {children}
    </Link>
  );

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <header className="flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-8">
            <a href={`/${params.lang}`} className="flex items-center gap-2">
            <YoutubeIcon />
            <span className="text-xl font-bold">SaveThumb</span>
            </a>
            <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-6 md:flex">
                    <NavLink href={`/${params.lang}`}>Home</NavLink>
                    <NavLink href={`/${params.lang}/about`}>About Us</NavLink>
                    <NavLink href={`/${params.lang}/privacy-policy`}>Privacy Policy</NavLink>
                    <NavLink href={`/${params.lang}/terms-conditions`}>Terms & Conditions</NavLink>
                    <NavLink href={`/${params.lang}/contact`}>Contact Us</NavLink>
                </nav>
                <LanguageSwitcher />
            </div>
        </header>

        {children}

        <footer className="w-full border-t bg-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <NavLink href={`/${params.lang}`}>Home</NavLink>
                    <NavLink href={`/${params.lang}/about`}>About Us</NavLink>
                    <NavLink href={`/${params.lang}/privacy-policy`}>Privacy Policy</NavLink>
                    <NavLink href={`/${params.lang}/terms-conditions`}>Terms & Conditions</NavLink>
                    <NavLink href={`/${params.lang}/contact`}>Contact Us</NavLink>
                </nav>
                <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} SaveThumb. All rights reserved.
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
