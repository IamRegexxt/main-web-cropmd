import React from "react";
import logo from "../assets/logo.png"; // Adjust path if needed

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="CropMD Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary">CropMD</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#help" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#library" className="hover:text-primary transition-colors">Disease Library</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        {/* Download Button */}
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:bg-primary/90 transition-all">
          Download
        </button>
      </div>
    </nav>
  );
}
