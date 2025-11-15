'use client'

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import heroImage from '@/assets/hero.webp';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971501234567?text=Hello%2C%20I%20am%20interested%20in%20ZAATARI%20EV%20Motors', '_blank');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Animated Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={heroImage}
            alt="ZAATARI EV Motors Hero"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        </motion.div>

        {/* Dark Overlay with Gradients */}
        <div className="absolute inset-0 bg-[#0A0A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF]">
                The Future is Electric
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl mb-6 text-[#E6F6FF] font-bold"
            >
              ZAATARI EV Motors
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl text-[#BFC6CC] mb-6"
            >
              Experience the future of electric mobility with cutting-edge technology, exceptional performance, and sustainable luxury.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-2xl md:text-3xl text-[#00E5FF] mb-8 font-semibold"
            >
              Starting at AED 195,000
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/book-test-drive"
                className="group px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Book Test Drive</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/models"
                className="px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
              >
                Explore Models
              </Link>

            
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}