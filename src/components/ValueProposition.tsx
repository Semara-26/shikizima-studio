import { motion } from 'framer-motion';
import { Zap, Target, CheckCircle } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Memilih <span className="text-indigo-700">Kami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bukan sekadar website, tapi aset digital yang menghasilkan penjualan
          </p>
        </motion.div>

        <div className="space-y-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-block bg-indigo-100 p-4 rounded-2xl mb-6">
                <Zap className="text-indigo-700" size={40} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Teknologi Anti-Lemot
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kami menggunakan React, teknologi yang sama dipakai oleh
                Facebook, Netflix, dan Instagram. Website Anda akan loading{' '}
                <span className="font-semibold text-indigo-700">
                  5x lebih cepat
                </span>{' '}
                dibanding WordPress biasa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Loading Super Cepat
                    </div>
                    <div className="text-gray-600">
                      Website Anda siap dalam hitungan detik, bukan menit
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Mobile-Friendly
                    </div>
                    <div className="text-gray-600">
                      Sempurna di semua perangkat, dari HP hingga desktop
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">
                      SEO Optimized
                    </div>
                    <div className="text-gray-600">
                      Mudah ditemukan di Google, menarik lebih banyak pelanggan
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500">Loading Speed</div>
                    <Zap className="text-indigo-700" size={20} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">WordPress</span>
                        <span className="text-gray-900 font-semibold">
                          5.2s
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">React (Kami)</span>
                        <span className="text-indigo-700 font-semibold">
                          0.9s
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-700 rounded-full w-[15%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                5x Lebih Cepat!
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      +85%
                    </div>
                    <div className="text-sm text-gray-600">
                      Peningkatan Konversi
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">CTA Strategis</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">Form Optimization</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">Trust Signals</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-indigo-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Terbukti Efektif!
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-green-100 p-4 rounded-2xl mb-6">
                <Target className="text-green-600" size={40} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Desain Pengunci Transaksi
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Setiap elemen dirancang dengan psikologi konversi. Dari
                penempatan tombol, pemilihan warna, hingga copywriting yang
                meyakinkan.{' '}
                <span className="font-semibold text-green-600">
                  Bukan hanya cantik, tapi menghasilkan penjualan.
                </span>
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Strategic Call-to-Action
                    </div>
                    <div className="text-gray-600">
                      Tombol CTA ditempatkan di lokasi dengan tingkat klik
                      tertinggi
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Social Proof Integration
                    </div>
                    <div className="text-gray-600">
                      Testimoni dan trust badge yang meningkatkan kepercayaan
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Simplified User Journey
                    </div>
                    <div className="text-gray-600">
                      Navigasi intuitif yang mengarahkan ke pembelian
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
