'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'AI Product Engineering',
    description:
      'A spotlight on AI-first systems, intelligent workflows, and automation platforms that drive value for teams and customers.',
  },
  {
    title: 'Growth-Focused Platforms',
    description:
      'Flagship builds that combine performance, conversion, and scale for startups, e-commerce brands, and SaaS products.',
  },
  {
    title: 'Secure Integrations',
    description:
      'Scalable integrations, backend systems, and product experiences designed for reliability and future growth.',
  },
];

export function TopProjects() {
  return (
    <section id="top-projects" className="bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
            Top Projects
          </span>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Flagship Work Coming Soon</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-300">
            This section will showcase my top projects and main case studies. For now, here are the key areas I focus on as a Full Stack Software Engineer.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm transition hover:border-brand-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/80"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
                {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="focus-outline inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-brand-200 hover:bg-white hover:text-brand-600 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-brand-800"
          >
            View full portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
