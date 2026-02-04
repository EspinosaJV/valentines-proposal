"use client";

import { useState } from "react";

interface LandingProps {
  onCorrectPassword: () => void;
}

export default function LandingView({ onCorrectPassword }: LandingProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  // CONFIGURATION
  const SECRET_CODE = "1111";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === SECRET_CODE) {
        onCorrectPassword();
    } else {
        setError(true);
        setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center pt-3 pb-3 md:pt-0 relative overflow-hidden bg-valentine-surface">
    
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
        <div className="relative z-10 px-3 md:px-0 w-full md:w-full max-w-lg md:max-w-2xl mx-auto flex flex-col gap-3">
            {/* TOP Card: The Story */}
            <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 text-center shadow-2xl md:w-fit md:px-16 mx-auto w-full">
                <h1
                    className="font-bold text-3xl md:text-4xl text-white uppercase tracking-widest leading-tight drop-shadow-md whitespace-normal md:whitespace-nowrap"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    The JV & Jem <br className="md:hidden" /> Story
                </h1>

                {/* Pink Pill Separator */}
                <div className="w-full h-2 bg-[#C08081] rounded-full my-4 shadow-md"></div>

                {/* Subtitle */}
                <p
                    className="text-white/80 text-lg md:text-xl tracking-wider"
                    style={{ fontFamily: '"Lato", sans-serif' }}
                >
                    The Most Wonderful Babi
                </p>
            </div>

            {/* BOTTOM CARD: The Login */}
            <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                {/* DECORATIVE HEARTS */}
                {/* LEFT HEART */}
                {/* Mobile */}
                <img
                    src="/assets/mobile-left-heart-shape-icon.png"
                    alt="Left Heart Decoration"
                    className="block md:hidden absolute -top-12 -left-8 w-28 h-28 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"
                />
                {/* Desktop */}
                <img 
                    src="/assets/desktop-left-heart-shape-icon.png"
                    alt="Left Heart Decoration"
                    className="hidden md:block absolute -top-32 -left-32 w-64 h-64 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"
                />

                {/* RIGHT HEART */}
                {/* Mobile */}
                <img
                    src="/assets/mobile-right-heart-shape-icon.png"
                    alt="Right Heart Decoration"
                    className="block md:hidden absolute -top-12 -right-8 w-28 h-28 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"
                />
                {/* Desktop */}
                <img
                    src="/assets/desktop-right-heart-shape-icon.png"
                    alt="Right Heart Decoration"
                    className="hidden md:block absolute -top-32 -right-32 w-64 h-64 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"
                />

                {/* Title Text Content */}
                <h2
                    className="text-3xl font-bold text-white text-center mb-4 md:mb-6 leading-tight md:whitespace-nowrap"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    When Is Our Anniversary?
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 items-center">
                    {/* INPUT BOX */}
                    <div className="relative w-full h-48 md:h-32 bg-[#C08081] rounded-xl flex items-center justify-center shadow-inner overflow-hidden">
                        <input
                            type="text"
                            value={passcode}
                            onChange={(e) => {
                                setPasscode(e.target.value);
                                setError(false);
                            }}
                            placeholder=""
                            className="w-full h-full bg-transparent text-center text-white text-4xl tracking-[0.5em] placeholder-white/50 focus:outline-none z-10"
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        />
                    </div>

                    {/* Hint Text */}
                    <p
                        className="text-white/80 text-sm md:text-base -mt-2 text-center"
                        style={{ fontFamily: '"Lato", sans-serif' }}
                    >
                        If 0214 is Valentines Day, our Anniversary is...
                    </p>
                    
                    {/* Error Message */}
                    {error && <p className="text-red-400 text-sm font-bold animate-pulse">wrong answer babi! 😡</p>}

                    {/*Submit Button */}
                    <button
                        type="submit"
                        className="
                            bg-[#C08081] text-white font-bold py-3 px-10 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#d48a8b] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(192,128,129,0.7)] active:scale-95 active:shadow-inner uppercase tracking-widest text-xl
                        "
                        style={{ fontFamily: '"Lato", sans-serif' }}
                    >
                        <span className="ml-2 inline-block transition-transform group-hover:animate-pulse">Submit</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}