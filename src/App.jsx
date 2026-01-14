import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItHelps from "./components/HowItHelps";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import DiseaseLibrary from "./components/DiseaseLibrary";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  const getSampleContent = () => {
    return {
      app: "landing-page",
      createdAt: new Date().toISOString(),
      notes: "This is a sample export generated from the client",
    };
  };

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItHelps />
      <AboutUs />
      <DiseaseLibrary />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}
