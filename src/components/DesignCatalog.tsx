import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function DesignCatalog() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const designs = [
    {
      id: 1,
      category: 'Kuliner & Cafe',
      vibe: 'Warm, appetizing, inviting',
      colors: ['bg-amber-100', 'bg-orange-100', 'bg-red-50'],
      description: 'Website hangat dengan typography yang mengundang, high-quality food imagery, dan CTA order yang prominent.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=350&fit=crop&q=80',
    },
    {
      id: 2,
      category: 'Fashion & Retail',
      vibe: 'Clean, image-focused, minimalist',
      colors: ['bg-gray-100', 'bg-slate-100', 'bg-white'],
      description: 'Desain minimalis dengan fokus pada visual produk, navigasi intuitif, dan katalog yang mudah dibrowser.',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=350&fit=crop&q=80',
    },
    {
      id: 3,
      category: 'Corporate & Jasa',
      vibe: 'Blue/Grey, trustworthy, clean',
      colors: ['bg-blue-100', 'bg-slate-100', 'bg-indigo-50'],
      description: 'Professional dengan color palette biru-abu, trust signals, case studies, dan expertise showcase.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop&q=80',
    },
    {
      id: 4,
      category: 'Beauty & Wellness',
      vibe: 'Soft pastels, elegant, calming',
      colors: ['bg-pink-100', 'bg-purple-100', 'bg-rose-50'],
      description: 'Desain elegan dengan pastel colors, typography yang sophisticated, dan before-after showcase.',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f1f664?w=500&h=350&fit=crop&q=80',
    },
    {
      id: 5,
      category: 'Tech & Startup',
      vibe: 'Dark mode, neon accents, modern',
      colors: ['bg-slate-900', 'bg-blue-900', 'bg-purple-900'],
      description: 'Modern dark aesthetic dengan neon accents, futuristic vibes, dan tech-forward animations.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop&q=80',
    },
    {
      id: 6,
      category: 'Event & Portfolio',
      vibe: 'Bold typography, artistic, creative',
      colors: ['bg-yellow-100', 'bg-fuchsia-100', 'bg-cyan-100'],
      description: 'Bold design dengan typography yang menonjol, gallery showcase, dan creative storytelling.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop&q=80',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      const newPosition =
        direction === 'left'
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section id="designs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih Identitas Digital{' '}
            <span className="text-indigo-700">Bisnis Anda</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyesuaikan desain dengan karakter industri Anda
          </p>
        </motion.div>

        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredCard(design.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-indigo-600"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <img
                    src={design.image}
                    alt={design.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {hoveredCard === design.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-indigo-50 transition-colors"
                      >
                        <Eye size={20} />
                        Lihat Preview
                      </motion.button>
                    </motion.div>
                  )}
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {design.colors.map((color, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${color}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {design.category}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 italic">
                    {design.vibe}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {design.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {designs.map((design) => (
              <motion.div
                key={design.id}
                className="flex-shrink-0 w-80 rounded-2xl shadow-lg overflow-hidden snap-start border-2 border-transparent hover:border-indigo-600 transition-all"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <img
                    src={design.image}
                    alt={design.category}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {design.colors.map((color, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${color}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {design.category}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 italic">
                    {design.vibe}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {design.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-indigo-800 transition-colors"
                  >
                    <Eye size={18} />
                    Lihat Preview
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center hover:bg-indigo-800 transition-colors"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center hover:bg-indigo-800 transition-colors"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
