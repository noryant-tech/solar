import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do solar panels work?',
    answer:
      'Solar panels convert sunlight into electricity through photovoltaic cells. When sunlight hits these cells, it creates an electric field that generates direct current (DC) electricity, which is then converted to alternating current (AC) for use in your home or business.',
  },
  {
    question: 'Are solar panels sustainable?',
    answer: 'Yes. Solar panels generate clean energy and reduce reliance on fossil fuels, lowering long-term emissions and environmental impact. They typically pay back their carbon footprint within 1-4 years and continue producing clean energy for 25+ years.',
  },
  {
    question: 'Do solar panels work in cloudy weather?',
    answer: 'Yes. Panels still produce electricity on cloudy days, though output is lower than in full sunlight. Modern high-efficiency panels can produce up to 25% of their rated capacity on overcast days.',
  },
  {
    question: 'What is the installation timeline?',
    answer: 'Typical installations take 2-5 days depending on system size and site conditions. We handle all permits and grid connection paperwork, usually adding 2-4 weeks for approvals before we can begin installation.',
  },
  {
    question: 'What financing options are available?',
    answer: 'We offer flexible financing including zero-down solar loans, leases, and power purchase agreements (PPAs). Many customers find that their monthly solar payment is less than their previous electricity bill.',
  },
];

const faqImages = [
  'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/61b99f5ff_generated_8eec61cb.png',
  'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/d027ad724_generated_c62292ba.png',
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="py-20 lg:py-32 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-solar-orange font-medium mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-5xl font-medium text-foreground">
              Your Questions, Our Answers.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {faqImages.map((src) => (
              <div key={src} className="w-16 h-16 rounded-2xl overflow-hidden">
                <img src={src} alt="Solar detail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[2rem] overflow-hidden transition-colors duration-300 ${
                  isExpanded ? 'bg-[#F3F4F6]' : 'bg-transparent border border-gray-200'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="w-full px-6 py-6 lg:px-10 lg:py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-lg lg:text-xl font-medium ${isExpanded ? 'text-black' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isExpanded ? 'bg-black text-white' : 'bg-gray-100 text-black'
                    }`}
                  >
                    {isExpanded ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="px-6 pb-8 lg:px-10 overflow-hidden"
                    >
                      <p className="text-gray-600 max-w-2xl leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}