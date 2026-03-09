import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#97A87A] text-[#FCF9EA]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white">Wallifys</h2>
            <p className="mt-2 text-sm">
              Building modern your home with our unique wall art collection. Transform your space with our exclusive designs. Explore now!
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-medium text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
