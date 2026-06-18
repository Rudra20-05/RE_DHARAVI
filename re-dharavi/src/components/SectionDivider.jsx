'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function SectionDivider({ partNumber, title, description, imageSrc, imageAlt }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: '80vh', minHeight: '500px' }}
    >
      {/* Crimson background - clip-path flood from left */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: 'var(--red-primary)',
          clipPath: isInView ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          transition: 'clip-path 0.8s ease-out',
        }}
      />

      {/* Right-side documentary photograph */}
      {imageSrc && (
        <div
          className="absolute top-0 right-0 h-full hidden md:block"
          style={{ width: '40%' }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || 'Documentary photograph'}
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            sizes="40vw"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--red-primary) 0%, transparent 60%)' }} />
        </div>
      )}

      {/* Text content */}
      <div
        className="relative z-10 flex flex-col justify-center h-full"
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)', maxWidth: '60%' }}
      >
        {/* Part label */}
        <motion.span
          className="label-tag mb-4 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          PART {partNumber}
        </motion.span>

        {/* Title */}
        <motion.h2
          className="font-heading font-bold text-white uppercase leading-none m-0"
          style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            letterSpacing: '0.08em',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>

        {/* Descriptor */}
        {description && (
          <motion.p
            className="font-body mt-6"
            style={{
              fontSize: '28px',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '500px',
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
