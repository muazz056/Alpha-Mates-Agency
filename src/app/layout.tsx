import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { SEO_DEFAULT } from '@/lib/seo';
import { PerformanceMonitor } from '@/components/ui/PerformanceMonitor';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Faster font loading
  preload: true,
});

export const metadata: Metadata = SEO_DEFAULT;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} theme-glass min-h-screen`}> 
        <PerformanceMonitor />
        <a href="#main" className="sr-only focus:not-sr-only focus-outline fixed left-2 top-2 z-[100] rounded bg-black px-3 py-2 text-white dark:bg-white dark:text-black">Skip to content</a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


