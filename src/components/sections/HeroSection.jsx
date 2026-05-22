import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/8a58bb9a6_generated_ce2c88e5.png';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden min-h-[500px] lg:min-h-[85vh]">
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMG}
              alt="Solar panel installation worker on rooftop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[500px] lg:min-h-[85vh] p-6 lg:p-12">
            <div className="flex justify-between items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-xl lg:max-w-2xl pt-8 lg:pt-12"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                  Innovative Solar<br />
                  Home Lighting<br />
                  Solution.
                </h1>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#services"
                  className="flex items-center gap-2 rounded-full bg-white text-solar-teal hover:bg-white/90 px-6 h-11 text-sm font-medium transition-colors duration-200"
                >
                  Explore More <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Play video"
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-8"
              >
                <div className="backdrop-blur-md bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
                  <p className="text-3xl lg:text-4xl font-bold text-white">50+</p>
                  <p className="text-xs text-white/70 mt-1">Years Experience</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
                  <p className="text-3xl lg:text-4xl font-bold text-white">12M+</p>
                  <p className="text-xs text-white/70 mt-1">Panel Installed</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}