"use client";

import { useState } from "react";

interface LandingProps {
  onCorrectPassword: () => void;
}

export default function LandingView({ onCorrectPassword }: LandingProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

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
    // Simple black background for testing
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl mx-4">
        
        <div className="text-center mb-10">
          <h1 className="font-serif text-5xl text-rose-400 mb-2">
            Project Valentine
          </h1>
          <p className="text-gray-400 text-xs font-sans uppercase tracking-[0.2em]">
            Restricted Access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="password"
            value={passcode}
            onChange={(e) => {
              setPasscode(e.target.value);
              setError(false);
            }}
            placeholder="ENTER PASSCODE"
            className={`
              w-full bg-black/50 border-2 rounded-xl p-4 text-center text-white 
              placeholder-white/20 focus:outline-none transition-all 
              font-serif text-xl tracking-[0.5em]
              ${error ? "border-red-500" : "border-white/10 focus:border-rose-400"}
            `}
          />

          <button
            type="submit"
            className="w-full bg-rose-400 text-white font-bold py-4 rounded-xl hover:bg-rose-500 transition-all uppercase tracking-widest text-sm"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}