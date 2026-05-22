import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FEATURE_IMG = 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/cd7ddfd69_generated_f593f9b3.png';

export default function FeatureImage() {
  return (
    <section className="py-4 lg:py-8 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden group"
        >
          <div className="relative h-[400px] lg:h-[560px]">
            <img
              src={FEATURE_IMG}
              alt="Solar panel installation on residential rooftop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-lg">
                <p className="text-xs uppercase tracking-widest text-white/70 mb-3 font-medium">Featured Installation</p>
                <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                  Install solar panels in your home for a greener, more sustainable energy.
                </h3>
              </div>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-white text-solar-teal px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200 shrink-0 w-fit"
              >
                View Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}