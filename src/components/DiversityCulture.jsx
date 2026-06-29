'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const SECTORS = [
  {
    slug: 'sector-1',
    name: 'Sector I (Matunga East / Sion)',
    desc: 'The southern entry point featuring mixed commercial establishments, residential blocks, and immediate proximity to Matunga local transit.',
    highlightPath: 'M 10 70 L 60 70 L 60 110 L 10 110 Z',
    image: '/images/dharavi-street.png',
  },
  {
    slug: 'sector-2',
    name: 'Sector II (Transit Camp / Sion)',
    desc: 'A dense cluster hosting both early transit housing campuses and long-standing local residential chawl societies.',
    highlightPath: 'M 70 70 L 120 70 L 120 110 L 70 110 Z',
    image: '/images/dharavi-rooftop.png',
  },
  {
    slug: 'sector-3',
    name: 'Sector III (Shahu Nagar / Sion)',
    desc: 'Host to key municipal institutions, local schools, and major commercial leather and textile packaging businesses.',
    highlightPath: 'M 130 70 L 180 70 L 180 110 L 130 110 Z',
    image: '/images/dharavi-pottery.png',
  },
  {
    slug: 'sector-4',
    name: 'Sector IV (Kumbharwada / Koliwada)',
    desc: 'The historic pottery village of Kumbharwada and the traditional fishing community of Koliwada. High artisan density.',
    highlightPath: 'M 40 20 L 110 20 L 110 60 L 40 60 Z',
    image: '/images/dharavi-pottery.png',
  },
  {
    slug: 'sector-5',
    name: 'Sector V (Kala Killa / Mahim)',
    desc: 'Bordering the Mahim nature park and creek, characterized by diverse household plastic recycling compound mills.',
    highlightPath: 'M 120 20 L 170 20 L 170 60 L 120 60 Z',
    image: '/images/dharavi-street.png',
  },
  {
    slug: 'sector-6',
    name: 'Sector VI (Matunga Railway Land / Ganesh Nagar)',
    desc: 'Features approximately 35 acres of railway land in Matunga, including Ganesh Nagar and Meghwadi, designated for initial rehabilitation housing.',
    highlightPath: 'M 10 20 L 35 20 L 35 60 L 10 60 Z',
    image: '/images/dharavi-street.png',
  },
];

export default function DiversityCulture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className="w-full nbt-row-padding"
      style={{ backgroundColor: 'var(--nbt-gray)', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <div className="mb-12">
          <span 
            className="label-tag block mb-4"
            style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
          >
            DIVERSITY IN CULTURE
          </span>
          <h2 
            className="font-display m-0 text-black uppercase"
            style={{ fontSize: '72px', letterSpacing: '0.04em' }}
          >
            Sectors & Neighborhood Directory
          </h2>
          <div className="mt-4" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
          <p 
            className="font-body mt-6"
            style={{ 
              fontSize: '16px', 
              color: '#555555', 
              maxWidth: '700px',
              lineHeight: 1.75
            }}
          >
            Dharavi is not uniform; it is divided into six distinct sectors, each harboring unique religious congregations, regional dialects, and specialized trades.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col bg-white border rounded shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
            >
              {/* Image with mini-map inset */}
              <div className="relative w-full h-[200px] bg-gray-100">
                <Image
                  src={sector.image}
                  alt={`Photograph of ${sector.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
                
                {/* SVG Mini-map inset */}
                <div 
                  className="absolute bottom-3 right-3 p-2 rounded"
                  style={{ 
                    backgroundColor: 'rgba(12, 12, 12, 0.85)', 
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <svg width="60" height="40" viewBox="0 0 200 130" className="w-auto h-[32px]">
                    {/* Background boundary outline */}
                    <rect x="5" y="5" width="190" height="120" rx="3" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                    {/* All sectors in gray */}
                    <path d="M 10 70 L 60 70 L 60 110 L 10 110 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 70 70 L 120 70 L 120 110 L 70 110 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 130 70 L 180 70 L 180 110 L 130 110 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 40 20 L 110 20 L 110 60 L 40 60 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 120 20 L 170 20 L 170 60 L 120 60 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 10 20 L 35 20 L 35 60 L 10 60 Z" fill="rgba(255,255,255,0.15)" />
                    
                    {/* Highlighted sector in gold */}
                    <path d={sector.highlightPath} fill="var(--nbt-gold)" />
                  </svg>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-lg text-black mb-3">
                  {sector.name}
                </h3>
                <p 
                  className="font-body text-sm mb-6 flex-grow text-gray-600"
                  style={{ lineHeight: 1.6 }}
                >
                  {sector.desc}
                </p>

                {/* View Details CTA */}
                <Link 
                  href={`/sectors/${sector.slug}`}
                  className="font-heading font-semibold uppercase text-xs inline-flex items-center gap-2 no-underline tracking-wider hover:opacity-60 transition-opacity duration-200 mt-auto"
                  style={{ color: 'var(--nbt-gold)' }}
                >
                  Explore Neighborhood
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
