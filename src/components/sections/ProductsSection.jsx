import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: 'Photovoltaic Panel',
    label: 'Portable Solar Panel',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/3f1cab7c1_generated_a857d9ee.png',
    tag: 'Best Seller',
  },
  {
    name: 'Solar Generator',
    label: 'Solar Power Battery',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/fcde1559f_generated_5a335ab0.png',
    tag: 'New',
  },
  {
    name: 'Industrial Solar Panel',
    label: 'House Solar Panel',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/62545ddd2_generated_64485202.png',
    tag: null,
  },
  {
    name: 'Solar Street Light',
    label: 'Solar Street Light',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/909aa6241_generated_59f74d6f.png',
    tag: 'Popular',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-solar-orange font-medium mb-4">Our Products</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-md">
              We offer a range of charge points to choose from.
            </h2>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-solar-teal hover:gap-3 transition-all duration-300 w-fit"
          >
            View All Products <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-solar-lighter rounded-2xl lg:rounded-3xl p-4 lg:p-6 relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider bg-solar-teal text-white px-2.5 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{product.label}</p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">{product.name}</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-solar-teal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}