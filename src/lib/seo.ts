import type { Metadata } from 'next';

const title = 'Alpha Mates — Full Service Digital Agency';
const description = 'We are Alpha Mates — a team of engineers, designers, and AI specialists building custom software, AI chatbots, and platform solutions that ship fast and scale reliably.';
const url = 'https://alphamates.dev';

export const SEO_DEFAULT: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Alpha Mates',
    images: [
      { url: '/api/og', width: 1200, height: 630, alt: 'Alpha Mates' }
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


