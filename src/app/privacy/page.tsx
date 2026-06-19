import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Alpha Mates',
  description: 'Our privacy policy and data handling practices for Alpha Mates.',
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <p className="mb-8 text-sm text-zinc-500">Last updated: October 2024</p>

          <div className="backdrop-glass space-y-6 rounded-2xl p-6 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Introduction
              </h2>
              <p>
                This is a demo privacy policy page. Replace this content with your actual privacy
                policy that complies with GDPR, CCPA, and other applicable regulations.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Information We Collect
              </h2>
              <p>
                Describe what information you collect from users, how you collect it, and why.
                Include details about cookies, analytics, and any third-party services.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                How We Use Your Information
              </h2>
              <p>
                Explain how you use the collected data, who has access to it, and how long you
                retain it.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Your Rights
              </h2>
              <p>
                Detail users&apos; rights regarding their data, including the right to access, correct,
                delete, and port their data.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Contact Us
              </h2>
              <p>
                For privacy-related inquiries, contact us at{' '}
                <a href="mailto:alphamates.inc@gmail.com" className="text-brand-600 hover:underline dark:text-brand-400">
                  alphamates.inc@gmail.com
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
