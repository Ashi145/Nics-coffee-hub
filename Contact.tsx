import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4">Visit Us</h2>
          <p className="text-gray-400 text-base sm:text-lg">We'd love to serve you!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                x: 10,
                rotateY: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 border border-amber-800/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-amber-600 p-2 sm:p-3 rounded-full flex-shrink-0"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl mb-2">Location</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Mutungo Bbina Road<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05, 
                x: 10,
                rotateY: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 border border-amber-800/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-amber-600 p-2 sm:p-3 rounded-full flex-shrink-0"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl mb-2">Phone</h3>
                  <a href="tel:0784690455" className="text-gray-300 hover:text-amber-500 transition-colors text-sm sm:text-base">
                    0784690455
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05, 
                x: 10,
                rotateY: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 border border-amber-800/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-amber-600 p-2 sm:p-3 rounded-full flex-shrink-0"
                >
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl mb-2">Hours</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Monday - Friday: 7:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: -5,
              z: 30
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7542086847697!2d32.63!3d0.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTgnMzYuMCJOIDMywrAzNyc0OC4wIkU!5e0!3m2!1sen!2sug!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nic's Coffee Hub Location"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.p
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-400 text-sm sm:text-base md:text-lg"
          >
            © 2025 Nic's Coffee Hub ☕ - Brewing happiness, one cup at a time
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}