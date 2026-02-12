import { motion } from 'framer-motion';
import { MessageCircle, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Diskusi & Konsultasi',
      description:
        'Kami dengarkan kebutuhan bisnis Anda. Diskusi gratis tanpa komitmen untuk memahami goals dan target market Anda.',
      duration: '30-60 menit',
      color: 'blue',
    },
    {
      icon: Code,
      title: 'Development',
      description:
        'Tim kami mulai mengerjakan website Anda dengan teknologi terkini. Update progress rutin setiap hari.',
      duration: '3-5 Hari',
      color: 'green',
    },
    {
      icon: Rocket,
      title: 'Launch & Training',
      description:
        'Website siap online! Kami berikan training lengkap cara update konten dan kelola website Anda sendiri.',
      duration: '1 Hari',
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-indigo-700',
      border: 'border-blue-200',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200',
    },
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proses Kerja <span className="text-indigo-700">Simpel & Cepat</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari konsultasi hingga launching, semuanya berjalan lancar dan
            transparan
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-green-200 to-orange-200 -translate-y-1/2 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                    <div
                      className={`absolute -top-6 left-8 ${colors.bg} w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
                    >
                      <span className={`text-xl font-bold ${colors.text}`}>
                        {index + 1}
                      </span>
                    </div>

                    <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4`}>
                      <step.icon className={colors.text} size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    <div
                      className={`inline-block ${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-semibold mb-4`}
                    >
                      {step.duration}
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Total Waktu: 5-7 Hari Kerja
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Website profesional Anda siap online dalam waktu singkat
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Revisi Unlimited</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Support Responsif</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
