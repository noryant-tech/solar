import { motion } from 'framer-motion';
import { Sun, Zap, Leaf } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8 },
};

export default function IntroSection() {
  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-32 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Text */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg lg:text-xl text-foreground leading-relaxed">
            Solara system delivers{' '}
            <span className="inline-flex items-center gap-1.5 mx-1">
              <Sun className="w-5 h-5 text-solar-orange" />
            </span>
            {' '}simple solar solutions
            to help you <span className="font-semibold text-foreground">save energy</span>,{' '}
            <span className="font-semibold text-foreground">cut costs</span>, and build
            a <span className="font-semibold text-foreground">sustainable future</span>
          </p>
        </motion.div>

        {/* Icon Row */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex justify-center gap-8 mb-16"
        >
          {[
            { icon: Sun, label: 'Solar Energy' },
            { icon: Zap, label: 'Power Systems' },
            { icon: Leaf, label: 'Eco Friendly' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-solar-light flex items-center justify-center">
                <item.icon className="w-5 h-5 text-solar-teal" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground border-t border-b border-border py-6"
        >
          {['200+ CLIENTS', '50 STATES', '12M+ PANELS', '99% UPTIME'].map((stat) => (
            <span key={stat} className="font-medium tracking-wider text-xs uppercase">{stat}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}