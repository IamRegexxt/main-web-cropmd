import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItHelps from "./components/HowItHelps";
import Features from "./components/Features";
import DiseaseLibrary from "./components/DiseaseLibrary";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DownloadFileButton from "./components/DownloadFileButton";

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
      <div className="px-6 py-4 space-y-3">
        <DownloadFileButton filename={"site-export.json"} getContent={getSampleContent} />
        {/* Example APK download. Place your APK in `public/myapp.apk` so Vite serves it at `/myapp.apk` */}
        <DownloadFileButton filename={"cropMD.apk"} url={"/cropMD.apk"} />
      </div>
      <HowItHelps />
      <Features />
      <DiseaseLibrary />
      <FAQ />
      <Footer />
    </div>
  );
}
