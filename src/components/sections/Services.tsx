'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data/services';
import type { Service } from '@/lib/data/services';

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (selectedService) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [selectedService]);

  return (
    <section id="services" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
            What We Offer
          </span>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Services That Drive Growth</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-300">
            Full-stack development, AI solutions, and platform builds. We turn ideas into
            production-ready software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service)}
              className="backdrop-glass group relative overflow-hidden rounded-2xl p-6 text-left shadow-lg transition-all hover:shadow-2xl focus-outline"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-500/10 to-brand-600/10 transition duration-500 group-hover:scale-[3] group-hover:from-brand-500/20 group-hover:to-brand-600/20" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/20 text-2xl">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                  <span>Learn more</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="backdrop-glass-strong relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 shadow-2xl md:p-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="focus-outline absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-zinc-500 hover:bg-black/10 dark:bg-white/10 dark:text-zinc-400 dark:hover:bg-white/20"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-600/20 text-3xl">
                  {selectedService.icon}
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Service</div>
                  <h3 className="text-2xl font-bold md:text-3xl">{selectedService.title}</h3>
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-300">
                {selectedService.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Features
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {selectedService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 rounded-xl bg-black/[0.03] p-3 text-sm dark:bg-white/[0.03]">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-900/20 dark:text-brand-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-6 dark:border-zinc-700">
                <div className="text-center">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Starting at</div>
                  <div className="text-xl font-bold text-brand-600 dark:text-brand-400">{selectedService.startingPrice}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Delivery</div>
                  <div className="text-xl font-bold">{selectedService.deliveryTime}</div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="focus-outline ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/30"
                >
                  Get Started
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

