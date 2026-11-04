import React, { useEffect, useState } from 'react';

interface StartupLoaderProps {
  onComplete: () => void;
}

export function StartupLoader({ onComplete }: StartupLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const exitTimer = window.setTimeout(() => setIsExiting(true), reduced ? 120 : 1800);
    // A fixed deadline ensures the introduction never blocks slow connections.
    const finishTimer = window.setTimeout(onComplete, reduced ? 150 : 2200);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div className={`startup-loader ${isExiting ? 'startup-loader-exit' : ''}`}>
      <div className="startup-grid" aria-hidden="true" />
      <div className="startup-corner startup-corner-tl" aria-hidden="true" />
      <div className="startup-corner startup-corner-br" aria-hidden="true" />
      <div className="relative flex flex-col items-center text-center px-6 w-full max-w-xl">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-yellow/70 mb-9">Independent · Distinctive · Authoritative</p>
        <div className="startup-radar">
          <div className="startup-radar-ring" aria-hidden="true" />
          <div className="startup-radar-sweep" aria-hidden="true" />
          <img
            src="/assets/aistudio/image_cd546ea9.png"
            alt="International Defence Analysis official logo"
            width={144}
            height={144}
            fetchPriority="high"
            className="startup-logo"
          />
        </div>
        <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase text-4xl sm:text-5xl tracking-wide text-white mt-9">Defence <span className="text-brand-yellow">IDA</span></h1>
        <p className="text-[10px] sm:text-xs tracking-[0.24em] uppercase text-[#A7ADA9] mt-2">International Defence Analysis</p>
        <div role="status" className="mt-10 w-52 sm:w-64">
          <div className="startup-loading-track" aria-hidden="true"><span /></div>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-brand-yellow/80 mt-4">Preparing your briefing</p>
        </div>
      </div>
      <button type="button" onClick={onComplete} className="absolute bottom-8 right-6 sm:right-10 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-brand-yellow rounded px-3 py-2">Skip intro →</button>
    </div>
  );
}
