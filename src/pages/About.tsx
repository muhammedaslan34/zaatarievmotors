import { motion } from 'motion/react';
import { Award, Target, Users, Leaf, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import showroomImage from 'figma:asset/0e134de7c3b23c6a0d5eadc5eaeffdda903b663b.png';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to reducing carbon emissions and promoting green mobility across the GCC region.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Dedicated to providing exceptional service and building lasting relationships with our clients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering premium quality vehicles and services that exceed expectations.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Embracing cutting-edge technology to lead the electric vehicle revolution.',
  },
];

const milestones = [
  { year: '2015', title: 'Company Founded', description: 'ZAATARI EV Motors established in Dubai' },
  { year: '2018', title: 'BYD Partnership', description: 'Became authorized BYD distributor for GCC' },
  { year: '2020', title: '1,000 Vehicles', description: 'Delivered our 1,000th electric vehicle' },
  { year: '2023', title: 'Leopard Series Launch', description: 'Introduced BYD Leopard series to UAE' },
  { year: '2025', title: '5,000+ Customers', description: 'Serving over 5,000 satisfied customers' },
];

const team = [
  { role: 'Sales Excellence', count: '25+ Specialists' },
  { role: 'Technical Support', count: '15+ Experts' },
  { role: 'Service Centers', count: '15+ Locations' },
];

export default function About() {
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
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl text-[#E6F6FF] mb-4">Driving the Future</h1>
          <p className="text-lg text-[#BFC6CC] max-w-2xl mx-auto">
            Leading the electric vehicle revolution in the GCC with premium quality, 
            exceptional service, and sustainable mobility solutions
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#E6F6FF] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#BFC6CC]">
              <p>
                Founded in 2015, ZAATARI EV Motors has been at the forefront of the electric vehicle 
                movement in Dubai and across the GCC region. As an authorized distributor of BYD's 
                premium Leopard series, we bring world-class electric vehicles to discerning customers 
                who value innovation, sustainability, and luxury.
              </p>
              <p>
                Operating from our state-of-the-art facility in Meydan Free Zone, Dubai, we've built 
                a reputation for excellence in both product quality and customer service. Our team of 
                dedicated professionals is committed to making the transition to electric mobility 
                seamless and rewarding.
              </p>
              <p>
                With over 5,000 satisfied customers and a growing network of 15+ service centers, 
                we continue to lead the charge towards a cleaner, more sustainable future for the 
                region's automotive landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-[#0EA5FF]/30"
          >
            <ImageWithFallback
              src={showroomImage}
              alt="Dubai Showroom"
              className="w-full h-full object-cover scale-150"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-8 border border-[#0EA5FF]/30"
          >
            <Target className="w-12 h-12 text-[#00E5FF] mb-4" />
            <h2 className="text-2xl text-[#E6F6FF] mb-4">Our Mission</h2>
            <p className="text-[#BFC6CC]">
              To accelerate the adoption of electric vehicles in the GCC by providing premium products, 
              exceptional service, and comprehensive support that makes sustainable mobility accessible 
              and desirable for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-8 border border-[#0EA5FF]/30"
          >
            <Users className="w-12 h-12 text-[#00E5FF] mb-4" />
            <h2 className="text-2xl text-[#E6F6FF] mb-4">Our Vision</h2>
            <p className="text-[#BFC6CC]">
              To become the region's most trusted and innovative electric vehicle provider, 
              leading the transformation towards a sustainable, zero-emission future while 
              delivering unparalleled customer experiences.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/20 hover:border-[#0EA5FF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0EA5FF]/20 to-[#00E5FF]/20 border border-[#0EA5FF]/30 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h3 className="text-lg text-[#E6F6FF] mb-2">{value.title}</h3>
                <p className="text-sm text-[#BFC6CC]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0EA5FF] to-[#00E5FF] hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-[#16181C] rounded-xl p-6 border border-[#0EA5FF]/20 inline-block">
                      <h3 className="text-2xl text-[#00E5FF] mb-2">{milestone.year}</h3>
                      <h4 className="text-lg text-[#E6F6FF] mb-2">{milestone.title}</h4>
                      <p className="text-sm text-[#BFC6CC]">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#0EA5FF] to-[#00E5FF] border-4 border-[#0A0A0A] flex-shrink-0"></div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0EA5FF]/10 to-[#00E5FF]/5 rounded-2xl p-12 border border-[#0EA5FF]/30"
        >
          <h2 className="text-3xl md:text-4xl text-[#E6F6FF] text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-[#00E5FF] mb-2">{item.count}</div>
                <div className="text-lg text-[#BFC6CC]">{item.role}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}