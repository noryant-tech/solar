import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'The Future of Solar Energy: Trends to Watch in 2025',
    date: 'Mar 15, 2025',
    category: 'Technology',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/756a15df8_generated_ac8ddb0e.png',
    readTime: '5 min read',
  },
  {
    title: 'How Solar Panels Can Reduce Your Energy Bills by 80%',
    date: 'Mar 10, 2025',
    category: 'Savings',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/e404f0a1a_generated_1e255a50.png',
    readTime: '4 min read',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 px-4 lg:px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-solar-orange font-medium mb-4">Latest News</p>
            <h2 className="text-3xl lg:text-5xl font-medium text-foreground leading-[1.2] max-w-2xl">
              Catch up on today's top updates and the stories that matter most
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-[#1A1A1A] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors duration-200 w-fit shrink-0"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer relative h-[420px] rounded-[2rem] overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                  {article.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 text-xs text-white/70 mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-4 text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}