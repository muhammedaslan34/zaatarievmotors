'use client'

import Link from 'next/link';
import { Battery, Gauge, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const models = [
  {
    id: 1,
    name: 'Leopard 7',
    tagline: 'Flagship Electric SUV',
    price: 'AED 245,000',
    image: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: [
      { icon: Battery, label: '550 km Range' },
      { icon: Gauge, label: '0-100 in 4.2s' },
      { icon: Zap, label: '500 HP' },
    ],
    features: ['Five-sense Cockpit', 'Interstellar Ark Design', '1000L Cargo'],
  },
  {
    id: 2,
    name: 'Leopard 5',
    tagline: 'Compact Premium SUV',
    price: 'AED 195,000',
    image: 'https://images.unsplash.com/photo-1762788145271-7542ad382330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTE4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: [
      { icon: Battery, label: '450 km Range' },
      { icon: Gauge, label: '0-100 in 5.1s' },
      { icon: Zap, label: '380 HP' },
    ],
    features: ['Smart Assists', '360° Safety', 'Premium Interior'],
  },
  {
    id: 3,
    name: 'Leopard Series',
    tagline: 'Coming Soon',
    price: 'Pre-Order Now',
    image: 'https://images.unsplash.com/photo-1735620731955-b047a7122892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwU1VWJTIwYmxhY2t8ZW58MXx8fHwxNzYyOTQ1NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: [
      { icon: Battery, label: '600+ km Range' },
      { icon: Gauge, label: 'Ultra Fast' },
      { icon: Zap, label: 'Next Gen Power' },
    ],
    features: ['Advanced AI', 'Autonomous Ready', 'Premium Luxury'],
  },
];

export default function FeaturedModels() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-[#16181C]">
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
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl text-[#E6F6FF] mb-4">Featured Models</h2>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Discover our range of premium electric vehicles designed for the future
            </p>
          </motion.div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.slice(0, 2).map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#16181C] rounded-2xl overflow-hidden border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] via-transparent to-transparent"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5FF]/0 to-[#00E5FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-3xl text-[#E6F6FF] mb-2">BYD {model.name}</h3>
                <p className="text-2xl text-[#0EA5FF] mb-6">{model.price}</p>

                {/* CTA */}
                <Link
                  href="/models"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-[#007bff] text-white rounded-lg group-hover:shadow-lg group-hover:shadow-[#007bff]/50 transition-all duration-300"
                >
                  <span>Explore Model</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/models"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
          >
            <span>View All Models</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}