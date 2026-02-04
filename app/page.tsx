"use client";

import { useState, useEffect } from "react";
import LandingView from "../components/LandingView";
// import GalleryView from "../components/GalleryView";

export default function Home() {
  const [viewState, setViewState] = useState<"login" | "loading" | "gallery">("login");

  const handleLoginSuccess = () => {
    setViewState("loading");
  };

  useEffect(() => {
    if (viewState === "loading") {
      const timer = setTimeout(() => {
        setViewState("gallery");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [viewState]);

  // Show Login Screen
  if (viewState === "login") {
    return <LandingView onCorrectPassword={handleLoginSuccess} />;
  }

  // Show Loading Screen
  if (viewState === "loading") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-valentine-brand/5 mix-blend-overlay"></div>

        {/* Floating Heart Animation */}
        <div className="relative z-10 animate-bounce mb-6">
          <img
            src="/assets/center-heart-icon.png"
            alt="Loading Heart"
            className="w-24 h-24 object-contain drop-shadow-xl"
          />
        </div>

        {/*Main Text */}
        <h1
          className="relative z-10 font-bold text-4xl md:text-5xl text-[#C08081] tracking-widest uppercase drop-shadow-lg text-center"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          WELCOME BABI!!!
        </h1>

        {/* Subtext */}
        <p 
          className="relative z-10 mt-4 text-white/60 text-lg tracking-wider animate-pulse font-light"
          style={{ fontFamily: '"Lato", sans-serif' }}
        >
          Loading our memories together...
        </p>
      </main>
    );
  }

  // SHOW GALLERY
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      {/* <GalleryView /> */}
    </main>
  );
}