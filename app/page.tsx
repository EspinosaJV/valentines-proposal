"use client";

import { useState } from "react";
import LandingView from "../components/LandingView";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <LandingView
        onCorrectPassword={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-valentine-surface text-valentine-text flex flex-col items-center justify-center">
      <h1 className="font-serif text-4xl text-valentine-brand animate-bounce">
        Access Granted
      </h1>
      <p className="mt-4 font-sans text-white/50">
        (Gallery Component Loading)
      </p>
    </main>
  );
}