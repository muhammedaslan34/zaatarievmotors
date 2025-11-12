import { Sparkles, Armchair, Cpu, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const pillars = [
  {
    icon: Sparkles,
    title: 'Design & Innovation',
    description: 'Interstellar Ark styling with titanium lighting and futuristic aesthetics that turn heads.',
    color: 'from-[#0EA5FF] to-[#00E5FF]',
  },
  {
    icon: Armchair,
    title: 'Comfort & Space',
    description: 'Five-sense cockpit experience with ~1000L cargo capacity and premium materials throughout.',
    color: 'from-[#00E5FF] to-[#00B4FF]',
  },
  {
    icon: Cpu,
    title: 'Technology & Safety',
    description: 'Smart driving assists, 360° protection systems, and cutting-edge electric powertrain.',
    color: 'from-[#00B4FF] to-[#0EA5FF]',
  },
  {
    icon: Shield,
    title: 'Trust & Support',
    description: 'Authorized BYD distributor in Dubai with comprehensive warranty and service network.',
    color: 'from-[#0EA5FF] to-[#00E5FF]',
  },
];

export default function ValuePillars() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF] mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl text-[#E6F6FF] mb-4">Future-Driven Mobility</h2>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Experience the perfect blend of innovation, comfort, and reliability
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5FF]/0 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${pillar.color} p-0.5`}>
                    <div className="w-full h-full bg-[#16181C] rounded-lg flex items-center justify-center">
                      <pillar.icon className="w-7 h-7 text-[#00E5FF]" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl text-[#E6F6FF] mb-3">{pillar.title}</h3>

                {/* Description */}
                <p className="text-sm text-[#BFC6CC]">{pillar.description}</p>
              </div>

              {/* Bottom Border Glow */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
