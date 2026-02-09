"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestViewProps {
    onFinished: () => void;
}

const questions = [
    {
        id: 1,
        question: "What kind of pace feels best for you?",
        options: [
            "Slow, intentional, and a little luxurious",
            "Easygoing, no rush and just vibes",
            "Move, explore, and see where the day takes us"
        ]
    },
    {
        id: 2,
        question: "What would you feel most confident wearing?",
        options: [
            "Something dressed-up & elegant",
            "Casual, comfy, and effortless",
            "Practical but stylish, ready to go anywhere"
        ]
    },
    {
        id: 3,
        question: "What kind of conversations do you enjoy most in dates?",
        options: [
            "Deep talks with a romantic atmosphere",
            "Light, honest conversations that flow naturally",
            "Random topics, shared discoveries, and spontaneous moments"
        ]
    },
    {
        id: 4,
        question: "How do you feel about planning?",
        options:[
            "Everything thoughtfully planned ahead",
            "A loose plan with room to chill",
            "A destination in mind, with surprises along the way"
        ]
    },
    {
        id: 5,
        question: "Your 'This feels like a date' moment",
        options:[
            "Ambience, good food, and feeling a little dressed up",
            "Being able to walk, talk, and enjoy the moment together",
            "Doing something new and making shared memories"
        ]
    }
];

export default function TestView({ onFinished }: TestViewProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const currentQ = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (selectedOption === null) return;

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            onFinished();
        }
    };

    return (
        <div className="h-screen flex items-center justify-center relative overflow-hidden bg-valentine-surface">
        {/* BACKGROUND IMAGES */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/bg-mobile-collage.jpg')] md:bg-[url('/assets/bg-desktop-collage.jpg')]"/>
                <div className="absolute inset-0 bg-valentine-brand/40 mix-blend-overlay md:bg-valentine-brand/30 md:mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 px-2 md:px-0 py-2 w-full md:w-full max-w-lg md:max-w-3xl mx-auto flex flex-col gap-3 md:gap-6 h-full">
                
                {/* --- TOP CARD (FIXED) --- */}
                {/* This is now an exact duplicate of the ProposalView Top Card */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-4 md:p-6 text-center shadow-2xl md:w-fit md:px-16 mx-auto w-full shrink-0 mt-auto">
                    <h1 className="font-bold text-xl md:text-4xl text-white uppercase tracking-widest leading-tight drop-shadow-md whitespace-normal md:whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}>
                        The JV & Jem <br className="md:hidden" /> Story
                    </h1>
                    
                    {/* PINK PILL SEPARATOR */}
                    <div className="w-full h-1.5 md:h-2 bg-[#C08081] rounded-full my-2 md:my-4 shadow-md"></div>
                    
                    {/* SUBTITLE */}
                    <p className="text-white/80 text-lg md:text-xl tracking-wider" style={{ fontFamily: '"Lato", sans-serif' }}>
                        The Most Wonderful Babi
                    </p>
                </div>

                {/* --- BOTTOM CARD (QUIZ CONTENT) --- */}
                <div className="relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center gap-8 flex-1 mb-auto w-full">
                    
                    {/* DECORATIVE HEARTS MOBILE */}
                    <img src="/assets/mobile-left-heart-shape-icon.png" className="block md:hidden absolute -top-12 -left-4 w-24 h-24 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>
                    <img src="/assets/mobile-right-heart-shape-icon.png" className="block md:hidden absolute -top-12 -right-4 w-24 h-24 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    {/* DECORATIVE HEARTS DESKTOP */}
                    <img src="/assets/desktop-left-heart-shape-icon.png" className="hidden md:block absolute -top-16 -left-16 w-32 h-32 object-contain animate-[bounce_3s_infinite] z-20 drop-shadow-xl"/>
                    <img src="/assets/desktop-right-heart-shape-icon.png" className="hidden md:block absolute -top-16 -right-16 w-32 h-32 object-contain animate-[bounce_4s_infinite] z-20 drop-shadow-xl"/>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQ.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex flex-col items-center gap-6 md:gap-8 h-full justify-center"
                        >
                            {/* QUESTION TEXT */}
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg max-w-2xl px-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                                {currentQ.question}
                            </h2>

                            {/* OPTIONS LIST */}
                            <div className="flex flex-col gap-6 w-full max-w-xl">
                                {currentQ.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedOption(index)}
                                        className={`group flex items-start gap-5 text-left transition-all duration-200 p-1 rounded-lg
                                            ${selectedOption === index ? "translate-x-2" : "hover:translate-x-1"}
                                        `}
                                    >
                                        {/* HEART BULLET POINT - FIXED SIZE & COLOR */}
                                        {/* Changed w-4 to w-8 (Big Heart) and added text-[#C08081] (Pink) */}
                                        <svg 
                                            viewBox="0 0 24 24" 
                                            fill="currentColor" 
                                            className={`w-8 h-8 shrink-0 transition-transform duration-300 text-[#C08081] mt-0.5
                                                ${selectedOption === index ? "scale-110" : "scale-100 group-hover:scale-110"}
                                            `}
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                        
                                        {/* TEXT - White and Bigger */}
                                        <span className={`text-lg md:text-xl font-medium leading-tight ${selectedOption === index ? "text-white" : "text-white/90"}`} style={{ fontFamily: '"Lato", sans-serif' }}>
                                            {option}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div className="mt-4">
                                <button
                                    onClick={handleSubmit}
                                    disabled={selectedOption === null}
                                    className={`
                                        bg-[#C08081] text-white text-lg font-bold py-3 px-12 rounded-lg shadow-lg uppercase tracking-widest
                                        transition-all duration-300
                                        ${selectedOption === null
                                            ? "opacity-50 cursor-not-allowed grayscale"
                                            : "opacity-100 hover:bg-[#d48a8b] hover:shadow-[0_0_20px_rgba(192,128,129,0.4)] hover:scale-105 active:scale-95"
                                        }
                                    `}
                                    style={{ fontFamily: '"Lato", sans-serif' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}