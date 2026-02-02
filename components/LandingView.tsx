"use client";

import { useState } from "react";

interface LandingProps {
    onCorrectPassword: () => void;
}

export default function LandingView({ onCorrectPassword }: LandingProps) {
    const [passcode, setPasscode] = useState("");
    const [error, setError] = useState(false);

    const SECRET_CODE = "1111";

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
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-valentine-surface">
            <div 
                className="
                    absolute inset-0 z-0 bg-cover bg-center opacity-50 blur-sm
                    bg-[url('/assets/bg-mobile-collage.jpg')]
                    md:bg-[url('/assets/bg-desktop-collage.jpg')]
                "
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-md p-8 bg-valentine-surface/90 border border-white/10 rounded-2xl shadow-2xl mx-4 backdrop-blur-md">
                <div className="text-center mb-10">
                    <h1 className="font-serif text-5xl text-valentine-brand mb-2 drop-shadow-lg">
                        Project Valentine
                    </h1>
                    <p className="text-valentine-text/80 text-xs font-sans uppercase tracking-[0.2em]">
                    Restricted Access
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-06">
                    <div className="relative">
                        <input
                            type="password"
                            value={passcode}
                            onChange={(e) => {
                                setPasscode(e.target.value);
                                setError(false);
                            }}
                            placeholder="ENTER PASSCODE"
                            className={`
                                w-full bg-black/50 border-2 rounded-xl p-4 text-center text-white placeholder-white/20 focus:outline-none transition-all font-serif text-xl tracking-[0.5em] ${error ? "border-red-500 animate-[shake_0.5s_ease-in-out]" : "border-white/10 focus:border-valentine-brand"}`}
                            />
                    </div>

                    <button
                        type="submit"
                        className="w=full bg-valentine-brand text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(192, 128, 129, 0.3)] hover:shadow-[0_0_25px_rgba(192,128,129,0.6)] hover:scale-[1.02] transition-all active:scale-95 uppercase tracking-widest text-sm"
                    >
                        Unlock
                    </button>
                </form>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }    
            `}</style>
        </div>
    );
}