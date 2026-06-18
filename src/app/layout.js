import './globals.css';

export const metadata = {
  title: 'RE: Dharavi',
  description:
    'A scroll-driven editorial website documenting Dharavi, Mumbai\'s informal economy and community resistance to large-scale redevelopment.',
  openGraph: {
    title: 'RE: Dharavi',
    description:
      'A scroll-driven editorial website documenting Dharavi, Mumbai\'s informal economy and community resistance to large-scale redevelopment.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
