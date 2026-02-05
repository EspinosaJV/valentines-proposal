"use client";

import { useState, useEffect } from "react";
import LandingView from "../components/LandingView";
import GalleryView from "../components/GalleryView";

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
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-valentine-surface">
        
        {/* 1. BACKGROUND IMAGES (Same as before) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"/>
          <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 2. THE CARD CONTENT */}
        <div className="relative z-10 px-4 w-full md:w-fit">
            
            {/* THIS IS THE CARD CONTAINER */}
            <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center gap-3">
                
                {/* FLOATING HEART ANIMATION */}
                <img 
                    src="/assets/center-heart-icon.png" 
                    alt="Loading Heart" 
                    className="w-16 h-16 object-contain animate-bounce drop-shadow-xl"
                />

                {/* MAIN TEXT */}
                <h1 
                    className="font-bold text-2xl md:text-5xl text-white tracking-widest uppercase drop-shadow-md leading-tight whitespace-nowrap" 
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Access Granted
                </h1>

                {/* PINK DIVIDER (To match the aesthetic) */}
                <div className="w-16 h-1.5 bg-[#C08081] rounded-full shadow-md"></div>

                {/* SUBTEXT */}
                <p 
                    className="text-white text-lg md:text-xl tracking-wider animate-pulse" 
                    style={{ fontFamily: '"Lato", sans-serif' }}
                >
                    Loading our memories...
                </p>

            </div>
        </div>
      </main>
    );
  }

  // SHOW GALLERY
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      <GalleryView />
    </main>
  );
}