'use client';

import { motion, useInView } from 'framer-motion';
import { stats } from '@/lib/data/testimonials';
import { useRef } from 'react';

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="border-y border-white/20 bg-gradient-to-b from-white/40 to-white/20 py-12 backdrop-blur-sm dark:border-white/10 dark:from-zinc-900/40 dark:to-zinc-900/20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className="text-center"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <div className="mb-2 text-3xl font-bold text-brand-600 dark:text-brand-400 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
