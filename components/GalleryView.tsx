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
        setCurrentIndex((prev) => (prev - 1 + photos.length) & photos.length);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-valentine-surface p-4">
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]" />
                <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* MAIN GRID CONTAINER */}
            <div className="relative z-10 w-full max-w-5xl flex flex-col gap-4 md:gap-6 h-full justify-center">
                {/* TOP CARD TITLE */}
                <div className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-4 md:p-6 text-center shadow-2xl mx-auto w-full md:w-2/3">
                    <h1 className="font-bold text-2xl md:text-4xl text-white uppercase tracking-widest" style={{ fontFamily: '"Playfair", serif' }}>
                        The JV & Jem Story
                    </h1>
                    <div className="w-full h-1 bg-[#C08081] rounded-full my-2 shadow-md"></div>
                    <p className="text-white/80 text-sm md:text-lg tracking-wider" style={{ fontFamily: '"Lato", sans-serif' }}>
                        The Most Wonderful Babi
                    </p>
                </div>

                {/* MIDDLE CARD CAROUSEL */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl flex flex-col items-center justify-center gap-4">
                    {/* DECORATIVE HEARTS */}
                    {/* TOP LEFT */}
                    <img src="/assets/mobile-left-heart-shape-icon.png" className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 animate-bounce z-20"/>
                    {/* TOP RIGHT */}
                    <img src="/assets/mobile-right-heart-shape-icon.png" className="absolute -top-6 -right-6 w-16 h-16 md:w-24 md:h-24 animate-bounce z-20"/>

                    {/* CAROUSEL AREA */}
                    <div className="flex items-center justify-center gap-4 w-full">
                        {/* PREVIOUS BUTTON (DESKTOP) */}
                        <button onClick={prevSlide} className="hidden md:flex bg-[#C08081] p-3 rounded-full hover:scale-110 transition text-white">
                            ◀
                        </button>

                        {/* IMAGE FRAME */}
                        <div className="relative w-full md:w-96 aspect-[3/4] md:aspect-square bg-black/50 rounded-xl overflow-hidden border-4 border-[#C08081] shadow-inner">
                            <img src={photos[currentIndex]} alt="Memory" className="w-full h-full object-cover"/>

                            {/* MOBILE ONLY (TAP AREAS FOR NAVIGATION) */}
                            <div className="md:hidden absolute inset-0 flex">
                                <div onClick={prevSlide} className="w-1/2 h-full"></div>
                                <div onClick={nextSlide} className="w-1/2 h-full"></div>
                            </div>
                        </div>

                        {/* NEXT BUTTON (DESKTOP) */}
                        <button onClick={nextSlide} className="hidden md:flex bg-[#C08081] p-3 rounded-full hover:scale-110 transition text-white">
                            ▶
                        </button>
                    </div>

                    {/* MOBILE ONLY (CLICK HERE BUTTON) */}
                    <div className="md:hjidden w-full mt-2">
                        <button onClick={onContinue} className="w-full bg-[#C08081] text-white font-bold py-3 rounded-xl shadow-lg uppercase tracking-widest hover:bg-[#d48a8b] transition" style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            Click Here!
                        </button>
                    </div>
                </div>

                {/* BOTTOM CARD TEXT STORY (DESKTOP ONLY) */}
                <div className="hidden md:block bg-[#1E1E1E] border border-white/10 rounded-2xl p-6 shadow-2xl text-center">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sequi illo facilis reiciendis cumque saepe, eius commodi dicta et corrupti aperiam aliquam suscipit iure! Nihil deserunt minima voluptatem eos atque?
                    </p>

                    {/* DESKTOP CONTINUE BUTTON */}
                    <button onClick={onContinue} className="mt-4 px-8 py-2 bg-[#C08081] text-white rounded-full hover:bg-[#d48a8b] transition text-sm uppercase font-bold tracking-widest'">
                        Proceed to Proposal
                    </button>
                </div>
            </div>
        </div>
    );
}