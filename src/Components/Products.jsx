import React, { useState } from "react";
import { motion } from "framer-motion";
import islamic from "../assets/products/islamic.png";
import tree from "../assets/products/tree.png";
import wallClock from "../assets/products/wall clock.png";
import wall from "../assets/products/wall.png";
import wall2 from "../assets/products/wall2.png";
import ramadan from "../assets/products/Ramadan.png";
import screenshot from "../assets/products/Screenshot 2026-03-09 105831.png";
import wallDecoration from "../assets/products/Wall Decoration.webp";
import item from "../assets/products/item.jpg";
import './Products.css';
import { useContext } from "react";
import NoteContext from "./context api/NoteContext";

const products = [
  {
    id: 1,
    name: "Islamic Wall Art",
    href: "#",
    price: "Rs 1500",
    imageSrc: islamic,
    imageAlt: "Islamic Wall Art",
  },
  {
    id: 2,
    name: "Tree Wall Art",
    href: "#",
    price: "Rs 2500",
    imageSrc: tree,
    imageAlt: "Tree Wall Art",
  },
  {
    id: 3,
    name: "Wall Clock",
    href: "#",
    price: "Rs 3500",
    imageSrc: wallClock,
    imageAlt: "Wall Clock",
  },
  {
    id: 4,
    name: "Wall Art",
    href: "#",
    price: "Rs 4500",
    imageSrc: wall,
    imageAlt: "Wall Art",
  },
  {
    id: 5,
    name: "Wall Art 2",
    href: "#",
    price: "Rs 5000",
    imageSrc: wall2,
    imageAlt: "Wall Art 2",
  },
  {
    id: 6,
    name: "Ramadan Decor",
    href: "#",
    price: "Rs 1500",
    imageSrc: ramadan,
    imageAlt: "Ramadan Decor",
  },
  {
    id: 7,
    name: "Modern Wall Decor",
    href: "#",
    price: "Rs 2500",
    imageSrc: screenshot,
    imageAlt: "Modern Wall Decor",
  },
  {
    id: 8,
    name: "Wall Decoration",
    href: "#",
    price: "Rs 3500",
    imageSrc: wallDecoration,
    imageAlt: "Wall Decoration",
  },
  {
    id: 9,
    name: "Decor Item",
    href: "#",
    price: "Rs 4500",
    imageSrc: item,
    imageAlt: "Decor Item",
  },
];

// WhatsApp Button Component
const WhatsAppButton = ({ product }) => {
  const phoneNumber = "923003444573"; // apna WhatsApp number yahan daalein (country code ke sath)

  // Construct the full URL if href is just "#" (or placeholder) to ensure WhatsApp can crawl it.
  // We'll use the window.location.origin, so if it's hosted, it passes the domain.
  const productURL = product.href !== "#"
    ? product.href
    : `${window.location.origin}?product_id=${product.id}`;

  // WhatsApp message
  const message = `Hi, I am interested in this product:
${product.name}
Price: ${product.price}
${productURL}
`;

  // encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // final WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
 
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />
      Chat on WhatsApp
    </a>
  );
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState(0);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  const { updateCartCount } = useContext(NoteContext);
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id}
              className="group relative flex flex-col bg-white"
              style={{ border: "1px solid #FFA239", borderRadius: "10px", padding: "10px" }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                />

                {/* Hover Overlay with View Product Button */}
                <div className="absolute inset-0 bg-transparent transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => openModal(product)}
                    className="bg-white text-gray-900 font-medium py-2 px-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-gray-100 hover:scale-105"
                  >
                    View Product
                  </button>
                </div>
              </div>

              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

              {/* WhatsApp button */}
              <div className="mt-auto pt-2">
                <WhatsAppButton product={product} />
              </div>
              <div className="Add-to-cards">
                <button  onClick={updateCartCount} style={{cursor:'pointer' }}> Add to Cards</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 transition-opacity"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors z-10 backdrop-blur-md"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Image */}
            <div className="relative h-72 w-full bg-transparent flex items-center justify-center p-4">
              <img
                src={selectedProduct.imageSrc}
                alt={selectedProduct.imageAlt}
                className="max-w-full max-h-full object-contain rounded-lg drop-shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
              <p className="text-xl text-orange-500 font-bold mb-4">{selectedProduct.price}</p>
              <div className="text-gray-600 mb-6 text-sm leading-relaxed">
                <p>Enhance your space with this beautiful {selectedProduct.name}. A perfect blend of style and quality that adds a unique charm to any room.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-center w-full [&>a]:w-full [&>a]:justify-center">
                  <WhatsAppButton product={selectedProduct} />
                </div>
                <button
                  onClick={closeModal}
                  className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium mt-2"
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
