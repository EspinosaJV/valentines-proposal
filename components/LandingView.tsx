"use client";

import { useState } from "react";

interface LandingProps {
  onCorrectPassword: () => void;
}

export default function LandingView({ onCorrectPassword }: LandingProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  // CONFIGURATION
  const SECRET_CODE = "0214";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === SECRET_CODE) {
      onCorrectPassword();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-24 md:pt-32 relative overflow-hidden bg-valentine-surface">
      
      {/* 1. BACKGROUND IMAGES (Restored) */}
      {/* Default: Mobile Image. md: Desktop Image. */}
        <div className="absolute inset-0 z-0">
            <div
                className="
                    absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"
            />
            <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 2. MAIN CONTENT (Title Card + Login Card) */}
        <div className="relative z-10 w-full max-w-md mx-4 flex flex-col gap-10">
            {/* TOP CARD: The Story */}
            <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 text-center shadow-2xl">
                {/* Title - Playfair Display, One Line */}
                <h1
                    className="font-bold text-2xl md:text-3xl text-white uppercase tracking-widest leading-none drop-shadow-md whitespace-nowrap"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    The JV & Jem Story
                </h1>

                {/* Pink Pill Separator */}
                <div className="w-full h-2 bg-[#C08081] rounded-full my-4 shadow-md"></div>

                {/* Subtitle - Lato */}
                <p
                    className="text-white.80 text-sm tracking-wider"
                    style={{ fontFamily: '"Lato", sans-serif' }}
                >
                    The Most Wonderful Babi
                </p>
            </div>

            {/* BOTTOM CARD: The Login */}
            <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 shadow-2xl">
                {/* --- DECORATIVE Hearts (Top Left & Top Right) */}

                {/* LEFT HEART */}
                {/* Mobile */}
                <img
                    src="/assets/mobile-left-heart-shape-icon.png"
                    alt="Left Heart Decoration"
                    className="block md:hidden absolute -top-8 -left-10 w-24 h-24 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"
                />
                {/* Desktop */}
                <img
                    src="/assets/desktop-left-heart-shape-icon.png"
                    alt="Left Heart Decoration"
                    className="hidden md:block absolute -top-8 -left-10 w-24 h-24 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"
                />

                {/* RIGHT HEART */}
                {/* Mobile */}
                <img
                    src="/assets/mobile-right-heart-shape-icon.png"
                    alt="Right Heart Decoration"
                    className="block md:hidden absolute -top-8 -right-10 w-24 h-24 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"
                />
                {/* Desktop */}
                <img 
                    src="/assets/desktop-right-heart-shape-icon.png"
                    alt="Right Heart Decoration"
                    className="hidden md:block absolute -top-8 -right-10 w-24 h-24 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"
                />

                <h2 className="font-serif text-2xl text-white text-center mb-6 leading-tight">
                    When Is Our <br/> Anniversary?
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
                    {/* Large Pink Input Box */}
                    <div className="relative w-full aspect-square bg-[#C08081] rounded-xl flex items-center justify-center shadow-inner overflow-hidden">
                        <input 
                            type="password"
                            value={passcode}
                            onChange={(e) => {
                                setPasscode(e.target.value);
                                setError(false);
                            }}
                            placeholder=""
                            className="w-full h-full bg-transparent text-center text-white text-3xl font-serif tracking-widest placeholder-white/50 focus:outline-none z-10"
                        />

                        {/* Background Icon Inside Input */}
                        {!passcode && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                                <svg className="w-12 h-12 text-white border-2 border-white rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-400 text-sm font-bold animate-pulse">INCORRECT PASSCODE</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#C08081] text-white font-bold py-2 px-8 rounded-lg shadow-lg hover:bg-[#a36b6c] transition-all uppercase tracking-widest text-sm"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}