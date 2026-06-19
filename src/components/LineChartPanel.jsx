'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { sharedChartOptions } from '@/lib/chartConfig';

// Chart.js registration is done via import side-effect
import '@/lib/chartConfig';

export default function LineChartPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animateCharts, setAnimateCharts] = useState(false);

  // Trigger chart animation when in view
  if (isInView && !animateCharts) {
    setAnimateCharts(true);
  }

  const residentialData = {
    labels: ['2007', '2008', '2009', '2010'],
    datasets: [
      {
        label: 'Residential Property Prices (₹ per sq ft)',
        data: animateCharts ? [3200, 4800, 6100, 8500] : [0, 0, 0, 0],
        borderColor: '#C9A84C',
        backgroundColor: 'rgba(201, 168, 76, 0.1)',
        borderWidth: 2.5,
        pointBackgroundColor: '#C9A84C',
        pointBorderColor: '#C9A84C',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const commercialData = {
    labels: ['2007', '2008', '2009', '2010'],
    datasets: [
      {
        label: 'Commercial Property Prices (₹ per sq ft)',
        data: animateCharts ? [5400, 7200, 9800, 14200] : [0, 0, 0, 0],
        borderColor: '#D96EAF',
        backgroundColor: 'rgba(217, 110, 175, 0.1)',
        borderWidth: 2.5,
        pointBackgroundColor: '#D96EAF',
        pointBorderColor: '#D96EAF',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const residentialOptions = {
    ...sharedChartOptions,
    plugins: {
      ...sharedChartOptions.plugins,
      title: {
        display: true,
        text: 'Residential Property Prices (₹ per sq ft)',
        color: 'rgba(255, 255, 255, 0.85)',
        font: {
          family: 'Barlow Condensed',
          size: 16,
          weight: 700,
        },
        padding: { bottom: 20 },
      },
    },
  };

  const commercialOptions = {
    ...sharedChartOptions,
    plugins: {
      ...sharedChartOptions.plugins,
      title: {
        display: true,
        text: 'Commercial Property Prices (₹ per sq ft)',
        color: 'rgba(255, 255, 255, 0.85)',
        font: {
          family: 'Barlow Condensed',
          size: 16,
          weight: 700,
        },
        padding: { bottom: 20 },
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--dark-navy)' }}
    >
      <div
        className="max-w-editorial mx-auto"
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag block mb-4">DATA</span>
          <h2
            className="font-display text-white m-0 leading-none"
            style={{ fontSize: '64px' }}
          >
            Land of High Returns
          </h2>
          <p
            className="font-body mt-6"
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '700px',
              lineHeight: 1.7,
            }}
          >
            Between 2007 and 2010, Dharavi land values escalated dramatically despite - or
            because of - the redevelopment proposals.
          </p>
        </motion.div>

        {/* Charts grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
          >
            <Line data={residentialData} options={residentialOptions} />
          </div>
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
          >
            <Line data={commercialData} options={commercialOptions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
