import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FEATURE_IMG = 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/cd7ddfd69_generated_f593f9b3.png';

const features = [
  { icon: '☀️', label: 'Solar Energy', value: '98% Efficiency' },
  { icon: '🌿', label: 'Eco Friendly', value: '0 Emissions' },
  { icon: '⚡', label: 'Fast Setup', value: '2-5 Days' },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 lg:px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Editorial Text */}
          <motion.div {...fadeUp} className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-solar-orange font-medium mb-4">About Solara</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              We drive innovation and improvement to create cost-effective, eco-friendly products powered by renewable energy.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to sustainable solutions has made us a leader in solar technology, 
              delivering reliable and affordable energy systems to homes and businesses worldwide.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-lg shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{f.label}</p>
                    <p className="text-xs text-muted-foreground">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-solar-teal hover:gap-3 transition-all duration-300">
              Learn More <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right - Stacked Cards */}
          <div className="space-y-6">
            {/* Dark Stats Card */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="bg-solar-teal rounded-3xl p-8 text-white"
            >
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-5xl lg:text-6xl font-bold">150+</p>
                  <p className="text-white/70 mt-2 text-sm">Countries with Solara installations and active maintenance partners</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-solar-orange" />
                </div>
              </div>
            </motion.div>

            {/* Image Card */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="rounded-3xl overflow-hidden group"
            >
              <div className="relative h-56 lg:h-64">
                <img
                  src={FEATURE_IMG}
                  alt="Aerial view of solar panel installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-6 left-6 text-white text-sm font-medium">
                  Renewable energy for communities worldwide
                </p>
              </div>
            </motion.div>

            {/* White Info Card */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border/50"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every solar panel we install reduces carbon emissions by an average of 1.5 tons per year. 
                Our technology is designed for maximum efficiency and minimum environmental impact.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-solar-lighter border-2 border-white flex items-center justify-center text-xs font-semibold text-muted-foreground">
                      {['A', 'B', 'C'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">200+ Happy Clients</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}