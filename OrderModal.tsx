import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingCart } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
  itemPrice?: string;
}

export function OrderModal({ isOpen, onClose, itemName = "", itemPrice = "" }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    item: itemName,
    quantity: "1",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New Order from ${formData.name}`;
    const body = `
Order Details:
--------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Item: ${formData.item}
Quantity: ${formData.quantity}
Price: ${itemPrice}
Notes: ${formData.notes}

Thank you!
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:kyeyunea495@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        item: "",
        quantity: "1",
        notes: ""
      });
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -20, y: 100 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 20, y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-[#1a1410] to-[#0a0a0a] border border-amber-800/30 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-amber-900/50 to-amber-950/50 backdrop-blur-md border-b border-amber-800/30 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ShoppingCart className="w-6 h-6 text-amber-500" />
                  </motion.div>
                  <h2 className="text-2xl text-white">Place Your Order</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="0784690455"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="item" className="block text-white mb-2">
                    Item *
                  </label>
                  <input
                    type="text"
                    id="item"
                    name="item"
                    required
                    value={formData.item}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Select an item"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-white mb-2">
                    Quantity *
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-800/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-white mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Any special requests?"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-lg shadow-lg transition-all"
                >
                  Send Order via Email
                </motion.button>

                <p className="text-gray-400 text-sm text-center">
                  Your order will be sent to kyeyunea495@gmail.com
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
