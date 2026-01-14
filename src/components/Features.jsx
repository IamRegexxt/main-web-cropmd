import React from "react";
import { Leaf, ClipboardCheck, Camera } from "lucide-react"; // professional icons
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import cap from "../assets/cap.png";

export default function Features() {
  const features = [
    {
      img: feature1,
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Smart Crop Diagnosis",
      desc: "Instantly identify crop diseases with AI-powered image recognition. Farmers simply snap a photo, and CropMD delivers accurate results with actionable insights.",
    },
    {
      img: feature3,
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      title: "Personalized Treatment Plans",
      desc: "Get tailored treatment solutions, including organic and chemical options, with step-by-step guidance for sustainable crop protection.",
    },
    {
      img: cap,
      icon: <Camera className="w-6 h-6 text-primary" />,
      title: "Image Capture",
      desc: "Users select a crop (Corn, Rice, or Tomato) and take a photo of a leaf.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Key Features
        </h2>
        <p className="text-gray-600 mt-4">
          Everything you need to protect, manage, and optimize your farm —
          powered by AI and designed for farmers everywhere.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="group bg-gradient-to-b from-yellow-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="w-54 h-54 flex items-center justify-center mb-6 overflow-hidden rounded-xl shadow-lg">
              <img
                src={f.img}
                alt={f.title}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Icon */}
            <div className="mb-3">{f.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-3">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
