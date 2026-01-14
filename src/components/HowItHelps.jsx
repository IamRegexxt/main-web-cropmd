import React from "react";
import { Languages, MessageCircle, Cloud, History, Star } from "lucide-react";

export default function HowItHelps() {
  const supportingFeatures = [
    { 
      text: "Multi-language support: English, Tagalog (Filipino), and Bikol", 
      icon: <Languages className="w-12 h-12 text-primary" /> 
    },
    { 
      text: "AI chatbot: Answers questions about crop diseases and farming practices", 
      icon: <MessageCircle className="w-12 h-12 text-primary" /> 
    },
    { 
      text: "Weather integration: Shows current weather conditions", 
      icon: <Cloud className="w-12 h-12 text-primary" /> 
    },
    { 
      text: "Prediction history: Tracks past disease detections", 
      icon: <History className="w-12 h-12 text-primary" /> 
    },
    { 
      text: "Feedback system: Users can rate and review predictions", 
      icon: <Star className="w-12 h-12 text-primary" /> 
    },
  ];
  return (
    // Add tabIndex so this section can receive programmatic focus for accessibility
    <section id="help" tabIndex={-1} className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Supporting Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empowering farmers with AI-driven tools that make crop care faster, easier, and more effective.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {supportingFeatures.map((sf, idx) => (
            <div 
              key={idx} 
              className="p-6 lg:p-8 bg-white rounded-2xl shadow-md border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-100 rounded-full mb-4">
                  {sf.icon}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{sf.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
