'use client'

import Link from 'next/link';
import { Battery, Gauge, Zap, Users, Package, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import frontViewBulge from '../assets/193bd4c092ccd3032a18e5ddf0b3ee9b48bda523.png';
import interiorTexture from '../assets/ea94f5f816286715ba8ac1e83a1291468d96bfbc.png';
import spaceCube from '../assets/555f1ccede5b362e4d567d34d5ddedd48ca2280e.png';
import largeSpaceLayout from '../assets/f30d2ef63f3560bde2865999788122e55c1c2aa9.png';
import rearTankImage from '../assets/730f68ff208d927556e35e77ed125a2c70b95bf3.png';
import spaciousSpaceImage from '../assets/eb77c611becb43193fd2877b3870ba6462497a02.png';
import convenientStorageImage from '../assets/8e320d4cd22b812172f409719b39be1b4e7ef437.png';
import fiveSenseCockpit from '../assets/8dc79e32dad2191c228acffc7cfadf5ae39532cc.png';

// Placeholder URLs for missing images
const heroImage = 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200';
const sideViewImage = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800';
const frontLightImage = 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?w=800';
const sideDoorImage = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800';
const wheelImage = 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=600';
const frontViewHeadlights = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800';

const specs = [
  { icon: Battery, label: 'Range', value: '550 km' },
  { icon: Gauge, label: '0-100 km/h', value: '4.2 seconds' },
  { icon: Zap, label: 'Power', value: '500 HP' },
  { icon: Users, label: 'Seating', value: '7 Passengers' },
  { icon: Package, label: 'Cargo', value: '1000 L' },
  { icon: Shield, label: 'Warranty', value: '8 Years' },
];

const features = [
  'Interstellar Ark Design Language',
  'Five-Sense Cockpit Experience',
  'Titanium Lighting System',
  '360° Safety Protection',
  'Smart Driving Assistance',
  'Premium Leather Interior',
  'Panoramic Sunroof',
  'Advanced Climate Control',
];

const variants = [
  { name: 'Standard', price: 'AED 245,000' },
  { name: 'Premium', price: 'AED 285,000' },
  { name: 'Signature', price: 'AED 325,000' },
];

export default function Models() {
  return (
    <div className="pt-20 pb-20 bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="BYD Leopard Titanium 7"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl text-[#E6F6FF] mb-6"
            >
              BYD Leopard Titanium 7
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Design Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#00E5FF]" />
            <h2 className="text-4xl md:text-5xl text-[#E6F6FF]">Trendy and stylish</h2>
            <Sparkles className="w-6 h-6 text-[#00E5FF]" />
          </div>
          <p className="text-xl text-[#BFC6CC] max-w-3xl mx-auto">
            Interstellar Ark design aesthetics perfectly combines future technology with a comfortable cabin
          </p>
        </motion.div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0EA5FF]/20 to-[#00E5FF]/20 border border-[#0EA5FF]/30 flex items-center justify-center">
                  <spec.icon className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <span className="text-lg text-[#BFC6CC]">{spec.label}</span>
              </div>
              <div className="text-3xl text-[#E6F6FF]">{spec.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Large, Tough and Stylish Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Large, tough and stylish</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Simple geometric lines create a sense of futurism and power, like a space ark.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30">
            <ImageWithFallback
              src={sideViewImage}
              alt="BYD Leopard 7 Side View"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* H-Shaped Panel Energy Shield - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Unbreakable Energy Shield</h3>
            <p className="text-lg text-[#BFC6CC] max-w-3xl mx-auto">
              The H-shaped panel fits tightly together, and when the lights are on, the light beam and the panel form an energy shield that is unbreakable.
            </p>
          </div>

          {/* Bento Grid: Custom Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Left - Titanium headlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group aspect-square"
            >
              <ImageWithFallback
                src={frontLightImage}
                alt="Titanium headlights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">Titanium headlights</h4>
              </div>
            </motion.div>

            {/* Top Right - iconic bulge (spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group aspect-square md:aspect-[2/1]"
            >
              <ImageWithFallback
                src={frontViewBulge.src}
                alt="iconic bulge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">iconic bulge</h4>
              </div>
            </motion.div>

            {/* Bottom Left - Titanium taillights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group aspect-square"
            >
              <ImageWithFallback
                src={wheelImage}
                alt="Titanium taillights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">Titanium taillights</h4>
              </div>
            </motion.div>

            {/* Bottom Middle - Ark Armor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group aspect-square"
            >
              <ImageWithFallback
                src={wheelImage}
                alt="Ark Armor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">Ark Armor</h4>
              </div>
            </motion.div>

            {/* Bottom Right - Ark Porthole */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group aspect-square"
            >
              <ImageWithFallback
                src={sideDoorImage}
                alt="Ark Porthole"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">Ark Porthole</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Five-Sense Cockpit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Five-sense cockpit embraces immersive comfort</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Enjoy the full range of your five senses and embrace the immersive healing experience
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30">
            <ImageWithFallback
              src={fiveSenseCockpit.src}
              alt="Five-sense cockpit comfort features"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Textured and Fashionable Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Textured and fashionable</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              It creates a strong, minimalist style while also enveloping the soft and warm feel of home.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30">
            <ImageWithFallback
              src={interiorTexture.src}
              alt="Interior Textures and Details"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Space Cube Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Space Cube</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              A spacious courtyard, ample storage, and a wonderful life await you.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30">
            <ImageWithFallback
              src={spaceCube.src}
              alt="Space Cube Interior Dimensions"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Large Space Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Large space</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Enjoy the spaciousness of the five-seater with a 3310mm effective passenger compartment length, a 2920mm wheelbase, and a room ratio of 70.9%.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card - 1,000-liter rear tank (spans full height) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group h-full min-h-[600px] bg-[#0A0A0A]"
            >
              <ImageWithFallback
                src={rearTankImage.src}
                alt="1,000-liter rear tank"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">1,000-liter rear tank</h4>
              </div>
            </motion.div>

            {/* Right Column - Two cards stacked */}
            <div className="flex flex-col gap-6 h-full min-h-[600px]">
              {/* Top Card - Spacious space */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group flex-1 bg-[#0A0A0A]"
              >
                <ImageWithFallback
                  src={spaciousSpaceImage.src}
                  alt="Spacious space"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl text-[#E6F6FF]">Spacious space</h4>
                </div>
              </motion.div>

              {/* Bottom Card - Convenient storage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group flex-1 bg-[#0A0A0A]"
              >
                <ImageWithFallback
                  src={convenientStorageImage.src}
                  alt="Convenient storage"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl text-[#E6F6FF]">Convenient storage</h4>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-[#E6F6FF] mb-2">
              Wanxiang Storage encompasses all aspects of life.
            </p>
            <p className="text-[#BFC6CC]">
              Living container, a collection of life experiences
            </p>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-[#16181C] rounded-lg p-4 border border-[#0EA5FF]/20">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0EA5FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#E6F6FF]">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Variants Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Available Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((variant, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-xl p-8 border border-[#0EA5FF]/30 hover:border-[#0EA5FF]/50 transition-all duration-300">
                <h3 className="text-2xl text-[#E6F6FF] mb-4">{variant.name}</h3>
                <div className="text-4xl text-[#00E5FF] mb-8">{variant.price}</div>
                <Link
                  href="/book-test-drive"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-12 border border-[#0EA5FF]/30"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Experience the Future Today</h2>
          <p className="text-lg text-[#BFC6CC] mb-8 max-w-2xl mx-auto">
            Book a test drive and discover why the BYD Leopard Titanium 7 is redefining premium electric mobility
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book-test-drive"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
            >
              <span>Book Test Drive</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
            >
              Compare Models
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}