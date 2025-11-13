'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/47f8e09276e131fa77924c419af7c3dc441745ab.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Models', path: '/models', hasDropdown: true },
    { name: 'Offers', path: '/offers' },
    { name: 'Compare', path: '/compare' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const modelLinks = [
    { name: 'BYD Leopard 7', path: '/models' },
    { name: 'BYD Leopard 5', path: '/models/leopard-5' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#0EA5FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src={logoImage.src}
              alt="ZAATARI EV Motors"
              className="h-20 md:h-28 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setModelsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setModelsDropdownOpen(false)}
              >
                <Link
                  href={link.path}
                  className={`relative py-2 flex items-center space-x-1 transition-colors ${
                    isActive(link.path)
                      ? 'text-[#00E5FF]'
                      : 'text-[#E6F6FF] hover:text-[#00E5FF]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0EA5FF] to-[#00E5FF]"
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && modelsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#16181C] border border-[#0EA5FF]/30 rounded-lg shadow-lg overflow-hidden"
                  >
                    {modelLinks.map((model) => (
                      <Link
                        key={model.path}
                        href={model.path}
                        className="block px-4 py-3 text-[#E6F6FF] hover:bg-[#0EA5FF]/20 hover:text-[#00E5FF] transition-colors"
                      >
                        {model.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/book-test-drive"
              className="px-6 py-3 bg-[#007bff] text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
            >
              Book Test Drive
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#E6F6FF] hover:text-[#00E5FF] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#0EA5FF]/20 bg-[#16181C]"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <div key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'bg-[#0EA5FF]/20 text-[#00E5FF]'
                        : 'text-[#E6F6FF] hover:bg-[#0EA5FF]/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {modelLinks.map((model) => (
                        <Link
                          key={model.path}
                          href={model.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-4 text-sm text-[#BFC6CC] hover:text-[#00E5FF] transition-colors"
                        >
                          {model.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/book-test-drive"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 bg-[#007bff] text-white rounded-lg text-center"
              >
                Book Test Drive
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
