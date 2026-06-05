import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Services } from '@/components/sections/Services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Custom Development, AI Chatbots & Platform Builds',
  description:
    'Full-stack JavaScript & Python development, AI RAG chatbots, Shopify, WordPress, and Wix websites. Production-ready software built for scale.',
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="mb-12 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Full-stack development, AI solutions, and platform builds. We turn ideas into
            production-ready software that scales.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
}

