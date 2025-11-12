import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyActions() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971501234567?text=Hello%2C%20I%20am%20interested%20in%20ZAATARI%20EV%20Motors', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+971501234567';
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="group relative w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
        <MessageCircle className="w-6 h-6 text-white relative z-10" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="group relative w-14 h-14 bg-[#007bff] rounded-full shadow-lg shadow-[#007bff]/30 hover:shadow-xl hover:shadow-[#007bff]/50 transition-all duration-300 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#007bff] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
        <Phone className="w-6 h-6 text-[#0A0A0A] relative z-10" />
      </motion.button>
    </div>
  );
}