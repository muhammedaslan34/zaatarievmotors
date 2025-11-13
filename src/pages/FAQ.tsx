'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const categories = [
  {
    title: 'General Questions',
    faqs: [
      {
        question: 'What makes ZAATARI EV Motors different from other dealerships?',
        answer: 'We are the authorized BYD Leopard series distributor in the GCC with over 10 years of experience. We offer comprehensive support, including 15+ service centers, extended warranties, and personalized customer service throughout your ownership journey.',
      },
      {
        question: 'Are electric vehicles suitable for Dubai\'s climate?',
        answer: 'Absolutely! Our BYD Leopard series vehicles are specifically designed for extreme climates with advanced thermal management systems, powerful air conditioning, and heat-resistant battery technology that performs optimally in Dubai\'s hot weather.',
      },
      {
        question: 'How long does delivery take after purchase?',
        answer: 'Most models are available for immediate delivery. Custom configurations may take 4-6 weeks. We\'ll provide you with a precise timeline during your purchase consultation.',
      },
    ],
  },
  {
    title: 'Charging & Range',
    faqs: [
      {
        question: 'What is the range of BYD Leopard vehicles?',
        answer: 'The Leopard 7 offers up to 550 km on a full charge, while the Leopard 5 provides up to 450 km. Actual range may vary based on driving conditions, climate control usage, and driving style.',
      },
      {
        question: 'How long does it take to charge?',
        answer: 'With DC fast charging, you can reach 80% charge in approximately 30-35 minutes. Using a home AC charger (Level 2), a full charge typically takes 8-10 hours, perfect for overnight charging.',
      },
      {
        question: 'Where can I charge my vehicle in Dubai?',
        answer: 'Dubai has an extensive charging network with over 200+ public charging stations across the emirate. We also provide a complimentary home wall charger with every purchase and can arrange professional installation.',
      },
      {
        question: 'What are the charging costs?',
        answer: 'Public charging rates vary but typically cost AED 1-2 per kWh. Home charging costs depend on your DEWA electricity rates. On average, a full charge costs significantly less than filling a traditional fuel tank.',
      },
    ],
  },
  {
    title: 'Pricing & Financing',
    faqs: [
      {
        question: 'What financing options are available?',
        answer: 'We offer multiple financing solutions including 0% APR for up to 36 months, conventional bank financing, and Islamic financing options. Our finance team works with all major UAE banks to secure the best rates for you.',
      },
      {
        question: 'Do you accept trade-ins?',
        answer: 'Yes! We accept all vehicle trade-ins and currently offer an additional AED 10,000 trade-in bonus. Our team provides fair market valuations and can often exceed competitor offers.',
      },
      {
        question: 'Are there any government incentives for EV purchases?',
        answer: 'Dubai offers several incentives including free public parking at designated areas, reduced Salik tolls for EVs, and exemption from certain registration fees. We help you navigate all available benefits.',
      },
      {
        question: 'What is included in the price?',
        answer: 'Our prices include the vehicle, standard warranty, first service, registration assistance, and comprehensive handover training. Optional add-ons like extended warranty and accessory packages are available.',
      },
    ],
  },
  {
    title: 'Maintenance & Warranty',
    faqs: [
      {
        question: 'What does the warranty cover?',
        answer: 'All vehicles come with an 8-year/150,000 km comprehensive warranty covering battery, powertrain, and major components. We also offer extended warranty options up to 10 years.',
      },
      {
        question: 'How often does an EV need servicing?',
        answer: 'Electric vehicles require significantly less maintenance than traditional cars. We recommend service every 15,000 km or annually. Services mainly include brake fluid, cabin filters, and system diagnostics.',
      },
      {
        question: 'Where can I service my vehicle?',
        answer: 'We have 15+ authorized service centers across the UAE, all staffed with certified technicians trained specifically on BYD electric vehicles. Mobile service is also available for select maintenance tasks.',
      },
      {
        question: 'What about battery degradation?',
        answer: 'Our batteries are designed to retain over 80% capacity after 8 years of normal use. The battery is covered under warranty, and we offer battery health checks at every service interval.',
      },
    ],
  },
  {
    title: 'Test Drives & Purchase',
    faqs: [
      {
        question: 'How do I book a test drive?',
        answer: 'You can book a test drive through our website, by calling us at +971 50 123 4567, or via WhatsApp. We offer flexible scheduling including evening and weekend appointments.',
      },
      {
        question: 'Can I test drive multiple models?',
        answer: 'Absolutely! We encourage you to test drive all models you\'re interested in to make an informed decision. Each test drive takes approximately 30 minutes.',
      },
      {
        question: 'What documents do I need for purchase?',
        answer: 'For UAE residents: Emirates ID, valid UAE driving license, and proof of address. For financing: salary certificate or bank statements. Our team will guide you through the entire process.',
      },
      {
        question: 'Can I reserve a vehicle before purchase?',
        answer: 'Yes, you can reserve any vehicle with a refundable deposit of AED 5,000. This holds your vehicle for up to 14 days while you finalize your decision.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0EA5FF]/20 border border-[#00E5FF] rounded-full text-sm text-[#00E5FF] mb-4">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Have Questions?</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Find answers to the most common questions about our electric vehicles, 
            charging, financing, and services.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl text-[#E6F6FF] mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${catIndex}-${faqIndex}`}
                    className="bg-[#16181C] rounded-xl border border-[#0EA5FF]/20 px-6 data-[state=open]:border-[#0EA5FF]/50 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-[#E6F6FF] hover:text-[#00E5FF] transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#BFC6CC] pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-12 border border-[#0EA5FF]/30 text-center"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Still Have Questions?</h2>
          <p className="text-lg text-[#BFC6CC] mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized assistance with any questions 
            you may have about our electric vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:+971501234567"
              className="inline-block px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
            >
              Call: +971 50 123 4567
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}