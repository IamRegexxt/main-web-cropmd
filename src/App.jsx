import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItHelps from "./components/HowItHelps";
import Features from "./components/Features";
import DiseaseLibrary from "./components/DiseaseLibrary";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Features />
      <DiseaseLibrary />
      <FAQ />
      <Footer />
    </div>
  );
}
