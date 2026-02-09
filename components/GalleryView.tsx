"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
    {
        image: "/assets/photo-carousel-first-pic.jpg",
        text: "Our first year together, the year where it all started, 2023. Do you remember our loving and humble beginnings? We learned a lot about each other — both what we loved and didn't love about each other but in the end, we were so happy with each other."
    },
    {
        image: "/assets/photo-carousel-second-pic.jpg",
        text: "Our second year together, this would technically be our first whole year together start to finish. 2024 was the year we learned to experiment with our relationship and figure out how we can further evolve just merely loving each other. This year was a rollercoaster as we had our highest highs but also our lowest lows but in the end, we stuck through it, together."
    },
    {
        image: "/assets/photo-carousel-third-pic.jpg",
        text: "Our final year of college and we spent it together. 2025 was especially difficult as it was the year that we had to start working on our dreams as young adults independently which meant that we did not have a lot of time for each other, but it was also significant as it was also the year we started dreaming about what we wanted for our future selves, our future relationship, together."
    },
    {
        image: "",
        text: "Do you want to continue this story...?",
        isAction: true
    },
];

interface GalleryProps {
    onContinue: () => void;
}

export default function GalleryView ({ onContinue }: GalleryProps) {
    const [currentIndex, setCurrentIndex ] = useState(0);
    const [showMobileText, setShowMobileText] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
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
                    
                    {/* DECORATIVE HEARTS */}
                    <img src="/assets/desktop-left-heart-shape-icon.png" className="hidden md:block absolute -top-16 -left-16 w-32 h-32 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>
                    <img src="/assets/desktop-right-heart-shape-icon.png" className="hidden md:block absolute -top-16 -right-16 w-32 h-32 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* CAROUSEL AREA */}
                    <div className="flex items-center justify-center w-full gap-12">
                        
                        {/* LEFT BUTTON */}
                        <button onClick={prevSlide} className="hidden md:block hover:scale-110 transition-transform duration-300 focus:outline-none z-30">
                            <img src="/assets/desktop-left-arrow-button.png" alt="Previous" className="w-9 h-9 object-contain"/>
                        </button>

                        {/* IMAGE FRAME */}
                        <div className="relative w-full md:w-auto md:h-[300px] aspect-[3/4] bg-black/50 rounded-xl overflow-hidden border-4 border-[#C08081] shadow-inner mx-auto">
                            <AnimatePresence mode="wait">
                                {carouselData[currentIndex].isAction ? (
                                    <motion.div
                                        key="action-card"
                                        className="w-full h-full flex items-center justify-center bg-[#2A2A2A]"
                                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipeConfidenceThreshold = 10000;
                                            const swipePower = Math.abs(offset.x) * velocity.x;
                                            if (swipePower < -swipeConfidenceThreshold || offset.x < -50) {
                                                nextSlide();
                                            } else if (swipePower > swipeConfidenceThreshold || offset.x > 50){
                                                prevSlide();
                                            }
                                        }}
                                    >
                                        <button 
                                            onClick={onContinue}
                                            className="group bg-[#C08081] text-white font-bold py-3 px-10 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#d48a8b] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(192,128,129,0.7)] active:scale-95 active:shadow-inner uppercase tracking-widest text-xl"
                                            style={{ fontFamily: '"Lato", sans-serif' }}
                                        >
                                            <span className="inline-block transition-transform group-hover:animate-pulse">
                                                GO NEXT..?
                                            </span>
                                        </button>
                                    </motion.div>
                                ) : (
                                    /* EXISTING IMAGE SLIDE */
                                    <motion.img
                                        key={currentIndex}
                                        src={carouselData[currentIndex].image}
                                        alt="Memory"
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipeConfidenceThreshold = 10000;
                                            const swipePower = Math.abs(offset.x) * velocity.x;
                                            if (swipePower < -swipeConfidenceThreshold || offset.x < -50) {
                                                nextSlide();
                                            } else if (swipePower > swipeConfidenceThreshold || offset.x > 50) {
                                                prevSlide();
                                            }
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        {/* RIGHT BUTTON */}
                        <button onClick={nextSlide} className="hidden md:block hover:scale-110 transition-transform duration-300 focus:outline-none z-30">
                            <img src="/assets/desktop-right-arrow-button.png" alt="Next" className="w-9 h-9 object-contain"/>
                        </button>
                    </div>

                    {/* Mobile Only Button */}
                    <div className="md:hidden w-full mt-2">
                        <button onClick={() => setShowMobileText(true)} className="w-full bg-[#C08081] text-white font-bold py-3 rounded-xl shadow-lg uppercase tracking-widest hover:bg-[#d48a8b] transition" style={{ fontFamily: '"Lato", sans-serif' }}>
                            CLICK HERE
                        </button>
                    </div>
                </div>

                {/* --- BOTTOM CARD (DESKTOP ONLY) --- */}
                {/* This div is HIDDEN on mobile, so we CANNOT put the mobile popup inside here */}
                <div className="hidden md:flex flex-col items-center justify-center bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 px-8 shadow-2xl text-center w-full max-w-2xl shrink-0">
                    <AnimatePresence mode="wait">
                        <motion.p key={currentIndex} className="text-white/90 text-base leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                            {carouselData[currentIndex].text}
                        </motion.p>
                    </AnimatePresence>
                </div>

            </div> {/* End of Main Grid Container */}

            {/* --- MOBILE TEXT OVERLAY (MOVED OUTSIDE) --- */}
            {/* Now it sits directly in the main container, so it won't be hidden */}
            <AnimatePresence>
                {showMobileText && (
                    <motion.div 
                        initial={{ y: "100%" }} 
                        animate={{ y: 0 }} 
                        exit={{ y: "100%" }} 
                        transition={{ type: "spring", damping: 25, stiffness: 200 }} 
                        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1E1E1E] border-t border-white/20 rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
                    >
                        {/* Close 'X' Button */}
                        <button onClick={() => setShowMobileText(false)} className="absolute top-4 right-4 text-white/50 hover:text-white p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col gap-4 mt-2">
                            <h3 className="text-[#C08081] font-bold text-xl tracking-widest uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>
                                {carouselData[currentIndex].isAction ? "The Future" : `Year ${2023 + currentIndex}`}
                            </h3>

                            <p className="text-white/90 text-base leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                                {carouselData[currentIndex].text}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}