"use client";

import { motion } from "framer-motion";

interface ValentineProposalProps {
    onNext: () => void;
}

export default function ValentineProposalView({ onNext }: ValentineProposalProps) {
    return (
        <div className="min-h-screen flex items-center justify-center pt-3 pb-3 md:pt-0 relative overflow-hidden bg-valentine-surface">
            {/* BACKGROUND IMAGES */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"/>
                <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 px-4 md:px-0 w-full md:w-full max-w-lg md:max-w-3xl mx-auto flex flex-col gap-6">
                {/* TOP CARD */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 text-center shadow-2xl md:w-fit md:px-16 mx-auto w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white uppercase tracking-widest leading-tight drop-shadow-md whitespace-normal md:whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        The JV & Jem <br className="md:hidden"/> Story
                    </h1>

                    {/* PINK PILL SEPARATOR */}
                    <div className="w-full h-2 bg-[#C08081] rounded-full my-4 shadow-md"></div>

                    {/* SUBTITLE */}
                    <p className="text-white/80 text-lg md:text-xl tracking-wider" style={{ fontFamily: '"Lato", sans-serif' }}>
                        The Most Wonderful Babi
                    </p>
                </div>

                {/* BOTTOM CARD */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center gap-8 min-h-[400px]">

                    {/* DECORATIVE HEARTS */}
                    {/* MOBILE */}
                    <img src="/assets/mobile-left-heart-shape-icon.png" className="block md:hidden absolute -top-12 -left-4 w-24 h-24 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>
                    <img src="/assets/mobile-right-heart-shape-icon.png" className="block md:hidden absolute -top-12 -right-4 w-24 h-24 object-contain aniamte-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* DESKTOP */}
                    <img src="/assets/desktop-left-heart-shape-icon.png" className="hidden md:block absolute -top-24 -left-24 w-52 h-52 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>
                    <img src="/assets/desktop-right-heart-shape-icon.png" className="hidden md:block absolute -top-24 -right-24 w-52 h-52 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* MAIN TEXT */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight md:leading-snug drop-shadow-lg" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Will you be my Valentines this <br/> February 14, 2026?
                    </h2>

                    {/* BUTTON CONTAINER */}
                    <div className="relative mt-4">

                        {/* BUTTON */}
                        <motion.button
                            onClick={onNext}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale:0.95 }}
                            className="bg-[#C08081] text-white text-xl md:text-2xl font-bold py-6 px-10 md:px-12 rounded-2xl shadow-[0_10px_30px_rgba(192,128,129,0.4)] uppercase tracking-widest border border-white/10 hover:bg-[#d48a8b] hover:shadow-[0_15px_40px_rgba(192,128,129,0.6)] transition-all duration-300 leading-tight"
                            style={{ fontFamily: '"Lato", sans-serif' }}
                            >
                            YES! YES! YES! <br/> SUPER YES!
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}