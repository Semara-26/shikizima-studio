import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
          Shikizima <span className="text-indigo-700">Studio</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500 tracking-widest uppercase">
          Digital Craftsmanship
        </p>
      </motion.div>

      {/* Loading Bar Animation */}
      <div className="mt-8 h-1 w-48 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-indigo-600"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;