import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Testimonial', href: '#testimonial' },
];

const LOGO_IMG = 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/87f1d40f8_logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 lg:px-8 transition-all duration-300 ${
          scrolled ? 'top-0 py-3' : 'top-4 py-0'
        }`}
      >
        <div className={`w-full max-w-7xl flex items-center justify-between rounded-full px-6 lg:px-8 py-3 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/60 backdrop-blur-sm'
        }`}>
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <img src={LOGO_IMG} alt="Solara Logo" className="h-7 w-auto" onError={(e) => { e.target.style.display = 'none'; }} />
              <span className="text-xl font-semibold tracking-tight text-gray-900">Solara</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-solar-teal transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-solar-orange text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-solar-orange/90 transition-colors duration-200"
              >
                Get a Free Quote
                <span className="bg-white/20 rounded-full p-0.5 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-6 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-foreground hover:text-solar-teal transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 bg-solar-orange text-white text-base font-medium px-6 py-3 rounded-full w-fit mt-4"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}