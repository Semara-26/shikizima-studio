import { motion } from 'framer-motion';
import { ArrowRight, Monitor } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Solusi Website Premium untuk UMKM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Ubah UMKM Anda Menjadi{' '}
              <span className="text-indigo-700">Bisnis Kelas Dunia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Website lambat dan desain kaku membuat pelanggan lari. Dapatkan
              website premium, ultra-cepat, dan dirancang khusus untuk
              meningkatkan penjualan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('cta')}
                className="bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl"
              >
                Konsultasi Gratis
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-indigo-700 hover:text-indigo-700 hover:bg-indigo-50 transition-all"
              >
                Lihat Paket
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">UMKM Dipercaya</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">3-5</div>
                <div className="text-sm text-gray-600">Hari Pengerjaan</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Kepuasan</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 shadow-2xl drop-shadow-2xl"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <Monitor className="text-indigo-700" size={20} />
                  <div className="flex-1 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80"
                  alt="Dashboard Analytics"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full blur-3xl opacity-50"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-300 rounded-full blur-3xl opacity-50"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
