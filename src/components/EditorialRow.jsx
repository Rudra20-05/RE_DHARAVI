'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import PullQuote from './PullQuote';
import CalloutStat from './CalloutStat';

export default function EditorialRow({
  ghostNumber,
  label,
  heading,
  body,
  pullQuote,
  statNumber,
  statLabel,
  imageSrc,
  imageAlt,
  reversed = false,
  imageCaption,
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const textContent = (
    <div className="relative z-10">
      <span className="label-tag block mb-4">{label}</span>
      <h3
        className="font-heading font-bold uppercase m-0 leading-tight"
        style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          letterSpacing: '0.08em',
          color: 'var(--charcoal)',
        }}
      >
        {heading}
      </h3>
      <p
        className="font-body mt-6"
        style={{
          fontSize: '17px',
          lineHeight: 1.7,
          color: 'var(--charcoal)',
          maxWidth: '540px',
        }}
      >
        {body}
      </p>
      {pullQuote && <PullQuote quote={pullQuote} />}
      {statNumber && <CalloutStat number={statNumber} label={statLabel} />}
    </div>
  );

  const imageContent = (
    <div
      ref={imageRef}
      className="relative overflow-hidden w-full"
      style={{ minHeight: '500px' }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt || 'Documentary photograph'}
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.05)' }}
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </motion.div>
      {imageCaption && (
        <span
          className="absolute bottom-4 left-4 label-tag z-10"
          style={{
            fontSize: '11px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            padding: '4px 8px',
          }}
        >
          {imageCaption}
        </span>
      )}
    </div>
  );

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 md:py-32"
      style={{ backgroundColor: 'var(--off-white)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Ghost callout number */}
      {ghostNumber && (
        <span
          className="ghost-number"
          style={{
            top: '-20px',
            left: reversed ? 'auto' : 'clamp(24px, 5vw, 80px)',
            right: reversed ? 'clamp(24px, 5vw, 80px)' : 'auto',
          }}
        >
          {ghostNumber}
        </span>
      )}

      <div
        className="max-w-editorial mx-auto"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div
          className={`flex flex-col gap-12 ${
            reversed ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Text column - 55% */}
          <div className="w-full md:w-[55%] flex flex-col justify-center">
            {textContent}
          </div>

          {/* Image column - 45% */}
          <div className="w-full md:w-[45%]">
            {imageContent}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
