'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    id: 1,
    title: 'BYD Leopard 7',
    subtitle: 'The Future is Electric',
    description: 'Experience the Interstellar Ark design with titanium lighting and five-sense cockpit technology.',
    price: 'Starting at AED 245,000',
    image: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Reserve Now',
  },
  {
    id: 2,
    title: 'BYD Leopard 5',
    subtitle: 'Compact Luxury Redefined',
    description: 'Premium electric SUV with cutting-edge technology and exceptional comfort for urban adventures.',
    price: 'Starting at AED 195,000',
    image: 'https://images.unsplash.com/photo-1762788145271-7542ad382330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTE4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore Model',
  },
  {
    id: 3,
    title: 'Coming Soon',
    subtitle: 'Next Generation EVs',
    description: 'Be the first to experience the future of electric mobility. Reserve your spot today.',
    price: 'Pre-Order Available',
    image: 'https://images.unsplash.com/photo-1735620731955-b047a7122892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwU1VWJTIwYmxhY2t8ZW58MXx8fHwxNzYyOTQ1NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Get Notified',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971501234567?text=Hello%2C%20I%20am%20interested%20in%20ZAATARI%20EV%20Motors', '_blank');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
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
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF]">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-7xl mb-6 text-[#E6F6FF]"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl text-[#BFC6CC] mb-6"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-2xl md:text-3xl text-[#00E5FF] mb-8"
                >
                  {slides[currentSlide].price}
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/book-test-drive"
                    className="group px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>{slides[currentSlide].cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/models"
                    className="px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
                  >
                    Get Offer
                  </Link>

                  <button
                    onClick={handleWhatsApp}
                    className="px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#16181C]/80 border border-[#0EA5FF]/30 text-[#E6F6FF] hover:bg-[#0EA5FF]/20 transition-all duration-300 flex items-center justify-center z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#16181C]/80 border border-[#0EA5FF]/30 text-[#E6F6FF] hover:bg-[#0EA5FF]/20 transition-all duration-300 flex items-center justify-center z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gradient-to-r from-[#0EA5FF] to-[#00E5FF]'
                : 'w-8 bg-[#BFC6CC]/30 hover:bg-[#BFC6CC]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}