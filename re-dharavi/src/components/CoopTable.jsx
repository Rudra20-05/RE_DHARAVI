'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TABLE_DATA = [
  { type: 'Cooperative Societies', count: '85+', activity: 'Shared resource management' },
  { type: 'Nagars (sub-districts)', count: '14', activity: 'Residential governance' },
  { type: 'Chawls', count: '200+', activity: 'Shared housing units' },
  { type: 'Registered Industries', count: '5,000+', activity: 'Manufacturing & export' },
  { type: 'Recycling Units', count: '800+', activity: 'Waste processing' },
];

export default function CoopTable() {
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
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Text column */}
          <motion.div
            className="w-full md:w-[45%] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="label-tag block mb-4">COMMUNITY STRUCTURES</span>
            <h2
              className="font-heading font-bold uppercase m-0 leading-tight"
              style={{
                fontSize: 'clamp(32px, 4vw, 42px)',
                letterSpacing: '0.08em',
                color: 'var(--charcoal)',
              }}
            >
              The Self-Organised City
            </h2>
            <p
              className="font-body mt-6"
              style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'var(--charcoal)',
              }}
            >
              Dharavi&apos;s informal economy is structured through a dense network of
              cooperative societies, nagars, and chawls - each functioning as a
              micro-neighbourhood with its own governance.
            </p>
          </motion.div>

          {/* Table column */}
          <motion.div
            className="w-full md:w-[55%]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse"
                style={{ minWidth: '400px' }}
                role="table"
                aria-label="Dharavi community structures data"
              >
                <thead>
                  <tr style={{ backgroundColor: 'var(--red-primary)' }}>
                    <th
                      className="text-left font-ui font-semibold text-white uppercase"
                      style={{
                        fontSize: '12px',
                        padding: '12px 16px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Type
                    </th>
                    <th
                      className="text-left font-ui font-semibold text-white uppercase"
                      style={{
                        fontSize: '12px',
                        padding: '12px 16px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Count
                    </th>
                    <th
                      className="text-left font-ui font-semibold text-white uppercase"
                      style={{
                        fontSize: '12px',
                        padding: '12px 16px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Primary Activity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--cream)' : '#FFFFFF',
                        borderBottom: '1px solid var(--border-table)',
                      }}
                    >
                      <td
                        className="font-ui"
                        style={{
                          fontSize: '14px',
                          padding: '12px 16px',
                          color: 'var(--charcoal)',
                          fontWeight: 500,
                        }}
                      >
                        {row.type}
                      </td>
                      <td
                        className="font-ui"
                        style={{
                          fontSize: '14px',
                          padding: '12px 16px',
                          color: 'var(--charcoal)',
                        }}
                      >
                        {row.count}
                      </td>
                      <td
                        className="font-ui"
                        style={{
                          fontSize: '14px',
                          padding: '12px 16px',
                          color: 'var(--charcoal)',
                        }}
                      >
                        {row.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
