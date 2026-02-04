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
      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-valentine-surface">
        {/* BACKGROUND IMADES */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"
          />
          <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center p-4">
          {/* FLOATING HEART ANIMATION */}
          <div className="animate-bounce mb-6">
            <img src="/assets/center-heart-icon.png" alt="Loading Heart" className="w-24 h-24 object-contain drop-shadow-xl"/>
          </div>

          {/* MAIN TEXT */}
          <h1 className="font-bold text-4xl md:text-5xl text-white tracking-widest uppercase drop-shadow-2xl text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
            Access Granted
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-white/90 text-lg tracking-wider animate-pulse font-light drop-shadow-md text-center" style={{ fontFamily: '"Lato", sans-serif' }}>
          Loading our memories...
          </p>
        </div>
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