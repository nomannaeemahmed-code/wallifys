import React from 'react';

import founderImg from '../assets/ownership/Founder.png';
import ceoImg from '../assets/ownership/Ceo.jpeg';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Contact Form Section */}
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#FFA239' }}>Contact Us</h2>
      <div className="bg-white p-8 rounded-lg shadow-md mb-12 max-w-2xl mx-auto" style={{ border: '1px solid #FFA239' }}>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Send us a message</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" style={{ borderColor: '#FFA239' }} placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" style={{ borderColor: '#FFA239' }} placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" style={{ borderColor: '#FFA239' }} rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="button" className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#FFA239' }}>
            Send Message
          </button>
        </form>
      </div>

      {/* Team Section */}
      {/* <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#FFA239' }}>Our Leadership</h2> */}
      {/* <div className="grid md:grid-cols-2 gap-8"> */}
        
        {/* Founder */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md text-center" style={{ border: '1px solid #FFA239' }}>
          <img src={founderImg} alt="Founder" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4" style={{ borderColor: '#FFA239' }} />
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Noman</h3>
          <p className="text-[#FFA239] font-semibold mb-4 text-lg">Founder</p>
          <div className="text-gray-600 text-sm text-center space-y-2">
            <p><strong>Bio:</strong> A visionary leader with over 15 years of experience in the home decor industry. Passionate about bringing art to life.</p>
            <p><strong>Responsibilities:</strong> Guiding the brand's overall vision, exploring new market opportunities, and ensuring our core values are met across all products.</p>
          </div>
        </div> */}

        {/* CEO */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md text-center" style={{ border: '1px solid #FFA239' }}>
          <img src={ceoImg} alt="CEO" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4" style={{ borderColor: '#FFA239' }} />
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Junaid Tariq</h3>
          <p className="text-[#FFA239] font-semibold mb-4 text-lg">Chief Executive Officer (CEO)</p>
          <div className="text-gray-600 text-sm text-center space-y-2">
            <p><strong>Bio:</strong> A dynamic executive who has scaled multiple retail businesses. Specializes in operations, marketing, and team building.</p>
            <p><strong>Responsibilities:</strong> Handling day-to-day operations, making high-level corporate decisions, and driving the brand's strategic growth initiatives.</p>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Contact;
