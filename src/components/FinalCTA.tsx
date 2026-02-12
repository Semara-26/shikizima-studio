import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-indigo-700 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
          >
            Penawaran Terbatas
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Siap Naik Level?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Bergabunglah dengan 50+ UMKM yang sudah merasakan transformasi
            bisnis mereka. Konsultasi gratis, tanpa komitmen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Konsultasi Gratis Sekarang
              <ArrowRight size={20} />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all hover:shadow-xl"
            >
              Lihat Paket Lagi
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="flex-shrink-0" size={24} />
              <span className="text-sm sm:text-base">
                Konsultasi Gratis
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="flex-shrink-0" size={24} />
              <span className="text-sm sm:text-base">
                Garansi Kepuasan
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="flex-shrink-0" size={24} />
              <span className="text-sm sm:text-base">
                Support Responsif
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
