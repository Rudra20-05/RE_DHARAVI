'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CREDITS = [
  { label: 'Authors', value: 'Kalpana Sharma, Hussain Indorewala, Rupali Gupte, Prasad Shetty' },
  { label: 'Publisher', value: 'SPARC, Mumbai' },
  { label: 'Year', value: '2010' },
  { label: 'Website by', value: 'Rudra Dalvi - Web Development Internship 2026' }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* About Content */}
      <section
        id="about"
        ref={ref}
        className="w-full"
        style={{
          backgroundColor: 'var(--dark-navy)',
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="max-w-editorial mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left: Publication info */}
            <motion.div
              className="w-full md:w-[55%]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-display text-white m-0 leading-none"
                style={{ fontSize: '48px' }}
              >
                About This Publication
              </h2>
              <p
                className="font-body mt-8"
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.7,
                  maxWidth: '560px',
                }}
              >
                RE: Dharavi was published in 2010 by SPARC (Society for the Promotion of
                Area Resource Centres) and KRVIA (Kamla Raheja Vidyanidhi Institute for
                Architecture and Environmental Studies). It documents the lived reality of
                Dharavi&apos;s residents in response to large-scale redevelopment proposals.
              </p>
            </motion.div>

            {/* Right: Credits */}
            <motion.div
              className="w-full md:w-[45%] flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {CREDITS.map((credit, i) => (
                <div key={i}>
                  <span
                    className="font-ui block uppercase mb-2"
                    style={{
                      fontSize: '11px',
                      color: 'var(--orange-accent)',
                      letterSpacing: '0.12em',
                      fontWeight: 500,
                    }}
                  >
                    {credit.label}
                  </span>
                  <p
                    className="font-ui m-0"
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: 1.6,
                    }}
                  >
                    {credit.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer
        className="w-full flex items-center justify-center"
        style={{
          backgroundColor: 'var(--red-primary)',
          height: '40px',
        }}
      >
        <p
          className="font-ui text-white uppercase m-0 text-center"
          style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
          }}
        >
          RE: DHARAVI © SPARC × KRVIA 2010 - Web Translation 2026
        </p>
      </footer>
    </>
  );
}
