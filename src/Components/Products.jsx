import React from "react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    price: " Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Focus Card Tray",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 6,
    name: "Focus Multi-Pack",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt:
      "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
  },
  {
    id: 7,
    name: "Brass Scissors",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imageAlt:
      "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
  },
  {
    id: 8,
    name: "Focus Carry Pouch",
    href: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg",
    price: "Rs 148",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];

// WhatsApp Button Component
const WhatsAppButton = ({ product }) => {
  const phoneNumber = "923183116768"; // apna WhatsApp number yahan daalein (country code ke sath)
  
  // WhatsApp message
  const message = `Hi, I am interested in this product:
${product.name}
${product.href}
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
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              style={{ border: "1px solid #FFA239", borderRadius: "10px", padding: "10px" }}
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              {/* WhatsApp button */}
              <WhatsAppButton product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
