import React from 'react';
import { Shield, Radio, ArrowUpRight } from 'lucide-react';

interface HeroGlassCardProps {
  className?: string;
  onExplore?: () => void;
}

export const HeroGlassCard: React.FC<HeroGlassCardProps> = ({ className = '', onExplore }) => {
  return (
    <div
      className={`liquid-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(249,245,56,0.12)] border border-white/10 ${className}`}
      style={{
        width: '100%',
        maxWidth: '320px',
        minHeight: '260px',
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] tracking-[0.18em] text-brand-yellow uppercase">
          [ INTERNATIONAL COVERAGE ]
        </span>
        <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
      </div>

      {/* Main heading with Instrument Serif Italic for "Intelligence" */}
      <div className="my-4">
        <h3 className="font-['Inter'] font-extrabold text-xl sm:text-2xl text-white leading-tight">
          <span className="font-['Instrument_Serif'] italic font-normal text-brand-yellow text-2xl sm:text-3xl block mb-0.5">
            Intelligence
          </span>
          Beyond Headlines
        </h3>

        <p className="font-['Inter'] text-xs sm:text-[13px] text-[#A7ADA9] leading-relaxed mt-2.5">
          Reporting on the forces, technologies, and decisions shaping global defence.
        </p>
      </div>

      {/* Bottom link with arrow */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
        <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-wider text-white/80">
          Global Sensor Network
        </span>
        <button
          onClick={onExplore}
          className="inline-flex items-center gap-1 text-brand-yellow hover:text-white font-semibold transition-colors group cursor-pointer"
        >
          <span>Briefings</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};
