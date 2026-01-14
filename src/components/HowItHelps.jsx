import React from "react";
import { Camera, BookOpen, Languages, BarChart } from "lucide-react";

export default function HowItHelps() {
  const benefits = [
    { 
      title: "Instant Disease Detection", 
      desc: "Snap a photo of your crop and CropMD instantly analyzes it with AI to detect possible diseases.", 
      icon: <Camera className="w-12 h-12 text-primary mb-4" /> 
    },
    { 
      title: "Comprehensive Disease Library", 
      desc: "Explore detailed insights about crop diseases, symptoms, and preventive measures tailored to your plants.", 
      icon: <BookOpen className="w-12 h-12 text-primary mb-4" /> 
    },
    { 
    title: "Bi-Language Support", 
    desc: "CropMD is available in both English and Tagalog, making plant health information easier to understand for every farmer.", 
    icon: <Languages className="w-12 h-12 text-primary mb-4" /> 
    },
    { 
      title: "History & Dashboard", 
      desc: "Track your crop health history and view easy-to-understand trends in a user-friendly dashboard.", 
      icon: <BarChart className="w-12 h-12 text-primary mb-4" /> 
    },
  ];
  return (
    // Add tabIndex so this section can receive programmatic focus for accessibility
    <section id="help" tabIndex={-1} className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          How CropMD Helps Farmers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empowering farmers with AI-driven tools that make crop care faster, easier, and more effective.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white rounded-2xl shadow-md border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-100 rounded-full mb-4">
                  {b.icon}
                </div>
                <h4 className="font-semibold text-lg text-gray-900">{b.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
