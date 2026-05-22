import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SERVICE_IMG = 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/d027ad724_generated_c62292ba.png';
const WATER_IMG = 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/61b99f5ff_generated_8eec61cb.png';

const services = [
  {
    num: '01',
    title: 'Solar Panel Installation',
    description: 'Professional installation of high-efficiency solar panels for residential and commercial properties. Our certified team ensures optimal placement for maximum energy generation.',
    image: SERVICE_IMG,
    details: [
      { label: 'Efficiency', value: '98%' },
      { label: 'Warranty', value: '25 Years' },
      { label: 'Setup Time', value: '2-5 Days' },
    ],
  },
  {
    num: '02',
    title: 'Water Irrigation',
    description: 'Solar-powered irrigation systems that bring sustainable water management to agricultural and landscaping applications.',
    image: WATER_IMG,
    details: [
      { label: 'Coverage', value: '500 Acres' },
      { label: 'Savings', value: '60%' },
      { label: 'Setup', value: '3-7 Days' },
    ],
  },
  {
    num: '03',
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance programs to keep your solar systems running at peak performance year-round.',
    image: SERVICE_IMG,
    details: [
      { label: 'Response', value: '24hrs' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Support', value: '24/7' },
    ],
  },
  {
    num: '04',
    title: 'Wind Life Product',
    description: 'Hybrid wind and solar energy solutions for maximum renewable energy generation in diverse environments.',
    image: WATER_IMG,
    details: [
      { label: 'Output', value: '150kW' },
      { label: 'Hybrid', value: 'Yes' },
      { label: 'ROI', value: '3 Years' },
    ],
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-20 lg:py-32 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-solar-orange font-medium mb-4">Our Services</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl">
            Smart services designed for a sustainable future.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between py-6 lg:py-8 group text-left"
              >
                <div className="flex items-center gap-6 lg:gap-12">
                  <span className="text-sm font-medium text-muted-foreground">{service.num}</span>
                  <span className="text-lg lg:text-2xl font-semibold text-foreground group-hover:text-solar-teal transition-colors duration-300">
                    {service.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid lg:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="rounded-2xl overflow-hidden h-56 lg:h-72">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between">
                        <div>
                          {/* Details Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {service.details.map((detail) => (
                              <div key={detail.label} className="bg-solar-light rounded-xl p-4">
                                <p className="text-xs text-muted-foreground mb-1">{detail.label}</p>
                                <p className="text-lg font-bold text-foreground">{detail.value}</p>
                              </div>
                            ))}
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>
                        <Button className="rounded-full bg-solar-teal text-white hover:bg-solar-teal/90 px-6 h-10 text-sm font-medium gap-2 w-fit mt-6">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}