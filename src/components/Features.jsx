import React from "react";
import { Leaf, ClipboardCheck, Camera } from "lucide-react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import cap from "../assets/cap.png";

// Move features array outside component to prevent recreation on each render
const features = [
  {
    id: "smart-diagnosis",
    img: feature1,
    icon: Leaf,
    title: "Smart Crop Diagnosis",
    desc: "Instantly identify crop diseases with AI-powered image recognition. Farmers simply snap a photo, and CropMD delivers accurate results with actionable insights.",
  },
  {
    id: "treatment-plans",
    img: feature3,
    icon: ClipboardCheck,
    title: "Personalized Treatment Plans",
    desc: "Get tailored treatment solutions, including organic and chemical options, with step-by-step guidance for sustainable crop protection.",
  },
  {
    id: "image-capture",
    img: cap,
    icon: Camera,
    title: "Image Capture",
    desc: "Users select a crop (Corn, Rice, or Tomato) and take a photo of a leaf for instant AI-powered disease identification.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Key Features
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Everything you need to protect, manage, and optimize your farm —
          powered by AI and designed for farmers everywhere.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-6">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className="group bg-gradient-to-b from-yellow-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full max-w-[200px] h-48 md:h-56 flex items-center justify-center mb-6 overflow-hidden rounded-xl shadow-lg bg-white">
                <img
                  src={feature.img}
                  alt={`${feature.title} illustration`}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Icon */}
              <div className="mb-3" aria-hidden="true">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
