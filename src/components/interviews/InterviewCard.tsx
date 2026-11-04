import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InterviewItem } from '../../data/interviews';
import { TacticalImage } from '../shared/TacticalImage';

interface InterviewCardProps {
  interview: InterviewItem;
  onRead: (interview: InterviewItem) => void;
  className?: string;
}

export const InterviewCard: React.FC<InterviewCardProps> = ({
  interview,
  onRead,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={() => onRead(interview)}
      className={`group relative flex w-full flex-col justify-between rounded-2xl bg-[#191E1B] border border-white/10 hover:border-brand-yellow focus-visible:outline-2 focus-visible:outline-brand-yellow overflow-hidden transition-all duration-350 cursor-pointer shadow-xl text-left select-none ${className}`}
    >
      {/* 1. Featured Image at Top */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#121715]">
        <TacticalImage
          src={interview.imageUrl}
          alt={interview.headline}
          loading="lazy"
          overlayGradient={false}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191E1B] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Content: Heading & Description */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Heading */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow">{interview.organization}</p>
          <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-xl sm:text-2xl text-white group-hover:text-brand-yellow transition-colors leading-snug">
            {interview.headline}
          </h3>

          {/* Description */}
          <p className="font-['Inter'] text-xs sm:text-sm text-[#A7ADA9] leading-relaxed line-clamp-3">
            {interview.summary}
          </p>
        </div>

        {/* 3. Bottom Row: Date & Read Interview */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <time dateTime={interview.publishedAt} className="text-[#A7ADA9] text-[11px] font-['Inter']">
            {interview.date}
          </time>

          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-brand-yellow group-hover:text-white transition-colors">
            <span>Read Interview</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
};
