'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 -top-40 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-brand-700/20 blur-[120px] will-change-transform"
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pb-20 pt-28 text-center md:pt-36">
        <motion.div {...fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/20 dark:text-brand-300"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white dark:bg-brand-500">✦</span>
            Full Stack Software Engineer
          </motion.div>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-100 dark:to-white">
            Hi, I’m Muaz Ijaz
          </span>
          <br />
          <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
            Full Stack Software Engineer
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg"
        >
          Full-stack JavaScript & Python development. AI-native chatbots, e-commerce, and
          platform builds that ship fast and scale reliably.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(225,29,72,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="focus-outline rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:shadow-xl hover:shadow-brand-500/30"
            >
              Start Your Project
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </Link>

          <Link href="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="focus-outline rounded-xl border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition hover:border-brand-200 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60 dark:hover:border-brand-800 dark:hover:bg-zinc-900"
            >
              View Projects →
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 w-full max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Custom Development',
                subtitle: 'React, Next.js, Python, Django',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
              },
              {
                title: 'AI & RAG Chatbots',
                subtitle: 'GPT-4, LangChain, Vector DBs',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
              },
              {
                title: 'Platform Builds',
                subtitle: 'Shopify, WordPress, Wix',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-6 backdrop-blur-md transition-all hover:border-brand-200/60 hover:bg-white/60 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/40 dark:hover:border-brand-800/60 dark:hover:bg-zinc-900/60"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-brand-500/10 to-brand-600/10 transition duration-500 group-hover:scale-[2.5]" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/20 text-brand-600 dark:text-brand-400">
                    {item.icon}
                  </div>
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{item.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
        >
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '4.9/5', label: 'Client Rating' },
            { value: '< 1s', label: 'Avg. Load Time' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10">
                <div className="h-2 w-2 rounded-full bg-brand-500" />
              </div>
              <div>
                <div className="font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
