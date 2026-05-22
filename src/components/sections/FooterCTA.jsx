import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Services: ['Solar Installation', 'Maintenance', 'Consulting', 'Energy Audit'],
  Support: ['Help Center', 'Contact Us', 'FAQ', 'Community'],
};

export default function FooterCTA() {
  return (
    <section id="contact" className="px-4 lg:px-6 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden mb-16"
        >
          <div className="relative h-[300px] lg:h-[400px]">
            <img
              src="https://media.base44.com/images/public/6a102f9f64f8c1015a4cf965/411557579_generated_a326dc04.png"
              alt="Solar installation team at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-solar-teal/90 via-solar-teal/70 to-solar-teal/50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70 mb-4 font-medium">Join Our Mission</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">Become Our Member</h2>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-solar-orange hover:bg-solar-orange/90 text-white px-8 h-12 text-sm font-medium gap-2 transition-colors duration-200"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none overflow-hidden">
            <span className="text-[8rem] lg:text-[16rem] font-bold text-solar-light tracking-wider leading-none block -mb-8 lg:-mb-16">
              SOLARA
            </span>
          </div>
          <div className="relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-solar-teal flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-solar-orange" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">Solara</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
                  Leading the transition to sustainable energy with innovative solar solutions for homes and businesses.
                </p>
                <div className="space-y-2">
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" /> hello@solara.com
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4" /> +1 (555) 123-4567
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <MapPin className="w-4 h-4" /> San Francisco, CA
                  </a>
                </div>
              </div>

              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">© 2025 Solara. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}