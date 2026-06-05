import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Muaz Ijaz',
  description: 'Terms and conditions for using the services of Muaz Ijaz.',
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
          <p className="mb-8 text-sm text-zinc-500">Last updated: October 2024</p>

          <div className="backdrop-glass space-y-6 rounded-2xl p-6 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Introduction
              </h2>
              <p>
                This is a demo terms of service page. Replace this content with your actual terms
                that govern the use of your services.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Services
              </h2>
              <p>
                Describe the services you provide, any limitations, and what users can expect when
                working with you.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Payment Terms
              </h2>
              <p>
                Detail your payment terms, including deposits, milestones, refund policies, and
                accepted payment methods.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Intellectual Property
              </h2>
              <p>
                Clarify ownership of deliverables, source code, and any intellectual property
                created during projects.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Liability
              </h2>
              <p>
                Define your liability limitations and what recourse clients have in case of
                disputes or issues.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Contact Us
              </h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href="mailto:legal@example.com" className="text-brand-600 hover:underline dark:text-brand-400">
                  legal@example.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
