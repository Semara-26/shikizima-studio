import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

function ImageWithSkeleton({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-0" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-all duration-700 ${
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />
    </>
  );
}

export default function DesignCatalog() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const designs = [
    {
      id: 1,
      category: "Kuliner & Cafe",
      vibe: "Warm, appetizing, inviting",
      colors: ["bg-amber-100", "bg-orange-100", "bg-red-50"],
      description:
        "Website hangat dengan typography yang mengundang, high-quality food imagery, dan CTA order yang prominent.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      category: "Fashion & Retail",
      vibe: "Clean, image-focused, minimalist",
      colors: ["bg-gray-100", "bg-slate-100", "bg-white"],
      description:
        "Desain minimalis dengan fokus pada visual produk, navigasi intuitif, dan katalog yang mudah dibrowser.",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      category: "Corporate & Jasa",
      vibe: "Blue/Grey, trustworthy, clean",
      colors: ["bg-blue-100", "bg-slate-100", "bg-indigo-50"],
      description:
        "Professional dengan color palette biru-abu, trust signals, case studies, dan expertise showcase.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      category: "Beauty & Wellness",
      vibe: "Soft pastels, elegant, calming",
      colors: ["bg-pink-100", "bg-purple-100", "bg-rose-50"],
      description:
        "Desain elegan dengan pastel colors, typography yang sophisticated, dan before-after showcase.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      category: "Tech & Startup",
      vibe: "Dark mode, neon accents, modern",
      colors: ["bg-slate-900", "bg-blue-900", "bg-purple-900"],
      description:
        "Modern dark aesthetic dengan neon accents, futuristic vibes, dan tech-forward animations.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      category: "Event & Portfolio",
      vibe: "Bold typography, artistic, creative",
      colors: ["bg-yellow-100", "bg-fuchsia-100", "bg-cyan-100"],
      description:
        "Bold design dengan typography yang menonjol, gallery showcase, dan creative storytelling.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
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
            Pilih Identitas Digital{" "}
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
                // 2. ANIMASI MASUK (Entrance)
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1, 
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: {
                    delay: 0,
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                onHoverStart={() => setHoveredCard(design.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-indigo-600"
              >
                {/* IMPLEMENTASI SKELETON (DESKTOP) */}
                <div className="aspect-video relative overflow-hidden bg-slate-50">
                  <ImageWithSkeleton
                    src={design.image}
                    alt={design.category}
                    className="w-full h-full object-cover group-hover:scale-105"
                  />

                  {hoveredCard === design.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center z-10"
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
            style={{ scrollBehavior: "smooth" }}
          >
            {designs.map((design) => (
              <motion.div
                key={design.id}
                className="flex-shrink-0 w-80 rounded-2xl shadow-lg overflow-hidden snap-start border-2 border-transparent hover:border-indigo-600 transition-all"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* IMPLEMENTASI SKELETON (MOBILE) */}
                <div className="aspect-video relative overflow-hidden bg-slate-50">
                  <ImageWithSkeleton
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
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center hover:bg-indigo-800 transition-colors"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
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
