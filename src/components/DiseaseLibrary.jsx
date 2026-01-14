import React from "react";
import disease1 from "../assets/disease1.jpg";
import disease2 from "../assets/disease2.jpg";
import disease3 from "../assets/disease3.jpg";

export default function DiseaseLibrary() {
  const diseases = [
    {
      img: disease1,
      name: "Corn Leaf Blight",
      desc: "A fungal disease causing elongated lesions on corn leaves, reducing photosynthesis and yield.",
    },
    {
      img: disease2,
      name: "Tomato Leaf Curl",
      desc: "A viral disease spread by whiteflies, causing stunted growth and curled leaves in tomatoes.",
    },
    {
      img: disease3,
      name: "Rice Blast",
      desc: "A major fungal disease that creates diamond-shaped lesions on rice leaves and panicles.",
    },
  ];

  return (
    <section id="library" className="py-20 px-6 lg:px-16 bg-gray-50">
      <h3 className="text-3xl font-bold mb-10 text-center">Disease Library</h3>

      {/* Horizontal Scrollable Cards */}
      <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 pb-6 snap-x snap-mandatory">
        {diseases.map((d, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[320px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 snap-start"
          >
            <img
              src={d.img}
              alt={d.name}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-900">{d.name}</h4>
              <p className="text-gray-600 text-sm mt-2">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        Swipe or scroll to explore crop diseases →
      </p>
    </section>
  );
}
