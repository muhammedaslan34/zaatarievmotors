'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Timer, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function OfferCountdown() {
  const targetDate = new Date('2025-12-01T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A0A0A] via-[#16181C] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-8 md:p-12 border border-[#0EA5FF]/30 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0EA5FF] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E5FF] rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Timer className="w-6 h-6 text-[#00E5FF]" />
                <span className="text-sm text-[#00E5FF]">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">
                Year-End Clearance Sale
              </h2>
              <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
                Save up to AED 50,000 on select models. Special financing available.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#16181C]/80 rounded-xl p-4 border border-[#0EA5FF]/30"
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl text-[#00E5FF] mb-1">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[#BFC6CC]">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#16181C]/60 rounded-lg p-4 border border-[#0EA5FF]/20">
                <div className="text-sm text-[#BFC6CC] mb-1">Leopard 7 Discount</div>
                <div className="text-2xl text-[#00E5FF]">AED 50,000</div>
              </div>
              <div className="bg-[#16181C]/60 rounded-lg p-4 border border-[#0EA5FF]/20">
                <div className="text-sm text-[#BFC6CC] mb-1">Financing Rate</div>
                <div className="text-2xl text-[#00E5FF]">0% APR*</div>
              </div>
              <div className="bg-[#16181C]/60 rounded-lg p-4 border border-[#0EA5FF]/20">
                <div className="text-sm text-[#BFC6CC] mb-1">Free Extras</div>
                <div className="text-2xl text-[#00E5FF]">AED 15,000</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offers"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300"
              >
                <span>View All Offers</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/book-test-drive"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
              >
                <span>Book Test Drive</span>
              </Link>
            </div>

            <p className="text-xs text-[#BFC6CC] text-center mt-6">
              *Terms and conditions apply. Offer valid until December 1, 2025.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}