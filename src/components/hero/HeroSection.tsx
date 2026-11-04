import React from 'react';
import { PrimaryButton } from '../shared/PrimaryButton';

interface HeroSectionProps {
  onExploreNews: () => void;
  onExploreMagazines: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreNews,
  onExploreMagazines,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[720px] h-[100svh] overflow-hidden flex flex-col justify-center bg-[#0B0F0E]"
    >
      {/* Hero Background Image with 44% Black Overlay as requested */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/assets/aistudio/Joint_forces__land__sea__and_sky_481ab25e.png"
          alt="Joint forces: land, sea, and sky"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100"
        />

        {/* 44% Black Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.44)' }}
        />

        {/* Left gradient for flawless headline legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(11,15,14,0.88) 0%, rgba(11,15,14,0.45) 40%, transparent 80%)',
          }}
        />

        {/* Bottom gradient to seamlessly blend into next section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, #0B0F0E 0%, rgba(11,15,14,0.5) 25%, transparent 60%)',
          }}
        />
      </div>

      {/* Atmospheric Glow: SVG horizontal ellipse near top-center with Gaussian blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none z-10 overflow-visible opacity-70">
        <svg
          viewBox="0 0 700 350"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goldenGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            </filter>
            <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
          </defs>
          {/* Secondary subtle dark-green glow for optical depth */}
          <ellipse
            cx="350"
            cy="175"
            rx="320"
            ry="140"
            fill="rgba(31, 73, 65, 0.22)"
            filter="url(#greenGlow)"
          />
          {/* Primary Golden Yellow Glow */}
          <ellipse
            cx="350"
            cy="175"
            rx="240"
            ry="85"
            fill="rgba(255, 175, 0, 0.16)"
            filter="url(#goldenGlow)"
          />
        </svg>
      </div>

      {/* Tactical Grid: 3 vertical lines at 25%, 50%, 75% on desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <div className="max-w-[1440px] h-full mx-auto relative px-8 lg:px-12">
          <div className="tactical-grid-line left-[25%]" />
          <div className="tactical-grid-line left-[50%]" />
          <div className="tactical-grid-line left-[75%]" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-16">
        <div className="max-w-3xl flex flex-col items-start text-left space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-[1.5px] bg-[#FFAF00]" />
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] tracking-[0.16em] text-[#FFAF00] uppercase">
              GLOBAL DEFENCE INTELLIGENCE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase text-white tracking-tight leading-[0.94] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] text-balance">
            INDEPENDENT<br />
            DISTINCTIVE<br />
            AUTHORITATIVE
          </h1>

          {/* Description */}
          <p className="font-['Inter'] text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-[560px]">
            Your trusted source for international defence news, expert analysis, exclusive interviews, and the latest developments shaping global security.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PrimaryButton
              variant="primary"
              size="lg"
              icon="right"
              onClick={onExploreNews}
            >
              EXPLORE LATEST NEWS
            </PrimaryButton>

            <PrimaryButton
              variant="secondary"
              size="lg"
              icon="none"
              onClick={onExploreMagazines}
            >
              OUR MAGAZINES
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
