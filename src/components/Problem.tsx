import { motion } from 'framer-motion';
import { TrendingDown, UserX, MessageCircleQuestion } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Tenggelam di Algoritma Sosmed',
      description:
        'Postingan Anda hilang dalam hitungan jam. Pelanggan potensial tidak pernah menemukan bisnis Anda di antara jutaan konten lainnya.',
    },
    {
      icon: UserX,
      title: 'Dianggap Kurang Bonafide oleh Klien Besar',
      description:
        'Klien korporat dan B2B mencari website profesional sebagai bukti kredibilitas. Bio Instagram tidak cukup untuk mendapat kepercayaan mereka.',
    },
    {
      icon: MessageCircleQuestion,
      title: 'Capek Jawab Pertanyaan Berulang',
      description:
        'Setiap hari menjawab pertanyaan yang sama di DM: "Harga berapa?", "Layanan apa aja?", "Dimana lokasinya?". Membuang waktu produktif Anda.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Masih Mengandalkan{' '}
            <span className="text-indigo-700">Bio Instagram?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inilah mengapa bisnis Anda sulit berkembang dan kehilangan
            pelanggan potensial setiap harinya
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <problem.icon className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg text-sm font-medium">
            Bisnis profesional membutuhkan platform profesional
          </div>
        </motion.div>
      </div>
    </section>
  );
}
