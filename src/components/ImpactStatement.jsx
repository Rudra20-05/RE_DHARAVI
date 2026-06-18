'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATEMENTS = [
  'DHARAVI IS NOT A PROBLEM TO BE SOLVED.',
  'IT IS AN ECONOMY TO BE RECOGNISED.',
  'THE RESIDENTS ARE NOT BENEFICIARIES.',
  'THEY ARE THE RIGHTFUL PLANNERS.',
];

export default function ImpactStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: 'var(--charcoal)',
        padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div className="max-w-editorial mx-auto">
        {/* Statements */}
        {STATEMENTS.map((statement, i) => (
          <motion.p
            key={i}
            className="font-heading font-bold uppercase m-0 leading-tight"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.2,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            {statement}
          </motion.p>
        ))}

        {/* Red horizontal rule */}
        <motion.hr
          className="border-none mt-12 mb-6"
          style={{
            height: '2px',
            backgroundColor: 'var(--red-primary)',
            maxWidth: '400px',
            transformOrigin: 'left',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
        />

        {/* Attribution */}
        <motion.p
          className="font-ui italic"
          style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          - RE: Dharavi, SPARC × KRVIA, 2010
        </motion.p>
      </div>
    </section>
  );
}
