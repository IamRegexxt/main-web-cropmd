import React from "react";
import { Target, Users, Heart, Award } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To empower farmers with cutting-edge AI technology that makes crop disease detection accessible, accurate, and affordable for everyone.",
    },
    {
      icon: Users,
      title: "Our Vision",
      desc: "A world where every farmer has the tools and knowledge to protect their crops and maximize their harvest potential.",
    },
    {
      icon: Heart,
      title: "Our Values",
      desc: "We believe in sustainable farming, farmer empowerment, and leveraging technology to solve real-world agricultural challenges.",
    },
    {
      icon: Award,
      title: "Innovation",
      desc: "Continuously improving our AI models to provide the most accurate disease detection and treatment recommendations.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About CropMD
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            CropMD is an AI-powered mobile application designed to help farmers
            quickly identify and treat crop diseases. We are a team of three
            computer science students passionate about using technology to solve
            real-world agricultural challenges and make advanced crop care
            accessible to farmers everywhere.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              CropMD was developed from the recognition that farmers face significant
              challenges in identifying and treating crop diseases. As computer
              science students, we saw an opportunity to apply our knowledge of
              artificial intelligence and mobile development to solve a real-world
              problem affecting agricultural communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of three computer science students developed CropMD to bridge
              this gap by combining artificial intelligence with user-friendly
              mobile technology. Through our coursework and passion for technology,
              we created an app that enables farmers to diagnose crop diseases
              instantly by simply taking a photo, providing them with accurate
              results and actionable treatment recommendations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, CropMD supports multiple crops including Corn, Rice, and
              Tomato, with plans to expand to more crops in the future. As
              students, we're committed to continuously learning and improving our
              technology to serve farmers better while applying our computer
              science expertise to make a meaningful impact.
            </p>
          </div>

          {/* Right: Stats or Visual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-gray-600 text-sm">Crop Types</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">AI</div>
                <div className="text-gray-600 text-sm">Powered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600 text-sm">Free</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
