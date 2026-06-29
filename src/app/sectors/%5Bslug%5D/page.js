'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const SECTOR_DETAILS = {
  'sector-1': {
    name: 'Sector I (Matunga East / Sion)',
    demographics: 'Estimated 15,000 households. Primarily mixed retail, local groceries, and transit-aligned workers.',
    history: 'Est. 1950s. Sector I formed as an extension of the Matunga labor encampments, housing municipal rail workers and early migrants.',
    trades: 'Small retail, food vendors, wood mills, and local tailoring yards.',
    details: 'Known for high residential density integrated directly with transportation lines. The redevelopment plans call for a major commercial corridor near Sion junction.',
    color: '#8C0044',
  },
  'sector-2': {
    name: 'Sector II (Transit Camp / Sion)',
    demographics: 'Estimated 22,000 households. Highly diverse regional communities including families from Tamil Nadu, Uttar Pradesh, and Maharashtra.',
    history: 'Est. 1970s. Originally planned as temporary transit camps, it evolved into permanent multi-story chawl houses and community societies.',
    trades: 'Garment manufacturing workshops, embroidery units, and regional catering suppliers.',
    details: 'Houses several early community cooperative societies who have actively negotiated for transparent housing registration and local redevelopment rights.',
    color: '#8C6D3F',
  },
  'sector-3': {
    name: 'Sector III (Shahu Nagar / Sion)',
    demographics: 'Estimated 18,000 households. A major hub for cottage industries and small industrial warehouses.',
    history: 'Est. 1960s. Sector III grew around leather curing and packaging yards, transitioning over decades into leather goods and textile printing.',
    trades: 'Leather apparel fabrication, plastic shredding mills, and cardboard box packaging yards.',
    details: 'A critical economic node. Sector III generates significant annual output, making livelihood protection and commercial rehabilitation key concerns.',
    color: '#3A7D44',
  },
  'sector-4': {
    name: 'Sector IV (Kumbharwada / Koliwada)',
    demographics: 'Estimated 12,000 households. Distinct potter (Kumbhars) and fisherman (Kolis) quarters.',
    history: 'Est. 1880s (Kumbharwada) and pre-19th Century (Koliwada). One of the oldest settled segments of Dharavi.',
    trades: 'Pottery, clay moulding, brick firing, fresh fish markets, and boat repair workshops.',
    details: 'Home to the famous Kumbharwada potter village, occupying 12.5 acres with continuous family kilns. Highly cohesive social fabric and distinct architectural heritage.',
    color: '#4A6FA5',
  },
  'sector-5': {
    name: 'Sector V (Kala Killa / Mahim)',
    demographics: 'Estimated 20,000 households. Tightly integrated with the Mahim nature park boundary.',
    history: 'Est. 1980s. Developed near the Mahim fort and marshy borders, becoming a critical reclamation ground for waste-sorting.',
    trades: 'Plastic collection, segregation, and pellet recycling mills, along with iron scrap sorting yards.',
    details: 'Contains Dharavi\'s central recycling compound, recycling up to 80% of Mumbai\'s inorganic solid waste. Possesses a highly structured informal sorting hierarchy.',
    color: '#9B5DE5',
  },
  'sector-6': {
    name: 'Sector VI (Matunga Railway Land / Ganesh Nagar)',
    demographics: 'Estimated 11,000 households scheduled for rehabilitation. Primarily rail-side laborers, local residents, and transit-aligned families.',
    history: 'Est. 1980s. Designated as railway-owned land in Matunga, Sector VI comprises vital clusters like Ganesh Nagar, Meghwadi, and Azad Nagar.',
    trades: 'Local municipal work, railway maintenance assistance, and small household-level service trades.',
    details: 'A crucial initial development sector. Spanning 35 acres of railway land, the area is set for 11,000 rehabilitation tenements to support direct, key-to-key relocation of eligible families.',
    color: '#FF6F59',
  },
};

export default function SectorPage({ params }) {
  const slug = params?.slug;
  const data = SECTOR_DETAILS[slug];

  if (!data) {
    return (
      <div 
        className="min-h-screen flex flex-col items-center justify-center bg-white"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <h1 className="text-2xl font-bold mb-4">Sector Not Found</h1>
        <Link href="/" className="text-blue-600 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <main 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--nbt-gray)' }}
    >
      {/* Dynamic Header */}
      <header 
        className="w-full py-8 border-b bg-white"
        style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}
      >
        <div className="nbt-container flex items-center justify-between">
          <Link 
            href="/"
            className="font-heading font-semibold uppercase text-xs flex items-center gap-2 no-underline text-black hover:opacity-60 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Directory
          </Link>
          <span 
            className="font-heading font-bold uppercase text-xs tracking-wider"
            style={{ color: 'var(--nbt-gold)' }}
          >
            NAYA DHARAVI SECTOR PROFILE
          </span>
        </div>
      </header>

      {/* Hero */}
      <section 
        className="w-full py-20 text-white"
        style={{ backgroundColor: 'var(--nbt-dark)', borderBottom: '4px solid var(--nbt-gold)' }}
      >
        <div className="nbt-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="label-tag block mb-4"
              style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
            >
              GEOGRAPHIC NEIGHBORHOOD
            </span>
            <h1 
              className="font-display m-0 text-white uppercase"
              style={{ fontSize: '100px', letterSpacing: '0.04em', lineHeight: 1 }}
            >
              {data.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="w-full nbt-row-padding flex-grow">
        <div className="nbt-container">
          <div className="nbt-grid-2 gap-12">
            
            {/* Left Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-white border rounded shadow-sm flex flex-col gap-6"
              style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
            >
              <div>
                <h3 className="font-heading font-semibold text-lg text-black mb-2 uppercase tracking-wide">
                  Demographics & Population
                </h3>
                <p className="font-body text-sm text-gray-700 leading-relaxed margin-0">
                  {data.demographics}
                </p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />

              <div>
                <h3 className="font-heading font-semibold text-lg text-black mb-2 uppercase tracking-wide">
                  Historical Development
                </h3>
                <p className="font-body text-sm text-gray-700 leading-relaxed margin-0">
                  {data.history}
                </p>
              </div>
            </motion.div>

            {/* Right Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-white border rounded shadow-sm flex flex-col gap-6"
              style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
            >
              <div>
                <h3 className="font-heading font-semibold text-lg text-black mb-2 uppercase tracking-wide">
                  Specialized Trades & Economy
                </h3>
                <p className="font-body text-sm text-gray-700 leading-relaxed margin-0">
                  {data.trades}
                </p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />

              <div>
                <h3 className="font-heading font-semibold text-lg text-black mb-2 uppercase tracking-wide">
                  Community Perspective
                </h3>
                <p className="font-body text-sm text-gray-700 leading-relaxed margin-0">
                  {data.details}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full py-8 flex items-center justify-center"
        style={{
          background: '#070707',
          borderTop: '1px solid rgba(255, 255, 255, 0.02)',
        }}
      >
        <p
          className="font-heading text-center uppercase m-0"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#444444',
            fontWeight: 500
          }}
        >
          NAYA DHARAVI © 2026. NEIGHBORHOOD DOCUMENTATION INITIATIVE.
        </p>
      </footer>
    </main>
  );
}
