import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Rooming Chemical ParkPanell',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/e6521c8d9_generated_b1228a3a.png',
    size: 'large',
  },
  {
    title: 'Bento Sugar Coating Parell',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/9415a7cc3_generated_f388f9c4.png',
    size: 'tall',
  },
  {
    title: 'Celebrating Our Heritage',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/0fa8815e8_generated_d37ff6ec.png',
    size: 'medium',
  },
  {
    title: 'Water Irrigation Roadworks Village',
    image: 'https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/d4b8e7d82_generated_a5dc2c69.png',
    size: 'wide',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Dark container */}
        <div className="bg-solar-teal rounded-3xl lg:rounded-[2rem] p-6 lg:p-12 overflow-hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 lg:mb-16"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-4">Our Projects</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Explore our projects
                <br />
                in the real world.
              </h2>
            </div>
            <div className="flex items-center gap-4">
              {[projects[2], projects[3]].map((project) => (
                <div key={project.title} className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <a href="#" className="text-white/70 text-sm font-medium hover:text-white transition-colors ml-2">
                View All →
              </a>
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 group"
            >
              <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{projects[0].title}</p>
                </div>
              </div>
            </motion.div>

            {/* Tall card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:row-span-2 group"
            >
              <div className="relative rounded-2xl overflow-hidden h-64 lg:h-full">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{projects[1].title}</p>
                </div>
              </div>
            </motion.div>

            {/* Medium card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{projects[2].title}</p>
                </div>
              </div>
            </motion.div>

            {/* Wide card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{projects[3].title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}