import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { MagazineEdition } from '../../data/magazines';

interface MagazineCardProps {
  magazine: MagazineEdition;
  onView: (magazine: MagazineEdition) => void;
  className?: string;
}

export const MagazineCard: React.FC<MagazineCardProps> = ({ magazine, onView, className = '' }) => (
  <button
    type="button"
    onClick={() => onView(magazine)}
    aria-label={`View ${magazine.title}`}
    className={`group w-full h-full flex flex-col bg-[#191E1B] rounded-2xl p-5 border border-white/10 hover:border-[#FFAF00] focus-visible:outline-2 focus-visible:outline-[#FFAF00] transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-2 text-left ${className}`}
  >
    <div className="w-full aspect-[1518/1958] rounded-xl overflow-hidden bg-[#121715] shadow-xl">
      <img src={magazine.coverImage} alt={`${magazine.title} — ${magazine.edition} cover`} width={1518} height={1958} className="w-full h-full object-contain" loading="lazy" />
    </div>
    <div className="pt-5 flex-1 flex flex-col gap-3 w-full">
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFAF00]">{magazine.edition} · {magazine.category}</span>
      <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl text-white leading-tight">{magazine.title}</h3>
      <p className="text-sm text-white/90">{magazine.subtitle}</p>
      <p className="text-xs text-[#A7ADA9] leading-relaxed flex-1">{magazine.summary}</p>
      <div className="pt-4 mt-1 border-t border-white/10 flex flex-wrap gap-3 items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-white/70"><BookOpen className="w-3.5 h-3.5 text-[#FFAF00]" /> Special Edition</span>
        <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-[#FFAF00]">View Magazine <ArrowUpRight className="w-3.5 h-3.5" /></span>
      </div>
    </div>
  </button>
);
