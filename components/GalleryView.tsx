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
        <div className="min-h-screen md:h-screen flex flex-col items-center justify-center relative overflow-hidden bg-valentine-surface p-4">
        {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]" />
                <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* MAIN GRID CONTAINER */}
            <div className="relative z-10 w-full max-w-4xl flex flex-col gap-3 md:gap-4 h-full justify-center md:justify-start md:pt-20">
                {/* TOP CARD TITLE */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 text-center shadow-2xl md:w-fit md:px-16 mx-auto w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white uppercase tracking-widest leading-tight drop-shadow-md whitespace-normal md:whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}>
                        The JV & Jem <br className="md:hidden" /> Story
                    </h1>

                    {/* Pink Pill Separator */}
                    <div className="w-fill h-2 bg-[#C08081] rounded-full my-4 shadow-md"></div>

                    {/* Subtitle */}
                    <p className="text-white/80 text-lg md:text-xl tracking-wider" style={{ fontFamily: '"Lato", sans-serif' }}>
                        The Most Wonderful Babi
                    </p>
                </div>

                {/* MIDDLE CARD CAROUSEL */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl flex flex-col items-center justify-center gap-4">
                    {/* DECORATIVE HEARTS */}
                    {/* LEFT HEART */}
                    {/* MOBILE VIEW */}
                    <img src="/assets/mobile-left-heart-shape-icon.png" alt="Left Heart Decoration" className="block md:hidden absolute -top-12 -left-8 w-28 h-28 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>

                    {/* DESKTOP VIEW */}
                    <img src="/assets/desktop-left-heart-shape-icon.png" alt="Left Heart Decoration" className="hidden md:block absolute -top-32 -left-32 w-64 h-64 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>

                    {/* RIGHT HEART */}
                    {/* MOBILE VIEW */}
                    <img src="/assets/mobile-right-heart-shape-icon.png" alt="Right Heart Decoration" className="block md:hidden absolute -top-12 -right-8 w-28 h-28 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* DESKTOP VIEW */}
                    <img src="/assets/desktop-right-heart-shape-icon.png" alt="Right Heart Decoration" className="hidden md:block absolute -top-32 -right-32 w-64 h-64 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* CAROUSEL AREA */}
                    <div className="flex items-center justify-center gap-4 w-full">
                        {/* PREVIOUS BUTTON (DESKTOP) */}
                        <button onClick={prevSlide} className="hidden md:block hover:scale-110 transition-transform duration-300 focus:outline-none">
                            <img src="/assets/desktop-left-arrow-button.png" alt="Previous" className="w-16 h-16 object-contain"/>
                        </button>

                        {/* IMAGE FRAME */}
                        <div className="relative w-full md:w-auto md:h-[45vh] aspect-[3/4] bg-black/50 rounded-xl overflow-hidden border-4 border-[#C08081] shadow-inner">
                            <img src={photos[currentIndex]} alt="Memory" className="w-full h-full object-cover"/>

                            {/* MOBILE ONLY (TAP AREAS FOR NAVIGATION) */}
                            <div className="md:hidden w-full mt-2">
                                <div onClick={prevSlide} className="w-1/2 h-full"></div>
                                <div onClick={nextSlide} className="w-1/2 h-full"></div>
                            </div>
                        </div>

                        {/* NEXT BUTTON DESKTOP */}
                        <button onClick={nextSlide} className="hidden md:block hover:scale-110 transition-transform duration-300 focus:outline-none">
                            <img src="/assets/desktop-right-arrow-button.png" alt="Next" className="w-16 h-16 object-contain"/>
                        </button>
                    </div>

                    {/* MOBILE ONLY (CLICK HERE BUTTON) */}
                    <div className="md:hidden w-full mt-2">
                        <button onClick={onContinue} className="w-full bg-[#C08081] text-white font-bold py-3 rounded-xl shadow-lg uppercase tracking-widest hover:bg-[#d48a8b] transition" style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            Click Here!
                        </button>
                    </div>
                </div>

                {/* BOTTOM CARD TEXT STORY (DESKTOP ONLY) */}
                <div className="hidden md:block bg-[#1E1E1E] border border-white/10 rounded-2xl p-=4 shadow-2xl text-center w-full md:w-2/3 mx-auto">
                    <p className="text-white/90 text-sm leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
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