'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['All', 'Exterior', 'Interior', 'Technology', 'Lifestyle'];

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Exterior',
    title: 'BYD Leopard 7 - Front View',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1762788145271-7542ad382330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTE4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Exterior',
    title: 'BYD Leopard 5 - Side Profile',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1626684468293-ac18117177a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2FyJTIwaW50ZXJpb3IlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyOTQ1NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Interior',
    title: 'Advanced Dashboard',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1735620731955-b047a7122892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwU1VWJTIwYmxhY2t8ZW58MXx8fHwxNzYyOTQ1NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Exterior',
    title: 'Premium Black Edition',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1761264889291-52edcd3979b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0ZWNobm9sb2d5JTIwZGlzcGxheXxlbnwxfHx8fDE3NjI5NDU2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Technology',
    title: 'Smart Technology Display',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjI5MzcwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Lifestyle',
    title: 'Dubai Lifestyle',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Interior',
    title: 'Luxurious Interior',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1762788145271-7542ad382330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTE4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Technology',
    title: 'Electric Powertrain',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

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
            Visual Gallery
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Explore Our Collection</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Browse through our stunning collection of electric vehicles and lifestyle imagery
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#007bff] text-white'
                  : 'bg-[#16181C] border border-[#0EA5FF]/30 text-[#E6F6FF] hover:bg-[#0EA5FF]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImage(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 cursor-pointer"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#E6F6FF] mb-1">{image.title}</p>
                    <p className="text-sm text-[#00E5FF]">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-[#0A0A0A]/95 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#16181C] border border-[#0EA5FF]/30 text-[#E6F6FF] hover:bg-[#0EA5FF]/20 transition-all duration-300 flex items-center justify-center z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#16181C] border border-[#0EA5FF]/30 text-[#E6F6FF] hover:bg-[#0EA5FF]/20 transition-all duration-300 flex items-center justify-center z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#16181C] border border-[#0EA5FF]/30 text-[#E6F6FF] hover:bg-[#0EA5FF]/20 transition-all duration-300 flex items-center justify-center z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-6xl w-full"
              >
                <ImageWithFallback
                  src={filteredImages[lightboxImage].src}
                  alt={filteredImages[lightboxImage].title}
                  className="w-full h-auto rounded-xl border border-[#0EA5FF]/30"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl text-[#E6F6FF] mb-2">
                    {filteredImages[lightboxImage].title}
                  </h3>
                  <p className="text-[#00E5FF]">{filteredImages[lightboxImage].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}