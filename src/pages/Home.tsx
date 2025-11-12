import Hero from '../components/Hero';
import FeaturedModels from '../components/FeaturedModels';
import ValuePillars from '../components/ValuePillars';
import OfferCountdown from '../components/OfferCountdown';
import { Link } from 'react-router-dom';
import { Award, Users, MapPin, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '10+' },
  { icon: Users, label: 'Happy Customers', value: '5,000+' },
  { icon: MapPin, label: 'Service Centers', value: '15+' },
  { icon: Headphones, label: '24/7 Support', value: 'Always' },
];

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      
      <FeaturedModels />
      
      <ValuePillars />
      
      <OfferCountdown />

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0EA5FF]/20 to-[#00E5FF]/20 border border-[#0EA5FF]/30 mb-4">
                  <stat.icon className="w-8 h-8 text-[#00E5FF]" />
                </div>
                <div className="text-3xl md:text-4xl text-[#00E5FF] mb-2">{stat.value}</div>
                <div className="text-sm text-[#BFC6CC]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-[#16181C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF] mb-4">
                Advanced Technology
              </span>
              <h2 className="text-4xl md:text-5xl text-[#E6F6FF] mb-6">
                Experience the Future of Driving
              </h2>
              <p className="text-lg text-[#BFC6CC] mb-6">
                Our vehicles feature cutting-edge technology including autonomous driving capabilities, 
                AI-powered assistance, and a revolutionary five-sense cockpit experience that redefines luxury.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Five-sense Cockpit with ambient lighting',
                  '360° Safety Protection System',
                  'Smart Driving Assistance',
                  'Wireless Phone Charging & Connectivity',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0EA5FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#E6F6FF]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/models"
                className="inline-block px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300"
              >
                Explore Technology
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626684468293-ac18117177a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2FyJTIwaW50ZXJpb3IlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyOTQ1NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Advanced Interior"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5FF]/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dubai Skyline CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjI5MzcwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl text-[#E6F6FF] mb-6">
              Ready to Drive the Future?
            </h2>
            <p className="text-lg text-[#BFC6CC] mb-8 max-w-2xl mx-auto">
              Visit our showroom in Dubai Meydan or book a test drive to experience 
              the revolution in electric mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-test-drive"
                className="inline-block px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300"
              >
                Book Test Drive
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}