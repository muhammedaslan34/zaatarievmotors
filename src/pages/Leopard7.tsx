'use client'

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Battery, Gauge, Zap, Users, Package, Shield, ArrowRight, Sparkles, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import interiorTexture from '../assets/Textured-and-fashionable.webp';
import spaceCube from '../assets/Space-Cube.webp';
import largeSpaceLayout from '../assets/iconic-bulge.webp';
import rearTankImage from '../assets/Large-space.webp';
import spaciousSpaceImage from '../assets/Spacious-space.webp';
import convenientStorageImage from '../assets/Convenient.webp';
import fiveSenseCockpit from '../assets/Five-sense-cockpit-embraces-immersive-comfort.webp';
import heroImage from '../assets/BYD-leopard-titanuim-7.webp';
import sideViewImage from '../assets/Large-tough-and-stylish.webp';
import Titaniumheadlights from '../assets/Titanium-headlights.webp';
import sideDoorImage from '../assets/Ark-Porthole.webp';
import wheelImage from '../assets/Ark-Armor.webp';
import Titaniumtaillights from '../assets/Titanium-taillights.webp';
import trendyStylishImage from '../assets/tendy-and-stylish.webp';
import ecologicalVientianeImage from '../assets/Ecological-Vientiane.webp';
import highEndTravelImage from '../assets/High-end travel.webp';
import advancedSecurityImage from '../assets/Advanced-security.webp';
import pricesImage from '../assets/prices.webp';

// Color variants
import duskOrangeColor from '../assets/colors/dusk orange.webp';
import eclipseBlueColor from '../assets/colors/Eclipse Blue.webp';
import frostGrayColor from '../assets/colors/Frost Gray.webp';
import greenMountainsColor from '../assets/colors/Green Mountains.webp';
import landscapeGreenColor from '../assets/colors/Landscape Green.webp';
import morningBlueColor from '../assets/colors/Morning Blue.webp';
import obsidianBlackColor from '../assets/colors/Obsidian Black.webp';
import snowHiddenGrayColor from '../assets/colors/Snow Hidden Gray.webp';
import starMoonSilverColor from '../assets/colors/Star and Moon Silver.webp';
import sunriseGoldColor from '../assets/colors/Sunrise Gold.webp';

// Placeholder URL for remaining missing image
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

const colors = [
  { name: 'Dusk Orange', image: duskOrangeColor },
  { name: 'Eclipse Blue', image: eclipseBlueColor },
  { name: 'Frost Gray', image: frostGrayColor },
  { name: 'Green Mountains', image: greenMountainsColor },
  { name: 'Landscape Green', image: landscapeGreenColor },
  { name: 'Morning Blue', image: morningBlueColor },
  { name: 'Obsidian Black', image: obsidianBlackColor },
  { name: 'Snow Hidden Gray', image: snowHiddenGrayColor },
  { name: 'Star and Moon Silver', image: starMoonSilverColor },
  { name: 'Sunrise Gold', image: sunriseGoldColor },
];

