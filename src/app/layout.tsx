import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sensitive — Privacy-First Content Blocker for Chrome',
  description:
    'Sensitive is a free Chrome extension that blocks explicit content using AI detection, a PIN-protected bypass, and positive alternatives. Install in under 2 minutes.',
  keywords: ['content blocker', 'chrome extension', 'explicit content filter', 'privacy', 'parental control', 'NSFW blocker'],
  openGraph: {
    title: 'Sensitive — Privacy-First Content Blocker',
    description: 'Block explicit content with AI. Pin-protected. Zero data collected.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
