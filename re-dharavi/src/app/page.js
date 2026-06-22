'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SectionDivider from '@/components/SectionDivider';
import EditorialRow from '@/components/EditorialRow';
import LineChartPanel from '@/components/LineChartPanel';
import ClippingTimeline from '@/components/ClippingTimeline';
import MapPanel from '@/components/MapPanel';
import CoopTable from '@/components/CoopTable';
import NayaDharaviSection from '@/components/NayaDharaviSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  const horizontalRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  // Overlapping right-to-left transitions for the horizontal stack (Slides 2 to 5 cover the previous slide)
  // Slide 1 (Makeover Divider) is static as the base of the horizontal scroll track.
  const x2 = useTransform(scrollYProgress, [0, 0.25], ['100vw', '0vw']);
  const x3 = useTransform(scrollYProgress, [0.25, 0.5], ['100vw', '0vw']);
  const x4 = useTransform(scrollYProgress, [0.5, 0.75], ['100vw', '0vw']);
  const x5 = useTransform(scrollYProgress, [0.75, 1.0], ['100vw', '0vw']);

  return (
    <main style={{ backgroundColor: 'var(--off-white)' }}>
      {/* Fixed navbar overlay */}
      <Navbar />

      {/* 1. Hero Section - Sticky at the base */}
      <div className="sticky top-0 z-0 w-full">
        <HeroSection />
      </div>

      {/* 2. Section Divider - Part 01 - Sticky (slides on top of Hero) */}
      <div id="story" className="relative w-full" style={{ height: 0, margin: 0, padding: 0 }} />
      <div className="responsive-sticky-section z-10 w-full">
        <SectionDivider
          partNumber="01"
          title="The Dharavi Story"
          description="A million lives. A thousand trades. One fiercely contested square mile holding the soul of Mumbai."
          imageSrc="/images/dharavi-street.png"
          imageAlt="Black and white documentary photograph of a busy narrow street in Dharavi, Mumbai, showing workers and small shops"
          fullHeight={true}
        />
      </div>

      {/* 3. Slide 2: A City Within A City (Editorial Row 01 - Sticky vertical reveal) */}
      <div className="responsive-editorial-sticky z-20 w-full flex flex-col justify-center pt-[80px]" style={{ backgroundColor: 'var(--off-white)', boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <EditorialRow
          ghostNumber="01"
          label="THE STORY"
          heading="A City Within A City"
          body="Dharavi, located at the geographic centre of Mumbai, is home to over one million people across 2.39 square kilometres. What outsiders label a slum, residents know as a self-organised economy generating an estimated USD 650 million annually."
          pullQuote="The residents did not come to Dharavi to be poor. They came to work."
          statNumber="650M"
          statLabel="USD estimated annual output"
          imageSrc="/images/dharavi-pottery.png"
          imageAlt="Black and white documentary photograph of workers in a pottery workshop in Dharavi, Mumbai"
          compact={true}
        />
      </div>

      {/* 4. Slide 3: Land of High Returns (Data Panel - Sticky vertical reveal) */}
      <div className="responsive-editorial-sticky z-30 w-full flex flex-col justify-center pt-[80px]" style={{ backgroundColor: 'var(--dark-navy)', boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <LineChartPanel compact={true} />
      </div>

      {/* 5. Horizontal Overlapping Slide Track - z-40 (scrolls naturally after Data Panel, then locks and slides horizontally right-to-left) */}
      <div id="makeover" ref={horizontalRef} className="horizontal-track-container z-40" style={{ boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <div className="horizontal-sticky-wrapper bg-off-white">
          {/* Slide 1: Part 02 Section Divider (Static initial slide in the background) */}
          <div className="horizontal-slide bg-off-white" style={{ zIndex: 10 }}>
            <SectionDivider
              partNumber="02"
              title="Makeover or Takeover"
              description="When global capital meets local resilience, whose vision of the future prevails?"
              imageSrc="/images/dharavi-rooftop.png"
              imageAlt="Black and white photograph of dense residential buildings in Dharavi seen from a rooftop perspective"
              fullHeight={true}
            />
          </div>

          {/* Slide 2: Redevelopment Editorial Row (slides in horizontally on top of Slide 1) */}
          <motion.div
            style={{ x: x2, zIndex: 20 }}
            className="horizontal-slide bg-off-white"
          >
            <EditorialRow
              reversed={true}
              ghostNumber="02"
              label="REDEVELOPMENT"
              heading="The ₹15,000 Crore Question"
              body="In 2004, the Maharashtra government announced the Dharavi Redevelopment Project, inviting global developers to bid on five sectors. The plan promised free housing for residents but failed to account for the 57 categories of livelihoods operating within the informal economy."
              pullQuote="Redevelopment was never designed with residents - it was designed around them."
              statNumber="57"
              statLabel="distinct livelihood categories threatened"
              imageSrc="/images/dharavi-street.png"
              imageAlt="Documentary photograph showing Dharavi sector zones proposed for redevelopment"
              imageCaption="Sector IV - Proposed Redevelopment Zones"
              splitCompact={true}
            />
          </motion.div>

          {/* Slide 3: Newspaper Clipping Timeline (slides in horizontally on top of Slide 2) */}
          <motion.div
            style={{ x: x3, zIndex: 30 }}
            className="horizontal-slide bg-off-white"
          >
            <ClippingTimeline compact={true} />
          </motion.div>

          {/* Slide 4: Sector IV Interactive Map (slides in horizontally on top of Slide 3) */}
          <motion.div
            style={{ x: x4, zIndex: 40, backgroundColor: 'var(--charcoal)' }}
            className="horizontal-slide"
          >
            <MapPanel compact={true} />
          </motion.div>

          {/* Slide 5: Community Structures Table (slides in horizontally on top of Slide 4) */}
          <motion.div
            style={{ x: x5, zIndex: 50 }}
            className="horizontal-slide bg-off-white"
          >
            <CoopTable compact={true} />
          </motion.div>
        </div>
      </div>

      {/* 6. Resume Vertical Flow (Naya Dharavi & About Section) - z-40 (scrolls naturally after horizontal track finishes) */}
      <div className="relative z-40 w-full bg-off-white" style={{ boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <div id="naya-dharavi">
          <NayaDharaviSection />
        </div>
        <AboutSection />
      </div>
    </main>
  );
}
