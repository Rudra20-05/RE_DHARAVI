'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ZONES = [
  {
    id: 'zone-a',
    name: 'Pottery',
    fill: '#8C0044',
    tooltip: 'Kumbharwada - Pottery District, est. population 5,000',
    points: '80,60 230,60 230,200 80,200',
    labelX: 155,
    labelY: 135,
  },
  {
    id: 'zone-b',
    name: 'Leather',
    fill: '#8C6D3F',
    tooltip: 'Dharavi Main Road - Leather tanneries & export units',
    points: '250,60 420,60 420,200 250,200',
    labelX: 335,
    labelY: 135,
  },
  {
    id: 'zone-c',
    name: 'Recycling',
    fill: '#3A7D44',
    tooltip: '13th Compound - Recycling hub processing 80% of Mumbai\'s plastic waste',
    points: '440,60 620,60 620,200 440,200',
    labelX: 530,
    labelY: 135,
  },
  {
    id: 'zone-d',
    name: 'Textiles',
    fill: '#4A6FA5',
    tooltip: 'Koliwada - Garment workshops, 5,000+ units',
    points: '80,230 280,230 280,380 80,380',
    labelX: 180,
    labelY: 310,
  },
  {
    id: 'zone-e',
    name: 'Food',
    fill: '#9B5DE5',
    tooltip: '90 Feet Road - Food processing and bakeries',
    points: '300,230 500,230 500,380 300,380',
    labelX: 400,
    labelY: 310,
  },
  {
    id: 'zone-f',
    name: 'Mixed Residential',
    fill: '#1C0855',
    tooltip: 'Transit Camp - Mixed residential, highest density',
    points: '520,230 740,230 740,380 520,380',
    labelX: 630,
    labelY: 310,
  },
];

export default function MapPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeZone, setActiveZone] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--charcoal)' }}
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
          <h2
            className="font-display text-white m-0 leading-none"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Sector IV - A Neighbourhood Mapped
          </h2>
          <p
            className="font-ui mt-4"
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Hover over zones to explore industry types and population density
          </p>
        </motion.div>

        {/* SVG Map Container */}
        <motion.div
          className="relative mx-auto overflow-x-auto"
          style={{
            maxWidth: '900px',
            WebkitOverflowScrolling: 'touch',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseMove={handleMouseMove}
        >
          <svg
            viewBox="0 0 820 450"
            className="w-full h-auto"
            style={{ minWidth: '600px' }}
            role="img"
            aria-label="Interactive map of Dharavi Sector IV showing six colour-coded zones: Pottery, Leather, Recycling, Textiles, Food, and Mixed Residential"
          >
            {/* Background */}
            <rect
              x="0"
              y="0"
              width="820"
              height="450"
              fill="#0D1B2A"
              rx="4"
            />

            {/* Grid lines */}
            {[100, 200, 300, 400].map((y) => (
              <line
                key={`h-${y}`}
                x1="60"
                y1={y}
                x2="760"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}
            {[200, 400, 600].map((x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="40"
                x2={x}
                y2="400"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}

            {/* Zones */}
            {ZONES.map((zone) => (
              <g key={zone.id}>
                {/* Zone polygon */}
                <polygon
                  points={zone.points}
                  fill={zone.fill}
                  opacity={activeZone === zone.id ? 1.0 : 0.75}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  className="transition-opacity duration-200 cursor-pointer"
                  onMouseEnter={() => setActiveZone(zone.id)}
                  onMouseLeave={() => setActiveZone(null)}
                  onFocus={() => setActiveZone(zone.id)}
                  onBlur={() => setActiveZone(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${zone.name} zone - ${zone.tooltip}`}
                  style={{ outline: 'none' }}
                />

                {/* Hatching pattern overlay for accessibility */}
                <polygon
                  points={zone.points}
                  fill={`url(#hatch-${zone.id})`}
                  opacity={0.15}
                  pointerEvents="none"
                />

                {/* Zone label */}
                <text
                  x={zone.labelX}
                  y={zone.labelY}
                  textAnchor="middle"
                  fill="white"
                  fontSize="13"
                  fontFamily="Barlow, sans-serif"
                  fontWeight="600"
                  pointerEvents="none"
                  opacity={0.9}
                >
                  {zone.name}
                </text>
              </g>
            ))}

            {/* Hatching pattern definitions */}
            <defs>
              {ZONES.map((zone, i) => (
                <pattern
                  key={zone.id}
                  id={`hatch-${zone.id}`}
                  width="6"
                  height="6"
                  patternTransform={`rotate(${45 + i * 15})`}
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="6"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </pattern>
              ))}
            </defs>

            {/* Section title */}
            <text
              x="410"
              y="430"
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontSize="11"
              fontFamily="Barlow, sans-serif"
              letterSpacing="0.15em"
            >
              DHARAVI SECTOR IV - LAND USE MAP
            </text>
          </svg>

          {/* Tooltip */}
          {activeZone && (
            <div
              className="absolute pointer-events-none z-20"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y - 50}px`,
                backgroundColor: 'var(--charcoal)',
                color: 'white',
                fontFamily: 'var(--font-ui)',
                fontSize: '13px',
                padding: '8px 12px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                transform: 'translateX(-50%)',
              }}
            >
              {ZONES.find((z) => z.id === activeZone)?.tooltip}
            </div>
          )}
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap gap-6 mt-8 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {ZONES.map((zone) => (
            <div key={zone.id} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: zone.fill }}
              />
              <span
                className="font-ui"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.75)',
                }}
              >
                {zone.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
