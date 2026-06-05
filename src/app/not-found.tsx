import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex flex-1 items-center">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-3 text-3xl font-bold">Page Not Found</h2>
          <p className="mb-8 text-zinc-600 dark:text-zinc-300">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="focus-outline rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
            >
              Go Home
            </Link>
            <Link
              href="/work"
              className="focus-outline rounded-xl border border-zinc-300 bg-white/60 px-6 py-3 font-semibold hover:bg-white dark:border-white/10 dark:bg-zinc-900/60"
            >
              View Work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
