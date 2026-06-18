'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';

const menuItems = [
  { href: '/services', label: 'Services', icon: '💼' },
  { href: '/work', label: 'Work', icon: '🎨' },
  { href: '/process', label: 'Process', icon: '⚙️' },
  { href: '/testimonials', label: 'Testimonials', icon: '⭐' },
  { href: '/contact', label: 'Contact', icon: '💬' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger/Close Button - Fixed positioning */}
      <button
        onClick={() => setOpen(!open)}
        className={`focus-outline relative z-[60] flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
          open ? 'bg-brand-600' : ''
        }`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <div className="flex h-5 w-6 flex-col items-center justify-center">
          <span
            className={`block h-0.5 w-full transform rounded-full transition-all duration-300 ${
              open
                ? 'translate-y-[4px] rotate-45 bg-white'
                : '-translate-y-1 bg-zinc-900 dark:bg-white'
            }`}
          />
          <span
            className={`my-1 block h-0.5 w-full rounded-full transition-all duration-300 ${
              open ? 'opacity-0 bg-white' : 'opacity-100 bg-zinc-900 dark:bg-white'
            }`}
          />
          <span
            className={`block h-0.5 w-full transform rounded-full transition-all duration-300 ${
              open
                ? '-translate-y-[4px] -rotate-45 bg-white'
                : 'translate-y-1 bg-zinc-900 dark:bg-white'
            }`}
          />
        </div>
      </button>

      {/* Overlay - Behind menu but above content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[45] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Menu Panel - Highest z-index */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-[50] flex h-screen w-[85vw] max-w-sm flex-col bg-white shadow-2xl dark:bg-zinc-950"
          >
            {/* Header - Fixed at top */}
            <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-xl font-bold text-brand-600 dark:text-brand-400"
                >
                  Muaz Ijaz
                </Link>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggle}
                className="focus-outline flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900"
                aria-label="Toggle theme"
              >
                <span className="text-lg">{theme === 'dark' ? '🌙' : '☀️'}</span>
              </motion.button>
            </div>

            {/* Navigation Links - Scrollable middle section */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 text-2xl"
                      >
                        {item.icon}
                      </motion.span>
                      <div className="flex-1 min-w-0">
                        <div className="truncate font-semibold text-zinc-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                          {item.label}
                        </div>
                      </div>
                      <svg
                        className="h-5 w-5 shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-brand-600 dark:group-hover:text-brand-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer CTA - Fixed at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="shrink-0 border-t border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="focus-outline block w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/30"
              >
                Start Your Project →
              </Link>

              <div className="mt-4 flex items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <a
                  href="mailto:muaxijaz@gmail.com"
                  className="flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-400"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/chaudhry-muaz-ijaz/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-400"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}