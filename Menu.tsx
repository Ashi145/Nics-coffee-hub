import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { OrderModal } from "./OrderModal";

const menuItems = [
  {
    name: "Classic Espresso",
    description: "Rich and bold, the perfect energy boost",
    price: "5,000 UGX",
    image: "https://images.unsplash.com/photo-1622240760722-998b255f0501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBhcnR8ZW58MXx8fHwxNzYxNTY1MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and caramel",
    price: "8,000 UGX",
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjE1NDM1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk & foam",
    price: "7,000 UGX",
    image: "https://images.unsplash.com/photo-1659553653381-d98d2a831b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwZm9hbXxlbnwxfHx8fDE3NjE1Mjg1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Iced Coffee",
    description: "Refreshing cold brew served over ice",
    price: "6,000 UGX",
    image: "https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzYxNDQ5NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Mocha",
    description: "Rich chocolate combined with espresso and milk",
    price: "9,000 UGX",
    image: "https://images.unsplash.com/photo-1604298545771-6aafca512943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjE1Mjg0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water for a smooth taste",
    price: "5,500 UGX",
    image: "https://images.unsplash.com/photo-1669872484166-e11b9638b50e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBjb2ZmZWV8ZW58MXx8fHwxNzYxNDYwNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: "", price: "" });

  const handleOrderClick = (name: string, price: string) => {
    setSelectedItem({ name, price });
    setIsOrderModalOpen(true);
  };

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 bg-[#1a1410]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4">Our Menu</h2>
          <p className="text-gray-400 text-lg">Crafted with love, served with care</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -20,
                rotateY: 10,
                rotateX: 5,
                scale: 1.05,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 rounded-2xl overflow-hidden border border-amber-800/30 shadow-2xl backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <motion.div 
                className="p-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <h3 className="text-2xl text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 text-xl">{item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOrderClick(item.name, item.price)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full"
                  >
                    Order
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        itemName={selectedItem.name}
        itemPrice={selectedItem.price}
      />
    </section>
  );
}