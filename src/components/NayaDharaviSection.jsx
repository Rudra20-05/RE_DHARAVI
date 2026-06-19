'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PILLARS = [
  {
    number: '01',
    title: 'Housing Information',
    body: 'Latest updates on housing options, registration processes, and eligibility for Dharavi residents.',
  },
  {
    number: '02',
    title: 'Infrastructure Updates',
    body: 'News on roads, sanitation, water supply, and civic improvements happening across Dharavi.',
  },
  {
    number: '03',
    title: 'Local Business Support',
    body: 'Resources and information to help Dharavi\'s small businesses and entrepreneurs grow and thrive.',
  },
  {
    number: '04',
    title: 'Transparent Updates',
    body: 'Honest, clear, and timely information delivered directly to the Dharavi community.',
  },
  {
    number: '05',
    title: 'Community Events',
    body: 'Announcements, gatherings, and important events happening across Dharavi.',
  },
  {
    number: '06',
    title: 'Youth Opportunities',
    body: 'Skills, training, and employment opportunities for the youth of Dharavi.',
  },
];

export default function NayaDharaviSection() {
  const headerRef = useRef(null);
  const pillarsRef = useRef(null);
  const missionRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const pillarsInView = useInView(pillarsRef, { once: true, amount: 0.1 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section id="naya-dharavi" className="w-full">

      {/* ── Part 01: Header ── */}
      <div
        ref={headerRef}
        className="w-full"
        style={{
          backgroundColor: 'var(--dark-navy)',
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="max-w-editorial mx-auto">
          <motion.span
            className="label-tag block mb-6"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            COMMUNITY PLATFORM
          </motion.span>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            {/* Left: Display heading */}
            <motion.div
              className="md:w-[45%]"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2
                className="font-display text-white leading-none m-0"
                style={{ fontSize: 'clamp(64px, 10vw, 140px)', letterSpacing: '0.03em' }}
              >
                NAYA
              </h2>
              <h2
                className="font-display leading-none m-0"
                style={{
                  fontSize: 'clamp(64px, 10vw, 140px)',
                  letterSpacing: '0.03em',
                  color: 'var(--orange-accent)',
                }}
              >
                DHARAVI
              </h2>
            </motion.div>

            {/* Right: Body copy */}
            <motion.div
              className="md:w-[55%] flex flex-col justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.75,
                }}
              >
                A community-driven platform built by the people of Dharavi, for the people of
                Dharavi. We are dedicated to keeping every resident informed, empowered, and
                heard — sharing the latest community news, housing information, local updates,
                and civic developments directly with you.
              </p>
              {/* Red rule */}
              <motion.hr
                className="border-none m-0"
                style={{
                  height: '2px',
                  backgroundColor: 'var(--orange-accent)',
                  maxWidth: '80px',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={headerInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Part 02: What We Cover ── */}
      <div
        ref={pillarsRef}
        className="w-full py-20 md:py-32"
        style={{ backgroundColor: 'var(--off-white)' }}
      >
        <div
          className="max-w-editorial mx-auto"
          style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
        >
          {/* Section label + heading */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="label-tag block mb-4">WHAT WE COVER</span>
            <h3
              className="font-heading font-bold uppercase m-0 leading-tight"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '0.08em',
                color: 'var(--charcoal)',
              }}
            >
              Six Areas of Focus
            </h3>
          </motion.div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                className="flex flex-col"
                style={{
                  padding: 'clamp(24px, 3vw, 40px) 0',
                  paddingRight: i % 2 === 0 ? 'clamp(24px, 4vw, 60px)' : '0',
                  paddingLeft: i % 2 === 1 ? 'clamp(24px, 4vw, 60px)' : '0',
                  borderTop: '1px solid var(--border-table)',
                  borderLeft: i % 2 === 1 ? '1px solid var(--border-table)' : 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              >
                {/* Number accent */}
                <span
                  className="font-display block mb-3"
                  style={{
                    fontSize: '36px',
                    lineHeight: 1,
                    color: 'var(--brand-magenta)',
                    opacity: 0.4,
                  }}
                >
                  {pillar.number}
                </span>

                {/* Title */}
                <h4
                  className="font-heading font-bold uppercase m-0 mb-3"
                  style={{
                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                    letterSpacing: '0.07em',
                    color: 'var(--charcoal)',
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h4>

                {/* Body */}
                <p
                  className="font-body m-0"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.75,
                    color: 'var(--charcoal)',
                    opacity: 0.7,
                  }}
                >
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Bottom border */}
          <div
            style={{ borderTop: '1px solid var(--border-table)', marginTop: '0' }}
          />
        </div>
      </div>


      {/* ── Part 03: Mission Statement ── */}
      <div
        ref={missionRef}
        className="w-full"
        style={{
          backgroundColor: 'var(--charcoal)',
          padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="max-w-editorial mx-auto">
          {/* Statements */}
          {[
            'NAYA DHARAVI IS NOT A BROADCAST.',
            'IT IS A CONVERSATION.',
            'EVERY RESIDENT DESERVES TO BE INFORMED.',
            'EVERY VOICE DESERVES TO BE HEARD.',
          ].map((line, i) => (
            <motion.p
              key={i}
              className="font-heading font-bold uppercase m-0 leading-tight"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '14px',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.18, duration: 0.5, ease: 'easeOut' }}
            >
              {line}
            </motion.p>
          ))}

          {/* Red rule */}
          <motion.hr
            className="border-none mt-12 mb-6"
            style={{
              height: '2px',
              backgroundColor: 'var(--orange-accent)',
              maxWidth: '400px',
              transformOrigin: 'left',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={missionInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Attribution */}
          <motion.p
            className="font-ui italic"
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
            initial={{ opacity: 0 }}
            animate={missionInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            — Naya Dharavi, A Community Platform
          </motion.p>
        </div>
      </div>

    </section>
  );
}
