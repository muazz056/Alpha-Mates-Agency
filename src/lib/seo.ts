import type { Metadata } from 'next';

const title = 'Muaz Ijaz — Full Stack Software Engineer';
const description = 'Full-stack JavaScript & Python development. AI-native chatbots, e-commerce, and platform builds that ship fast and scale reliably.';
const url = 'https://muazijaz.dev';

export const SEO_DEFAULT: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Muaz Ijaz',
    images: [
      { url: '/api/og', width: 1200, height: 630, alt: 'Muaz Ijaz' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/api/og']
  },
  icons: {
    icon: '/favicon.ico',
  }
};


