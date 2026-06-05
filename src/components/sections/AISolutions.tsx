'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const aiProjects = projects.filter((p) => p.category === 'AI Chatbot');

export function AISolutions() {
  return (
    <section className="scroll-mt-20 bg-gradient-to-b from-white/20 via-brand-50/20 to-white/20 py-20 dark:from-zinc-900/20 dark:via-brand-950/20 dark:to-zinc-900/20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-brand-500/20 to-purple-500/20 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:from-brand-500/30 dark:to-purple-500/30 dark:text-brand-300">
            AI-Powered
          </span>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">AI Solutions That Deliver</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-300">
            Custom RAG chatbots, intelligent assistants, and AI-native features built with the
            latest models and frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {aiProjects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="backdrop-glass group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl sm:flex-row focus-outline"
              >
                <div className="relative h-48 shrink-0 overflow-hidden bg-zinc-100 sm:h-auto sm:w-56">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500/10 to-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:text-brand-300">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      AI
                    </span>
                    <span className="text-xs text-zinc-500">{project.role}</span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-500/10 px-2 py-0.5 text-xs font-medium text-brand-700 dark:text-brand-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/work"
            className="focus-outline group inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-6 py-3 text-sm font-medium transition-all hover:border-brand-200 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60 dark:hover:border-brand-800 dark:hover:bg-zinc-900"
          >
            View All AI Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
