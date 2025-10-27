import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1410]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-6"
              animate={isInView ? { 
                rotateX: [0, 2, -2, 0],
              } : {}}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Your Perfect
              <br />
              Coffee Destination
            </motion.h2>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              Welcome to Nic's Coffee Hub, where passion meets perfection in every cup. 
              Located in the heart of Mutungo on Bbina Road, we're more than just a coffee shop 
              – we're a community gathering place where friends meet, ideas flow, and memories are made.
            </p>
            <p className="text-gray-300 text-base sm:text-lg">
              Our expert baristas craft each beverage with care, using premium beans sourced 
              from the finest coffee regions. Whether you're looking for your morning espresso, 
              a cozy afternoon latte, or a place to work and relax, Nic's Coffee Hub is your home away from home.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              z: 50
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582572426223-d152057ba012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYxNDU2Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Espresso Machine"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, type: "spring" }}
              whileHover={{ rotate: 360, scale: 1.2 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-amber-600 text-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center text-center shadow-xl"
            >
              <div>
                <div className="text-xl sm:text-2xl">☕</div>
                <div className="text-xs sm:text-sm">Premium<br/>Coffee</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}