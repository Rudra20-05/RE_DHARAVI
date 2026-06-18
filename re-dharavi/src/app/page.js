'use client';

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
  return (
    <main>
      {/* Fixed navbar overlay */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Section Divider - Part 01 */}
      <div id="story">
        <SectionDivider
          partNumber="01"
          title="The Dharavi Story"
          description="A million lives. A thousand trades. One fiercely contested square mile holding the soul of Mumbai."
          imageSrc="/images/dharavi-street.png"
          imageAlt="Black and white documentary photograph of a busy narrow street in Dharavi, Mumbai, showing workers and small shops"
        />
      </div>

      {/* 3. Dharavi Story - Editorial Row */}
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
      />

      {/* 4. Data Panel - Land of High Returns */}
      <LineChartPanel />

      {/* 5. Section Divider - Part 02 */}
      <div id="makeover">
        <SectionDivider
          partNumber="02"
          title="Makeover or Takeover"
          description="When global capital meets local resilience, whose vision of the future prevails?"
          imageSrc="/images/dharavi-rooftop.png"
          imageAlt="Black and white photograph of dense residential buildings in Dharavi seen from a rooftop perspective"
        />
      </div>

      {/* 6. Redevelopment Editorial Row (reversed) */}
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
      />

      {/* 7. Newspaper Clipping Timeline */}
      <ClippingTimeline />

      {/* 8. Sector IV Interactive Map */}
      <MapPanel />

      {/* 9. Community Structures Table */}
      <CoopTable />

      {/* 10. Naya Dharavi - Community Platform */}
      <div id="naya-dharavi">
        <NayaDharaviSection />
      </div>

      {/* 11. About Section + Footer */}
      <AboutSection />
    </main>
  );
}
