import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const models = [
  {
    id: 'leopard-7',
    name: 'BYD Leopard 7',
    price: 'AED 245,000',
    image: 'https://images.unsplash.com/photo-1750830331454-86df5c088ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVjdHJpYyUyMFNVViUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzYyOTQ1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      range: '550 km',
      power: '500 HP',
      acceleration: '4.2s',
      seating: '7',
      cargo: '1000 L',
      warranty: '8 Years',
      charging: '30 min (80%)',
      driveType: 'AWD',
    },
    features: {
      interstellarDesign: true,
      fiveSenseCockpit: true,
      titaniumLighting: true,
      panoramicSunroof: true,
      premiumLeather: true,
      adaptiveCruise: true,
      laneAssist: true,
      parkingAssist: true,
      wirelessCharging: true,
      premiumAudio: true,
    },
  },
  {
    id: 'leopard-5',
    name: 'BYD Leopard 5',
    price: 'AED 195,000',
    image: 'https://images.unsplash.com/photo-1762788145271-7542ad382330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTE4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      range: '450 km',
      power: '380 HP',
      acceleration: '5.1s',
      seating: '5',
      cargo: '650 L',
      warranty: '8 Years',
      charging: '35 min (80%)',
      driveType: 'AWD',
    },
    features: {
      interstellarDesign: false,
      fiveSenseCockpit: true,
      titaniumLighting: false,
      panoramicSunroof: true,
      premiumLeather: true,
      adaptiveCruise: true,
      laneAssist: true,
      parkingAssist: true,
      wirelessCharging: true,
      premiumAudio: false,
    },
  },
];

const featureLabels = {
  interstellarDesign: 'Interstellar Ark Design',
  fiveSenseCockpit: 'Five-Sense Cockpit',
  titaniumLighting: 'Titanium Lighting System',
  panoramicSunroof: 'Panoramic Sunroof',
  premiumLeather: 'Premium Leather Interior',
  adaptiveCruise: 'Adaptive Cruise Control',
  laneAssist: 'Lane Keeping Assist',
  parkingAssist: '360° Parking Assistance',
  wirelessCharging: 'Wireless Phone Charging',
  premiumAudio: 'Premium Audio System',
};

const specLabels = {
  range: 'Range',
  power: 'Power Output',
  acceleration: '0-100 km/h',
  seating: 'Seating Capacity',
  cargo: 'Cargo Space',
  warranty: 'Warranty',
  charging: 'Fast Charging',
  driveType: 'Drive Type',
};

export default function Compare() {
  const [selectedModels] = useState([0, 1]);

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
            Compare Models
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Find Your Perfect Match</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Compare specifications and features to choose the electric vehicle that best suits your needs
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Empty header column */}
              <div className="hidden md:block"></div>

              {/* Model Cards */}
              {selectedModels.map((modelIndex, idx) => (
                <motion.div
                  key={models[modelIndex].id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#16181C] rounded-2xl overflow-hidden border border-[#0EA5FF]/20"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={models[modelIndex].image}
                      alt={models[modelIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl text-[#E6F6FF] mb-2">{models[modelIndex].name}</h3>
                    <p className="text-xl text-[#00E5FF] mb-4">{models[modelIndex].price}</p>
                    <Link
                      to="/book-test-drive"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
                    >
                      <span>Test Drive</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-[#16181C] rounded-2xl border border-[#0EA5FF]/20 overflow-hidden"
            >
              <div className="p-6 border-b border-[#0EA5FF]/20">
                <h2 className="text-2xl text-[#E6F6FF]">Technical Specifications</h2>
              </div>
              <div className="divide-y divide-[#0EA5FF]/10">
                {Object.entries(specLabels).map(([key, label]) => (
                  <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-[#0EA5FF]/5 transition-colors">
                    <div className="text-[#BFC6CC]">{label}</div>
                    {selectedModels.map((modelIndex) => (
                      <div key={modelIndex} className="text-[#E6F6FF]">
                        {models[modelIndex].specs[key as keyof typeof models[0]['specs']]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-[#16181C] rounded-2xl border border-[#0EA5FF]/20 overflow-hidden"
            >
              <div className="p-6 border-b border-[#0EA5FF]/20">
                <h2 className="text-2xl text-[#E6F6FF]">Features & Technology</h2>
              </div>
              <div className="divide-y divide-[#0EA5FF]/10">
                {Object.entries(featureLabels).map(([key, label]) => (
                  <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-[#0EA5FF]/5 transition-colors">
                    <div className="text-[#BFC6CC]">{label}</div>
                    {selectedModels.map((modelIndex) => (
                      <div key={modelIndex} className="flex items-center justify-start md:justify-center">
                        {models[modelIndex].features[key as keyof typeof models[0]['features']] ? (
                          <Check className="w-6 h-6 text-[#00E5FF]" />
                        ) : (
                          <X className="w-6 h-6 text-[#BFC6CC]/30" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-12 border border-[#0EA5FF]/30"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-4">Still Deciding?</h2>
          <p className="text-lg text-[#BFC6CC] mb-8 max-w-2xl mx-auto">
            Schedule a test drive to experience both models and make an informed decision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-test-drive"
              className="inline-block px-8 py-4 bg-[#007bff] text-white rounded-lg hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300"
            >
              Book Test Drive
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#16181C] border border-[#0EA5FF] text-[#E6F6FF] rounded-lg hover:bg-[#0EA5FF]/10 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}