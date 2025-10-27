import { motion } from "motion/react";
import { Coffee, Phone, MapPin } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDgwMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-8"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl mb-4 tracking-tight">
              Nic's Coffee Hub
              <span className="inline-block ml-2">☕</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200"
          >
            Where Every Cup Tells a Story
          </motion.p>
        </motion.div>

        {/* Floating Contact Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 w-full max-w-2xl px-4"
        >
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotateY: 10,
              z: 50
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 justify-center sm:justify-start"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base">0784690455</span>
          </motion.div>

          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotateY: 10,
              z: 50
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 justify-center sm:justify-start"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base">Mutungo Bbina Road</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="absolute bottom-8"
        >
          <Coffee className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}