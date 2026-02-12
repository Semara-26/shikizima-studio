import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah saya perlu mengerti coding?',
      answer:
        'Tidak sama sekali! Kami membuat website yang sangat mudah dikelola. Setelah website jadi, kami akan berikan training lengkap cara update konten, foto, dan informasi lainnya. Semua bisa dilakukan tanpa perlu tahu coding.',
    },
    {
      question: 'Berapa lama proses pengerjaan website?',
      answer:
        'Untuk paket Starter, biasanya 3-5 hari kerja. Paket Business membutuhkan waktu 5-7 hari kerja. Sedangkan paket Custom disesuaikan dengan kompleksitas fitur yang dibutuhkan. Kami selalu update progress setiap hari agar Anda bisa pantau perkembangan.',
    },
    {
      question: 'Apakah website bisa diubah/update sendiri nantinya?',
      answer:
        'Tentu bisa! Kami menggunakan CMS (Content Management System) yang user-friendly. Anda bisa update artikel, foto produk, harga, dan konten lainnya dengan mudah. Plus, kami sediakan tutorial video dan support jika ada kesulitan.',
    },
    {
      question: 'Apakah sudah termasuk domain dan hosting?',
      answer:
        'Untuk paket Business, sudah termasuk GRATIS domain (.com/.id) dan hosting selama 1 tahun pertama. Paket Starter tidak termasuk, tapi kami bisa bantu setup dengan biaya tambahan yang terjangkau. Setelah tahun pertama, biaya perpanjangan sekitar Rp 300-500rb/tahun.',
    },
    {
      question: 'Bagaimana sistem pembayarannya?',
      answer:
        'Kami menerima pembayaran bertahap untuk memudahkan Anda: DP 50% di awal, dan pelunasan 50% setelah website selesai dan Anda puas dengan hasilnya. Kami terima transfer bank (BCA, Mandiri, BNI) dan bisa juga via e-wallet.',
    },
    {
      question: 'Apakah website bisa muncul di Google?',
      answer:
        'Ya! Semua website kami sudah SEO-optimized sejak awal. Kami setup Google Search Console, sitemap, dan optimasi dasar agar website Anda mudah ditemukan di mesin pencari. Untuk hasil maksimal, kami juga sediakan konsultasi strategi SEO lanjutan.',
    },
    {
      question: 'Bagaimana jika nanti ada masalah atau butuh bantuan?',
      answer:
        'Kami menyediakan support period sesuai paket yang Anda pilih (30-90 hari). Setelah itu, Anda bisa subscribe maintenance plan bulanan atau hubungi kami kapan saja untuk bantuan. Tim kami responsif dan siap membantu via WhatsApp atau email.',
    },
    {
      question: 'Apakah bisa request fitur khusus?',
      answer:
        'Absolutely! Untuk fitur standar seperti form kontak, WhatsApp button, Google Maps, dan gallery sudah termasuk dalam paket. Untuk fitur khusus seperti booking system, payment gateway, atau member area, bisa pilih paket Custom atau tambahan biaya sesuai kompleksitas.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering{' '}
            <span className="text-indigo-700">Ditanyakan</span>
          </h2>
          <p className="text-lg text-gray-600">
            Semua yang perlu Anda ketahui sebelum memulai
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-indigo-700" size={24} />
                  ) : (
                    <Plus className="text-gray-400" size={24} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center bg-indigo-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Masih ada pertanyaan lain?
          </h3>
          <p className="text-gray-600 mb-4">
            Hubungi kami untuk konsultasi gratis tanpa komitmen
          </p>
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
