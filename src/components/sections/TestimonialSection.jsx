import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Their solar panel configuration reduced our monthly electricity costs by 65%. So clean, visually appealing, and delivers outstanding performance from day one.",
    name: 'David Chen',
    role: 'CEO, TechVentures',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/30c30fbca_generated_8471c9cc.png',
    rating: 5,
  },
  {
    text: "Solara transformed our factory roof into a power generation hub. We now produce 80% of our own electricity and the ROI has been incredible.",
    name: 'Sarah Mitchell',
    role: 'Director, GreenWorks Inc.',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/7ab5ef5d6_generated_3d0b8c91.png',
    rating: 5,
  },
  {
    text: "The installation team was professional, quick, and the results speak for themselves. Our home is now 100% solar powered and we love it.",
    name: 'James Rodriguez',
    role: 'Homeowner, Austin TX',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/ab2d772a8_generated_9e3aaed4.png',
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const currentTestimonial = testimonials[current];

  return (
    <section id="testimonial" className="py-20 lg:py-32 px-4 lg:px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
            Trusted by many,
            <br />
            loved by more.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                CLIENT STORY
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-solar-orange text-solar-orange" />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-solar-light transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-solar-light transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-solar-teal w-6' : 'bg-border w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}