export default function Models() {
  const [selectedColor, setSelectedColor] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-20 pb-20 bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="BYD Leopard Titanium 7"
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full"
          quality={90}
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0EA5FF]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10">
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

        {/* Trendy and Stylish Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={trendyStylishImage}
              alt="Trendy and Stylish Design"
              width={1279}
              height={379}
              className="w-full h-auto"
              quality={90}
              priority
            />
          </div>
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
              className="bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/30 hover:border-[#0EA5FF]/60 transition-all duration-300"
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
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-[#00E5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Large, tough and stylish</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Simple geometric lines create a sense of futurism and power, like a space ark.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={sideViewImage}
              alt="BYD Leopard 7 Side View"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
              priority
            />
          </div>
          </div>
        </motion.div>

        {/* H-Shaped Panel Energy Shield - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-[#0EA5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
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
              <Image
                src={Titaniumheadlights}
                alt="Titanium headlights"
                width={800}
                height={800}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                quality={90}
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
              <Image
                src={largeSpaceLayout}
                alt="iconic bulge"
                width={1600}
                height={800}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                quality={90}
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
              <Image
                src={Titaniumtaillights}
                alt="Titanium taillights"
                width={800}
                height={800}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                quality={90}
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
              <Image
                src={wheelImage}
                alt="Ark Armor"
                width={800}
                height={800}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                quality={90}
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
              <Image
                src={sideDoorImage}
                alt="Ark Porthole"
                width={800}
                height={800}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">Ark Porthole</h4>
              </div>
            </motion.div>
          </div>
          </div>
        </motion.div>

        {/* Five-Sense Cockpit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-tl from-[#00E5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Five-sense cockpit embraces immersive comfort</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Enjoy the full range of your five senses and embrace the immersive healing experience
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={fiveSenseCockpit}
              alt="Five-sense cockpit comfort features"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
            />
          </div>
          </div>
        </motion.div>

        {/* Textured and Fashionable Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-tr from-[#0EA5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Textured and fashionable</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              It creates a strong, minimalist style while also enveloping the soft and warm feel of home.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={interiorTexture}
              alt="Interior Textures and Details"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
            />
          </div>
          </div>
        </motion.div>

        {/* Space Cube Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-bl from-[#0EA5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Space Cube</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              A spacious courtyard, ample storage, and a wonderful life await you.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={spaceCube}
              alt="Space Cube Interior Dimensions"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
            />
          </div>
          </div>
        </motion.div>

        {/* Large Space Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-bl from-[#00E5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
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
              className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group bg-[#0A0A0A]"
            >
              <Image
                src={rearTankImage}
                alt="1,000-liter rear tank"
                width={800}
                height={1200}
                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl text-[#E6F6FF]">1,000-liter rear tank</h4>
              </div>
            </motion.div>

            {/* Right Column - Two cards stacked */}
            <div className="flex flex-col gap-6">
              {/* Top Card - Spacious space */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group bg-[#0A0A0A]"
              >
                <Image
                  src={spaciousSpaceImage}
                  alt="Spacious space"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  quality={90}
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
                className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 group bg-[#0A0A0A]"
              >
                <Image
                  src={convenientStorageImage}
                  alt="Convenient storage"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  quality={90}
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
          </div>
        </motion.div>

        {/* Ecological Vientiane Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-tl from-[#0EA5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Ecological Vientiane</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              With the car as the core, connecting everything
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={ecologicalVientianeImage}
              alt="Ecological Vientiane - Connected Ecosystem"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
            />
          </div>
          </div>
        </motion.div>

        {/* High-end Travel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-tr from-[#00E5FF]/3 to-[#0EA5FF]/3 rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">High-end travel</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Embrace advanced mobility and travel the world with ease
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={highEndTravelImage}
              alt="High-end travel - Advanced Mobility"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
            />
          </div>
          </div>
        </motion.div>

        {/* Advanced Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-bl from-[#0EA5FF]/8 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Advanced security</h3>
            <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
              Hard-core shield with advanced technology to protect your safety in all directions
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30 bg-[#0A0A0A]">
            <Image
              src={advancedSecurityImage}
              alt="Advanced security - Safety Technology"
              width={1600}
              height={900}
              className="w-full h-auto"
              quality={90}
            />
          </div>
          </div>
        </motion.div>

        

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-[#0EA5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-[#16181C] rounded-lg p-4 border border-[#0EA5FF]/30">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0EA5FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#E6F6FF]">{feature}</span>
              </div>
            ))}
          </div>
          </div>
        </motion.div>

        {/* Variants Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-tl from-[#00E5FF]/3 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Available Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((variant, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-xl p-8 border border-[#0EA5FF]/30 hover:border-[#0EA5FF]/60 hover:from-[#0EA5FF]/15 hover:to-[#00E5FF]/8 transition-all duration-300">
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
          </div>
        </motion.div>

        {/* Limited Time Offer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl"
        >
          {/* Subtle background accent wrapper */}
          <div className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#0EA5FF]/10 via-[#00E5FF]/5 to-[#0EA5FF]/10 rounded-[3rem] border border-[#00E5FF]/30">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#00E5FF] bg-[#1A1A1A] p-12 text-center shadow-2xl shadow-[#00E5FF]/30">
              {/* Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="bg-gradient-to-r from-[#0EA5FF] to-[#00E5FF] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
                  ⚡ Exclusive Deal
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl text-[#E6F6FF] mb-4 font-bold"
              >
                LIMITED TIME OFFER!
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-[#BFC6CC] mb-8"
              >
                Secure this car today for just
              </motion.p>

              {/* Price */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="mb-10 overflow-visible"
              >
                <div 
                  className="font-black text-[#00E5FF] leading-none"
                  style={{ 
                    fontSize: 'clamp(4rem, 12vw, 10rem)',
                    textShadow: '0 0 40px rgba(0, 229, 255, 0.8), 0 0 80px rgba(0, 229, 255, 0.5), 0 0 120px rgba(0, 229, 255, 0.3)'
                  }}
                >
                  $25,500!
                </div>
              </motion.div>

              

              {/* WhatsApp CTA Button */}
              <motion.a
                href="https://wa.me/971501234567?text=Hi!%20I'm%20interested%20in%20the%20BYD%20Leopard%207%20special%20offer%20for%20$25,500"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-xl text-lg font-bold hover:bg-[#1FB855] hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                <span className="tracking-wide">Claim Offer on WhatsApp</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>
              {/* Expiry Notice */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg text-[#00E5FF] mb-10 font-semibold"
              >
                This special offer expires December 1, 2025
              </motion.p>

              {/* Additional info */}
              <p className="text-sm text-[#BFC6CC] mt-6">
                Limited units available • First come, first served
              </p>
          </div>
          </div>
        </motion.div>
{/* Rich Colors Section */}
<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          {/* Subtle background accent */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-tr from-[#0EA5FF]/8 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Rich colors (exterior and interior) to choose from :</h2>
              <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
                Express your personality with our stunning color palette
              </p>
            </div>

            {/* Colors Display - Large Preview Top + Carousel Bottom */}
            <div className="space-y-8">
              {/* Large Preview - Top */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden border-2 border-[#0EA5FF]/40 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] shadow-2xl shadow-[#0EA5FF]/30"
              >
                <div className="aspect-[16/9] md:aspect-[21/9] relative p-8 md:p-16">
                  <Image
                    src={colors[selectedColor].image}
                    alt={colors[selectedColor].name}
                    width={1600}
                    height={900}
                    className="object-contain w-full h-full drop-shadow-2xl"
                    quality={95}
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent p-6 md:p-8 border-t border-[#0EA5FF]/20">
                  <h3 className="text-3xl md:text-5xl text-[#E6F6FF] font-bold mb-2">{colors[selectedColor].name}</h3>
                  <p className="text-[#BFC6CC] text-base md:text-lg">Available for exterior and interior</p>
                </div>
              </motion.div>

              {/* Thumbnails Carousel - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative py-8 overflow-visible"
              >
                <div className="relative">
                  {/* Previous Arrow */}
                  <button
                    onClick={() => scrollCarousel('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#00E5FF] text-white hover:bg-[#0EA5FF] hover:scale-110 transition-all duration-300 shadow-2xl shadow-[#00E5FF]/60"
                    aria-label="Previous colors"
                    type="button"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
                  </button>

                  {/* Next Arrow */}
                  <button
                    onClick={() => scrollCarousel('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#00E5FF] text-white hover:bg-[#0EA5FF] hover:scale-110 transition-all duration-300 shadow-2xl shadow-[#00E5FF]/60"
                    aria-label="Next colors"
                    type="button"
                  >
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
                  </button>

                  <div ref={carouselRef} className="overflow-x-auto scrollbar-hide px-12">
                  <div className="flex gap-4 md:gap-6 pb-4">
                    {colors.map((color, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedColor(idx)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer flex-shrink-0 ${
                          selectedColor === idx
                            ? 'border-[#00E5FF] shadow-lg shadow-[#00E5FF]/40 scale-105'
                            : 'border-[#0EA5FF]/30 hover:border-[#0EA5FF]/60 hover:scale-105'
                        }`}
                        style={{ width: '150px' }}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={color.image}
                            alt={color.name}
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                            quality={85}
                          />
                          {selectedColor === idx && (
                            <div className="absolute inset-0 bg-[#00E5FF]/10 border-2 border-[#00E5FF]"></div>
                          )}
                        </div>
                        <div className={`p-3 text-center transition-all ${
                          selectedColor === idx ? 'bg-[#00E5FF]/20' : 'bg-[#16181C]'
                        }`}>
                          <h4 className={`text-sm font-semibold transition-colors ${
                            selectedColor === idx ? 'text-[#00E5FF]' : 'text-[#E6F6FF] group-hover:text-[#00E5FF]'
                          }`}>
                            {color.name}
                          </h4>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Model Versions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Heading - Outside the image */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#E6F6FF]">Choose from 4 model versions:</h2>
          </div>

          {/* Image Section */}
          <div className="relative min-h-[600px] md:min-h-[700px]">
            {/* Background Image with Lighter Overlay */}
            <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 rounded-3xl overflow-hidden">
              <Image
                src={pricesImage}
                alt="Model Versions Background"
                fill
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/70"></div>
            </div>

            {/* Right-aligned Pricing Card (centered vertically) */}
            <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-end px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="ml-auto w-full max-w-xl lg:max-w-2xl"
              >
                {/* Blurred Card */}
                <div className="bg-gray-200/70 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-2xl border border-white/20">
                  <div className="space-y-3 md:space-y-4">
                    {/* Item 1 - Pro */}
                    <div className="flex items-center justify-between gap-4 p-3 md:p-4 bg-white/20 rounded-md backdrop-blur-sm">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-gray-900 font-bold text-lg">1.</span>
                        <h3 className="text-sm md:text-base lg:text-lg text-gray-900 font-bold">
                          Pro 135KM two-wheel drive
                        </h3>
                      </div>
                      <div className="text-base md:text-xl lg:text-2xl font-black text-white drop-shadow-lg whitespace-nowrap">
                        $25,500!
                      </div>
                    </div>

                    {/* Item 2 - Max 200KM */}
                    <div className="flex items-center justify-between gap-4 p-3 md:p-4 bg-white/20 rounded-md backdrop-blur-sm">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-gray-900 font-bold text-lg">2.</span>
                        <h3 className="text-sm md:text-base lg:text-lg text-gray-900 font-bold">
                          Max version 200KM two-wheel drive
                        </h3>
                      </div>
                      <div className="text-base md:text-xl lg:text-2xl font-black text-white drop-shadow-lg whitespace-nowrap">
                        $27,000!
                      </div>
                    </div>

                    {/* Item 3 - Max 190KM */}
                    <div className="flex items-center justify-between gap-4 p-3 md:p-4 bg-white/20 rounded-md backdrop-blur-sm">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-gray-900 font-bold text-lg">3.</span>
                        <h3 className="text-sm md:text-base lg:text-lg text-gray-900 font-bold">
                          Max version 190KM four-wheel drive
                        </h3>
                      </div>
                      <div className="text-base md:text-xl lg:text-2xl font-black text-white drop-shadow-lg whitespace-nowrap">
                        $29,000!
                      </div>
                    </div>

                    {/* Item 4 - Ultra */}
                    <div className="flex items-center justify-between gap-4 p-3 md:p-4 bg-white/20 rounded-md backdrop-blur-sm">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-gray-900 font-bold text-lg">4.</span>
                        <h3 className="text-sm md:text-base lg:text-lg text-gray-900 font-bold">
                          Ultra version 190KM four-wheel drive
                        </h3>
                      </div>
                      <div className="text-base md:text-xl lg:text-2xl font-black text-white drop-shadow-lg whitespace-nowrap">
                        $30,500!
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
    </div>
  );
}