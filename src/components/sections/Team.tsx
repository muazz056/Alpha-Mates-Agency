'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarmad Waheed',
    role: 'Product Owner',
    image: '/sarmad-product-owner.png',
    email: 'Sarmadwaheed157@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sarmad-waheed-a266901ba',
  },
  {
    name: 'Muaz Ijaz',
    role: 'Sr. Full Stack AI Engineer',
    image: '/muaz-full-stack.png',
    email: 'muaxijaz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chaudhry-muaz-ijaz/',
  },
  {
    name: 'Muneeb Hassan',
    role: 'Sr. ML/AI Engineer',
    image: '/muneeb-ai-engineer.png',
    email: 'muneebhassanmalik@gmail.com',
    linkedin: 'https://www.linkedin.com/in/muneeb-hassan-a3a99224a',
  },
  {
    name: 'Hashir Azeem',
    role: 'Sr. UX/UI Designer & Engineer',
    image: '/hashir-ux-ui.png',
    email: 'hashirazeem1010@gmail.com',
    linkedin: 'https://www.linkedin.com/in/muhammad-hashir-siddiqui-6bb871206',
  },
  {
    name: 'Azeem Manzoor',
    role: 'Sr. QA Tester & Automation Engineer',
    image: '/azeem-QA.png',
    email: 'datapirate56@gmail.com',
    linkedin: 'https://www.linkedin.com/in/azeem-manzoor-36a739233/',
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const muazMember = teamMembers.find((m) => m.name === 'Muaz Ijaz')!;
const others = teamMembers.filter((m) => m.name !== 'Muaz Ijaz');

export function Team() {
  const [ordered, setOrdered] = useState(teamMembers);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const shuffledOthers = shuffleArray(others);
    const withMuazCenter = [...shuffledOthers.slice(0, 2), muazMember, ...shuffledOthers.slice(2)];
    setOrdered(withMuazCenter);
    setMounted(true);
  }, []);

  const card = (member: typeof teamMembers[number], i: number, animated: boolean) => {
    const Wrapper = animated ? motion.div : 'div';
    const wrapperProps = animated
      ? {
          initial: { opacity: 0, y: 40, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { delay: i * 0.1, type: 'spring' as const, stiffness: 100 },
          whileHover: { y: -8, transition: { duration: 0.3 } },
        }
      : {};

    return (
      <Wrapper key={member.name} {...wrapperProps} className="group relative">
        <div className="backdrop-glass rounded-3xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl">
          <div className="mx-auto mb-4 h-28 w-28 sm:h-32 sm:w-32">
            <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white/20 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:ring-brand-500/50">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10" />
            </div>
          </div>

          <h3 className="mb-1 text-base font-bold text-zinc-900 dark:text-white">
            {member.name}
          </h3>
          <div className="mb-4 inline-block rounded-full bg-brand-500/10 px-3 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
            {member.role}
          </div>

          <div className="flex justify-center gap-2">
            {(member.linkedin || member.email) && (
              <>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-brand-100 hover:text-brand-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-brand-100 hover:text-brand-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </Wrapper>
    );
  };

  if (!mounted) {
    return (
      <section id="team" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
              Our Team
            </span>
            <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold">Meet the Mates</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              A passionate team of engineers, designers, and AI specialists building the future.
            </p>
          </div>
          <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {(() => {
              const ssrOthers = teamMembers.filter((m) => m.name !== 'Muaz Ijaz');
              const ssr = [...ssrOthers.slice(0, 2), muazMember, ...ssrOthers.slice(2)];
              return ssr.map((member, i) => card(member, i, false));
            })()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
            Our Team
          </span>
          <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold">Meet the Mates</h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            A passionate team of engineers, designers, and AI specialists building the future.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {ordered.map((member, i) => card(member, i, true))}
        </div>
      </div>
    </section>
  );
}
