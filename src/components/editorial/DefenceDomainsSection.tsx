import React from 'react';
import { ArrowUpRight, Shield, Anchor, Plane } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';

interface DefenceDomainsSectionProps {
  onSelectDomain: (domain: 'LAND' | 'NAVAL' | 'AIR') => void;
}

export const DefenceDomainsSection: React.FC<DefenceDomainsSectionProps> = ({ onSelectDomain }) => {
  return (
    <section id="domains" className="relative py-20 sm:py-28 bg-[#121715]">
      {/* Subtle background ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 text-left">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EXPLORE OUR COVERAGE"
          title="DEFENCE ACROSS EVERY DOMAIN"
          accentWord="EVERY"
          description="In-depth analysis across strategic ground theatres, armored robotics, blue-water fleets, supersonic air combat, and integrated air defence."
        />

        {/* Three Large Landscape Domain Cards (16:10 aspect ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: LAND WARFARE */}
          <div
            onClick={() => onSelectDomain('LAND')}
            className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#191E1B] border border-white/10 hover:border-[#FFAF00] transition-all duration-400 cursor-pointer shadow-xl flex flex-col justify-end"
          >
            {/* Background Image: Armored advance across rugged mountains */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/assets/aistudio/Armored_advance_across_rugged_mountains-1_fe1c0afa.png"
                alt="Armored advance across rugged mountains"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent pointer-events-none" />
            </div>

            {/* Corner Badge */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F0E]/80 backdrop-blur-md border border-white/10 text-xs font-['Plus_Jakarta_Sans'] font-bold text-[#FFAF00]">
              <Shield className="w-3.5 h-3.5" />
              <span>THEATRE OF OPERATIONS</span>
            </div>

            {/* Bottom-left Category Title and Golden Arrow */}
            <div className="relative z-10 p-6 sm:p-7 flex items-end justify-between">
              <div className="space-y-1">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#FFAF00] block">
                  Ground Forces & Armor
                </span>
                <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none group-hover:text-[#FFAF00] transition-colors">
                  LAND WARFARE
                </h3>
                <p className="font-['Inter'] text-xs text-[#A7ADA9] max-w-xs mt-1.5 line-clamp-2">
                  Next-generation main battle tanks, active protection systems, and robotic combat vehicles.
                </p>
              </div>

              {/* Golden Yellow Arrow Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFAF00] text-black flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#ffb71a]">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 2: NAVAL & MARITIME */}
          <div
            onClick={() => onSelectDomain('NAVAL')}
            className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#191E1B] border border-white/10 hover:border-[#FFAF00] transition-all duration-400 cursor-pointer shadow-xl flex flex-col justify-end"
          >
            {/* Background Image: Golden Horizon Naval Fleet Exercise */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/assets/aistudio/Golden_Horizon_Naval_Fleet_Exercise-2_fc0a28c9.png"
                alt="Golden Horizon Naval Fleet Exercise"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent pointer-events-none" />
            </div>

            {/* Corner Badge */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F0E]/80 backdrop-blur-md border border-white/10 text-xs font-['Plus_Jakarta_Sans'] font-bold text-[#FFAF00]">
              <Anchor className="w-3.5 h-3.5" />
              <span>MARITIME DOMAIN</span>
            </div>

            {/* Bottom-left Category Title and Golden Arrow */}
            <div className="relative z-10 p-6 sm:p-7 flex items-end justify-between">
              <div className="space-y-1">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#FFAF00] block">
                  Subsurface & Fleet Command
                </span>
                <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none group-hover:text-[#FFAF00] transition-colors">
                  NAVAL & MARITIME
                </h3>
                <p className="font-['Inter'] text-xs text-[#A7ADA9] max-w-xs mt-1.5 line-clamp-2">
                  Air-Independent Propulsion submarines, guided-missile frigates, and unmanned acoustic arrays.
                </p>
              </div>

              {/* Golden Yellow Arrow Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFAF00] text-black flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#ffb71a]">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 3: AIR MILITARY */}
          <div
            onClick={() => onSelectDomain('AIR')}
            className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#191E1B] border border-white/10 hover:border-[#FFAF00] transition-all duration-400 cursor-pointer shadow-xl flex flex-col justify-end"
          >
            {/* Background Image: Coordinated Fighters Above Golden Clouds */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/assets/aistudio/Coordinated_Fighters_Above_Golden_Clouds-3_450a9c5f.png"
                alt="Coordinated Fighters Above Golden Clouds"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent pointer-events-none" />
            </div>

            {/* Corner Badge */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F0E]/80 backdrop-blur-md border border-white/10 text-xs font-['Plus_Jakarta_Sans'] font-bold text-[#FFAF00]">
              <Plane className="w-3.5 h-3.5" />
              <span>AEROSPACE DOMAIN</span>
            </div>

            {/* Bottom-left Category Title and Golden Arrow */}
            <div className="relative z-10 p-6 sm:p-7 flex items-end justify-between">
              <div className="space-y-1">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#FFAF00] block">
                  Supersonic & Airborne C4ISR
                </span>
                <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none group-hover:text-[#FFAF00] transition-colors">
                  AIR MILITARY
                </h3>
                <p className="font-['Inter'] text-xs text-[#A7ADA9] max-w-xs mt-1.5 line-clamp-2">
                  Fifth-generation fighters, hypersonic platforms, loyal wingman UCAVs, and layered air defence.
                </p>
              </div>

              {/* Golden Yellow Arrow Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFAF00] text-black flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#ffb71a]">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
