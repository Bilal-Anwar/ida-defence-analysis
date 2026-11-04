import React from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20',
  }[size];

  return (
    <a
      href="#hero"
      className={`group flex items-center gap-3 select-none text-left transition-opacity hover:opacity-95 ${className}`}
      aria-label="International Defence Analysis - Home"
    >
      {/* Official Circular Logo Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/assets/aistudio/image_cd546ea9.png"
          alt="International Defence Analysis Official Logo"
          className={`${sizeClasses} object-contain rounded-full shadow-[0_0_20px_rgba(255,175,0,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(255,175,0,0.45)]`}
        />
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-['Barlow_Condensed'] font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase group-hover:text-white transition-colors">
              DEFENCE
            </span>
            <span className="font-['Barlow_Condensed'] font-black text-lg sm:text-xl tracking-wider text-[#FFAF00] uppercase">
              IDA
            </span>
          </div>
          <span className="font-['Plus_Jakarta_Sans'] text-[9px] font-bold tracking-[0.2em] text-[#A7ADA9] uppercase mt-0.5">
            INTERNATIONAL ANALYSIS
          </span>
        </div>
      )}
    </a>
  );
};
