'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#cover' },
  { label: 'Story', href: '#story' },
  { label: 'Makeover', href: '#makeover' },
  { label: 'Naya Dharavi', href: '#naya-dharavi' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--charcoal)' : 'transparent',
      }}
    >
      <div className="max-w-editorial mx-auto flex items-center justify-between px-gutter py-4 md:py-5"
           style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        {/* Logo */}
        <a
          href="#cover"
          onClick={(e) => handleNavClick(e, '#cover')}
          className="flex items-baseline gap-1 no-underline"
          aria-label="RE: Dharavi - Back to top"
        >
          <span
            className="font-heading font-bold text-sm tracking-extra-wide uppercase"
            style={{ color: 'var(--orange-accent)', letterSpacing: '0.2em' }}
          >
            RE:
          </span>
          <span
            className="font-heading font-bold text-sm tracking-section uppercase text-white"
            style={{ letterSpacing: '0.08em' }}
          >
            DHARAVI
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading font-bold text-xs uppercase tracking-section text-white no-underline hover:opacity-70 transition-opacity duration-200"
                style={{ letterSpacing: '0.08em', fontSize: '13px' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="hamburger-menu"
        >
          <span
            className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{
              transform: mobileOpen ? 'rotate(45deg) translateY(5px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{
              transform: mobileOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-center justify-center md:hidden"
            style={{ backgroundColor: 'var(--charcoal)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-none m-0 p-0 flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-heading font-bold text-2xl uppercase tracking-section text-white no-underline"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
