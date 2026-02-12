import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      business: 'Owner - Warung Kopi Nusantara',
      quote:
        'Sejak punya website, pelanggan bisa langsung cek menu dan harga. Orderan naik 60% dalam 2 bulan! Yang paling penting, sekarang terlihat lebih profesional di mata klien korporat.',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      business: 'Founder - Batik Modern Indonesia',
      quote:
        'Saya nggak ngerti coding sama sekali, tapi teamnya sabar banget ngajarin cara update produk. Website loading-nya cepet banget, pelanggan sering puji desainnya elegan.',
      rating: 5,
    },
    {
      name: 'Ahmad Fauzi',
      business: 'CEO - Jasa Konsultan Digital',
      quote:
        'Pertama kali ada klien bilang "websitenya profesional banget" setelah sebelumnya cuma pake link Linktree. ROI-nya worth it, karena sekarang closing rate meningkat drastis.',
      rating: 5,
    },
    {
      name: 'Dewi Lestari',
      business: 'Owner - Catering Sehat Jakarta',
      quote:
        'Dari Instagram aja dulu susah dapat kepercayaan. Setelah punya website sendiri, inquiry dari perusahaan besar langsung masuk. Prosesnya juga cepat, cuma 5 hari udah jadi!',
      rating: 5,
    },
    {
      name: 'Reza Mahendra',
      business: 'Founder - Jasa Fotografi Premium',
      quote:
        'Portfolio saya jadi terlihat lebih ciamik di website. Klien bilang kesan pertama lihat website langsung "ini profesional". Investasi terbaik untuk bisnis saya.',
      rating: 5,
    },
    {
      name: 'Linda Wijaya',
      business: 'Owner - Toko Furniture Custom',
      quote:
        'Customer sekarang bisa lihat katalog lengkap tanpa harus DM terus. Support-nya juga responsif, tiap ada pertanyaan langsung dijawab. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cerita Sukses <span className="text-indigo-700">Klien Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan langsung dari pemilik UMKM yang sudah merasakan
            transformasi bisnis mereka
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="text-indigo-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-blue-200 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <User size={20} className="text-indigo-700" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">50+ UMKM</div>
              <div className="text-sm text-gray-600">Sudah Bergabung</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
