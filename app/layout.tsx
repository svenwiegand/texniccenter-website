import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TeXnicCenter - Free LaTeX Editor for Windows',
  description: 'TeXnicCenter is a free, open-source integrated development environment for creating LaTeX documents on Windows. Download now and start creating professional documents.',
  generator: 'v0.app',
  keywords: ['LaTeX', 'editor', 'Windows', 'TeXnicCenter', 'open source', 'free', 'document editor', 'scientific writing'],
  authors: [{ name: 'TeXnicCenter Project' }],
  openGraph: {
    title: 'TeXnicCenter - Free LaTeX Editor for Windows',
    description: 'Free and open-source LaTeX editor for Windows. Create professional documents with ease.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TeXnicCenter',
  },
  icons: {
    icon: [
      {
        url: '/apple-icon.png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema for Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'TeXnicCenter',
              operatingSystem: 'Windows',
              applicationCategory: 'DeveloperApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description: 'Free and open-source LaTeX editor for Windows',
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
