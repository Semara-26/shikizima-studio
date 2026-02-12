import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl cursor-pointer"
          >
            <span className="font-serif font-bold text-gray-900">Shikizima</span>
            <span className="font-sans font-semibold text-indigo-700 ml-2">Studio</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-indigo-700 transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-indigo-700 transition-colors"
            >
              Proses
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-indigo-700 transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-indigo-700 transition-colors"
            >
              FAQ
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('cta')}
              className="bg-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors"
            >
              Konsultasi Gratis
            </motion.button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-700"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-700"
            >
              Proses
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-700"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-700"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="block w-full bg-indigo-700 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition-colors mt-4"
            >
              Konsultasi Gratis
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
