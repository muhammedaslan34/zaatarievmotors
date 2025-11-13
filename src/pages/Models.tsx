'use client'

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Battery, Gauge, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import leopard7Hero from '../assets/BYD-leopard-titanuim-7.webp';

const models = [
  {
    id: 'leopard-7',
    name: 'BYD Leopard 7',
    tagline: 'Titanium Edition',
    description: 'Experience the Interstellar Ark design with titanium lighting and five-sense cockpit technology.',
    image: leopard7Hero,
    specs: [
      { icon: Battery, label: 'Range', value: '550 km' },
      { icon: Gauge, label: '0-100 km/h', value: '4.2s' },
      { icon: Zap, label: 'Power', value: '500 HP' },
    ],
    price: 'Starting at AED 245,000',
    path: '/models/leopard-7',
  },
];

export default function Models() {
  return (
    <div className="pt-20 pb-20 bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl text-[#E6F6FF] mb-6 font-bold">
            Our Models
          </h1>
          <p className="text-xl text-[#BFC6CC] max-w-3xl mx-auto">
            Discover the future of electric mobility with our premium lineup of cutting-edge electric vehicles.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative bg-[#16181C] rounded-2xl overflow-hidden border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-500"
            >
              {/* Model Image */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] via-transparent to-transparent"></div>

                {/* Tagline Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF] backdrop-blur-sm">
                    {model.tagline}
                  </span>
                </div>
              </div>

              {/* Model Details */}
              <div className="p-8">
                <h2 className="text-3xl text-[#E6F6FF] mb-3 font-bold">
                  {model.name}
                </h2>
                <p className="text-[#BFC6CC] mb-6">
                  {model.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {model.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <spec.icon className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div className="text-sm text-[#BFC6CC] mb-1">{spec.label}</div>
                      <div className="text-lg text-[#E6F6FF] font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-2xl text-[#00E5FF] mb-6 font-semibold">
                  {model.price}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={model.path}
                    className="group/btn flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/book-test-drive"
                    className="flex-1 px-6 py-3 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300 text-center"
                  >
                    Book Test Drive
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-12 border border-[#0EA5FF]/30"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Can't Decide?</h2>
          <p className="text-lg text-[#BFC6CC] mb-8 max-w-2xl mx-auto">
            Compare our models side by side or speak with our experts to find the perfect electric vehicle for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/compare"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
            >
              <span>Compare Models</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
