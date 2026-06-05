import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Process } from '@/components/sections/Process';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process — How We Work',
  description:
    'From discovery to launch: a proven development process with clear milestones, weekly demos, and no surprises.',
};

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">How We Work</h1>
          <p className="mb-12 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            A transparent, collaborative process from discovery to launch. Weekly demos, clear
            milestones, and constant communication.
          </p>
        </div>
        <Process />
        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="backdrop-glass rounded-2xl p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Start Your Project?</h2>
            <p className="mb-6 text-zinc-600 dark:text-zinc-300">
              Book a free 30-minute discovery call. We&apos;ll discuss your goals, timeline, and provide
              a clear roadmap.
            </p>
            <a
              href="/contact"
              className="focus-outline inline-block rounded-xl bg-brand-600 px-8 py-4 font-semibold text-white hover:bg-brand-700"
            >
              Book Discovery Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

