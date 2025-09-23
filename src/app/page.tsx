
import { VidSyncPortal } from '@/components/vid-sync-portal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Link, Download, ClipboardPaste, Check, CheckSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Downloader - Download HD Video Thumbnails Free Online',
  description: 'Free YouTube Thumbnail Downloader tool - Download HD, 4K quality YouTube video thumbnails instantly. No registration required. Extract thumbnails from any YouTube video in seconds.',
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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-8">
        <a href="/" className="flex items-center gap-2">
          <YoutubeIcon />
          <span className="text-xl font-bold">ThumbnailDown</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/privacy-policy">Privacy Policy</NavLink>
          <NavLink href="/terms-conditions">Terms & Conditions</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center p-4 text-center md:p-6">
        <section className="w-full max-w-4xl py-12 md:py-20">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Free YouTube Thumbnail Downloader
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Download <strong>YouTube thumbnails</strong> instantly with our powerful <strong>YouTube thumbnail downloader</strong>. Extract high-resolution thumbnail images from any YouTube video in HD, 4K, and Full HD quality. Our free online tool requires no software installation - simply paste your YouTube URL and get professional-quality thumbnails in seconds.
          </p>
          <VidSyncPortal />
        </section>

        <section className="w-full max-w-5xl py-12 md:py-16 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            🚀 Why Choose Our YouTube Thumbnail Grabber?
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Feature</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Instant Download</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Get thumbnails in under 3 seconds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Multiple Resolutions</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HD (1280x720), 4K, Full HD options</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">100% Free</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No hidden costs or registration</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">All Devices</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Works on desktop, mobile, and tablets</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Safe & Secure</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HTTPS encrypted, malware-free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">How to Download YouTube Thumbnails - Complete Guide</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Method 1: Using Our YouTube Thumbnail Downloader Tool</h3>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-gray-600">
                <li><strong>Copy the YouTube video URL</strong> from your browser's address bar</li>
                <li><strong>Paste the URL</strong> into our thumbnail downloader input field above</li>
                <li><strong>Select thumbnail quality</strong> (choose from 480p, 720p HD, 1080p Full HD, or 4K)</li>
                <li><strong>Click "Download Thumbnail"</strong> to save the image to your device</li>
                <li><strong>Right-click and save</strong> the thumbnail image in your preferred format</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Method 2: Extract Thumbnails Using Video ID</h3>
              <p className="mt-2 text-gray-600">For advanced users who prefer working with YouTube video IDs:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>Locate the 11-character video ID in the YouTube URL</li>
                <li>Enter the video ID directly into our <strong>YouTube thumbnail extractor</strong></li>
                <li>Choose from multiple thumbnail sizes available</li>
                <li>Download instantly without full URL</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Available Thumbnail Download Formats & Sizes</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Standard YouTube Thumbnail Resolutions</h3>
              <p className="mt-2 text-gray-600">Our <strong>YouTube thumbnail grabber</strong> provides thumbnails in these optimized sizes:</p>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">Small Thumbnails:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li><strong>120x90 pixels</strong> - Default YouTube thumbnail</li>
                    <li><strong>320x180 pixels</strong> - Medium resolution preview</li>
                    <li><strong>480x360 pixels</strong> - Standard definition thumbnail</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">High-Quality Thumbnails:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li><strong>640x480 pixels</strong> - High-definition thumbnail</li>
                    <li><strong>1280x720 pixels</strong> - HD YouTube thumbnail (recommended)</li>
                    <li><strong>1920x1080 pixels</strong> - Full HD thumbnail download</li>
                    <li><strong>3840x2160 pixels</strong> - 4K ultra-high definition (when available)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Supported Image Formats</h3>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li><strong>JPEG</strong> - Best for photographs and complex images</li>
                <li><strong>PNG</strong> - Perfect for graphics with transparency</li>
                <li><strong>WebP</strong> - Modern format with smaller file sizes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Advanced Features of Our YouTube Thumbnail Downloader</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Bulk Thumbnail Download Capabilities</h3>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li><strong>Batch processing</strong> - Download multiple thumbnails simultaneously</li>
                <li><strong>Playlist support</strong> - Extract thumbnails from entire YouTube playlists</li>
                <li><strong>Channel thumbnails</strong> - Download all thumbnails from a YouTube channel</li>
                <li><strong>YouTube Shorts</strong> - Specialized support for vertical video thumbnails</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Professional Tools for Content Creators</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">For Video Marketers:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Analyze competitor thumbnail strategies</li>
                    <li>Create thumbnail mood boards and inspiration collections</li>
                    <li>Study trending designs in your niche</li>
                    <li>Build comprehensive thumbnail libraries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">For Graphic Designers:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Source high-quality reference images</li>
                    <li>Create custom thumbnail templates</li>
                    <li>Develop client presentation materials</li>
                    <li>Build design portfolios with video marketing examples</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">SEO Benefits and Use Cases</h2>
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold">Legitimate Uses for Downloaded YouTube Thumbnails</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-xl font-semibold">Educational and Research Purposes:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Academic studies on video marketing trends</li>
                  <li>Media literacy and digital communication courses</li>
                  <li>Research papers on social media engagement</li>
                  <li>Educational presentations about video content</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Professional Applications:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Client case studies and portfolio development</li>
                  <li>Competitive analysis and market research</li>
                  <li>Design inspiration and creative brainstorming</li>
                  <li>Training materials for digital marketing teams</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Fair Use Guidelines:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Always respect copyright and intellectual property rights</li>
                  <li>Use thumbnails for commentary, criticism, or educational purposes</li>
                  <li>Provide proper attribution when sharing or presenting</li>
                  <li>Comply with YouTube's Terms of Service and community guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl py-12 md:py-16 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Technical Specifications and Browser Compatibility</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">System Requirements</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Requirement</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Internet Connection</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Broadband recommended for 4K downloads</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Browser Compatibility</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Chrome 60+, Firefox 55+, Safari 12+, Edge 79+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Device Support</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Windows, macOS, Linux, Android, iOS</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Storage Space</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Varies by thumbnail resolution (100KB - 2MB per image)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">API Integration Options</h3>
              <p className="mt-2 text-gray-600">For developers and businesses requiring automated thumbnail downloads:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li><strong>REST API</strong> endpoints for programmatic access</li>
                <li><strong>Webhook integration</strong> for real-time thumbnail extraction</li>
                <li><strong>Batch processing APIs</strong> for high-volume requirements</li>
                <li><strong>Custom enterprise solutions</strong> with dedicated support</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500 italic">Learn more about our API documentation and enterprise plans on our <a href="#" className="text-blue-600 hover:underline">[Developer Resources](/api-documentation)</a> page.</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Frequently Asked Questions About YouTube Thumbnail Downloads</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Is downloading YouTube thumbnails legal?</h3>
              <p className="mt-2 text-gray-600"><strong>Yes</strong>, downloading YouTube thumbnails is generally legal when used for legitimate purposes such as:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>Educational research and academic studies</li>
                  <li>Fair use commentary and criticism</li>
                  <li>Personal reference and inspiration</li>
                  <li>Non-commercial analysis and review</li>
              </ul>
              <p className="mt-2 text-gray-600">Always ensure compliance with copyright laws and YouTube's Terms of Service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What's the highest quality thumbnail I can download?</h3>
              <p className="mt-2 text-gray-600">The maximum resolution depends on the original video upload quality. Our <strong>YouTube thumbnail downloader</strong> can extract:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>Up to <strong>4K resolution (3840x2160)</strong> for videos uploaded in 4K</li>
                  <li><strong>Full HD (1920x1080)</strong> for most high-quality videos</li>
                  <li><strong>HD (1280x720)</strong> as the standard high-quality option</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Do I need to create an account to use the thumbnail downloader?</h3>
              <p className="mt-2 text-gray-600"><strong>No registration required!</strong> Our free <strong>YouTube thumbnail grabber</strong> works immediately without:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>Account creation or login</li>
                  <li>Email verification</li>
                  <li>Personal information collection</li>
                  <li>Payment or subscription</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Can I download thumbnails from YouTube Shorts?</h3>
              <p className="mt-2 text-gray-600"><strong>Absolutely!</strong> Our tool fully supports:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>YouTube Shorts vertical thumbnails</li>
                  <li>Live stream preview images</li>
                  <li>YouTube Music video thumbnails</li>
                  <li>Standard YouTube video thumbnails</li>
                  <li>Community post images</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How fast is the thumbnail extraction process?</h3>
              <p className="mt-2 text-gray-600">Our <strong>YouTube thumbnail extractor</strong> delivers results in:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li><strong>1-3 seconds</strong> for standard HD thumbnails</li>
                  <li><strong>3-5 seconds</strong> for 4K ultra-high definition</li>
                  <li><strong>5-10 seconds</strong> for batch downloads</li>
                  <li><strong>Instant preview</strong> before downloading</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Tips for Using Downloaded YouTube Thumbnails Effectively</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Best Practices for Content Creators</h3>
              <div className="mt-4 space-y-4">
                  <h4 className="text-xl font-semibold">Design Inspiration Workflow:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>Collect thumbnails from successful videos in your niche</li>
                    <li>Analyze common design elements, colors, and layouts</li>
                    <li>Identify trending typography and graphic styles</li>
                    <li>Create mood boards organized by topic or style</li>
                    <li>Develop your unique thumbnail aesthetic based on research</li>
                  </ol>
              </div>
              <div className="mt-4 space-y-4">
                  <h4 className="text-xl font-semibold">Competitive Analysis Strategy:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>Download thumbnails from top-performing competitors</li>
                    <li>Study their visual branding and consistency</li>
                    <li>Analyze thumbnail evolution over time</li>
                    <li>Identify gaps in their visual approach</li>
                    <li>Develop differentiated thumbnail strategies</li>
                  </ol>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Optimizing Thumbnail Usage for Different Platforms</h3>
              <div className="mt-4 space-y-4">
                <h4 className="text-xl font-semibold">Social Media Adaptation:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li><strong>Instagram Posts</strong> - Crop to square (1:1) aspect ratio</li>
                  <li><strong>Twitter Cards</strong> - Resize to 1200x628 pixels</li>
                  <li><strong>Facebook Shares</strong> - Optimize for 1200x630 dimensions</li>
                  <li><strong>LinkedIn Articles</strong> - Use 1200x627 pixel format</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Related Tools and Resources</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Complementary YouTube Tools</h3>
              <p className="mt-2 text-gray-600">Enhance your YouTube content strategy with these additional resources:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li><a href="#" className="text-blue-600 hover:underline">[YouTube Title Generator](/youtube-title-generator)</a> - Create engaging video titles</li>
                <li><a href="#" className="text-blue-600 hover:underline">[YouTube Description Template](/youtube-description-template)</a> - Optimize video descriptions</li>
                <li><a href="#" className="text-blue-600 hover:underline">[YouTube Tag Generator](/youtube-tag-generator)</a> - Find relevant video tags</li>
                <li><a href="#" className="text-blue-600 hover:underline">[YouTube Analytics Tool](/youtube-analytics)</a> - Track performance metrics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">External Resources for Video Marketing</h3>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li><a href="https://creatoracademy.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube Creator Academy</a> - Official YouTube education platform</li>
                <li><a href="https://trends.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Trends</a> - Research trending video topics</li>
                <li><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Canva</a> - Create custom thumbnails and graphics</li>
                <li><a href="https://color.adobe.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Adobe Color</a> - Extract color palettes from thumbnails</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">Get Started with Free YouTube Thumbnail Downloads</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Quick Start Checklist:</h3>
              <ul className="space-y-2 mt-2 text-gray-600">
                <li className="flex items-center"><CheckSquare className="h-5 w-5 mr-2 text-green-500" /> Find the YouTube video with the thumbnail you want</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 mr-2 text-green-500" /> Copy the complete video URL from your browser</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 mr-2 text-green-500" /> Paste the URL into our thumbnail downloader tool above</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 mr-2 text-green-500" /> Select your preferred image quality and format</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 mr-2 text-green-500" /> Click download and save the thumbnail to your device</li>
              </ul>
            </div>
             <div>
              <h3 className="text-2xl font-semibold">Pro Tips for Maximum Results:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li><strong>Choose HD quality</strong> for professional presentations</li>
                <li><strong>Download multiple sizes</strong> for different use cases</li>
                <li><strong>Organize downloads</strong> in folders by project or topic</li>
                <li><strong>Respect copyright</strong> and use thumbnails ethically</li>
                <li><strong>Credit sources</strong> when sharing or presenting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl py-12 md:py-20 text-center">
            <p className="font-semibold">Start downloading high-quality YouTube thumbnails now! Use our trusted <strong>YouTube thumbnail grabber</strong> to extract professional-grade thumbnail images from any YouTube video. Join thousands of content creators, designers, and marketers who rely on our free tool for their thumbnail download needs.</p>
        </section>

        <footer className="w-full max-w-4xl py-6 text-center text-xs text-gray-500">
          <p>
            *This YouTube Thumbnail Downloader tool is provided for educational and research purposes. Users are responsible for ensuring their use of downloaded content complies with applicable copyright laws and platform terms of service.*
          </p>
        </footer>

      </main>
    </div>
  );
}

    