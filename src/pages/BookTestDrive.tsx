import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const benefits = [
  'Experience the vehicle firsthand',
  'Test all advanced features',
  'Personalized consultation',
  'No obligation to purchase',
];

const steps = [
  {
    icon: Calendar,
    title: 'Choose Date',
    description: 'Select your preferred date and time for the test drive',
  },
  {
    icon: MapPin,
    title: 'Visit Showroom',
    description: 'Come to our Dubai Meydan showroom at your scheduled time',
  },
  {
    icon: Clock,
    title: 'Test Drive',
    description: 'Enjoy a comprehensive 30-minute test drive experience',
  },
  {
    icon: CheckCircle,
    title: 'Make Decision',
    description: 'Get personalized assistance with your purchase decision',
  },
];

export default function BookTestDrive() {
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
            Experience the Future
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Book a Test Drive</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Experience the future of electric mobility. Schedule your test drive today and discover 
            why ZAATARI EV Motors is the preferred choice in the GCC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20"
          >
            <h2 className="text-2xl text-[#E6F6FF] mb-6">Schedule Your Visit</h2>
            <LeadForm formType="test-drive" />
          </motion.div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20"
            >
              <h2 className="text-2xl text-[#E6F6FF] mb-6">Why Test Drive?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0EA5FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#E6F6FF]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#16181C] rounded-2xl p-8 border border-[#0EA5FF]/20"
            >
              <h2 className="text-2xl text-[#E6F6FF] mb-6">How It Works</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0EA5FF]/20 to-[#00E5FF]/20 border border-[#0EA5FF]/30 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-[#00E5FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#E6F6FF] mb-1">{step.title}</h3>
                      <p className="text-sm text-[#BFC6CC]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-8 border border-[#0EA5FF]/30"
            >
              <h3 className="text-xl text-[#E6F6FF] mb-4">Need Help?</h3>
              <p className="text-[#BFC6CC] mb-4">
                Our team is ready to assist you. Contact us directly:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#00E5FF]" />
                  <span className="text-[#E6F6FF]">Meydan Free Zone, Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#00E5FF]" />
                  <span className="text-[#E6F6FF]">Sat-Thu: 9AM - 8PM | Fri: 2PM - 8PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
