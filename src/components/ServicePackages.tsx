import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function ServicePackages() {
  const packages = [
    {
      name: 'Starter',
      price: '3.500.000',
      period: 'sekali bayar',
      description: 'Cocok untuk UMKM yang baru mulai',
      features: [
        'Landing Page 1 Halaman',
        'Desain Custom',
        'Mobile Responsive',
        'Form Kontak',
        'Integrasi WhatsApp',
        'Loading Super Cepat',
        'Gratis Revisi 2x',
        'Support 30 Hari',
      ],
      popular: false,
    },
    {
      name: 'Business',
      price: '6.500.000',
      period: 'sekali bayar',
      description: 'Paling populer untuk UMKM berkembang',
      features: [
        'Website Multi-Halaman (5-7 Halaman)',
        'Desain Premium Custom',
        'Mobile Responsive',
        'CMS untuk Update Konten',
        'Form Kontak & WhatsApp',
        'SEO Optimization',
        'Gratis Domain & Server 1 Tahun',
        'Google Analytics Integration',
        'Gratis Revisi 3x',
        'Support 90 Hari',
      ],
      popular: true,
      bonus: 'Gratis Domain & Server 1 Tahun',
    },
    {
      name: 'Custom',
      price: 'Sesuai Kebutuhan',
      period: 'konsultasi dulu',
      description: 'Solusi khusus untuk bisnis unik Anda',
      features: [
        'Custom Fitur & Fungsionalitas',
        'E-commerce Integration',
        'Member Area',
        'Payment Gateway',
        'Admin Dashboard',
        'Integrasi API Third-party',
        'Unlimited Revisi',
        'Priority Support',
      ],
      popular: false,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paket Layanan <span className="text-indigo-700">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent ${
                pkg.popular ? 'border-indigo-700 md:-mt-4 md:mb-4 ring-2 ring-indigo-200' : 'hover:border-indigo-600'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                  <Star size={16} fill="currentColor" />
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {pkg.price === 'Sesuai Kebutuhan' ? (
                      <span className="text-2xl">Konsultasi</span>
                    ) : (
                      <>Rp {pkg.price}</>
                    )}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">{pkg.period}</p>
              </div>

              {pkg.bonus && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3 mb-6">
                  <p className="text-green-700 font-semibold text-sm text-center">
                    🎁 {pkg.bonus}
                  </p>
                </div>
              )}

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`flex-shrink-0 mt-1 ${
                        pkg.popular ? 'text-indigo-700' : 'text-green-500'
                      }`}
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('cta')}
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-indigo-700 text-white hover:bg-indigo-800 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {pkg.price === 'Sesuai Kebutuhan'
                  ? 'Konsultasi Gratis'
                  : 'Pilih Paket'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Semua paket sudah termasuk training penggunaan website
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="text-green-500" size={16} />
              Tanpa Biaya Tersembunyi
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" size={16} />
              Garansi Uang Kembali
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" size={16} />
              Pembayaran Bertahap
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
