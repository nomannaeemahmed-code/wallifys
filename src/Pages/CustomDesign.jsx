// Adding a new Custom Design page to allow users to upload their custom designs
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomDesign = () => {
  // State to hold the selected file type string (PNG, AI, JPG, PDF)
  const [fileType, setFileType] = useState('PNG');
  // State to hold the name of the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  // State to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Ref to trigger the hidden default file input when our custom upload area is clicked
  const fileInputRef = useRef(null);

  // Function to handle the file selection event
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // Update state with the selected file's name
      setSelectedFile(e.target.files[0].name);
    }
  };

  // Function to trigger the actual file input dialog when clicking our custom element
  const handleUploadClick = () => {
    // Calling click() on the hidden file input element opens the OS file picker
    fileInputRef.current.click();
  };

  // Function to handle form submission (preventing default for demo purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      setIsSubmitted(true);
    } else {
      alert('Please upload a file first.');
    }
  };

  // Render "Thank You" screen if form is submitted
  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[60vh] flex flex-col items-center justify-center"
      >
        <div className="bg-white p-10 rounded-lg shadow-md max-w-lg w-full text-center" style={{ border: '1px solid #FFA239' }}>
          {/* Success Checkmark Icon */}
          <motion.svg 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto h-16 w-16 text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </motion.svg>
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-4" style={{ color: '#FFA239' }}
          >Thank you for submitting your design!</motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-gray-600 mb-8"
          >We have received your {fileType} format file ({selectedFile}). Our team will review it and get back to you shortly.</motion.p>
          
          <motion.h3 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-lg font-semibold text-gray-800 mb-4"
          >Do you want to submit another design?</motion.h3>
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => {
              setIsSubmitted(false);
              setSelectedFile(null);
            }} 
            className="text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: '#FFA239' }}
          >
            Submit Another Design
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[60vh]"
    >
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#FFA239' }}>Upload Custom Design</h2>
      
      {/* Main container for the form */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto" style={{ border: '1px solid #FFA239' }}
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">Bring your ideas to life</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Dropdown for selecting the file format */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Select File Format</label>
            <select 
              value={fileType} 
              onChange={(e) => setFileType(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" 
              style={{ borderColor: '#FFA239' }}
            >
              <option value="PNG">PNG Image (.png)</option>
              <option value="AI">Adobe Illustrator (.ai)</option>
              <option value="JPG">JPEG Image (.jpg, .jpeg)</option>
              <option value="PDF">PDF Document (.pdf)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Please specify the format of your design file.</p>
          </div>

          {/* Custom File Upload Area (triggers standard file picker) */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Upload File</label>
            
            {/* Hidden native file input element that handles the actual file selection */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              // Set the accept attribute based on the selected file type
              accept={fileType === 'PNG' ? '.png' : fileType === 'AI' ? '.ai' : fileType === 'JPG' ? '.jpg,.jpeg' : '.pdf'} 
            />
            
            {/* Clickable UI area that visually represents the upload action */}
            <div 
              onClick={handleUploadClick}
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-orange-50 transition-colors"
              style={{ borderColor: '#FFA239' }}
            >
              {/* Upload Icon */}
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-600 mb-1">Click to upload your custom design</p>
              
              {/* Display the name of the selected file to provide feedback */}
              {selectedFile && (
                <p className="font-semibold text-green-600 mt-2">Selected: {selectedFile}</p>
              )}
            </div>
          </div>

          {/* Additional instructions text area */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Additional Instructions</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" style={{ borderColor: '#FFA239' }} rows="3" placeholder="Tell us more about your requirements..."></textarea>
          </div>

          {/* Form Submit Button */}
          <button type="submit" className="text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#FFA239' }}>
            Submit Design
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CustomDesign;
