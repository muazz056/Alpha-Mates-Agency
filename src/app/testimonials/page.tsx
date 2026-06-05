import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Testimonials } from '@/components/sections/Testimonials';
import { testimonials } from '@/lib/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials — What Our Clients Say',
  description:
    'Read success stories from clients who have worked with us. Real projects, real results, real reviews.',
};

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Client Success Stories</h1>
          <p className="mb-12 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Don&apos;t take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="backdrop-glass rounded-2xl p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-black/10 pt-4 dark:border-white/10">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20">
          <div className="backdrop-glass rounded-2xl p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Join Our Happy Clients</h2>
            <p className="mb-6 text-zinc-600 dark:text-zinc-300">
              Start your project today and experience the same results our clients rave about.
            </p>
            <a
              href="/contact"
              className="focus-outline inline-block rounded-xl bg-brand-600 px-8 py-4 font-semibold text-white hover:bg-brand-700"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

