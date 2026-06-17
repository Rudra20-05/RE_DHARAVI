/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-primary': 'var(--red-primary)',
        'red-dark': 'var(--red-dark)',
        'orange-accent': 'var(--orange-accent)',
        'off-white': 'var(--off-white)',
        'cream': 'var(--cream)',
        'charcoal': 'var(--charcoal)',
        'dark-navy': 'var(--dark-navy)',
        'newspaper-gray': 'var(--newspaper-gray)',
        'gold': 'var(--gold)',
        'paper-border': 'var(--paper-border)',
        'table-border': 'var(--border-table)',
      },
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Libre Baskerville', 'serif'],
        quote: ['Playfair Display', 'serif'],
        newspaper: ['Special Elite', 'cursive'],
        ui: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(80px, 12vw, 160px)',
        'section-header': 'clamp(36px, 5vw, 72px)',
        'sub-header': 'clamp(22px, 3vw, 36px)',
        'pull-quote': 'clamp(20px, 2.5vw, 32px)',
        'body-editorial': 'clamp(15px, 1.2vw, 18px)',
        'callout': 'clamp(120px, 20vw, 300px)',
      },
      maxWidth: {
        'editorial': '1440px',
      },
      spacing: {
        'gutter': '80px',
        'gutter-mobile': '24px',
      },
      letterSpacing: {
        'hero': '0.05em',
        'section': '0.08em',
        'label': '0.12em',
        'wide-label': '0.15em',
        'extra-wide': '0.2em',
      },
      lineHeight: {
        'editorial': '1.7',
      },
    },
  },
  plugins: [],
};
