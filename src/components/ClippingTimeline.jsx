'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import NewsClipping from './NewsClipping';

const CLIPPINGS = [
  {
    date: 'March 2004',
    headline: 'Maharashtra Announces Global Tender For Dharavi',
    body: 'A 239-hectare zone is opened to international developers under the DRP scheme.',
    rotation: 1.5,
  },
  {
    date: 'July 2006',
    headline: 'Residents Form Collective Against Demolition',
    body: 'The Dharavi Bachao Andolan mobilises over 300 community leaders.',
    rotation: -2,
  },
  {
    date: 'February 2008',
    headline: 'Mukesh Mehta Appointed Project Consultant',
    body: 'Architect and consultant assigned to co-ordinate redevelopment master plan.',
    rotation: 0.8,
  },
  {
    date: 'September 2009',
    headline: 'Global Financial Crisis Delays Bids',
    body: 'Several international developers withdraw citing market conditions.',
    rotation: -1.2,
  },
  {
    date: 'January 2010',
    headline: 'SPARC Documents Community Resistance',
    body: 'KRVIA and SPARC jointly publish this report as counter-record.',
    rotation: 2.2,
  },
];

export default function ClippingTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--off-white)' }}
    >
      <div
        className="max-w-editorial mx-auto"
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="label-tag block mb-4">ARCHIVE</span>
          <h2
            className="font-heading font-bold uppercase m-0"
            style={{
              fontSize: '48px',
              letterSpacing: '0.08em',
              color: 'var(--charcoal)',
            }}
          >
            The Paper Trail
          </h2>
        </motion.div>

        {/* Desktop: horizontal scroll row, Mobile: vertical stack */}
        <div className="hidden md:block">
          <div
            className="scroll-snap-x gap-8 pb-8"
            style={{ paddingBottom: '20px' }}
          >
            {CLIPPINGS.map((clip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <NewsClipping {...clip} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-8 md:hidden items-center">
          {CLIPPINGS.map((clip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <NewsClipping {...clip} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
