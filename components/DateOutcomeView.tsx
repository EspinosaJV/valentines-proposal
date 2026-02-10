"use client";

import { motion } from "framer-motion";

interface DateOutcomeProps {
    result: string;
}

const dateData: Record<string, { image: string; title: string; description: string }> = {
    "Fancy Romantic Date": {
        image: "/assets/fancy-romantic-date-outcome-pic.jpg",
        title: "A Night of Elegance",
        description: "Pack your best outfit because we are going somewhere special. We’ll enjoy fine dining, a romantic atmosphere, and a night where we can focus entirely on each other with a touch of luxury."
    },
    "Relaxed Simple Date": {
        image: "/assets/simple-relaxed-date-outcome-pic.jpg",
        title: "Cozy & Comfortable",
        description: "No pressure, just us. We’re keeping it low-key with a comfortable vibe, maybe a nice cafe, a movie, or just hanging out where we can be our true selves without the noise of the world."
    },
    "Adventure Date": {
        image: "/assets/travel-adventurous-date-outcome-pic.jpg",
        title: "An Exciting Adventure",
        description: "Get ready to explore! We’re doing something fun and spontaneous. Whether it's a road trip, an activity we've never tried, or just discovering a new place, we're making memories today."
    }
};

export default function DateOutcomeView({ result }: DateOutcomeProps) {
    const data = dateData[result] || dateData["Relaxed Simple Date"];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-valentine-surface">
            
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]" />
                <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col gap-4 md:gap-6 h-full justify-center items-center px-4 py-6">

                {/* TOP CARD: HEADER */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 md:py-4 md:px-16 text-center shadow-2xl md:w-fit mx-auto w-full shrink-0"
                >
                    <h1 className="font-bold text-2xl md:text-4xl text-white uppercase tracking-widest leading-tight drop-shadow-md whitespace-normal md:whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}>
                        The JV & Jem <br className="md:hidden" /> Story
                    </h1>
                    <div className="w-full h-1.5 md:h-2 bg-[#C08081] rounded-full my-2 md:my-3 shadow-md"></div>
                    <p className="text-white/80 text-base md:text-xl tracking-wider" style={{ fontFamily: '"Lato", sans-serif' }}>
                        The Most Wonderful Babi
                    </p>
                </motion.div>

                {/* MIDDLE CARD: IMAGE & RESULT */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 md:px-20 md:py-10 shadow-2xl flex flex-col items-center justify-center gap-6 w-full md:w-fit shrink-0"
                >
                    {/* DECORATIVE HEARTS (Desktop) */}
                    <img src="/assets/desktop-left-heart-shape-icon.png" className="hidden md:block absolute -top-16 -left-16 w-32 h-32 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>
                    <img src="/assets/desktop-right-heart-shape-icon.png" className="hidden md:block absolute -top-16 -right-16 w-32 h-32 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* TITLE TEXT */}
                    <h2 className="text-2xl md:text-4xl font-bold text-white text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Based on your response...
                    </h2>

                    {/* IMAGE ROW CONTAINER */}
                    <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
                        
                        {/* Left Heart */}
                        <img src="/assets/center-heart-icon.png" className="w-8 h-8 md:w-12 md:h-12 object-contain opacity-80" />

                        {/* THE RESULT IMAGE */}
                        <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#C08081] shadow-[0_0_30px_rgba(192,128,129,0.3)]">
                            <img 
                                src={data.image} 
                                alt={result} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Right Heart */}
                        <img src="/assets/center-heart-icon.png" className="w-8 h-8 md:w-12 md:h-12 object-contain opacity-80" />
                    </div>
                </motion.div>

                {/* BOTTOM CARD */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl text-center w-full max-w-2xl shrink-0"
                >
                    <h3 className="text-[#C08081] text-xl md:text-2xl font-bold mb-3 uppercase tracking-widest" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {result}
                    </h3>
                    <p className="text-white/90 text-sm md:text-lg leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                        {data.description}
                    </p>
                </motion.div>

            </div>
        </div>
    );
}