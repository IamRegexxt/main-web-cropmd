import React from "react";
import { ArrowRight } from "lucide-react";
import phone1 from "../assets/hero2.jpeg";
import phone2 from "../assets/hero1.png";
import phone3 from "../assets/hero3.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <span className="px-4 py-1 text-sm font-medium bg-yellow-200 text-yellow-900 rounded-full">
            AI-Powered Crop Care
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Your Smart Crop Health Companion
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Detect, diagnose, and protect your plants with AI-driven disease
            detection. Boost your harvest and keep crops healthy right from
            your smartphone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/cropMD.apk"
              download="cropMD.apk"
              aria-label="Download CropMD APK"
              className="bg-primary text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Download App <ArrowRight className="w-4 h-4" />
            </a>
            <button className="border border-primary text-primary px-6 py-3 rounded-xl shadow-lg hover:bg-primary hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="flex gap-6">
            <img
              src={phone1}
              alt="App Screen 1"
              className="w-36 md:w-44 lg:w-52 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            />
            <img
              src={phone2}
              alt="App Screen 2"
              className="w-36 md:w-44 lg:w-52 rounded-2xl shadow-xl relative top-8 transform hover:-translate-y-2 transition-transform duration-300"
            />
            <img
              src={phone3}
              alt="App Screen 3"
              className="w-36 md:w-44 lg:w-52 rounded-2xl shadow-xl relative top-16 hidden md:block transform hover:-translate-y-2 transition-transform duration-300"
            />
          </div>

          {/* Subtle background effect */}
          <div className="absolute -z-10 top-12 right-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
