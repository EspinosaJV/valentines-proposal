"use client";

import { useState } from "react";

const photos = [
    "/assets/photo-carousel-first-pic.jpg",
    "/assets/photo-carousel-second-pic.jpg",
    "/assets/photo-carousel-third-pic.jpg",
];

interface GalleryProps {
    onContinue: () => void;
}

export default function GalleryView ({ onContinue }: GalleryProps) {
    const [currentIndex, setCurrentIndex ] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-valentine-surface">
        {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]" />
                <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* MAIN GRID CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col gap-4 h-full justify-center items-center px-4 py-6">
                
                {/* --- TOP CARD (The Story) --- */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 md:py-3 md:px-12 text-center shadow-2xl md:w-fit mx-auto w-full shrink-0">
                    <h1 className="font-bold text-2xl md:text-3xl text-white uppercase tracking-widest leading-tight drop-shadow-md whitespace-normal md:whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}>
                        The JV & Jem <br className="md:hidden" /> Story
                    </h1>
                    <div className="w-full h-1.5 bg-[#C08081] rounded-full my-2 shadow-md"></div>
                    <p className="text-white/80 text-base md:text-lg tracking-wider" style={{ fontFamily: '"Lato", sans-serif' }}>
                        The Most Wonderful Babi
                    </p>
                </div>

                {/* --- MIDDLE CARD (Carousel) --- */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 md:px-20 md:py-6 shadow-2xl flex flex-col items-center justify-center gap-4 w-full md:w-fit shrink-0">
                    
                    {/* DECORATIVE HEARTS (Keep existing) */}
                    <img src="/assets/desktop-left-heart-shape-icon.png" className="hidden md:block absolute -top-16 -left-16 w-32 h-32 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl" />
                    <img src="/assets/desktop-right-heart-shape-icon.png" className="hidden md:block absolute -top-16 -right-16 w-32 h-32 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl" />

                    {/* CAROUSEL AREA */}
                    <div className="flex items-center justify-center w-full gap-12">
                        
                        {/* LEFT BUTTON */}
                        <button onClick={prevSlide} className="hidden md:block hover:scale-110 transition-transform duration-300 focus:outline-none z-30">
                            <img src="/assets/desktop-left-arrow-button.png" alt="Previous" className="w-9 h-9 object-contain"/>
                        </button>

                        {/* IMAGE FRAME (Kept height at 300px to ensure it fits in view) */}
                        <div className="relative w-full md:w-auto md:h-[300px] aspect-[3/4] bg-black/50 rounded-xl overflow-hidden border-4 border-[#C08081] shadow-inner mx-auto">
                            <img src={photos[currentIndex]} alt="Memory" className="w-full h-full object-cover"/>
                            
                            {/* Mobile Tap Areas */}
                            <div className="md:hidden w-full mt-2">
                                <div onClick={prevSlide} className="w-1/2 h-full"></div>
                                <div onClick={nextSlide} className="w-1/2 h-full"></div>
                            </div>
                        </div>

                        {/* RIGHT BUTTON */}
                        <button onClick={nextSlide} className="hidden md:block hover:scale-110 transition-transform duration-300 focus:outline-none z-30">
                            <img src="/assets/desktop-right-arrow-button.png" alt="Next" className="w-9 h-9 object-contain"/>
                        </button>
                    </div>

                    {/* Mobile Only Button */}
                    <div className="md:hidden w-full mt-2">
                        <button onClick={onContinue} className="w-full bg-[#C08081] text-white font-bold py-3 rounded-xl shadow-lg uppercase tracking-widest hover:bg-[#d48a8b] transition" style={{ fontFamily: '"Lato", sans-serif' }}>
                            Click Here!
                        </button>
                    </div>
                </div>

                {/* --- BOTTOM CARD (Text Story) --- */}
                <div className="hidden md:flex flex-col items-center justify-center bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 px-8 shadow-2xl text-center w-full max-w-2xl shrink-0">
                    <p className="text-white/90 text-base leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sequi illo facilis reiciendis cumque saepe, eius commodi dicta et corrupti aperiam aliquam suscipit iure! Nihil deserunt minima voluptatem eos atque?
                    </p>
                </div>

            </div>
        </div>
    );
}