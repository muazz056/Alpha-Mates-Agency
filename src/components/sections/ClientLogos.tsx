'use client';

import { motion } from 'framer-motion';
import { clients } from '@/lib/data/clients';

export function ClientLogos() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="border-y border-zinc-200/60 bg-zinc-50/50 py-12 dark:border-zinc-800/60 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Trusted by Leading Companies
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-900/50" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-900/50" />

          <motion.div
            animate={{ x: [0, -180 * clients.length] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' }}
            className="flex gap-16"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-16 w-36 shrink-0 items-center justify-center grayscale transition duration-300 hover:grayscale-0"
                title={client.name}
              >
                <div className="text-center text-sm font-bold tracking-wider text-zinc-400 dark:text-zinc-600">
                  {client.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { label: 'Happy Clients', value: '80+' },
            { label: 'Projects Delivered', value: '150+' },
            { label: 'Client Retention', value: '95%' },
            { label: 'Avg. Satisfaction', value: '4.9/5' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-white/50 p-4 text-center backdrop-blur-sm dark:bg-zinc-900/50"
            >
              <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

