'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="cover"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        height: '100vh',
        minHeight: '600px',
        backgroundColor: 'var(--red-primary)',
      }}
    >
      {/* Layer 1: Crimson background - fades in */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--red-primary)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Layer 2: Aerial map overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.25, scale: 1.0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <Image
          src="/images/dharavi-aerial.png"
          alt="Aerial satellite view of Dharavi, a dense urban neighbourhood in Mumbai showing tightly packed buildings and narrow streets"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Layer 3: Text content */}
      <div
        className="relative z-10 flex flex-col items-start w-full"
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)', maxWidth: '1440px' }}
      >
        {/* "RE:" label */}
        <motion.span
          className="font-heading font-bold uppercase block"
          style={{
            color: 'var(--orange-accent)',
            fontSize: '18px',
            letterSpacing: '0.2em',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          RE:
        </motion.span>

        {/* "DHARAVI" - clip-path reveal */}
        <div className="overflow-hidden mt-2">
          <motion.h1
            className="font-display text-white leading-none m-0 p-0"
            style={{
              fontSize: 'var(--fs-hero)',
              letterSpacing: '0.05em',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            DHARAVI
          </motion.h1>
        </div>

        {/* Sub-label */}
        <motion.p
          className="font-heading text-white mt-4"
          style={{
            fontWeight: 400,
            fontSize: '22px',
            letterSpacing: '0.04em',
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
        >
          Interpreting, Imagining, Developing
        </motion.p>

        {/* Year + credit */}
        <motion.p
          className="font-ui text-white mt-3"
          style={{
            fontSize: '13px',
            letterSpacing: '0.15em',
            opacity: 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          2010 - SPARC × KRVIA
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
