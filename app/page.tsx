"use client";

import { useState, useEffect } from "react";
import LandingView from "../components/LandingView";
import GalleryView from "../components/GalleryView"; 
import ProposalView from "../components/ProposalView";
import TestView from "../components/TestView";

export default function Home() {

  const [viewState, setViewState] = useState<"login" | "loading" | "gallery" | "proposal" | "test" | "success">("login");

  const [finalDateIdea, setFinalDateIdea] = useState<string>("");

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

  // LOGIN SCREEN 
  if (viewState === "login") {
    return <LandingView onCorrectPassword={handleLoginSuccess} />;
  }

  // LOADING SCREEN 
  if (viewState === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-valentine-surface">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"/>
          <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* LOADING CARD */}
        <div className="relative z-10 px-4 w-full md:w-fit">
            <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col items-center text-center gap-3 md:gap-6">
                
                <img 
                    src="/assets/center-heart-icon.png" 
                    alt="Loading Heart" 
                    className="w-16 h-16 md:w-24 md:h-24 object-contain animate-bounce drop-shadow-xl"
                />

                <h1 
                    className="font-bold text-2xl md:text-5xl text-white tracking-widest uppercase drop-shadow-md leading-tight whitespace-nowrap" 
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Access Granted
                </h1>

                <div className="w-16 h-1.5 bg-[#C08081] rounded-full shadow-md"></div>

                <p 
                    className="text-white text-base md:text-xl tracking-wider animate-pulse" 
                    style={{ fontFamily: '"Lato", sans-serif' }}
                >
                    Loading our memories...
                </p>

            </div>
        </div>
      </main>
    );
  }

  // GALLERY SCREEN
  if (viewState === "gallery") {
    return (
        <GalleryView onContinue={() => setViewState("proposal")} />
    );
  }

  // PROPOSAL SCREEN
  if (viewState === "proposal") {
      return (
        <ProposalView onNext={() => setViewState("test")} />
      );
  }

  // TEST SCREEN
  if (viewState === "test") {
    return (
      <TestView onFinished={(result) => {
        setFinalDateIdea(result);
        setViewState("success");
      }} />
    );
  }

  // SUCCESS SCREEN
  if (viewState === "success") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">It's decided!</h1>
        <p className="text-2xl text-[#C08081]">{finalDateIdea}</p>
      </div>
    )
  }

  return null;
}