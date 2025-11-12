import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['ZAATARI EV Motors Showroom', 'Meydan Free Zone', 'Dubai, United Arab Emirates'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+971 50 123 4567', '+971 4 567 8900', 'Toll-Free: 800-ZAATARI'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@zaatariev.ae', 'sales@zaatariev.ae', 'support@zaatariev.ae'],
  },
  {
    icon: Clock,
    title: 'Showroom Hours',
    details: ['Saturday - Thursday: 9:00 AM - 8:00 PM', 'Friday: 2:00 PM - 8:00 PM', 'Ramadan Hours May Vary'],
  },
];

const departments = [
  { name: 'Sales Department', phone: '+971 50 123 4567', email: 'sales@zaatariev.ae' },
  { name: 'Service & Support', phone: '+971 50 234 5678', email: 'service@zaatariev.ae' },
  { name: 'Parts & Accessories', phone: '+971 50 345 6789', email: 'parts@zaatariev.ae' },
  { name: 'Fleet Sales', phone: '+971 50 456 7890', email: 'fleet@zaatariev.ae' },
];

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971501234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20ZAATARI%20EV%20Motors', '_blank');
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
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Contact Us</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team for expert guidance 
            on electric vehicles, test drives, and more.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0EA5FF]/20 to-[#00E5FF]/20 border border-[#0EA5FF]/30 flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <h3 className="text-lg text-[#E6F6FF] mb-3">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-[#BFC6CC]">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20"
          >
            <h2 className="text-2xl text-[#E6F6FF] mb-2">Send us a Message</h2>
            <p className="text-[#BFC6CC] mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <LeadForm formType="contact" />
          </motion.div>

          {/* Departments & Map */}
          <div className="space-y-8">
            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20"
            >
              <h2 className="text-2xl text-[#E6F6FF] mb-6">Departments</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-[#0EA5FF]/10 last:border-0 last:pb-0"
                  >
                    <h3 className="text-lg text-[#E6F6FF] mb-2">{dept.name}</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-[#BFC6CC] flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-[#00E5FF]" />
                        <a href={`tel:${dept.phone}`} className="hover:text-[#00E5FF] transition-colors">
                          {dept.phone}
                        </a>
                      </p>
                      <p className="text-sm text-[#BFC6CC] flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-[#00E5FF]" />
                        <a href={`mailto:${dept.email}`} className="hover:text-[#00E5FF] transition-colors">
                          {dept.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/10 rounded-2xl p-8 border border-[#25D366]/30"
            >
              <MessageCircle className="w-12 h-12 text-[#25D366] mb-4" />
              <h2 className="text-2xl text-[#E6F6FF] mb-2">Chat with Us</h2>
              <p className="text-[#BFC6CC] mb-6">
                Get instant answers to your questions via WhatsApp. Our team is ready to assist you.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20"
            >
              <h2 className="text-2xl text-[#E6F6FF] mb-6">Location</h2>
              <div className="aspect-video bg-[#0A0A0A] rounded-lg border border-[#0EA5FF]/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#00E5FF] mx-auto mb-4" />
                  <p className="text-[#BFC6CC]">Meydan Free Zone, Dubai</p>
                  <a
                    href="https://maps.google.com/?q=Meydan+Free+Zone+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00E5FF] hover:underline text-sm mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
