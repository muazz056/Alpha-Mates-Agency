'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const topProjects = [
  {
    title: 'ConvoHarbor',
    tech: 'Flask, React, PostgreSQL, pgvector, LangChain, RAG, Redis, Celery, Docker',
    liveUrl: 'https://convoharbor.vercel.app',
    highlights: [
      'Built a production-grade multi-tenant SaaS chatbot platform supporting 11 AI providers with automatic fallback and intelligent model routing',
      'Engineered a full RAG pipeline: query rewriting → HyDE → pgvector cosine similarity search → LLM answer generation, with dual embedding storage and sliding-window rate limiting',
      'Built a robust BFS web crawler with multi-strategy fetching and extraction for knowledge base ingestion',
      'Implemented Fernet AES-128-CBC field-level encryption, JWT RBAC with 9 granular permissions, OAuth 2.0, and Cloud KMS abstraction',
      'Deployed multi-service architecture with Docker, Nginx reverse proxy, Redis caching, and Celery async queues'
    ],
  },
  {
    title: 'Studium',
    tech: 'FastAPI, Next.js, PostgreSQL, Redis, Celery, OpenAI, Gemini, Groq, Stripe',
    liveUrl: 'https://studium-rho.vercel.app',
    highlights: [
      'Built an AI-powered learning platform that ingests PDFs, DOCX files, YouTube URLs, and web links to automatically generate notes, flashcards, quizzes, summaries, and mindmaps',
      'Implemented SM-2 spaced repetition algorithm for optimal flashcard review scheduling and mastery tracking per subject',
      'Architected background job pipeline using Celery + Redis for async content processing with real-time job status tracking',
      'Integrated Stripe subscription billing (Free/Pro/Premium tiers), Google OAuth, email verification, Cloudinary file storage, and Prometheus metrics',
      'Designed 14 SQLAlchemy database models covering users, subjects, notes, flashcards, quizzes, mindmaps, AI config, token usage, and focus sessions'
    ],
  },
  {
    title: 'Meeting Assistant',
    tech: 'Electron, React, TypeScript, Express, MongoDB, Deepgram, Gemini, GPT',
    liveUrl: 'https://stealth-assist-ai.vercel.app',
    highlights: [
      'Developed a cross-platform Electron desktop and website app that provides real-time transcription, note-taking, and action item generation for meetings',
      'Built a real-time multi-modal speech pipeline with three STT backends supporting 50+ languages',
      'Implemented context-aware AI answer generation using parsed resume, job description, and company info, with STAR/short/detailed/bullets response modes across a Gemini → GPT-4o-mini → Claude fallback chain',
      'Shipped cross-platform packaging for Windows (NSIS), macOS (DMG), and Linux (AppImage) via electron-builder, with freemium token/credit system and Stripe billing'
    ],
  },
  {
    title: 'Track Hero',
    tech: 'React, TypeScript, Redux Toolkit, Django, PostgreSQL, Stripe',
    liveUrl: 'https://trackhero.com',
    highlights: [
      'Developed features in a comprehensive fullstack platform for motorsport event scheduling, registration, and race timing management',
      'Integrated Stripe payment gateway and Django REST Framework for secure transactions with real-time data synchronization'
    ],
  },
  {
    title: 'Heylo',
    tech: 'React, Node.js, Socket.io, PostgreSQL, Express',
    liveUrl: 'https://www.heylo.com',
    highlights: [
      'Built a comprehensive healthcare support platform connecting professionals with patients through secure video consultations and real-time chat',
      'Implemented personalized development and care tracking with remote accessibility for continuous monitoring',
      'Structured communication channels between support professionals and residents'
    ],
  },
  {
    title: 'Zabihah',
    tech: 'React Native, Node.js, MongoDB, Google Maps API, Firebase, Stripe',
    liveUrl: 'https://www.zabihah.com',
    highlights: [
      'Developed iOS and Android mobile apps for halal food and mosque discovery with location-based services',
      'Integrated map-based navigation with 53,000+ verified listings across 100+ countries',
      'Built intuitive UI/UX for browsing, filtering, and real-time updated listings with reviews and ratings'
    ],
  },
  {
    title: 'Sonexa Healthcare',
    tech: 'React Native, Node.js, Python, PostgreSQL, AWS, AI/ML',
    highlights: [
      'Built automated speech-to-text transcription for patient visit recordings',
      'Implemented AI-powered structured healthcare note generation with template-based data population',
      'Multi-role access system: Super Admin, Admin, and Nurse with mobile-first experience'
    ],
  },
  {
    title: 'Legal Partner Platform',
    tech: 'React, Node.js, Socket.io, PostgreSQL, Express, Stripe',
    highlights: [
      'Built a digital platform connecting clients with verified legal experts through real-time video consultations',
      'Implemented instant messaging for quick legal queries and on-demand legal service requests',
      'Multi-domain legal expertise coverage with remote accessibility from any location'
    ],
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
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Featured Work</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-300">
            Production-grade applications showcasing full-stack engineering, AI/ML integration, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm transition hover:border-brand-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/80"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-500/20 dark:text-green-400"
                  >
                    Deployed Live
                  </a>
                ) : (
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                    Production Grade
                  </span>
                )}
              </div>
              <p className="mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">{project.tech}</p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
              {project.liveUrl && (
                <div className="mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    View Live Project
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
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
