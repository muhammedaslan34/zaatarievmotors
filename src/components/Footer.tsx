import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import logoImage from '../assets/47f8e09276e131fa77924c419af7c3dc441745ab.png';

export default function Footer() {
  return (
    <footer className="bg-[#16181C] border-t border-[#0EA5FF]/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={logoImage.src}
                alt="ZAATARI EV Motors"
                className="h-20 w-auto mb-3"
              />
            </div>
            <p className="text-[#BFC6CC] text-sm mb-4">
              Authorized distributor of premium electric vehicles in the GCC region, bringing innovation and sustainability to Dubai.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#0EA5FF]/10 hover:bg-[#0EA5FF]/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-[#00E5FF]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0EA5FF]/10 hover:bg-[#0EA5FF]/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-[#00E5FF]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0EA5FF]/10 hover:bg-[#0EA5FF]/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-[#00E5FF]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0EA5FF]/10 hover:bg-[#0EA5FF]/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-[#00E5FF]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#E6F6FF] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/models" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">All Models</Link></li>
              <li><Link href="/offers" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Current Offers</Link></li>
              <li><Link href="/compare" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Compare Models</Link></li>
              <li><Link href="/book-test-drive" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Book Test Drive</Link></li>
              <li><Link href="/gallery" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/faq" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#E6F6FF] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Contact</Link></li>
              <li><Link href="/legal" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="/legal" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">Warranty</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#E6F6FF] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                <span className="text-[#BFC6CC] text-sm">Meydan Free Zone, Dubai, UAE</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                <a href="tel:+971501234567" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">+971 50 123 4567</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@zaatariev.ae" className="text-[#BFC6CC] hover:text-[#00E5FF] transition-colors text-sm">info@zaatariev.ae</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0EA5FF]/20 mt-12 pt-8 text-center">
          <p className="text-[#BFC6CC] text-sm">
            © 2025 ZAATARI EV Motors - Dubai (Meydan FZ). All rights reserved. | Authorized BYD Leopard Series Distributor
          </p>
        </div>
      </div>
    </footer>
  );
}