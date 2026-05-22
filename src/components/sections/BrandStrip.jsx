import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const brands = ['SunPower', 'Tesla Solar', 'Enphase', 'SolarEdge', 'LG Energy', 'JinkoSolar', 'Canadian Solar', 'Panasonic'];

export default function BrandStrip() {
  return (
    <section className="py-12 px-4 lg:px-6 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-muted-foreground/60 tracking-[0.3em] uppercase text-center mb-8">Trusted by leading brands</p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-sm font-semibold text-muted-foreground/40 tracking-wider uppercase hover:text-muted-foreground/70 transition-colors duration-300 flex-shrink-0"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}