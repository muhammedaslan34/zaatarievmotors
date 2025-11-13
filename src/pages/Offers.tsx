'use client'

import Link from 'next/link';
import { Tag, Gift, Percent, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import OfferCountdown from '../components/OfferCountdown';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const offers = [
  {
    id: 1,
    title: 'Year-End Clearance',
    subtitle: 'Save up to AED 50,000',
    description: 'Get massive discounts on select 2024 models. Limited stock available.',
    image: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 'Up to AED 50,000 off',
    validUntil: 'December 1, 2025',
    featured: true,
  },
  {
    id: 2,
    title: '0% Financing',
    subtitle: 'Zero Interest on All Models',
    description: 'Get 0% APR financing for up to 36 months on approved credit.',
    image: 'https://images.unsplash.com/photo-1762788145271-7542ad382330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTE4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '0% APR for 36 months',
    validUntil: 'December 31, 2025',
    featured: true,
  },
  {
    id: 3,
    title: 'Free Accessory Package',
    subtitle: 'AED 15,000 Value',
    description: 'Premium accessories package including wall charger, floor mats, and window tint.',
    image: 'https://images.unsplash.com/photo-1735620731955-b047a7122892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwU1VWJTIwYmxhY2t8ZW58MXx8fHwxNzYyOTQ1NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 'AED 15,000 worth of extras',
    validUntil: 'November 30, 2025',
    featured: false,
  },
  {
    id: 4,
    title: 'Trade-In Bonus',
    subtitle: 'Extra AED 10,000',
    description: 'Get an additional AED 10,000 on your trade-in vehicle towards any new EV purchase.',
    image: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '+AED 10,000 trade-in value',
    validUntil: 'December 15, 2025',
    featured: false,
  },
];

const benefits = [
  {
    icon: Tag,
    title: 'Best Price Guarantee',
    description: 'We match or beat any competitor pricing on equivalent models.',
  },
  {
    icon: Gift,
    title: 'Free Extras',
    description: 'Complimentary accessories and upgrades with every purchase.',
  },
  {
    icon: Percent,
    title: 'Flexible Financing',
    description: 'Multiple financing options tailored to your needs.',
  },
  {
    icon: Calendar,
    title: 'Extended Warranty',
    description: 'Up to 8 years comprehensive warranty on all vehicles.',
  },
];

export default function Offers() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF] mb-4">
            Special Offers
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Exclusive Deals</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Take advantage of our limited-time offers and drive home your dream EV today
          </p>
        </motion.div>

        {/* Countdown */}
        <OfferCountdown />

        {/* Offers Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-[#16181C] rounded-2xl overflow-hidden border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300 ${
                offer.featured ? 'md:col-span-2' : ''
              }`}
            >
              {offer.featured && (
                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-gradient-to-r from-[#0EA5FF] to-[#00E5FF] text-[#0A0A0A] rounded-full text-sm">
                  Featured Offer
                </div>
              )}

              <div className={`grid ${offer.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl text-[#E6F6FF] mb-2">{offer.title}</h3>
                    <p className="text-xl text-[#00E5FF] mb-4">{offer.subtitle}</p>
                    <p className="text-[#BFC6CC] mb-6">{offer.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Tag className="w-5 h-5 text-[#00E5FF]" />
                        <span className="text-[#E6F6FF]">{offer.discount}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-[#00E5FF]" />
                        <span className="text-[#BFC6CC]">Valid until {offer.validUntil}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/book-test-drive"
                    className="group/btn inline-flex items-center justify-center space-x-2 w-full py-3 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
                  >
                    <span>Claim Offer</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Why Buy From Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0EA5FF]/20 to-[#00E5FF]/20 border border-[#0EA5FF]/30 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h3 className="text-lg text-[#E6F6FF] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#BFC6CC]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-12 border border-[#0EA5FF]/30"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Ready to Save?</h2>
          <p className="text-lg text-[#BFC6CC] mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our current offers and financing options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-test-drive"
              className="inline-block px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300"
            >
              Book Test Drive
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}