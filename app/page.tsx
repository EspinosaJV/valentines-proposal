"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LandingView from "../components/LandingView";
import GalleryView from "../components/GalleryView"; 
import ProposalView from "../components/ProposalView";
import TestView from "../components/TestView";
import PreFinalView from "../components/PreFinalView";
import ValentineProposalView from "../components/ValentineProposalView";
import DateOutcomeView from "../components/DateOutcomeView";
import { view } from "framer-motion/client";

export default function Home() {

  const [viewState, setViewState] = useState<"login" | "loading" | "gallery" | "proposal" | "test" | "prefinal" | "valentine" | "success">("login");

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

  const renderContent = () => {
    switch (viewState) {
      case "login":
        return <LandingView onCorrectPassword={handleLoginSuccess} />;

      case "loading":
        return (
          <main className="h-[100dvh] flex items-center justify-center relative overflow-hidden bg-valentine-surface">
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"/>
              <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* LOADING CARD */}
            <div className="relative z-10 px-4 w-full md:w-fit">
              <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col items-center text-center gap-3 md:gap-6">
                <img src="/assets/center-heart-icon.png" alt="Loading Heart" className="w-16 h-16 md:w-24 md:h-24 object-contain animate-bounce drop-shadow-xl"/>
                <h1 className="font-bold text-2xl md:text-5xl text-white tracking-widest uppercase drop-shadow-md leading-tight whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Access Granted
                </h1>
                <div className="w-16 h-1.5 bg-[#C08081] rounded-full shadow-md"></div>
                <p className="text-white text-base md:text-xl tracking-wider animate-pulse" style={{ fontFamily: '"Lato", sans-serif' }}>
                  Loading our memories...
                </p>
              </div>
            </div>
          </main>
        );
        
        case "gallery":
          return <GalleryView onContinue={() => setViewState("proposal")} />;

        case "proposal":
          return <ProposalView onNext={() => setViewState("test")} />;

        case "test":
          return (
            <TestView onFinished={(result) => {
              setFinalDateIdea(result);
              setViewState("prefinal");
            }} />
          );

        case "prefinal":
          return <PreFinalView onNext={() => setViewState("valentine")} />;

        case "valentine":
          return <ValentineProposalView onNext={() => setViewState("success")} />;
        
        case "success":
          return <DateOutcomeView result={finalDateIdea} />;

        default:
          return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={viewState}
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
}