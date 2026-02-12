import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl text-white mb-4"
            >
              <span className="font-serif font-bold">Shikizima</span>
              <span className="font-sans font-semibold text-indigo-400 ml-2">Studio</span>
            </motion.div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Solusi website premium untuk UMKM Indonesia. Membantu bisnis Anda
              tampil profesional dan meningkatkan penjualan.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Website Landing Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Website Multi-Halaman
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Custom Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Website Maintenance
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Cara Kerja
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cta')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="https://wa.me/6281234567890"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:hello@webdevpro.id"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    shikizimacorp@shikizimastudio.id
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-indigo-400 flex-shrink-0 mt-1" />
                <div>Denpasar, Indonesia</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Shikizima Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-indigo-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-indigo-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
