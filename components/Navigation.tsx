import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Books', href: '#books' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-nizami-cream/95 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tighter text-nizami-charcoal">
          NIZAMI<span className="text-nizami-gold">.</span>STREET
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest hover:text-nizami-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#books"
            className="px-6 py-2 border border-nizami-charcoal hover:bg-nizami-charcoal hover:text-white transition-all duration-300 font-display text-sm"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-black/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-nizami-cream border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-lg py-3 px-2 hover:text-nizami-gold transition-colors border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#books"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-6 py-3 bg-nizami-charcoal text-white font-display text-sm tracking-wider text-center hover:bg-nizami-gold transition-colors duration-300"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
