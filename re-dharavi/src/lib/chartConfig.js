import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const sharedChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    duration: 1500,
    easing: 'easeInOutQuart',
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#1A1A1A',
      titleFont: {
        family: 'Barlow',
        size: 12,
        weight: 600,
      },
      bodyFont: {
        family: 'Barlow',
        size: 13,
      },
      padding: { top: 8, bottom: 8, left: 12, right: 12 },
      cornerRadius: 4,
      displayColors: false,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: 'Barlow',
          size: 11,
        },
        color: 'rgba(255, 255, 255, 0.6)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.08)',
      },
      border: {
        color: 'rgba(255, 255, 255, 0.15)',
      },
    },
    y: {
      ticks: {
        font: {
          family: 'Barlow',
          size: 11,
        },
        color: 'rgba(255, 255, 255, 0.6)',
        callback: function(value) {
          return '₹' + value.toLocaleString();
        },
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.08)',
      },
      border: {
        color: 'rgba(255, 255, 255, 0.15)',
      },
    },
  },
};
