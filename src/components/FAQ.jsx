import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icon library

export default function FAQ() {
  const faqs = [
    {
      q: "What is the Disease Library?",
      a: "It’s a growing catalog of crop diseases with images, descriptions, and treatment tips to help farmers identify and manage problems quickly.",
    },
    {
      q: "Is it free to use?",
      a: "Yes! CropMD provides free access to core features for all farmers. Premium features may be added in the future.",
    },
    {
      q: "Which crops are supported?",
      a: "Currently, we support rice, corn, and wheat. More crops are being added regularly based on farmer needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <h3 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h3>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border rounded-xl shadow-sm bg-white overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
            >
              {f.q}
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
